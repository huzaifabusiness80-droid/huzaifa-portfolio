import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutIntro from '@/components/AboutIntro';
import Services from '@/components/Services';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutIntro />
        <Services />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
