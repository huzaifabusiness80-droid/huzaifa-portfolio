'use client';

const ITEMS = [
  'Full Stack Development',
  'React & Next.js',
  'Node.js & Express',
  'PostgreSQL & MongoDB',
  'REST & GraphQL APIs',
  'Cloud & DevOps',
  'UI/UX Design Systems',
  'Performance Optimization',
];

export default function Marquee() {
  return (
    <section className="bg-bg border-y border-border py-6 overflow-hidden relative select-none">
      <div className="flex animate-marquee whitespace-nowrap">
        {/* Repeat twice for seamless loop */}
        <div className="flex items-center gap-12 px-6">
          {ITEMS.map((item, i) => (
            <div key={i} className="flex items-center gap-4 text-text/30 text-sm font-display font-bold uppercase tracking-[0.2em]">
              <span className="text-accent">✦</span>
              {item}
            </div>
          ))}
        </div>
        <div className="flex items-center gap-12 px-6" aria-hidden="true">
          {ITEMS.map((item, i) => (
            <div key={i} className="flex items-center gap-4 text-text/30 text-sm font-display font-bold uppercase tracking-[0.2em]">
              <span className="text-accent">✦</span>
              {item}
            </div>
          ))}
        </div>
      </div>
      
      {/* Fade masks */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-bg to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-bg to-transparent z-10 pointer-events-none" />
    </section>
  );
}
