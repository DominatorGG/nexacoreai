#!/usr/bin/env python3
"""
Advanced Video Background Remover — Globe Isolation Edition
Uses luminance-based transparency + tight circular mask to isolate
only the bright globe from any dark background.

Works by:
1. Luminance threshold: Any pixel darker than a brightness threshold → transparent
2. Smooth transition band for clean edges on the globe itself  
3. Tight circular/elliptical mask hardcoded to the globe center
4. Everything outside the mask radius → fully transparent

Usage:
    Set FFmpeg path, then run:
    python globe_isolator.py input.webm output.webm
"""
import subprocess
import sys
import shutil
from pathlib import Path

# === CONFIGURATION ===
# FFmpeg binary path (hardcoded for this system)
FFMPEG_PATHS = [
    r"C:\Users\Lohith\AppData\Local\Microsoft\WinGet\Packages\Gyan.FFmpeg_Microsoft.Winget.Source_8wekyb3d8bbwe\ffmpeg-8.1.1-full_build\bin\ffmpeg.exe",
    "ffmpeg"  # fallback to PATH
]

# Luminance threshold (0-255). Pixels darker than this → transparent
# Higher = more aggressive (removes more). 40-60 is good for dark bg removal
LUMA_THRESHOLD = 45

# Transition band width. Pixels between threshold and threshold+band get partial alpha
# Higher = smoother edges on the globe. 20-35 is good.
LUMA_BLEND = 30

# Circular mask: fraction of min(width, height)
# Globe center is assumed at video center (W/2, H/2)
MASK_INNER_RADIUS = 0.37   # Fully opaque inside this radius (globe body)
MASK_OUTER_RADIUS = 0.44   # Fully transparent outside this radius (hard edge cutoff)

# Encoding
CRF = 18  # Quality (lower = better, 15-20 for high quality)
CPU_USED = 1  # VP9 speed (1=slow/best, 4=fast/lower quality)


def find_ffmpeg():
    """Find FFmpeg binary."""
    for path in FFMPEG_PATHS:
        p = Path(path)
        if p.exists():
            return str(p)
    if shutil.which("ffmpeg"):
        return "ffmpeg"
    print("ERROR: FFmpeg not found!")
    sys.exit(1)


def build_filter():
    """
    Build the FFmpeg filtergraph for luminance-based transparency + circular mask.
    
    The geq filter computes per-pixel alpha based on:
    1. Luminance of the pixel (dark → transparent)
    2. Distance from center (outside radius → transparent)
    3. Combined: both conditions must pass for pixel to be visible
    """
    T = LUMA_THRESHOLD
    B = LUMA_BLEND
    R_IN = MASK_INNER_RADIUS
    R_OUT = MASK_OUTER_RADIUS
    
    # Luminance formula: 0.299*R + 0.587*G + 0.114*B
    # lum_alpha: 0 if lum < T, smooth ramp if T <= lum <= T+B, 255 if lum > T+B
    # dist: distance from center as fraction of min(W,H)
    # mask_alpha: 0 if dist > R_OUT, smooth ramp if R_IN < dist < R_OUT, 255 if dist < R_IN
    # final_alpha: min(lum_alpha, mask_alpha) — both must pass
    
    geq_filter = (
        f"geq="
        f"r='r(X,Y)':"
        f"g='g(X,Y)':"
        f"b='b(X,Y)':"
        f"a='"
        # Luminance-based alpha
        f"min("
        f"clip((0.299*r(X,Y)+0.587*g(X,Y)+0.114*b(X,Y)-{T})*255/{B},0,255),"
        # Circular mask alpha  
        f"clip(({R_OUT}*min(W,H)-sqrt(pow(X-W/2,2)+pow(Y-H/2,2)))*255/(({R_OUT}-{R_IN})*min(W,H)),0,255)"
        f")'"
    )
    
    return geq_filter


def process(input_path: str, output_path: str):
    """Process the video."""
    ffmpeg = find_ffmpeg()
    vf = build_filter()
    
    print(f"=== Globe Isolator ===")
    print(f"Input:  {input_path}")
    print(f"Output: {output_path}")
    print(f"Luma threshold: {LUMA_THRESHOLD} (blend: {LUMA_BLEND})")
    print(f"Mask radius: {MASK_INNER_RADIUS} → {MASK_OUTER_RADIUS}")
    print(f"Filter: {vf[:100]}...")
    print(f"Encoding: VP9 alpha, CRF {CRF}")
    print()
    
    cmd = [
        ffmpeg, "-y",
        "-i", input_path,
        "-vf", vf,
        "-c:v", "libvpx-vp9",
        "-pix_fmt", "yuva420p",
        "-auto-alt-ref", "0",
        "-b:v", "0",
        "-crf", str(CRF),
        "-row-mt", "1",
        "-cpu-used", str(CPU_USED),
        "-an",
        output_path
    ]
    
    try:
        subprocess.run(cmd, check=True)
        print(f"\nSUCCESS: Globe isolated → {output_path}")
    except subprocess.CalledProcessError as e:
        print(f"ERROR: FFmpeg failed with code {e.returncode}")
        sys.exit(1)


if __name__ == "__main__":
    if len(sys.argv) < 3:
        print("Usage: python globe_isolator.py <input.webm> <output.webm>")
        print("  Isolates the bright globe from dark background using luminance + circular mask")
        sys.exit(1)
    
    process(sys.argv[1], sys.argv[2])
