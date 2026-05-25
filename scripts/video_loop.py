#!/usr/bin/env python3
"""
Ping-Pong Video Loop Creator
Creates a seamless infinite loop by concatenating the original video
with a reversed copy: Forward + Reverse = seamless ping-pong loop.

Usage:
    python video_loop.py -i input.webm -o output_loop.webm
    python video_loop.py -i input.webm -o output_loop.webm -p high_quality
"""
import os
import subprocess
import argparse
import sys
import shutil
import tempfile
from pathlib import Path


def check_ffmpeg():
    """Verify that FFmpeg is installed and accessible."""
    if shutil.which("ffmpeg") is None:
        print("ERROR: FFmpeg is not installed or not in the system PATH.")
        sys.exit(1)


def get_encode_options(preset: str) -> list:
    """Return VP9 alpha encoding options for the given quality preset."""
    base = ["-c:v", "libvpx-vp9", "-pix_fmt", "yuva420p", "-auto-alt-ref", "0"]
    if preset == "high_quality":
        return base + ["-b:v", "0", "-crf", "18", "-row-mt", "1", "-cpu-used", "1"]
    elif preset == "balanced":
        return base + ["-b:v", "0", "-crf", "28", "-row-mt", "1", "-cpu-used", "2"]
    elif preset == "ultra_small":
        return base + ["-b:v", "0", "-crf", "40", "-row-mt", "1", "-cpu-used", "3"]
    return base + ["-b:v", "0", "-crf", "28"]


def create_pingpong(input_path: Path, output_path: Path, preset: str):
    """Create a forward + reverse ping-pong loop video."""
    if not input_path.exists():
        print(f"ERROR: Input video '{input_path}' not found.")
        sys.exit(1)

    tmpdir = tempfile.mkdtemp(prefix="vidloop_")
    reversed_path = Path(tmpdir) / "reversed.webm"
    concat_list = Path(tmpdir) / "concat.txt"

    try:
        # Step 1: Create reversed video
        print(f"[1/3] Reversing video '{input_path.name}'...")
        rev_cmd = [
            "ffmpeg", "-y",
            "-i", str(input_path),
            "-vf", "reverse",
        ]
        rev_cmd.extend(get_encode_options(preset))
        rev_cmd.extend(["-an", str(reversed_path)])

        subprocess.run(rev_cmd, check=True)
        print(f"       Reversed video created: {reversed_path}")

        # Step 2: Write concat list file
        # Use forward slashes for FFmpeg compatibility on Windows
        fwd = str(input_path.resolve()).replace("\\", "/")
        rev = str(reversed_path.resolve()).replace("\\", "/")
        concat_list.write_text(f"file '{fwd}'\nfile '{rev}'\n", encoding="utf-8")
        print(f"[2/3] Concat list created.")

        # Step 3: Concatenate forward + reversed
        print(f"[3/3] Concatenating forward + reverse into '{output_path.name}'...")
        concat_cmd = [
            "ffmpeg", "-y",
            "-f", "concat",
            "-safe", "0",
            "-i", str(concat_list),
        ]
        concat_cmd.extend(get_encode_options(preset))
        concat_cmd.extend(["-an", str(output_path)])

        subprocess.run(concat_cmd, check=True)
        print(f"\nSUCCESS: Ping-pong loop video exported to: {output_path}")
        print(f"         Duration: ~2x original (forward + reverse)")

    except subprocess.CalledProcessError as e:
        print(f"ERROR: FFmpeg failed with error code {e.returncode}")
        sys.exit(1)
    finally:
        # Clean up temp files
        shutil.rmtree(tmpdir, ignore_errors=True)
        print("Temp files cleaned up.")


def main():
    parser = argparse.ArgumentParser(
        description="Create a seamless ping-pong loop video (forward + reverse) for infinite website looping.",
        epilog="Example: python video_loop.py -i globe_transparent.webm -o globe_loop.webm -p high_quality"
    )
    parser.add_argument("-i", "--input", required=True, help="Path to the input transparent video (.webm)")
    parser.add_argument("-o", "--output", help="Path to output looped video (default: <input>_loop.webm)")
    parser.add_argument("-p", "--preset", choices=["high_quality", "balanced", "ultra_small"], default="high_quality",
                        help="Encoding preset (default: high_quality)")

    args = parser.parse_args()
    check_ffmpeg()

    input_path = Path(args.input)
    if args.output:
        output_path = Path(args.output)
    else:
        output_path = input_path.parent / f"{input_path.stem}_loop.webm"

    create_pingpong(input_path, output_path, args.preset)


if __name__ == "__main__":
    main()
