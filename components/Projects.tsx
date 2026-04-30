'use client';

import { useEffect, useRef } from 'react';

const PROJECTS = [
  {
    title: 'Shayan Designs',
    year: '2025',
    tags: ['NEXT.JS', 'FRAMER MOTION', 'TAILWIND CSS', 'NODEMAILER'],
    desc: 'A high-end, professional portfolio website built for a creative designer. Focus on smooth animations, clean typography, and minimalist UI.',
    link: '#',
  },
  {
    title: 'Platteros',
    year: '2026',
    tags: ['NEXT.JS', 'AI INTEGRATION', 'NODE.JS', 'POSTGRESQL', 'STRIPE'],
    desc: 'SaaS-based Restaurant Management System. Enhanced with advanced AI integration for intelligent automation, predictive sales tracking, and table management.',
    link: '#',
  },
  {
    title: 'Business Management',
    year: '2025',
    tags: ['REACT JS', 'EXPRESS', 'NODE JS', 'POSTGRESQL', 'ELECTRON JS'],
    desc: 'A comprehensive SaaS solution for hybrid online and offline business operations. Manages inventory, finances, and team workflows seamlessly.',
    link: '#',
  },
  {
    title: 'CareerHelpp Portal',
    year: '2026',
    tags: ['NEXT JS', 'TAILWIND CSS', 'POSTGRESQL', 'PRISMA', 'NEXTAUTH'],
    desc: 'An advanced student management system designed to track applications, university placements, and education timelines in real-time.',
    link: '#',
  },
];

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">
      <path d="M2 12L12 2M12 2H4M12 2V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export default function Projects() {
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
    <section id="projects" ref={ref} className="bg-bg border-t border-border py-20 lg:py-32 px-[var(--section-pad)]">
      <div className="mx-auto max-w-[var(--section-max)]">
        
        <div className="mb-16 lg:mb-24">
          <h2 className="font-display text-[2.5rem] font-bold uppercase leading-[0.9] tracking-tighter text-text">
            RECENT <br /> WORK
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-16 lg:gap-y-24">
          {PROJECTS.map((project, i) => (
            <div 
              key={i} 
              className="group flex flex-col gap-8 relative border-b border-border pb-12"
            >
              {/* Top: Tags and Arrow */}
              <div className="flex items-start justify-between gap-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[0.6rem] font-bold tracking-widest text-muted border border-border px-3 py-1.5 rounded-full uppercase">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex-shrink-0 w-11 h-11 lg:w-12 lg:h-12 rounded-full border border-border-med flex items-center justify-center text-muted group-hover:bg-text group-hover:text-bg transition-all duration-300">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">
                    <path d="M2 12L12 2M12 2H4M12 2V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>

              {/* Middle: Title and Desc */}
              <div className="flex flex-col gap-4">
                <h3 className="text-2xl font-bold text-text tracking-tight">
                  {project.title}
                </h3>
                <p className="text-muted text-base leading-relaxed max-w-[55ch]">
                  {project.desc}
                </p>
              </div>

              {/* Bottom: Year */}
              <div className="mt-auto">
                <span className="text-accent text-[0.65rem] font-bold tracking-widest uppercase">
                  {project.year}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
