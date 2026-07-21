'use client';

import { useEffect, useRef } from 'react';

export default function CtaBanner() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
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
    <section ref={ref} className="bg-[#edf1f7] text-[#09090b] relative z-10 py-16 sm:py-24 px-6 sm:px-10 font-sans">
      <div className="mx-auto max-w-[1340px]">
        {/* Master CTA Container Card */}
        <div className="bg-white border border-slate-200/90 rounded-[2.5rem] p-8 sm:p-14 lg:p-16 shadow-sm hover:shadow-md transition-all relative overflow-hidden flex flex-col items-center text-center gap-8">
          
          {/* Soft Purple Ambient Radial Glow in Card */}
          <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-purple-400/15 blur-[120px] rounded-full" />

          {/* Availability Badge */}
          <div className="inline-flex items-center gap-2.5 bg-indigo-50 border border-indigo-100 text-[#6366f1] text-xs sm:text-sm font-extrabold px-4 py-2 rounded-full uppercase tracking-wider">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Available for new projects • Response within 24h</span>
          </div>

          {/* Clean Headline (No giant text clutter) */}
          <h2 className="text-3xl sm:text-4xl lg:text-[3.5rem] font-semibold text-[#09090b] leading-[1.15] tracking-tight max-w-[26ch]">
            Let&apos;s Build Something <span className="font-serif italic font-normal text-[#6366f1]">Extraordinary Together</span>
          </h2>

          <p className="text-base sm:text-lg font-medium text-[#475569] leading-relaxed max-w-[50ch]">
            Have an upcoming web application, SaaS product, or AI automation project? Let&apos;s connect and transform your ideas into scalable reality.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href="#contact"
              className="bg-[#09090b] text-white text-base font-bold rounded-full px-9 py-4 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-md flex items-center gap-3"
            >
              <span>Get In Touch</span>
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>

            <a
              href="mailto:huzaifabusiness60@gmail.com"
              className="bg-[#f8fafc] border border-slate-200 text-[#09090b] text-base font-bold rounded-full px-8 py-4 hover:bg-white hover:border-[#6366f1]/50 transition-all flex items-center gap-2.5"
            >
              <svg className="w-5 h-5 text-[#6366f1]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              <span>huzaifabusiness60@gmail.com</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
