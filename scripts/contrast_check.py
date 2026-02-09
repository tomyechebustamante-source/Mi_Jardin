#!/usr/bin/env python3
import re
import sys
from pathlib import Path

CSS_PATHS = [
    'assets/css/_variables.css',
    'css/_variables.css'
]
VAR_RE = re.compile(r"--([a-zA-Z0-9-]+):\s*(#[0-9a-fA-F]{3,6})")

def hex_to_rgb(hexstr):
    h = hexstr.lstrip('#')
    if len(h) == 3:
        h = ''.join([c*2 for c in h])
    return tuple(int(h[i:i+2], 16) for i in (0,2,4))

def srgb_to_linear(c):
    c = c/255.0
    if c <= 0.03928:
        return c/12.92
    return ((c+0.055)/1.055) ** 2.4

def luminance(rgb):
    r,g,b = rgb
    R = srgb_to_linear(r)
    G = srgb_to_linear(g)
    B = srgb_to_linear(b)
    return 0.2126*R + 0.7152*G + 0.0722*B

def contrast_ratio(hex1, hex2):
    L1 = luminance(hex_to_rgb(hex1))
    L2 = luminance(hex_to_rgb(hex2))
    lighter = max(L1, L2)
    darker = min(L1, L2)
    return (lighter + 0.05) / (darker + 0.05)


def extract_vars():
    vars = {}
    for p in CSS_PATHS:
        path = Path(p)
        if not path.exists():
            continue
        text = path.read_text()
        for m in VAR_RE.finditer(text):
            name = m.group(1)
            val = m.group(2)
            vars[name] = val
    return vars


def check_pairs(vars):
    text_colors = []
    # prefer color-text-primary if present
    if 'color-text-primary' in vars:
        text_colors.append(('color-text-primary', vars['color-text-primary']))
    else:
        text_colors.append(('text-primary-fallback', '#0f172a'))
    # white and black
    text_colors.append(('white', '#ffffff'))
    text_colors.append(('black', '#000000'))

    backgrounds = [
        'color-primary', 'color-primary-light', 'color-primary-dark',
        'color-secondary', 'color-secondary-light',
        'color-accent-orange', 'color-accent-yellow',
        'color-bg', 'color-bg-light'
    ]
    print('\nContrast check report (WCAG ratios)')
    print('Thresholds: normal >= 4.5, large >= 3.0\n')
    results = []
    for bg in backgrounds:
        if bg not in vars:
            continue
        bghex = vars[bg]
        for tc_name, tc_hex in text_colors:
            ratio = contrast_ratio(tc_hex, bghex)
            ok_normal = ratio >= 4.5
            ok_large = ratio >= 3.0
            results.append((tc_name, tc_hex, bg, bghex, ratio, ok_normal, ok_large))
            print(f"{tc_name} ({tc_hex}) on {bg} ({bghex}): {ratio:.2f} -> normal: {'PASS' if ok_normal else 'FAIL'}; large: {'PASS' if ok_large else 'FAIL'}")
    return results


def main():
    vars = extract_vars()
    if not vars:
        print('No CSS variable files found or no variables extracted.')
        sys.exit(1)
    results = check_pairs(vars)
    # summary of failures
    fails = [r for r in results if not r[5]]
    print('\nSummary:')
    if not fails:
        print('All combinations pass normal text contrast >= 4.5:1')
    else:
        print(f"{len(fails)} combinations fail normal contrast (4.5). Review the following:")
        for tc_name, tc_hex, bg, bghex, ratio, ok_normal, ok_large in fails:
            print(f" - {tc_name} on {bg}: {ratio:.2f}")
    print('\nDone.')

if __name__ == '__main__':
    main()
