'use client';

import { useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import StickyStack from './StickyStack';
import ScrollReveal from './ScrollReveal';

const FloatingOrb = dynamic(() => import('./FloatingOrb'), { ssr: false });

const CARDS = [
  {
    num: '01',
    name: 'Performance First',
    desc: 'I focus on building websites that load fast and feel smooth from the first interaction. Performance is considered at every stage, from structure and assets to code quality and optimisation.',
    link: 'Learn more',
    href: '#projects',
    variant: 'light' as const,
  },
  {
    num: '02',
    name: 'Clean & Scalable Code',
    desc: 'I write clean, well-structured, and maintainable code with a strong focus on clarity and long-term scalability. This approach makes projects easier to understand and extend over time.',
    link: 'My workflow',
    href: '#projects',
    variant: 'purple' as const,
  },
  {
    num: '03',
    name: 'Modern UI & UX',
    desc: 'I design and build interfaces with clarity, usability, and consistency in mind. Layouts, interactions, and responsive behaviour are carefully crafted across all devices.',
    link: 'View approach',
    href: '#contact',
    variant: 'light' as const,
  },
  {
    num: '04',
    name: 'SEO & Best Practices',
    desc: 'Every project is built with search engines in mind — semantic markup, optimised metadata, Core Web Vitals, and accessibility baked in from the very start.',
    link: 'Get started',
    href: '#contact',
    variant: 'purple' as const,
  },
];

const SKILLS = [
  'HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'TypeScript', 'Node.js',
  'Express', 'PostgreSQL', 'MongoDB', 'Prisma', 'Tailwind', 'Bootstrap',
  'Shadcn UI', 'Zod', 'Figma', 'Stripe', 'Git', 'GitHub', 'Docker', 'AWS', 'Vercel',
];

function ArrowIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path d="M1 11L11 1M11 1H3M11 1V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CardPanel({ card, index }: { card: typeof CARDS[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = '0';
    el.style.transform = 'translateY(60px)';
    el.style.transition = `opacity 0.75s ease ${index * 0.1}s, transform 0.85s cubic-bezier(0.16,1,0.3,1) ${index * 0.1}s`;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = '1';
          el.style.transition = 'opacity 0.75s ease, filter 0.4s ease, transform 0.4s cubic-bezier(0.23,1,0.32,1)';
          obs.unobserve(el);
        }
      },
      { threshold: 0.05 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [index]);

  const bgClass = card.variant === 'light' ? 'bg-white text-black' : 'bg-[#f3e8ff] text-black';

  return (
    <div
      ref={ref}
      className={`relative border-b border-border overflow-hidden cursor-none transition-all duration-300 min-h-[400px] ${bgClass}`}
    >
      <div className="mx-auto max-w-[var(--section-max)] grid grid-cols-1 lg:grid-cols-[1fr_auto] items-stretch h-full">
        <div className="p-10 lg:p-20 flex flex-col justify-center">
          <h3 className="font-display text-3xl lg:text-5xl font-bold uppercase tracking-tight mb-6">{card.name}</h3>
          <p className="max-w-[50ch] text-base lg:text-lg opacity-70 mb-10 leading-relaxed">{card.desc}</p>
          <a href={card.href} className="inline-flex items-center gap-3 text-[0.7rem] font-bold tracking-widest uppercase border-b border-current pb-1 w-fit opacity-80 hover:opacity-100 transition-opacity">
            {card.link} <ArrowIcon />
          </a>
        </div>
        <div className="hidden lg:flex items-end p-8 font-display text-[12rem] font-semibold tracking-tighter opacity-10 leading-none select-none">
          {card.num}
        </div>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section id="strategy" className="bg-bg">
      {/* Header */}
      <ScrollReveal>
        <div className="px-[var(--section-pad)] py-20 lg:py-32">
          <div className="max-w-[var(--section-max)] mx-auto flex flex-col lg:flex-row items-baseline justify-between gap-12">
            <div className="w-full">
              <span className="text-muted uppercase tracking-widest text-xs font-semibold">Strategy</span>
              <h2 className="mt-4 font-display text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[0.95] tracking-tight text-text uppercase">
                How I Approach<br />Every Project?
              </h2>
            </div>
            <div className="hidden lg:block relative -top-20 right-0">
              <FloatingOrb />
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Sticky Stacking Cards */}
      <StickyStack>
        {CARDS.map((card, i) => (
          <CardPanel key={card.num} card={card} index={i} />
        ))}
      </StickyStack>

      {/* Skills */}
      <ScrollReveal delay={80}>
        <div className="px-[var(--section-pad)] py-20 lg:py-32 border-b border-border">
          <div className="mx-auto max-w-[var(--section-max)]">
            <div className="flex flex-col lg:flex-row lg:items-baseline gap-12 lg:gap-24 mb-16 lg:mb-24">
              <h3 className="font-display text-[clamp(2rem,4.5vw,3.2rem)] font-bold uppercase leading-[1] tracking-tight text-text">
                Tech<br />
                <span className="text-accent">Stack</span>
              </h3>
            </div>
            <div className="flex flex-wrap gap-3 max-w-4xl" aria-label="Skills">
              {SKILLS.map((s) => (
                <span
                  className="group font-body text-[0.68rem] font-bold tracking-[0.15em] uppercase text-muted border border-border/50 px-5 py-3 rounded-full hover:text-text hover:border-accent/40 transition-all duration-300 cursor-default flex items-center gap-2"
                  key={s}
                >
                  <span className="w-1 h-1 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
