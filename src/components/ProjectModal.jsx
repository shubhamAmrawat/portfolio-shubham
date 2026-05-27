import { useEffect } from "react";
import { motion } from "framer-motion";
import { X, ExternalLink, Sparkles, AlertCircle } from "lucide-react";
import { Github } from "./SocialIcons";

export default function ProjectModal({ project, onClose }) {
  // Prevent background scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 overflow-y-auto">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-[#04050a]/90 backdrop-blur-md"
      />

      {/* Modal Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
        className="relative w-full max-w-4xl glass-card rounded-2xl border border-white/10 shadow-2xl overflow-hidden z-10 my-8 text-left"
      >
        {/* Glow headers */}
        <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-indigo-500 via-cyan-500 to-emerald-500" />
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 text-slate-400 hover:text-white transition-all duration-300 z-20"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Content */}
        <div className="p-6 md:p-8 max-h-[85vh] overflow-y-auto space-y-6">
          {/* Header */}
          <div className="space-y-2 pr-12">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-mono font-bold">
              <Sparkles className="w-3 h-3" />
              Featured Personal Project
            </span>
            <h3 className="text-2xl md:text-4xl font-extrabold text-white m-0 tracking-tight">
              {project.title}
            </h3>
            <p className="text-sm md:text-base text-cyan-400 font-mono font-semibold">
              {project.subtitle}
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-xs font-semibold bg-white text-slate-950 rounded-xl hover:bg-slate-200 transition-all duration-300 flex items-center gap-1.5"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Visit Live Site
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-xs font-semibold bg-white/5 text-white border border-white/10 hover:bg-white/10 rounded-xl transition-all duration-300 flex items-center gap-1.5"
            >
              <Github className="w-3.5 h-3.5" />
              Source Code
            </a>
          </div>

          {/* Description & Impact */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-4 border-t border-white/5">
            <div className="lg:col-span-2 space-y-4">
              <h4 className="text-base font-bold text-white uppercase tracking-wider">Overview</h4>
              <p className="text-sm md:text-base text-slate-300 leading-relaxed m-0">
                {project.description}
              </p>
              
              <div className="p-4 rounded-xl bg-cyan-500/[0.03] border border-cyan-500/10 space-y-2">
                <h5 className="text-xs font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
                  <AlertCircle className="w-3.5 h-3.5" />
                  Key Impact
                </h5>
                <p className="text-xs md:text-sm text-slate-300 leading-relaxed m-0">
                  {project.impact}
                </p>
              </div>
            </div>

            {/* Tech Stack Side Card */}
            <div className="space-y-4">
              <h4 className="text-base font-bold text-white uppercase tracking-wider">Technology Stack</h4>
              <div className="flex flex-wrap gap-1.5">
                {project.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 text-xs bg-white/5 border border-white/5 text-slate-300 rounded-lg hover:border-indigo-500/30 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Technical Breakdown Highlights */}
          <div className="space-y-6 pt-6 border-t border-white/5">
            <h4 className="text-base font-bold text-white uppercase tracking-wider">
              Engineering Deep-Dive
            </h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="p-5 rounded-2xl glass-card border border-white/5 hover:border-indigo-500/20 transition-all duration-300 space-y-2 group"
                >
                  <span className="inline-block text-xs font-bold text-indigo-400 font-mono">
                    0{index + 1} / HIGHLIGHT
                  </span>
                  <h5 className="text-sm md:text-base font-bold text-white group-hover:text-indigo-300 transition-colors">
                    {highlight.title}
                  </h5>
                  <p className="text-xs md:text-sm text-slate-400 leading-relaxed m-0">
                    {highlight.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
