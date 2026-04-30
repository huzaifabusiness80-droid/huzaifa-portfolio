import Cursor from '@/components/Cursor';
import Loader from '@/components/Loader';
import Navbar from '@/components/Navbar';
import ScrollProgress from '@/components/ScrollProgress';
import Hero from '@/components/Hero';
import AboutIntro from '@/components/AboutIntro';
import Marquee from '@/components/Marquee';
import About from '@/components/About';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import CtaBanner from '@/components/CtaBanner';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <>


      {/* Client-only UI */}
      <ScrollProgress />
      <Cursor />
      <Loader />
      <Navbar />

      <main>
        <Hero />
        <AboutIntro />
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
