import { useEffect } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import { X, ExternalLink, Sparkles, AlertCircle } from "lucide-react";
import { Github } from "./SocialIcons";
import sktchLogo from "../assets/sktch.ai.png";
import auraLogo from "../assets/aura_logo.png";

const modalThemes = {
  "sktch-ai": {
    glowGradient: "from-[#6366f1] to-violet-500",
    badgeStyles: "bg-indigo-50 dark:bg-[#6366f1]/10 text-indigo-750 dark:text-indigo-400 border border-indigo-150 dark:border-white/[0.02]",
    subtitleColor: "text-[#6366f1] dark:text-indigo-400",
    btnLive: "bg-slate-900 hover:bg-slate-800 text-white dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200",
    impactBox: "bg-[#6366f1]/5 dark:bg-[#6366f1]/[0.02] border-[#6366f1]/10 dark:border-[#6366f1]/10",
    impactTitle: "text-[#6366f1] dark:text-indigo-400",
    tagHover: "hover:border-[#6366f1]/30 dark:hover:border-[#6366f1]/30",
    highlightNum: "text-[#6366f1] dark:text-indigo-400",
    highlightBorder: "hover:border-[#6366f1]/20 dark:hover:border-[#6366f1]/20",
    highlightTitleHover: "group-hover:text-[#6366f1] dark:group-hover:text-[#6366f1]",
    modalBg: "bg-[#f8fafc] dark:bg-[#0c0f17]",
    textColor: "text-[#1e293b] dark:text-[#f1f5f9]",
    overviewHeading: "text-[#1e293b] dark:text-white",
  },
  "aura": {
    glowGradient: "from-[#81ee4e] to-[#D4B86A]", // Lime green to Gold (from actual Aura config)
    badgeStyles: "bg-[#81ee4e]/5 dark:bg-[#81ee4e]/10 text-emerald-800 dark:text-[#81ee4e] border border-[#81ee4e]/15 dark:border-white/[0.02]",
    subtitleColor: "text-emerald-700 dark:text-[#81ee4e]",
    btnLive: "bg-slate-900 hover:bg-slate-800 text-white dark:bg-[#81ee4e] dark:text-slate-950 dark:hover:bg-[#D4B86A]",
    impactBox: "bg-[#D4B86A]/5 dark:bg-[#D4B86A]/[0.02] border-[#D4B86A]/10 dark:border-[#D4B86A]/10", // gold accent-muted/hover box
    impactTitle: "text-emerald-700 dark:text-[#81ee4e]",
    tagHover: "hover:border-[#81ee4e]/30 dark:hover:border-[#81ee4e]/30",
    highlightNum: "text-emerald-700 dark:text-[#81ee4e]",
    highlightBorder: "hover:border-[#81ee4e]/20 dark:hover:border-[#81ee4e]/20",
    highlightTitleHover: "group-hover:text-emerald-700 dark:group-hover:text-[#81ee4e]",
    modalBg: "bg-white dark:bg-[#0a0a0a]", // Aura bg-primary #0a0a0a
    textColor: "text-slate-800 dark:text-[#f5f0eb]", // Aura text-primary #f5f0eb
    overviewHeading: "text-slate-800 dark:text-[#f5f0eb]",
  }
};

export default function ProjectModal({ project, onClose }) {
  // Prevent background scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  if (!project) return null;

  const theme = modalThemes[project.id] || modalThemes["sktch-ai"];

  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 overflow-y-auto">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-[#020204]/80 dark:bg-[#020204]/90 backdrop-blur-md"
      />

      {/* Modal Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.98, y: 10 }}
        transition={{ type: "spring", stiffness: 150, damping: 22 }}
        className={`relative w-full max-w-4xl ${theme.modalBg} rounded-2xl border border-slate-200 dark:border-white/[0.05] shadow-2xl overflow-hidden z-10 my-8 text-left`}
      >
        {/* Glow headers */}
        <div className={`absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r ${theme.glowGradient}`} />
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl bg-slate-50 dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 border border-slate-200 dark:border-white/5 text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white transition-all duration-300 z-20 cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Content */}
        <div className={`p-6 md:p-8 max-h-[85vh] overflow-y-auto space-y-6 ${theme.textColor}`}>
          {/* Header */}
          <div className="flex items-start gap-4 pr-12">
            {project.id === "sktch-ai" && (
              <img
                src={sktchLogo}
                alt="SKTCH.AI Logo"
                className="w-12 h-12 md:w-14 md:h-14 rounded-2xl object-contain border border-slate-200 dark:border-white/15 p-1.5 bg-slate-50/95 dark:bg-white/90 flex-shrink-0 shadow-sm"
              />
            )}
            {project.id === "aura" && (
              <img
                src={auraLogo}
                alt="AURA Logo"
                className="w-12 h-12 md:w-14 md:h-14 rounded-2xl object-contain border border-slate-200 dark:border-white/15 p-1.5 bg-slate-50/95 dark:bg-white/90 flex-shrink-0 shadow-sm"
              />
            )}
            <div className="space-y-2">
              {/* <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono font-bold ${theme.badgeStyles}`}>
                <Sparkles className="w-3 h-3" />
                Featured Personal Project
              </span> */}
              <h3 className={`text-xl md:text-3xl font-extrabold ${theme.overviewHeading} m-0 tracking-tight leading-tight`}>
                {project.title}
              </h3>
              <p className={`text-xs md:text-sm font-mono font-semibold ${theme.subtitleColor}`}>
                {project.subtitle}
              </p>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`px-4 py-2.5 text-xs font-bold uppercase tracking-wider rounded-xl transition-all duration-300 flex items-center gap-1.5 shadow-sm ${theme.btnLive}`}
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Visit Live Site
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 text-xs font-bold uppercase tracking-wider bg-slate-50 dark:bg-white/5 text-slate-700 dark:text-white border border-slate-200 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-white/10 rounded-xl transition-all duration-300 flex items-center gap-1.5"
            >
              <Github className="w-3.5 h-3.5" />
              Source Code
            </a>
          </div>

          {/* Description & Impact */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-5 border-t border-slate-200 dark:border-white/5">
            <div className="lg:col-span-2 space-y-4">
              <h4 className={`text-xs font-bold ${theme.overviewHeading} uppercase tracking-wider`}>Overview</h4>
              <p className="text-xs md:text-sm leading-relaxed m-0 opacity-90">
                {project.description}
              </p>
              
              <div className={`p-4 rounded-xl space-y-2 border ${theme.impactBox}`}>
                <h5 className={`text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5 ${theme.impactTitle}`}>
                  <AlertCircle className="w-3.5 h-3.5" />
                  Key Impact
                </h5>
                <p className="text-xs leading-relaxed m-0 opacity-90">
                  {project.impact}
                </p>
              </div>
            </div>

            {/* Tech Stack Side Card */}
            <div className="space-y-4">
              <h4 className={`text-xs font-bold ${theme.overviewHeading} uppercase tracking-wider`}>Technology Stack</h4>
              <div className="flex flex-wrap gap-1.5">
                {project.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className={`px-2.5 py-1 text-xs bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5 rounded-lg transition-colors ${theme.tagHover}`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Technical Breakdown Highlights */}
          <div className="space-y-6 pt-6 border-t border-slate-200 dark:border-white/5">
            <h4 className={`text-xs font-bold ${theme.overviewHeading} uppercase tracking-wider`}>
              Engineering Deep-Dive
            </h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.highlights.map((highlight, index) => (
                <div
                  key={index}
                  className={`p-5 rounded-xl bg-slate-50 dark:bg-white/[0.01] border border-slate-200 dark:border-white/[0.03] transition-all duration-300 space-y-2 group ${theme.highlightBorder}`}
                >
                  <span className={`inline-block text-[9px] font-bold font-mono ${theme.highlightNum}`}>
                    HIGHLIGHT 0{index + 1}
                  </span>
                  <h5 className={`text-sm font-bold transition-colors ${theme.overviewHeading} ${theme.highlightTitleHover}`}>
                    {highlight.title}
                  </h5>
                  <p className="text-xs leading-relaxed m-0 opacity-80">
                    {highlight.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>,
    document.body
  );
}
