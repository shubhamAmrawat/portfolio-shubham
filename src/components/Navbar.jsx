import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, User, Cpu, Briefcase, FolderGit2, Award, Sun, Moon, Blocks } from "lucide-react";
import profilePic from "../assets/profile_pic.png";

const navItems = [
  { label: "About", href: "#about", icon: User },
  { label: "Skills", href: "#skills", icon: Blocks },
  { label: "Experience", href: "#experience", icon: Briefcase },
  { label: "Projects", href: "#projects", icon: FolderGit2 },
  { label: "Certifications", href: "#certifications", icon: Award },
];

export default function Navbar({ theme, toggleTheme }) {
  const [activeSection, setActiveSection] = useState("about");
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
        <div className="w-full max-w-6xl bg-white/70 dark:bg-black/30 backdrop-blur-lg rounded-2xl flex items-center justify-between px-6 py-3 border border-slate-200/50 dark:border-white/[0.04] relative overflow-hidden shadow-sm dark:shadow-none">
          {/* Scroll progress bar */}
          <div
            className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-indigo-500 to-violet-500 transition-all duration-75"
            style={{ width: `${scrollProgress * 100}%` }}
          />

          {/* Logo / Personal Brand + Avatar */}
          <a href="#home" className="flex items-center gap-3 group">
            <img
              src={profilePic}
              alt="Shubham Amrawat Profile"
              className="w-7 h-7 rounded-full border border-indigo-500/20 object-cover shadow-sm group-hover:scale-105 transition-transform duration-300"
            />
            <span className="text-base md:text-lg font-bold tracking-tight text-slate-800 dark:text-white flex items-center gap-1">
              <span className="text-indigo-600 dark:text-indigo-400 font-mono font-extrabold">&lt;</span>
              Shubham.A
              <span className="text-indigo-600 dark:text-indigo-400 font-mono font-extrabold">/&gt;</span>
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
                  className={`relative px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-300 flex items-center gap-2 ${
                    isActive
                      ? "text-indigo-600 dark:text-white"
                      : "text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNavBackground"
                      className="absolute inset-0 bg-slate-100 dark:bg-white/[0.03] rounded-xl border border-slate-200/50 dark:border-white/[0.05]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <Icon className="w-3.5 h-3.5 opacity-70 relative z-10" />
                  <span className="relative z-10">{item.label}</span>
                </a>
              );
            })}
          </nav>

          {/* Theme Switcher & Contact CTA Desktop */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-slate-50 dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/[0.08] border border-slate-200/50 dark:border-white/10 text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white transition-all duration-300 cursor-pointer"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
            </button>

            <a
              href="#contact"
              className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-white bg-indigo-600 hover:bg-indigo-500 rounded-xl transition-all duration-300 shadow-md shadow-indigo-900/10 dark:shadow-none"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Interactions (Theme Toggle + Menu Toggle) */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200/50 dark:border-white/10 text-slate-500 dark:text-slate-400 transition-colors"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? <Sun className="w-4.5 h-4.5" /> : <Moon className="w-4.5 h-4.5" />}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white transition-colors"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
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
            className="fixed top-20 inset-x-4 z-40 lg:hidden bg-white/95 dark:bg-[#06070c]/95 backdrop-blur-lg rounded-2xl p-6 border border-slate-200/80 dark:border-white/5 shadow-2xl max-h-[85vh] overflow-y-auto"
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
                        ? "bg-indigo-600/5 dark:bg-indigo-600/10 text-indigo-600 dark:text-white border border-indigo-500/10 dark:border-indigo-500/20"
                        : "text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-50 dark:hover:bg-white/5"
                    }`}
                  >
                    <Icon className="w-4 h-4 text-indigo-500 dark:text-indigo-400" />
                    <span className="font-semibold text-xs uppercase tracking-wider">{item.label}</span>
                  </a>
                );
              })}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="mt-2 w-full py-3 text-center font-bold text-xs uppercase tracking-wider text-white bg-indigo-600 hover:bg-indigo-500 rounded-xl transition-all duration-300 shadow-lg shadow-indigo-950/20"
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
