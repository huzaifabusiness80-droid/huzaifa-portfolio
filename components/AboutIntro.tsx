'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function AboutIntro() {
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
    <section id="about" className="bg-[#edf1f7] text-[#09090b] relative z-10 py-16 sm:py-24 lg:py-32 px-6 sm:px-10 font-sans">
      <div ref={ref} className="mx-auto max-w-[1340px] flex flex-col gap-12 lg:gap-16">

        {/* Top Header Row with flex justify-between */}
        <div className="w-full flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-16">
          
          {/* Top Left Tag */}
          <div className="flex-shrink-0 pt-1">
            <div className="inline-flex items-center gap-2.5 text-base sm:text-lg font-extrabold text-[#6366f1]">
              <svg className="w-5 h-5 fill-current text-[#6366f1]" viewBox="0 0 24 24">
                <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
              </svg>
              <span className="text-[#09090b] text-base sm:text-xl font-extrabold">About Me</span>
            </div>
          </div>

          {/* Top Right Headline & CTA Buttons */}
          <div className="flex flex-col gap-8 items-start max-w-[840px]">
            <h2 className="text-3xl sm:text-4xl lg:text-[3.15rem] font-semibold text-[#09090b] leading-[1.18] tracking-tight">
              I engineer <span className="font-serif italic font-normal text-[#6366f1]">scalable</span> web applications that connect frontend precision with robust <span className="font-serif italic font-normal">backend architecture.</span>
            </h2>

            {/* Action Buttons (Solid Black Pill + Circle Arrow) */}
            <div className="flex items-center gap-3">
              <a
                href="#contact"
                className="bg-[#09090b] text-white text-base font-bold rounded-full px-9 py-4 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-md"
              >
                Get In Touch
              </a>
              <a
                href="#contact"
                aria-label="Get in touch arrow"
                className="bg-[#09090b] text-white w-14 h-14 p-4 rounded-full flex items-center justify-center hover:scale-[1.05] active:scale-[0.95] transition-all shadow-md"
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bento Layout (Image Card + Stats Grid) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">

          {/* Left Column: Portrait Photo Card */}
          <div className="lg:col-span-4 bg-white border border-slate-200/90 rounded-[2.2rem] p-0 flex items-center justify-center overflow-hidden shadow-sm min-h-[440px] lg:min-h-[500px] relative">
            <Image
              src="/Gemini_Generated_Image_szua74szua74szua (1).png"
              alt="Muhammad Huzaifa"
              width={800}
              height={950}
              priority
              className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-[1.02]"
            />
          </div>

          {/* Right Column: 2x2 Grid of Bento Cards */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6">

            {/* Card 1: Years Building Full-Stack Apps */}
            <div className="bg-white border border-slate-200/90 rounded-[2rem] p-7 sm:p-9 flex items-center justify-between shadow-sm hover:shadow-md transition-all">
              <span className="text-base sm:text-lg font-medium text-[#475569] leading-snug max-w-[170px]">
                Years Building<br />Full-Stack Apps
              </span>
              <span className="text-5xl sm:text-6xl  text-[#09090b] tracking-tight">4+</span>
            </div>

            {/* Card 2: Web Projects Successfully Deployed */}
            <div className="bg-white border border-slate-200/90 rounded-[2rem] p-7 sm:p-9 flex items-center justify-between shadow-sm hover:shadow-md transition-all">
              <span className="text-base sm:text-lg font-medium text-[#475569] leading-snug max-w-[180px]">
                Web Projects<br />Deployed Live
              </span>
              <span className="text-5xl sm:text-6xl  text-[#09090b] tracking-tight">25+</span>
            </div>

            {/* Card 3: Client Satisfaction & Avatars */}
            <div className="bg-white border border-slate-200/90 rounded-[2rem] p-7 sm:p-9 flex flex-col justify-between shadow-sm hover:shadow-md transition-all min-h-[240px] relative">
              <div>
                <span className="text-5xl sm:text-6xl  text-[#09090b] tracking-tight">100%</span>
                <p className="text-base sm:text-lg font-medium text-[#475569] mt-2">Client Satisfaction & Code Quality</p>
              </div>

              <div className="flex items-end justify-between pt-6">
                {/* Rating Badge */}
                <div className="inline-flex items-center gap-1.5 px-4.5 py-2.5 rounded-full bg-[#f1f5f9] text-sm font-semibold text-[#09090b] border border-slate-300">
                  <span className="text-amber-500 text-base">★</span>
                  <span>4.9</span>
                </div>

                {/* Stacked Avatar Circles */}
                <div className="relative flex items-center h-12 w-32">
                  <div className="absolute right-16 top-1 w-9 h-9 rounded-full bg-gradient-to-tr from-purple-600 to-indigo-600 border-2 border-white flex items-center justify-center text-[10px] font-bold text-white shadow-sm">
                    AK
                  </div>
                  <div className="absolute right-11 top-0 w-10 h-10 rounded-full bg-gradient-to-tr from-pink-600 to-rose-600 border-2 border-white flex items-center justify-center text-[10px] font-bold text-white shadow-sm">
                    SL
                  </div>
                  <div className="absolute right-5 -top-1 w-11 h-11 rounded-full bg-gradient-to-tr from-amber-500 to-orange-500 border-2 border-white flex items-center justify-center text-[10px] font-bold text-white shadow-sm">
                    MR
                  </div>
                  <div className="absolute right-0 top-1 w-9 h-9 rounded-full bg-gradient-to-tr from-teal-500 to-emerald-600 border-2 border-white flex items-center justify-center text-[10px] font-bold text-white shadow-sm">
                    JD
                  </div>
                </div>
              </div>
            </div>

            {/* Card 4: Strategic Thinking & Service Tags */}
            <div className="bg-white border border-slate-200/90 rounded-[2rem] p-7 sm:p-9 flex flex-col justify-between shadow-sm hover:shadow-md transition-all min-h-[240px] relative overflow-hidden">
              <h3 className="text-2xl sm:text-3xl font-medium text-[#09090b] leading-tight max-w-[340px]">
                Modern Tech Stack, Scalable Architecture.
              </h3>

              {/* Service Pills & Rotated Badge */}
              <div className="flex items-end justify-between pt-6 relative">
                <div className="flex flex-col gap-2.5 z-10">
                  <span className="inline-block px-4.5 py-2 rounded-full bg-[#f1f5f9] text-xs sm:text-sm font-semibold text-[#09090b] border border-slate-300 w-fit">
                    Next.js & React
                  </span>
                  <span className="inline-block px-4.5 py-2 rounded-full bg-[#f1f5f9] text-xs sm:text-sm font-semibold text-[#09090b] border border-slate-300 w-fit">
                    Node.js & Databases
                  </span>
                  <span className="inline-block px-4.5 py-2 rounded-full bg-[#f1f5f9] text-xs sm:text-sm font-semibold text-[#09090b] border border-slate-300 w-fit">
                    REST & GraphQL APIs
                  </span>
                </div>

                {/* Rotated Badge (-30deg tilt matching reference) */}
                <div className="absolute right-1 bottom-4 rotate-[-30deg] bg-[#7c3aed] text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-full shadow-md z-0">
                  Full Stack
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
