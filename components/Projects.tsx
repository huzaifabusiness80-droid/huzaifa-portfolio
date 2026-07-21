'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

const PROJECTS = [
  {
    num: '01',
    title: 'Platteros',
    desc: 'An AI-powered SaaS platform for restaurant management, automated sales tracking, table bookings, and real-time operational analytics.',
    link: 'https://www.platteros.com/',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
  },
  {
    num: '02',
    title: 'Shayan Designs Portfolio',
    desc: 'High-end, minimalist creative portfolio built with Next.js, Framer Motion animations, clean typography, and seamless interaction design.',
    link: 'https://shayandesigns.com/',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
  },
  {
    num: '03',
    title: 'Oriole Lume Agency',
    desc: 'A cutting-edge agency web app featuring immersive visual storytelling, 3D WebGL interactions, and high-converting product pages.',
    link: 'https://oriolelume.com/',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
  },
  {
    num: '04',
    title: 'CareerHelpp Management',
    desc: 'Full-stack enterprise student management portal for application tracking, university placements, and automated timeline workflows.',
    link: 'https://careerhelpp.com/',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80',
  },
];

export default function Projects() {
  const ref = useRef<HTMLElement>(null);

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
    <section id="projects" ref={ref} className="bg-[#edf1f7] text-[#09090b] relative z-10 py-16 sm:py-24 lg:py-32 px-6 sm:px-10 font-sans">
      <div className="mx-auto max-w-[1340px] flex flex-col gap-12 lg:gap-16">

        {/* Centered Section Header */}
        <div className="flex flex-col items-center text-center gap-3">
          <div className="inline-flex items-center gap-2.5 text-base sm:text-lg font-extrabold text-[#6366f1]">
            <svg className="w-5 h-5 fill-current text-[#6366f1]" viewBox="0 0 24 24">
              <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
            </svg>
            <span className="text-[#09090b] text-base sm:text-lg font-extrabold">My Portfolio</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[3.5rem] font-semibold text-[#09090b] leading-[1.15] tracking-tight max-w-[28ch]">
            Projects That Delivered <span className="font-serif italic font-normal text-[#6366f1]">Real Impact</span>
          </h2>
        </div>

        {/* Project Cards Stack */}
        <div className="flex flex-col gap-8 sm:gap-12">
          {PROJECTS.map((project) => (
            <div
              key={project.num}
              className="bg-white border border-slate-200/90 rounded-[2.8rem] p-8 sm:p-12 lg:p-16 shadow-sm hover:shadow-md transition-all relative overflow-hidden flex flex-col justify-between gap-10 lg:gap-12 min-h-[540px] lg:min-h-[600px]"
            >
              {/* Top Header Row: Title & Counter Aligned Horizontally */}
              <div className="w-full flex items-center justify-between gap-6 pb-2">
                <h3 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-medium text-[#09090b] tracking-tight leading-tight">
                  {project.title}
                </h3>
                <span className="text-5xl sm:text-6xl lg:text-[5.5rem] font-normal text-slate-300 leading-none select-none">
                  {project.num}
                </span>
              </div>

              {/* Bottom Row: Left Content & Right Image */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-end flex-1 pt-4">

                {/* Left Column: Description & Action Buttons */}
                <div className="lg:col-span-6 flex flex-col justify-end items-start gap-8 h-full">
                  <p className="text-base sm:text-xl font-medium text-[#475569] leading-relaxed max-w-[44ch]">
                    {project.desc}
                  </p>

                  <div className="flex items-center gap-3">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#09090b] text-white text-base font-bold rounded-full px-9 py-4 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-md"
                    >
                      Explore Project
                    </a>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Explore ${project.title}`}
                      className="bg-[#09090b] text-white w-14 h-14 p-4 rounded-full flex items-center justify-center hover:scale-[1.05] active:scale-[0.95] transition-all shadow-md"
                    >
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Right Column: Image positioned at the bottom right */}
                <div className="lg:col-span-6 w-full h-[320px] sm:h-[400px] lg:h-[440px] rounded-[2.2rem] overflow-hidden relative shadow-sm border border-slate-200/80 group">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    unoptimized
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                  />
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
