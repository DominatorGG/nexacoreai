#!/usr/bin/env python3
import os
import subprocess
import argparse
import sys
import shutil
from pathlib import Path

def check_ffmpeg():
    """Verify that FFmpeg is installed and accessible."""
    if shutil.which("ffmpeg") is None:
        print("ERROR: FFmpeg is not installed or not in the system PATH.")
        print("Please install FFmpeg to use this tool.")
        sys.exit(1)

def get_preset_options(preset: str) -> list:
    """Return video encoding parameters based on the selected preset."""
    # VP9 alpha encoding options
    # -c:v libvpx-vp9
    # -pix_fmt yuva420p
    # -auto-alt-ref 0 (necessary for alpha in webm)
    
    base_options = ["-c:v", "libvpx-vp9", "-pix_fmt", "yuva420p", "-auto-alt-ref", "0"]
    
    if preset == "high_quality":
        # CRF 15-20 for high quality
        return base_options + ["-b:v", "0", "-crf", "18", "-row-mt", "1", "-cpu-used", "1"]
    elif preset == "balanced":
        # CRF 25-30 for balanced
        return base_options + ["-b:v", "0", "-crf", "28", "-row-mt", "1", "-cpu-used", "2"]
    elif preset == "ultra_small":
        # CRF 35-40 for very small
        return base_options + ["-b:v", "0", "-crf", "40", "-row-mt", "1", "-cpu-used", "3"]
    else:
        return base_options + ["-b:v", "0", "-crf", "28"]

def process_video(input_path: Path, output_path: Path, preset: str, similarity: float, blend: float, preview: bool):
    """Process a single video to remove the black background."""
    if not input_path.exists():
        print(f"ERROR: Input video '{input_path}' not found.")
        return

    # FFmpeg colorkey filter string
    # colorkey=color:similarity:blend
    # 0x000000 corresponds to pure black
    filter_complex = f"colorkey=0x000000:{similarity}:{blend}"
    
    if preview:
        print(f"Previewing '{input_path.name}' with similarity={similarity}, blend={blend}...")
        if shutil.which("ffplay") is None:
            print("ERROR: ffplay is not installed (usually comes with FFmpeg). Cannot preview.")
            return
            
        cmd = [
            "ffplay",
            "-i", str(input_path),
            "-vf", filter_complex,
        ]
        try:
            subprocess.run(cmd)
        except KeyboardInterrupt:
            pass
        return

    print(f"Processing '{input_path.name}' -> '{output_path.name}'")
    print(f"Preset: {preset} | Similarity: {similarity} | Blend: {blend}")

    cmd = [
        "ffmpeg",
        "-y",               # Overwrite output files without asking
        "-i", str(input_path),
        "-vf", filter_complex,
    ]
    
    cmd.extend(get_preset_options(preset))
    
    cmd.extend([
        "-c:a", "libopus",  # VP9 goes well with Opus or Vorbis audio
        str(output_path)
    ])
    
    try:
        subprocess.run(cmd, check=True)
        print(f"SUCCESS: Exported to {output_path}")
    except subprocess.CalledProcessError as e:
        print(f"ERROR: FFmpeg failed with error code {e.returncode}")

def batch_process(input_dir: Path, output_dir: Path, preset: str, similarity: float, blend: float):
    """Process all supported videos in a directory."""
    if not input_dir.exists() or not input_dir.is_dir():
        print(f"ERROR: Directory '{input_dir}' not found.")
        sys.exit(1)
        
    output_dir.mkdir(parents=True, exist_ok=True)
    
    supported_extensions = {".mp4", ".mov", ".webm"}
    videos = [p for p in input_dir.iterdir() if p.is_file() and p.suffix.lower() in supported_extensions]
    
    if not videos:
        print(f"No supported videos found in '{input_dir}'. Supported formats: {', '.join(supported_extensions)}")
        return
        
    for i, video_path in enumerate(videos, 1):
        print(f"\n--- Processing video {i}/{len(videos)} ---")
        out_name = f"{video_path.stem}_transparent.webm"
        out_path = output_dir / out_name
        process_video(video_path, out_path, preset, similarity, blend, preview=False)

def main():
    parser = argparse.ArgumentParser(
        description="Production-grade tool to remove black backgrounds from videos and export with alpha transparency.",
        epilog="Example: python bg_remover.py -i aimlvid.mp4 -p high_quality -s 0.3 -b 0.2"
    )
    
    group = parser.add_mutually_exclusive_group(required=True)
    group.add_argument("-i", "--input", help="Path to the input video file")
    group.add_argument("-d", "--dir", help="Path to input directory for batch processing")
    
    parser.add_argument("-o", "--output", help="Path to the output video or directory (default: auto-generated in same dir)")
    parser.add_argument("-p", "--preset", choices=["high_quality", "balanced", "ultra_small"], default="balanced", help="Encoding preset (default: balanced)")
    parser.add_argument("-s", "--similarity", type=float, default=0.3, help="Colorkey similarity (0.01 - 1.0, default: 0.3). Higher removes more near-black.")
    parser.add_argument("-b", "--blend", type=float, default=0.2, help="Colorkey blend/smoothness (0.0 - 1.0, default: 0.2). Higher makes edges smoother.")
    parser.add_argument("--preview", action="store_true", help="Preview the filter using ffplay instead of rendering.")
    
    args = parser.parse_args()
    
    check_ffmpeg()
    
    if args.input:
        input_path = Path(args.input)
        if args.output:
            output_path = Path(args.output)
            if output_path.is_dir():
                output_path = output_path / f"{input_path.stem}_transparent.webm"
        else:
            output_path = input_path.parent / f"{input_path.stem}_transparent.webm"
            
        process_video(input_path, output_path, args.preset, args.similarity, args.blend, args.preview)
        
    elif args.dir:
        input_dir = Path(args.dir)
        if args.output:
            output_dir = Path(args.output)
        else:
            output_dir = input_dir / "transparent_outputs"
            
        if args.preview:
            print("ERROR: Preview mode is not supported for batch processing.")
            sys.exit(1)
            
        batch_process(input_dir, output_dir, args.preset, args.similarity, args.blend)

if __name__ == "__main__":
    main()
