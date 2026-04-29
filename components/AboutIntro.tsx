export default function AboutIntro() {
  return (
    <section id="about" className="about-intro" aria-label="About section">
      <div className="about-intro-inner">
        <div className="about-intro-left">
          <p className="about-intro-kicker">About Me</p>
          <h2 className="about-intro-title">
            Design clarity, technical quality, and business-focused execution.
          </h2>
          <p className="about-intro-text">
            I build websites that look polished, load fast, and feel intuitive.
            Every decision is made to improve trust, usability, and conversion.
          </p>
          <div className="about-intro-actions">
            <a href="#strategy" className="about-intro-link">See full approach</a>
            <a href="#contact" className="about-intro-cta">Start a project</a>
          </div>
        </div>

        <div className="about-intro-right" aria-label="Quick highlights">
          <div className="about-intro-metric">
            <p className="about-intro-metric-value">3+</p>
            <p className="about-intro-metric-label">Years Building Web Products</p>
          </div>
          <div className="about-intro-metric">
            <p className="about-intro-metric-value">100%</p>
            <p className="about-intro-metric-label">Responsive & Performance Mindset</p>
          </div>
          <div className="about-intro-metric">
            <p className="about-intro-metric-value">24/7</p>
            <p className="about-intro-metric-label">Focused on Quality Delivery</p>
          </div>
        </div>
      </div>
    </section>
  );
}
