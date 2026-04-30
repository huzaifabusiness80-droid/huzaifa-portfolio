export default function AboutIntro() {
  return (
    <section id="about" className="about-section" aria-label="About section">
      <div className="about-layout">
        <div className="about-content">
          <span className="section-eyebrow">About</span>
          <h2 className="about-heading">
            Bridging the gap between <span>vision</span> and technical reality.
          </h2>
          <p className="about-subtext">
            I am Muhammad Huzaifa, a results-driven full-stack developer specializing in creating high-performance web applications. My approach combines technical excellence with a deep understanding of business objectives.
          </p>
          <p className="about-subtext">
            I believe that great design is invisible—it just works. I focus on building products that don&apos;t just look good, but solve real-world problems through clean code and intuitive user experiences.
          </p>
        </div>

        <div className="about-capabilities" aria-label="Professional capabilities">
          <div className="capability-item">
            <h4 className="capability-title">Technical Architecture</h4>
            <p className="capability-text">Building resilient, scalable systems that handle high traffic with ease.</p>
          </div>
          <div className="capability-item">
            <h4 className="capability-title">Product Strategy</h4>
            <p className="capability-text">Aligning technical decisions with business goals for maximum impact.</p>
          </div>
          <div className="capability-item">
            <h4 className="capability-title">Experience Design</h4>
            <p className="capability-text">Crafting intuitive interfaces that prioritize user needs and engagement.</p>
          </div>
        </div>
      </div>
    </section>
  );
}


