import Header from '@/components/header';
import Hero from '@/components/hero';
import About from '@/components/about';
import Projects from '@/components/projects';
import Skills from '@/components/skills';
import Contact from '@/components/contact';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
