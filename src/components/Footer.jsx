import { ChevronUp, Mail } from "lucide-react";
import { Github, Linkedin } from "./SocialIcons";
import { portfolioData } from "../data/portfolioData";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-slate-200 dark:border-white/[0.04] bg-slate-100/70 dark:bg-black/20 relative z-10 py-10 px-4 md:px-8 transition-colors duration-300">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Logo / Brand */}
        <div className="flex items-center gap-1.5 text-base font-bold text-slate-800 dark:text-white select-none">
          <span className="text-indigo-600 dark:text-indigo-400 font-mono font-extrabold">&lt;</span>
          Shubham.A
          <span className="text-indigo-600 dark:text-indigo-400 font-mono font-extrabold">/&gt;</span>
        </div>

        {/* Copyright */}
        <p className="text-xs text-slate-500 text-center m-0 font-medium">
          &copy; {currentYear} {portfolioData.personal.name}. All rights reserved. Crafted with React & Tailwind CSS.
        </p>

        {/* Socials & Top Toggle */}
        <div className="flex items-center gap-4">
          <div className="flex gap-1.5">
            <a
              href={portfolioData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-slate-200/50 dark:hover:bg-white/5 text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white rounded-lg transition-colors border border-transparent"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={portfolioData.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-slate-200/50 dark:hover:bg-white/5 text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white rounded-lg transition-colors border border-transparent"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${portfolioData.personal.email}`}
              className="p-2 hover:bg-slate-200/50 dark:hover:bg-white/5 text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white rounded-lg transition-colors border border-transparent"
              aria-label="Email Me"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Scroll to Top */}
          <button
            onClick={handleScrollToTop}
            className="p-2 rounded-xl bg-slate-200/50 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-indigo-600 border border-slate-300/40 dark:border-white/5 text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-white rounded-xl transition-all duration-300 shadow-sm cursor-pointer"
            aria-label="Back to top"
          >
            <ChevronUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
