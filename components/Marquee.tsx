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
            <div key={i} className="flex items-center gap-6 text-text/10 text-sm font-display font-bold uppercase tracking-[0.3em] transition-colors hover:text-text/20 duration-500">
              <span className="text-accent/40">✦</span>
              {item}
            </div>
          ))}
        </div>
        <div className="flex items-center gap-12 px-6" aria-hidden="true">
          {ITEMS.map((item, i) => (
            <div key={i} className="flex items-center gap-6 text-text/10 text-sm font-display font-bold uppercase tracking-[0.3em] transition-colors hover:text-text/20 duration-500">
              <span className="text-accent/40">✦</span>
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
