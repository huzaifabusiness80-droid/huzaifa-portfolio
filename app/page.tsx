import Cursor from '@/components/Cursor';
import Loader from '@/components/Loader';
import Navbar from '@/components/Navbar';
import ScrollProgress from '@/components/ScrollProgress';
import Hero from '@/components/Hero';
import AboutIntro from '@/components/AboutIntro';
import Projects from '@/components/Projects';
import Services from '@/components/Services';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
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
        <Projects />
        <Services />
        <About />
  
        <Testimonials />
      </main>

      <Footer />
    </>
  );
}
