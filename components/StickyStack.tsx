'use client';

import { useEffect, useRef, Children, isValidElement, cloneElement } from 'react';
import type { ReactElement } from 'react';

/**
 * Sticky scroll-stack: each card becomes sticky at a small offset,
 * and as the next card scrolls in the previous one scales + dims — 
 * same effect as chkstepan.com strategy section.
 */
export default function StickyStack({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const cards = Array.from(container.children) as HTMLElement[];

    const GAP = 24; // px between sticky offsets

    // Set sticky top per card
    cards.forEach((card, i) => {
      card.style.position = 'sticky';
      card.style.top      = `${i * GAP}px`;
      card.style.zIndex   = String(10 + i);
      card.style.transformOrigin = 'top center';
      card.style.willChange = 'transform, filter';
      card.style.transition = 'transform 0.4s cubic-bezier(0.23,1,0.32,1), filter 0.4s ease';
    });

    const update = () => {
      cards.forEach((card, i) => {
        const stickyTop = i * GAP;
        const rect      = card.getBoundingClientRect();

        // How much has card been "stuck" — negative means pushed past sticky point
        const stuckBy = stickyTop - rect.top;

        if (stuckBy > 0 && i < cards.length - 1) {
          // card is stuck – scale it slightly as next card pushes over it
          const progress  = Math.min(stuckBy / card.offsetHeight, 1);
          const scale     = 1 - progress * 0.04;
          const bright    = 1 - progress * 0.22;
          const translateY = progress * -12;
          card.style.transform = `scale(${scale}) translateY(${translateY}px)`;
          card.style.filter    = `brightness(${bright})`;
        } else {
          card.style.transform = 'scale(1) translateY(0)';
          card.style.filter    = 'brightness(1)';
        }
      });
    };

    window.addEventListener('scroll', update, { passive: true });
    update(); // run once on mount
    return () => window.removeEventListener('scroll', update);
  }, []);

  return <div ref={containerRef}>{children}</div>;
}
