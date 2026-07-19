import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Certificates from "@/components/Certificates";
import Contact from "@/components/Contact";
import DeveloperBackground from "@/components/DeveloperBackground";

export default function Home() {
  return (
    <div className="relative isolate min-h-screen">
      <DeveloperBackground />
      <div className="relative z-10 flex min-h-screen flex-col">
        <Nav />
        <main className="flex-1">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Certificates />
          <Contact />
        </main>
      </div>
    </div>
  );
}
