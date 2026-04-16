import Cursor         from '@/components/Cursor';
import Loader         from '@/components/Loader';
import Navbar         from '@/components/Navbar';
import ScrollProgress from '@/components/ScrollProgress';
import Hero           from '@/components/Hero';
import Marquee        from '@/components/Marquee';
import About          from '@/components/About';
import Services       from '@/components/Services';
import Projects       from '@/components/Projects';
import CtaBanner      from '@/components/CtaBanner';
import Contact        from '@/components/Contact';
import Footer         from '@/components/Footer';

export default function HomePage() {
  return (
    <>
      {/* Fixed layout chrome */}
      <div className="grid-lines" aria-hidden="true" />
      <div className="side-label"  aria-hidden="true">Portfolio</div>

      {/* Client-only UI */}
      <ScrollProgress />
      <Cursor />
      <Loader />
      <Navbar />

      <main>
        <Hero />
        <Marquee />
        <About />
        <Services />
        <Projects />
        <CtaBanner />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
