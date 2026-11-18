import type { CSSProperties } from 'react';

/** Dark text on light accents, paper text on saturated ones. */
export function accentInk(hex: string): string {
  const value = hex.replace('#', '');
  const full =
    value.length === 3
      ? value
          .split('')
          .map((char) => char + char)
          .join('')
      : value;
  if (full.length !== 6) return '#f4f1ea';

  const r = parseInt(full.slice(0, 2), 16);
  const g = parseInt(full.slice(2, 4), 16);
  const b = parseInt(full.slice(4, 6), 16);
  // Relative luminance (sRGB approximation) — enough to pick ink vs paper.
  const luminance = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
  return luminance > 0.58 ? '#121212' : '#f4f1ea';
}

export type AccentStyle = CSSProperties & { '--accent': string; '--accent-ink': string };

/** Builds the two custom properties every accent-aware component reads. */
export function accentStyle(hex: string): AccentStyle {
  return {
    '--accent': hex,
    '--accent-ink': accentInk(hex),
  };
}
