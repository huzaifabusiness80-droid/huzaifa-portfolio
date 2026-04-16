'use client';

import ScrollReveal from './ScrollReveal';
import TiltCard    from './TiltCard';

const PROJECTS = [
  {
    id: 'project-shayandesigns',
    name: 'Shayan Designs',
    brief: 'A high-end, professional portfolio website built for a creative designer. Focus on smooth animations, clean typography, and minimalist UI.',
    tags: ['Next.js', 'Framer Motion', 'Tailwind CSS', 'Nodemailer'],
    year: '2025',
    url: 'https://shayandesigns.com/',
  },
  {
    id: 'project-platteros',
    name: 'Platteros',
    brief: 'SaaS-based Restaurant Management System. Enhanced with advanced AI integration for intelligent automation, predictive sales tracking, and table management.',
    tags: ['Next.js', 'AI Integration', 'Node.js', 'PostgreSQL', 'Stripe'],
    year: '2025',
    url: 'https://platteros.com/',
  },
  {
    id: 'project-biznex',
    name: 'Business Management',
    brief: 'A comprehensive SaaS solution for hybrid online and offline business operations. Manages inventory, finances, and team workflows seamlessly.',
    tags: ['React JS', 'Express', 'Node JS', 'PostgreSQL', 'Electron JS'],
    year: '2025',
    url: '#',
  },
  {
    id: 'project-careerhelpp',
    name: 'CareerHelpp Portal',
    brief: 'An advanced student management system designed to track applications, university placements, and education timelines in real-time.',
    tags: ['Next JS', 'Tailwind CSS', 'PostgreSQL', 'Prisma', 'NextAuth'],
    year: '2025',
    url: 'https://careerhelpp-website.vercel.app/',
  },
];

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M2 12L12 2M12 2H4M12 2V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export default function Projects() {
  return (
    <section id="projects">
      <ScrollReveal>
        <div className="projects-eyebrow">
          <span className="section-eyebrow" style={{ paddingTop: '8px' }}>03</span>
          <h2 className="projects-title">
            Recent<br /><em>Work</em>
          </h2>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={80}>
        <div className="projects-grid" aria-label="Project showcase">
          {PROJECTS.map((p) => (
            <a 
              key={p.id} 
              href={p.url} 
              target={p.url.startsWith('http') ? "_blank" : "_self"}
              rel="noopener noreferrer"
              style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
            >
              <TiltCard className="project-card" intensity={6}>
                <div className="project-card-top">
                  <div className="project-tags" aria-label="Technologies">
                    {p.tags.map((t) => (
                      <span className="project-tag" key={t}>{t}</span>
                    ))}
                  </div>
                  <div className="project-arrow" aria-hidden="true">
                    <ArrowIcon />
                  </div>
                </div>
                <div className="project-body">
                  <h3 className="project-name">{p.name}</h3>
                  <p className="project-brief">{p.brief}</p>
                  <div className="project-year">
                    <time dateTime={p.year}>{p.year}</time>
                  </div>
                </div>
              </TiltCard>
            </a>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
