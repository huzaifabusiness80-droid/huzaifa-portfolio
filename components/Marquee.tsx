const ITEMS = [
  'Full Stack Development', 'React & Next.js', 'Node.js & Express',
  'PostgreSQL & MongoDB', 'REST & GraphQL APIs', 'Cloud & DevOps',
  'UI/UX Design Systems', 'Performance Optimization',
];

const ALL = [...ITEMS, ...ITEMS];

export default function Marquee() {
  return (
    <div className="marquee-wrap" aria-hidden="true">
      <div className="marquee-track">
        {ALL.map((item, i) => (
          <div className="marquee-item" key={i}>
            <span className="marquee-star">✦</span>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
