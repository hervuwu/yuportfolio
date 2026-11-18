import { useEffect } from 'react';

/**
 * Reveals `[data-reveal]` elements as they enter the viewport.
 *
 * Uses a frame-throttled scroll check rather than IntersectionObserver:
 * anchor jumps and fast wheel/trackpad scrolls can move an element past the
 * viewport between observer frames, which would leave it permanently hidden.
 * Checking the remaining nodes each frame costs almost nothing at this size
 * and guarantees nothing can be stranded at opacity 0.
 */
export function useScrollReveal() {
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
    if (nodes.length === 0) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) {
      nodes.forEach((node) => node.classList.add('is-revealed'));
      return;
    }

    let frame = 0;

    const revealVisible = () => {
      frame = 0;
      const limit = window.innerHeight * 0.94;
      for (const node of nodes) {
        if (node.classList.contains('is-revealed')) continue;
        if (node.getBoundingClientRect().top < limit) node.classList.add('is-revealed');
      }
    };

    const schedule = () => {
      if (frame === 0) frame = window.requestAnimationFrame(revealVisible);
    };

    revealVisible();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);

    return () => {
      if (frame !== 0) window.cancelAnimationFrame(frame);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
    };
  }, []);
}
