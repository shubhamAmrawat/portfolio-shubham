import CanvasBackground from "./components/CanvasBackground";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen text-slate-100 overflow-x-hidden bg-[#030408]">
      {/* Interactive Neural Canvas Background */}
      <CanvasBackground />

      {/* Navigation Menu */}
      <Navbar />

      {/* Page Sections */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
      </main>

      {/* Footer Branding */}
      <Footer />
    </div>
  );
}
