interface MarkProps {
  className?: string;
}

/** Two almond eyes — the zine's recurring mascot mark. */
export function RetroEyes({ className }: MarkProps) {
  return (
    <svg className={className} viewBox="0 0 124 44" fill="none" aria-hidden="true" focusable="false">
      <g stroke="#121212" strokeWidth="2" strokeLinejoin="round">
        <path d="M4 22c8.5-13.5 26.5-13.5 35 0-8.5 13.5-26.5 13.5-35 0Z" />
        <path d="M85 22c8.5-13.5 26.5-13.5 35 0-8.5 13.5-26.5 13.5-35 0Z" />
        <path d="M60 22h14" />
      </g>
      <circle cx="21.5" cy="22" r="5.6" fill="#121212" />
      <circle cx="102.5" cy="22" r="5.6" fill="#121212" />
      <circle cx="19.6" cy="20" r="1.5" fill="#f4f1ea" />
      <circle cx="100.6" cy="20" r="1.5" fill="#f4f1ea" />
    </svg>
  );
}

/** Four-point sparkle, used as an acid accent mark. */
export function FourPointStar({ className }: MarkProps) {
  return (
    <svg className={className} viewBox="0 0 100 100" aria-hidden="true" focusable="false">
      <path d="M50 0 58.6 41.4 100 50 58.6 58.6 50 100 41.4 58.6 0 50 41.4 41.4Z" fill="currentColor" />
    </svg>
  );
}

/** Wireframe paper plane — outline only, no fill. */
export function WirePlane({ className }: MarkProps) {
  return (
    <svg className={className} viewBox="0 0 126 96" fill="none" aria-hidden="true" focusable="false">
      <g stroke="#121212" strokeWidth="1.75" strokeLinejoin="round" strokeLinecap="round">
        <path d="M6 44 120 6 86 90 58 58Z" />
        <path d="M58 58 120 6" />
        <path d="M58 58 50 82" />
        <path d="M58 58 40 50" />
      </g>
    </svg>
  );
}

export function ArrowRight({ className }: MarkProps) {
  return (
    <svg className={className} viewBox="0 0 14 14" fill="none" aria-hidden="true" focusable="false">
      <path d="M1.5 7h9M7 3.4 10.6 7 7 10.6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square" />
    </svg>
  );
}

export function ArrowUpRight({ className }: MarkProps) {
  return (
    <svg className={className} viewBox="0 0 14 14" fill="none" aria-hidden="true" focusable="false">
      <path d="M3.5 10.5 10.5 3.5M4.6 3.5h5.9v5.9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square" />
    </svg>
  );
}

export function CloseMark({ className }: MarkProps) {
  return (
    <svg className={className} viewBox="0 0 14 14" fill="none" aria-hidden="true" focusable="false">
      <path d="M2.5 2.5l9 9M11.5 2.5l-9 9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square" />
    </svg>
  );
}

export function AlertMark({ className }: MarkProps) {
  return (
    <svg className={className} viewBox="0 0 48 44" fill="none" aria-hidden="true" focusable="false">
      <path d="M24 3 45.7 41H2.3L24 3Z" stroke="#121212" strokeWidth="2" strokeLinejoin="round" fill="#f7d020" />
      <path d="M24 17v10" stroke="#121212" strokeWidth="2.4" strokeLinecap="square" />
      <circle cx="24" cy="33.5" r="1.9" fill="#121212" />
    </svg>
  );
}

/** Play plate mark used on video/sound works that live at an external source. */
export function PlayMark({ className }: MarkProps) {
  return (
    <svg className={className} viewBox="0 0 56 56" fill="none" aria-hidden="true" focusable="false">
      <circle cx="28" cy="28" r="26" stroke="currentColor" strokeWidth="1.75" />
      <path d="M23 18.5 38.5 28 23 37.5Z" fill="currentColor" />
    </svg>
  );
}
