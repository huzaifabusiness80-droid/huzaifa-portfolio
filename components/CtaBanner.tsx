'use client';

import { useEffect, useRef } from 'react';

export default function CtaBanner() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = '0';
    el.style.transform = 'translateY(40px)';
    el.style.transition = 'opacity 0.8s ease, transform 0.85s cubic-bezier(0.16,1,0.3,1)';
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
          obs.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative bg-accent overflow-hidden px-[var(--section-pad)] py-16 lg:py-24">
      {/* Background large text */}
      <div className="absolute inset-0 flex items-end justify-end select-none pointer-events-none overflow-hidden">
        <span className="text-[10vw] font-bold text-white/10 uppercase tracking-tighter whitespace-nowrap translate-x-[-5%] translate-y-[10%]">
          LET&apos;S BUILD
        </span>
      </div>

      <div className="relative z-10 mx-auto max-w-[var(--section-max)] flex flex-col items-start gap-10">
        <h2 className="font-display text-[clamp(2rem,6vw,4rem)] font-bold uppercase leading-[0.9] tracking-tighter text-white max-w-[15ch]">
          Ready to build<br />something great?
        </h2>
        <a 
          href="#contact" 
          className="flex items-center gap-4 bg-black text-white text-[0.7rem] font-bold tracking-[0.2em] uppercase rounded-full px-10 py-5 hover:scale-105 active:scale-95 transition-all shadow-2xl"
        >
          Let&apos;s talk
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M2 12L12 2M12 2H4M12 2V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </section>
  );
}
