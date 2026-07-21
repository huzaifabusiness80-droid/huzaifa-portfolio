'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

const TESTIMONIALS = [
  {
    id: 1,
    badge: 'Customer Stories',
    quote:
      'Our platform became significantly easier to use after the redesign. The clarity in user flows improved engagement, retention, and customer satisfaction.',
    name: 'Alexander Hayes',
    role: 'Head Of Product, Nova Labs',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 2,
    badge: 'Client Story',
    quote:
      'Working together elevated both our brand identity and digital presence. The execution was precise, timely, and focused on delivering measurable results.',
    name: 'Olivia Grace',
    role: 'Co-Founder & CEO, Launchify',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 3,
    badge: 'Case Study',
    quote:
      'Huzaifa delivered a complex SaaS platform ahead of schedule. The architecture is robust, extremely fast, and scaled effortlessly to thousands of active users.',
    name: 'James Whitfield',
    role: 'Director of Engineering, ShopFast',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 4,
    badge: 'Product Review',
    quote:
      'The AI integration reduced our operational overhead by over 40%. The UI is clean, intuitive, and loved by our entire operations team.',
    name: 'Nora Caldwell',
    role: 'CTO, Automate.ai',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=1000&q=80',
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);

  const go = useCallback(
    (dir: 1 | -1) => {
      if (animating) return;
      setAnimating(true);
      setTimeout(() => {
        setActive((prev) => (prev + dir + TESTIMONIALS.length) % TESTIMONIALS.length);
        setAnimating(false);
      }, 250);
    },
    [animating]
  );

  // Auto-advance every 7 seconds
  useEffect(() => {
    const timer = setInterval(() => go(1), 7000);
    return () => clearInterval(timer);
  }, [go]);

  const current = TESTIMONIALS[active];

  return (
    <section
      id="testimonials"
      className="bg-[#edf1f7] text-[#09090b] relative z-10 py-16 sm:py-24 lg:py-32 px-6 sm:px-10 font-sans overflow-hidden"
    >
     
      <div className="mx-auto max-w-[1340px] flex flex-col gap-10 lg:gap-14 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col items-start gap-3">
          <div className="inline-flex items-center gap-2.5 text-base sm:text-lg font-extrabold text-[#6366f1]">
            <svg className="w-5 h-5 fill-current text-[#6366f1]" viewBox="0 0 24 24">
              <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
            </svg>
            <span className="text-[#09090b] text-base sm:text-lg font-extrabold">Client Feedback</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[3.25rem] font-semibold text-[#09090b] leading-[1.15] tracking-tight max-w-[28ch]">
            Trusted by <span className="font-serif italic font-normal text-[#6366f1]">ambitious teams</span> worldwide
          </h2>
        </div>

        {/* Main Testimonial White Container Card */}
        <div className="bg-white border border-slate-200/90 rounded-[2.5rem] p-8 sm:p-12 lg:p-14 shadow-sm hover:shadow-md transition-all relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

            {/* Left Content Column */}
            <div className="lg:col-span-6 flex flex-col justify-between items-start min-h-[340px] lg:min-h-[380px] gap-8">
              
              <div className="flex flex-col items-start gap-6 w-full">
                {/* Black Pill Badge */}
                <span className="bg-[#09090b] text-white text-xs sm:text-sm font-semibold rounded-full px-5 py-2.5 inline-block shadow-sm">
                  {current.badge}
                </span>

                {/* Quote Text */}
                <div
                  className="transition-all duration-300 min-h-[120px] flex items-center"
                  style={{
                    opacity: animating ? 0 : 1,
                    transform: animating ? 'translateY(8px)' : 'translateY(0)',
                  }}
                >
                  <p className="text-xl sm:text-2xl font-medium text-[#09090b] leading-relaxed max-w-[36ch]">
                    {current.quote}
                  </p>
                </div>
              </div>

              {/* Author Info & Navigation Controls Row */}
              <div className="w-full flex flex-col gap-6 pt-2">
                {/* Author Name & Role */}
                <div
                  className="transition-all duration-300"
                  style={{
                    opacity: animating ? 0 : 1,
                    transform: animating ? 'translateY(6px)' : 'translateY(0)',
                  }}
                >
                  <h4 className="text-xl sm:text-2xl font-bold text-[#09090b]">
                    {current.name}
                  </h4>
                  <p className="text-sm sm:text-base font-medium text-[#475569] mt-0.5">
                    {current.role}
                  </p>
                </div>

                {/* Navigation Buttons (Two Solid Black Arrow Buttons) */}
                <div className="flex items-center gap-3 pt-2">
                  <button
                    onClick={() => go(-1)}
                    aria-label="Previous testimonial"
                    className="w-13 h-13 sm:w-14 sm:h-14 bg-[#09090b] text-white rounded-full flex items-center justify-center hover:scale-[1.05] active:scale-[0.95] transition-all shadow-md"
                  >
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                    </svg>
                  </button>

                  <button
                    onClick={() => go(1)}
                    aria-label="Next testimonial"
                    className="w-13 h-13 sm:w-14 sm:h-14 bg-[#09090b] text-white rounded-full flex items-center justify-center hover:scale-[1.05] active:scale-[0.95] transition-all shadow-md"
                  >
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </button>
                </div>
              </div>

            </div>

            {/* Right Photo Column */}
            <div className="lg:col-span-6 w-full flex justify-center items-center">
              <div
                className="relative w-full h-[320px] sm:h-[380px] lg:h-[440px] rounded-[2rem] overflow-hidden bg-slate-100 shadow-sm transition-all duration-300"
                style={{
                  opacity: animating ? 0.3 : 1,
                  transform: animating ? 'scale(0.98)' : 'scale(1)',
                }}
              >
                <Image
                  src={current.image}
                  alt={current.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                  className="object-cover object-center"
                />
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
