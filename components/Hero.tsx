'use client';

import { useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';

const HeroCanvas = dynamic(() => import('./HeroCanvas'), { ssr: false });

interface StatItem { value: number; suffix: string; label: string }

const STATS: StatItem[] = [
  { value: 5, suffix: '+', label: 'Projects Completed' },
  { value: 1, suffix: '+', label: 'Years of Experience' },
  { value: 98, suffix: '.8/100', label: 'Avg Performance Score' },
];

function useCountUp(target: number, suffix: string, duration = 1600) {
  const elRef = useRef<HTMLElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (now: number) => {
            const p = Math.min((now - start) / duration, 1);
            // ease-out cubic
            const ease = 1 - Math.pow(1 - p, 3);
            el.textContent = Math.round(ease * target) + suffix;
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          obs.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [target, suffix, duration]);

  return elRef;
}

function StatItem({ item }: { item: StatItem }) {
  const ref = useCountUp(item.value, item.suffix);
  return (
    <span className="hero-stat-item">
      <span ref={ref} style={{ color: 'var(--text)', fontWeight: 500 }}>0{item.suffix}</span>{' '}{item.label}
    </span>
  );
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  // Parallax on heading
  useEffect(() => {
    const onScroll = () => {
      const wrap = sectionRef.current?.querySelector<HTMLElement>('.hero-title-wrap');
      if (wrap) {
        wrap.style.transform = `translateY(${window.scrollY * 0.18}px)`;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section id="hero" ref={sectionRef}>
      {/* Three.js animated background */}
      <HeroCanvas />

      {/* Stats bar — counters animate when visible */}
      <div className="hero-stats-bar" aria-label="Key statistics">
        <StatItem item={STATS[0]} />
        <div className="hero-stat-divider" aria-hidden="true" />
        <StatItem item={STATS[1]} />
        <div className="hero-stat-divider" aria-hidden="true" />
        <StatItem item={STATS[2]} />
      </div>

      {/* Main heading — CSS slide-up animation from globals.css */}
      <div className="hero-title-wrap">
        <h1>
          <span className="hero-line"><span className="hero-line-inner">I Build Modern</span></span>
          <span className="hero-line"><span className="hero-line-inner">Websites</span></span>
          <span className="hero-line"><span className="hero-line-inner">That Work</span></span>
        </h1>
      </div>

      {/* Bottom row — Enhanced with premium elements */}
      <div className="hero-bottom">
        <div className="hero-topo-bg" />
        <div className="white-dot-subtle" />

        <span className="hero-label">About</span>

        <div className="hero-about">
          <p>
            I&apos;m a web developer focused on building modern, fast, and
            reliable websites. I care not only about how a site looks, but
            also about how it performs, scales, and feels for real users.
          </p>
          <a href="#strategy" className="hero-learn-more" id="hero-learn-more">
            Learn more
            <svg width="18" height="18" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        <div className="hero-scroll-cta">
          <a href="#strategy" className="scroll-circle" aria-label="Scroll down">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M10 4V16M10 16L5 11M10 16L15 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
