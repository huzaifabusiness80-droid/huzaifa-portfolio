'use client';

import { useEffect, useRef } from 'react';

export default function AboutIntro() {
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
    <section id="about" className="bg-bg relative z-10 py-10 lg:py-32 px-[var(--section-pad)]">
      <div ref={ref} className="mx-auto max-w-[var(--section-max)] grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8 lg:gap-24 items-center">
        
        <div className="text-left">
          <span className="text-muted uppercase tracking-widest text-xs font-semibold">About</span>
          <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3.2rem)] font-bold leading-[1.05] tracking-tight uppercase max-w-[25ch] text-text">
            Bridging the gap between <span className="text-accent">Vision</span> and Technical reality.
          </h2>
          <div className="mt-6 space-y-6 max-w-[67ch]">
            <p className="text-[clamp(0.95rem,1.2vw,1.1rem)] leading-relaxed text-dim">
              I am Muhammad Huzaifa, a results-driven full-stack developer specializing in creating high-performance web applications. My approach combines technical excellence with a deep understanding of business objectives.
            </p>
            <p className="text-[clamp(0.95rem,1.2vw,1.1rem)] leading-relaxed text-dim">
              I believe that great design is invisible—it just works. I focus on building products that don't just look good, but solve real-world problems through clean code and intuitive user experiences.
            </p>
          </div>
        </div>

        {/* Capabilities Grid */}
        <div className="flex flex-col gap-8 p-12 bg-bg2 border border-border rounded-3xl backdrop-blur-md">
          <div className="flex flex-col gap-2">
            <h3 className="font-display text-xl font-bold uppercase tracking-wider text-text">Technical Architecture</h3>
            <p className="text-sm leading-relaxed text-muted">Building resilient, scalable systems that handle high traffic with ease.</p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-display text-xl font-bold uppercase tracking-wider text-text">Product Strategy</h3>
            <p className="text-sm leading-relaxed text-muted">Aligning development goals with user needs for maximum impact.</p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-display text-xl font-bold uppercase tracking-wider text-text">Experience Design</h3>
            <p className="text-sm leading-relaxed text-muted">Crafting seamless, accessible journeys that users actually enjoy.</p>
          </div>
        </div>

      </div>
    </section>
  );
}
