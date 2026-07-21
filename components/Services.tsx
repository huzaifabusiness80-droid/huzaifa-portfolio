'use client';

import { useEffect, useRef } from 'react';

const SERVICES = [
  {
    num: '01',
    title: 'Website Development',
    desc: 'High-performance Next.js 15 & React websites with sub-second page loads, Core Web Vitals optimization, SEO, responsive UI, and fluid motion design.',
    graphic: (
      <svg className="w-full h-full text-[#09090b]" viewBox="0 0 300 240" fill="none">
        {Array.from({ length: 17 }).map((_, i) => (
          <line key={i} x1={20 + i * 16} y1={20} x2={20 + i * 16} y2={220} stroke="#e2e8f0" strokeWidth="1.2" />
        ))}
        {[30, 50, 70, 90, 110, 90, 70, 50, 30, 50, 70, 90, 110, 90, 70, 50, 30].map((h, i) => (
          <line key={i} x1={20 + i * 16} y1={120 - h / 2} x2={20 + i * 16} y2={120 + h / 2} stroke="#09090b" strokeWidth="4" strokeLinecap="round" />
        ))}
      </svg>
    ),
  },
  {
    num: '02',
    title: 'SaaS Development',
    desc: 'End-to-end multi-tenant SaaS platforms with secure authentication, automated Stripe subscription billing, role permissions, and admin analytics.',
    graphic: (
      <svg className="w-full h-full text-[#09090b]" viewBox="0 0 300 240" fill="none">
        <circle cx="150" cy="120" r="80" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="3 3" />
        <line x1="50" y1="120" x2="250" y2="120" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="3 3" />
        <line x1="150" y1="20" x2="150" y2="220" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="3 3" />
        <line x1="80" y1="50" x2="220" y2="190" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="2 2" />
        <line x1="80" y1="190" x2="220" y2="50" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="2 2" />
        <g stroke="#09090b" strokeWidth="5" strokeLinecap="round">
          <line x1="150" y1="35" x2="150" y2="205" />
          <line x1="65" y1="120" x2="235" y2="120" />
          <line x1="90" y1="60" x2="210" y2="180" />
          <line x1="90" y1="180" x2="210" y2="60" />
        </g>
        <circle cx="150" cy="120" r="7" fill="#09090b" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'AI Integration & Automation',
    desc: 'Embedding intelligent LLMs, OpenAI APIs, automated AI workflows, vector search databases, smart chatbots, and predictive data processing.',
    graphic: (
      <svg className="w-full h-full text-[#09090b]" viewBox="0 0 300 240" fill="none">
        <line x1="30" y1="30" x2="270" y2="210" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="3 3" />
        <line x1="30" y1="210" x2="270" y2="30" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="3 3" />
        <circle cx="150" cy="120" r="95" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
        <circle cx="155" cy="125" r="75" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1" />
        <circle cx="160" cy="130" r="55" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1" />
        <circle cx="165" cy="135" r="38" fill="#64748b" />
        <circle cx="170" cy="140" r="22" fill="#09090b" />
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Mobile App Development',
    desc: 'Cross-platform iOS and Android mobile applications built for fluid user experience, native performance, and seamless backend synchronization.',
    graphic: (
      <svg className="w-full h-full text-[#09090b]" viewBox="0 0 300 240" fill="none">
        <rect x="50" y="30" width="200" height="180" rx="16" stroke="#cbd5e1" strokeWidth="1.2" strokeDasharray="4 4" />
        <line x1="150" y1="30" x2="150" y2="210" stroke="#e2e8f0" strokeWidth="1" />
        <line x1="50" y1="120" x2="250" y2="120" stroke="#e2e8f0" strokeWidth="1" />
        <rect x="105" y="50" width="90" height="140" rx="20" stroke="#09090b" strokeWidth="3.5" fill="none" />
        <line x1="130" y1="62" x2="170" y2="62" stroke="#09090b" strokeWidth="3" strokeLinecap="round" />
        <circle cx="150" cy="165" r="6" stroke="#09090b" strokeWidth="2.5" fill="none" />
        <circle cx="75" cy="75" r="5" fill="#09090b" />
        <circle cx="225" cy="75" r="5" fill="#09090b" />
        <circle cx="75" cy="165" r="5" fill="#09090b" />
        <circle cx="225" cy="165" r="5" fill="#09090b" />
      </svg>
    ),
  },
  {
    num: '05',
    title: 'E-Commerce Systems',
    desc: 'Custom headless storefronts, optimized checkout flows, inventory management systems, and high-converting e-commerce web applications.',
    graphic: (
      <svg className="w-full h-full text-[#09090b]" viewBox="0 0 300 240" fill="none">
        {Array.from({ length: 8 }).map((_, i) => (
          <circle key={i} cx={50 + i * 28} cy={120} r={12 + i * 3} stroke="#cbd5e1" strokeWidth="1.5" fill="none" />
        ))}
        <rect x="80" y="70" width="140" height="100" rx="16" stroke="#09090b" strokeWidth="3.5" fill="none" />
        <path d="M120 70 V50 A30 30 0 0 1 180 50 V70" stroke="#09090b" strokeWidth="3.5" fill="none" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num: '06',
    title: 'Cloud Architecture & APIs',
    desc: 'Architecting robust REST & GraphQL APIs, microservices, serverless infrastructure, PostgreSQL database optimization, and Docker deployment.',
    graphic: (
      <svg className="w-full h-full text-[#09090b]" viewBox="0 0 300 240" fill="none">
        <polygon points="150,30 240,80 240,160 150,210 60,160 60,80" stroke="#cbd5e1" strokeWidth="1.5" fill="none" strokeDasharray="4 4" />
        <polygon points="150,55 215,95 215,150 150,185 85,150 85,95" stroke="#09090b" strokeWidth="3" fill="none" />
        <circle cx="150" cy="120" r="12" fill="#09090b" />
      </svg>
    ),
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
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
    <section id="services" ref={sectionRef} className="bg-[#edf1f7] text-[#09090b] relative z-10 py-16 sm:py-24 lg:py-32 px-6 sm:px-10 font-sans overflow-hidden">
      
      {/* Top Left & Right Soft Lighter Purple Ambient Glow Spotlights */}
      <div className="absolute top-0 -left-48 w-[750px] h-[750px] bg-purple-400/25 blur-[150px] rounded-full pointer-events-none z-0" />
      <div className="absolute top-0 -right-48 w-[750px] h-[750px] bg-purple-400/25 blur-[150px] rounded-full pointer-events-none z-0" />

      <div className="mx-auto max-w-[1340px] flex flex-col gap-12 lg:gap-16 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-3">
          <div className="inline-flex items-center gap-2.5 text-base sm:text-lg font-extrabold text-[#6366f1]">
            <svg className="w-5 h-5 fill-current text-[#6366f1]" viewBox="0 0 24 24">
              <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
            </svg>
            <span className="text-[#09090b] text-base sm:text-lg font-extrabold">Core Services</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[3.5rem] font-semibold text-[#09090b] leading-[1.15] tracking-tight max-w-[26ch]">
            Specialized Digital Solutions <span className="font-serif italic font-normal text-[#6366f1]">Built For Growth</span>
          </h2>
        </div>

        {/* Sleeker 3-Column Grid with Taller, Sleeker Cards & Refined Typography */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch max-w-[1280px] mx-auto w-full">
          {SERVICES.map((s, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200/90 rounded-[2.5rem] p-7 sm:p-9 flex flex-col justify-between overflow-hidden relative shadow-sm hover:shadow-md transition-all group min-h-[520px] lg:min-h-[540px]"
            >
              {/* Top Tall Architectural Geometric SVG Graphic Container */}
              <div className="w-full h-[260px] sm:h-[270px] rounded-[1.8rem] bg-[#f8fafc] border border-slate-200/70 overflow-hidden relative flex items-center justify-center p-5 group-hover:bg-[#f1f5f9] transition-colors">
                {s.graphic}
              </div>

              {/* Bottom Content: Refined Typography & Descriptions */}
              <div className="pt-6 flex flex-col gap-3 flex-1 justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <h3 className="text-2xl font-bold text-[#09090b] tracking-tight leading-tight">
                      {s.title}
                    </h3>
                    <span className="text-sm font-bold text-slate-300 select-none">
                      {s.num}
                    </span>
                  </div>

                  <p className="text-base font-medium text-[#475569] leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
