'use client';

import { useEffect, useRef } from 'react';

const SERVICES = [
  {
    title: 'AI SOLUTIONS',
    desc: 'Integrating practical AI features like chat assistants, workflow automation, and smart data handling for optimized business operations.',
    linkText: 'GET AI READY',
  },
  {
    title: 'SAAS PLATFORMS',
    desc: 'Building complete, scalable software solutions with secure authentication, billing flows, and robust backend architectures.',
    linkText: 'START SCALING',
  },
  {
    title: 'HIGH-END WEB DEV',
    desc: 'Creating modern, high-performance websites with clean structure and SEO-focused foundations to drive online growth.',
    linkText: 'DISCUSS PROJECT',
  },
  {
    title: 'MOBILE EXPERIENCE',
    desc: 'Delivering cross-platform mobile applications with smooth UI, stable performance, and native-like user experiences.',
    linkText: 'EXPLORE APPS',
  },
  {
    title: 'E-COMMERCE SYSTEMS',
    desc: 'Conversion-focused online stores with optimized product flows, secure payments, and intuitive management tools.',
    linkText: 'OPEN SHOP',
  },
  {
    title: 'API ENGINEERING',
    desc: 'Connecting products with third-party ecosystems through clean API integrations and stable data synchronization.',
    linkText: 'CONNECT API',
  },
];

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M2 12L12 2M12 2H4M12 2V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export default function Services() {
  const ref = useRef<HTMLElement>(null);

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
    <section id="services" ref={ref} className="bg-bg border-t border-border py-20 lg:py-32 px-[var(--section-pad)]">
      <div className="mx-auto max-w-[var(--section-max)]">
        
        <div className="mb-16 lg:mb-24">
          <span className="text-muted uppercase tracking-widest text-[0.75rem] font-bold">Services</span>
          <h2 className="mt-6 font-display text-[2.5rem] font-bold uppercase leading-[1.1] tracking-tight text-text max-w-[20ch]">
            SPECIALIZED <span className="text-accent">DIGITAL</span> SOLUTIONS.
          </h2>
        </div>

        <div className="flex flex-col border-t border-border">
          {SERVICES.map((s, i) => (
            <div 
              key={i} 
              className="group border-b border-border py-12 lg:py-16 flex flex-col lg:flex-row lg:items-center justify-between gap-8 hover:bg-bg2/30 transition-all duration-500 px-6 lg:px-8 -mx-6 lg:-mx-8 rounded-xl"
            >
              <div className="flex flex-col gap-5 max-w-[650px]">
                <h3 className="font-display text-2xl lg:text-4xl font-bold text-text uppercase tracking-tight transition-transform duration-500 group-hover:translate-x-2">{s.title}</h3>
                <p className="text-dim text-sm lg:text-base leading-relaxed opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                  {s.desc}
                </p>
              </div>
              
              <div className="flex items-center gap-8 self-end lg:self-center">
                <span className="text-[0.68rem] font-bold tracking-[0.2em] text-muted uppercase group-hover:text-accent transition-colors duration-500">
                  {s.linkText}
                </span>
                <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-full border border-border flex items-center justify-center text-muted group-hover:bg-accent group-hover:text-white group-hover:border-accent transition-all duration-500 transform group-hover:scale-110">
                  <ArrowIcon />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
