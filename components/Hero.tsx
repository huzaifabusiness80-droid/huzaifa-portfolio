import Image from 'next/image';

export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-layout">
        <div className="hero-content">
          <p className="hero-kicker">Available For Project</p>
          <h1 className="hero-heading">
            I build <span>beautiful</span> websites that help brands grow.
          </h1>
          <p className="hero-subtext">
            Simple design, fast performance, and user-friendly experiences for
            real business results.
          </p>
          <div className="hero-micro-points" aria-label="Key highlights">
            <span>Fast delivery</span>
            <span>Responsive by default</span>
            <span>SEO friendly build</span>
          </div>
          <div className="hero-actions">
            <a href="#projects" className="hero-primary-btn">View Projects</a>
            <a href="#contact" className="hero-secondary-btn">Let&apos;s Talk</a>
          </div>
        </div>

        <div className="hero-photo-wrap" aria-label="Profile image">
          <div className="hero-photo-frame">
            <Image
              src="/Gemini_Generated_Image_szua74szua74szua (1).png"
              alt="Muhammad Huzaifa professional portrait"
              width={640}
              height={640}
              priority
              className="hero-photo"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
