import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden px-[var(--section-pad)] py-20 lg:py-32">
      <div className="mx-auto max-w-[var(--section-max)] grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-16 items-center">

        {/* Left Content */}
        <div className="flex flex-col items-start text-left max-w-[900px] order-1">
          <p className="text-[0.72rem] font-semibold tracking-[0.2em] uppercase text-muted mb-6">
            Available For Project
          </p>
          <h1 className="font-display text-[clamp(1.8rem,3.5vw,3.2rem)] font-bold leading-[1.1] tracking-tight uppercase mb-8 text-text">
            Crafting High-End Digital Products that <span className="text-accent">Scale</span> Businesses.
          </h1>
          <p className="max-w-[55ch] text-[clamp(1rem,1.3vw,1.15rem)] leading-[1.6] text-dim mb-10">
            I specialize in engineering fast, scalable, and conversion-focused web solutions that transform your business vision into a market-leading digital reality.
          </p>

          <div className="flex flex-wrap gap-3 mb-12" aria-label="Key highlights">
            <span className="inline-flex items-center text-[0.62rem] font-bold tracking-[0.15em] uppercase text-muted border border-border/50 rounded-full px-4 py-2">
              <span className="w-1 h-1 bg-accent rounded-full mr-2" /> High-Conversion
            </span>
            <span className="inline-flex items-center text-[0.62rem] font-bold tracking-[0.15em] uppercase text-muted border border-border/50 rounded-full px-4 py-2">
              <span className="w-1 h-1 bg-accent rounded-full mr-2" /> Scalable Build
            </span>
            <span className="inline-flex items-center text-[0.62rem] font-bold tracking-[0.15em] uppercase text-muted border border-border/50 rounded-full px-4 py-2">
              <span className="w-1 h-1 bg-accent rounded-full mr-2" /> Fast Delivery
            </span>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link
              href="#projects"
              className="bg-text text-bg text-[0.72rem] font-bold tracking-[0.15em] uppercase rounded-full px-8 py-4 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg"
            >
              View Projects
            </Link>
            <Link
              href="#contact"
              className="text-text border border-border-med text-[0.72rem] font-bold tracking-[0.15em] uppercase rounded-full px-8 py-4 hover:border-text transition-all"
            >
              Let&apos;s Talk
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full max-w-[520px] justify-self-end order-2 mt-8 lg:mt-0">
          <div className="relative group overflow-hidden bg-bg3 border border-border/40 rounded-[2rem] aspect-[4/5] lg:aspect-square">
            <Image
              src="/Gemini_Generated_Image_szua74szua74szua (1).png"
              alt="Muhammad Huzaifa professional portrait"
              width={800}
              height={800}
              priority
              className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg/40 to-transparent opacity-60 group-hover:opacity-20 transition-opacity duration-700" />
          </div>
        </div>

      </div>
    </section>
  );
}
