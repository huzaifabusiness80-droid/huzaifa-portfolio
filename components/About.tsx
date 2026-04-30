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
    variant: 'green' as const,
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
    variant: 'green' as const,
  },
];

const SKILLS = [
  'React', 'Next.js', 'TypeScript', 'Node.js',
  'Express', 'PostgreSQL', 'MongoDB', 'Prisma',
  'Tailwind', 'Docker', 'AWS', 'GraphQL', 'Git', 'Redis',
];

function ArrowIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path d="M1 11L11 1M11 1H3M11 1V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function RotatingBadge() {
  const label = 'Huzaifa • Full Stack Dev • Pakistan • ';
  return (
    <div className="rotating-badge" aria-hidden="true">
      <svg className="badge-ring" viewBox="0 0 110 110" fill="none">
        <defs>
          <path id="circle-path" d="M 55,55 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
        </defs>
        <circle cx="55" cy="55" r="50" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
        <text fill="rgba(255,255,255,0.55)" fontSize="9.5" fontFamily="inherit" letterSpacing="2.5" fontWeight="500">
          <textPath href="#circle-path">{label.repeat(2)}</textPath>
        </text>
      </svg>
      <div className="badge-center">
        <span className="badge-globe">🌐</span>
      </div>
    </div>
  );
}

/* Single card panel — handles its own entry animation */
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
          // Don't override sticky transform — only use translateY entry
          el.style.transition = 'opacity 0.75s ease, filter 0.4s ease, transform 0.4s cubic-bezier(0.23,1,0.32,1)';
          obs.unobserve(el);
        }
      },
      { threshold: 0.05 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [index]);

  return (
    <div
      ref={ref}
      className={`strategy-card-panel ${card.variant}`}
    >
      <div className="strategy-card-content">
        <h3 className="strategy-card-name">{card.name}</h3>
        <p className="strategy-card-sub">{card.desc}</p>
        <a href={card.href} className="strategy-card-link">
          {card.link} <ArrowIcon />
        </a>
      </div>
      <div className="strategy-card-num" aria-hidden="true">{card.num}</div>
    </div>
  );
}

export default function About() {
  return (
    <section id="strategy">
      {/* Header */}
      <ScrollReveal>
        <div className="strategy-header">
          <div className="strategy-header-left">
            <span className="section-eyebrow">Strategy</span>
            <h2 className="strategy-title">
              How I Approach<br />Every Project?
            </h2>
          </div>
          <FloatingOrb />
        </div>
      </ScrollReveal>

      {/* ── STICKY STACKING CARDS ─────────────────────── */}
      <StickyStack>
        {CARDS.map((card, i) => (
          <CardPanel key={card.num} card={card} index={i} />
        ))}
      </StickyStack>

      {/* Skills */}
      <ScrollReveal delay={80}>
        <div className="skills-section">
          <div className="skills-header">
            <h3 className="skills-title">
              Tech<br />
              <span style={{ color: 'var(--accent)' }}>Stack</span>
            </h3>
          </div>
          <div className="skills-cloud" aria-label="Skills">
            {SKILLS.map((s, i) => (
              <span
                className="skill-chip"
                key={s}
                style={{ animationDelay: `${i * 40}ms` }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
