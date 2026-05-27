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
    <footer className="border-t border-white/5 bg-[#05060b]/80 relative z-10 py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Logo / Brand */}
        <div className="flex items-center gap-1.5 text-lg font-bold text-white">
          <span className="text-indigo-400 font-mono">&lt;</span>
          Shubham.A
          <span className="text-indigo-400 font-mono">/&gt;</span>
        </div>

        {/* Copyright */}
        <p className="text-xs md:text-sm text-slate-500 text-center m-0">
          &copy; {currentYear} {portfolioData.personal.name}. All rights reserved. Crafted with React & Tailwind CSS.
        </p>

        {/* Socials & Top Toggle */}
        <div className="flex items-center gap-4">
          <div className="flex gap-2">
            <a
              href={portfolioData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-white/5 text-slate-400 hover:text-white rounded-lg transition-colors border border-transparent hover:border-white/5"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={portfolioData.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-white/5 text-slate-400 hover:text-white rounded-lg transition-colors border border-transparent hover:border-white/5"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${portfolioData.personal.email}`}
              className="p-2 hover:bg-white/5 text-slate-400 hover:text-white rounded-lg transition-colors border border-transparent hover:border-white/5"
              aria-label="Email Me"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Scroll to Top */}
          <button
            onClick={handleScrollToTop}
            className="p-2.5 bg-white/5 hover:bg-indigo-600 border border-white/5 text-slate-400 hover:text-white rounded-xl transition-all duration-300 shadow-md cursor-pointer"
            aria-label="Back to top"
          >
            <ChevronUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
