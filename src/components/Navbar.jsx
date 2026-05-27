import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Code, User, Cpu, Briefcase, FolderGit2, Award, Mail } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home", icon: Code },
  { label: "About", href: "#about", icon: User },
  { label: "Skills", href: "#skills", icon: Cpu },
  { label: "Experience", href: "#experience", icon: Briefcase },
  { label: "Projects", href: "#projects", icon: FolderGit2 },
  { label: "Certifications", href: "#certifications", icon: Award },
  { label: "Contact", href: "#contact", icon: Mail },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isOpen, setIsOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress bar
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress(window.scrollY / totalScroll);
      }

      // Check current section
      const sections = navItems.map((item) => item.href.slice(1));
      const scrollPos = window.scrollY + 200; // Offset for better detection

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 inset-x-0 z-50 px-4 py-4 md:py-6 flex justify-center"
      >
        <div className="w-full max-w-6xl glass-card rounded-2xl flex items-center justify-between px-6 py-3 border border-white/5 relative overflow-hidden">
          {/* Scroll progress bar */}
          <div
            className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-indigo-500 via-cyan-500 to-emerald-500 transition-all duration-75"
            style={{ width: `${scrollProgress * 100}%` }}
          />

          {/* Logo / Personal Brand */}
          <a href="#home" className="flex items-center gap-2 group">
            <span className="text-xl font-bold tracking-tight text-white flex items-center gap-1.5">
              <span className="text-indigo-400 font-mono font-extrabold">&lt;</span>
              Shubham.A
              <span className="text-indigo-400 font-mono font-extrabold">/&gt;</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.href.slice(1);
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                    isActive ? "text-white" : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNavBackground"
                      className="absolute inset-0 bg-white/5 rounded-xl border border-white/10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <Icon className="w-4 h-4 opacity-70" />
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Contact CTA Desktop */}
          <div className="hidden lg:block">
            <a
              href="#contact"
              className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-indigo-600/30 border border-indigo-500/50 hover:bg-indigo-600/50 hover:border-indigo-400 rounded-xl transition-all duration-300 shadow-md shadow-indigo-900/20"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-slate-400 hover:text-white transition-colors"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-20 inset-x-4 z-40 lg:hidden glass-card rounded-2xl p-6 border border-white/5 shadow-2xl max-h-[85vh] overflow-y-auto"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.href.slice(1);
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                      isActive
                        ? "bg-indigo-600/20 text-white border border-indigo-500/30"
                        : "text-slate-400 hover:text-slate-200 hover:bg-white/5"
                    }`}
                  >
                    <Icon className="w-5 h-5 text-indigo-400" />
                    <span className="font-medium">{item.label}</span>
                  </a>
                );
              })}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="mt-2 w-full py-3 text-center font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-xl transition-all duration-300 shadow-lg shadow-indigo-950"
              >
                Let's Talk
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
