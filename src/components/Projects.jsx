import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ArrowUpRight, Cpu } from "lucide-react";
import { portfolioData } from "../data/portfolioData";
import { Github } from "./SocialIcons";
import ProjectModal from "./ProjectModal";
import sktchLogo from "../assets/sktch.ai.png";
import auraLogo from "../assets/aura_logo.png";

const projectThemes = {
  "sktch-ai": {
    borderHover: "group-hover:border-[#6366f1]/30 dark:group-hover:border-[#6366f1]/20",
    glowGradient: "from-[#6366f1] to-violet-500",
    iconColor: "text-[#6366f1] dark:text-indigo-400",
    badgeBg: "bg-[#6366f1]/5 dark:bg-[#6366f1]/10 text-indigo-750 dark:text-indigo-300 border border-indigo-100/40 dark:border-white/[0.02]",
    btnText: "text-[#6366f1] hover:text-[#6366f1]/80 dark:text-indigo-400 dark:hover:text-indigo-300",
  },
  "aura": {
    borderHover: "group-hover:border-[#81ee4e]/30 dark:group-hover:border-[#81ee4e]/20",
    glowGradient: "from-[#81ee4e] to-[#D4B86A]", // Lime green to Gold (matches the accent and hover theme colors)
    iconColor: "text-emerald-600 dark:text-[#81ee4e]",
    badgeBg: "bg-[#81ee4e]/5 dark:bg-[#81ee4e]/10 text-emerald-800 dark:text-[#81ee4e] border border-[#81ee4e]/15 dark:border-white/[0.02]",
    btnText: "text-emerald-700 dark:text-[#81ee4e] hover:text-[#D4B86A] dark:hover:text-[#D4B86A]",
  }
};

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 80, damping: 15 },
    },
  };

  return (
    <section id="projects" className="py-20 md:py-28 relative px-4 md:px-8 max-w-6xl mx-auto bg-transparent">
      {/* Background decoration orbs */}
      <div className="absolute bottom-[10%] left-[5%] w-[250px] h-[250px] bg-indigo-500 rounded-full glow-orb animate-float-medium pointer-events-none opacity-5 dark:opacity-10" />

      {/* Section Header */}
      <div className="text-center space-y-4 mb-16 flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white m-0 tracking-tight">
          Personal <span className="text-gradient-purple-cyan">Projects</span>
        </h2>
        <div className="h-1 w-16 bg-indigo-500 rounded-full" />
        <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base max-w-lg">
          Deep-dives into the production-grade platforms and applications I have engineered.
        </p>
      </div>

      {/* Projects Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-left relative z-10"
      >
        {portfolioData.projects.map((project) => {
          const theme = projectThemes[project.id] || projectThemes["sktch-ai"];

          return (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className={`p-6 rounded-2xl glass-card relative overflow-hidden group flex flex-col justify-between hover:border-slate-300/80 transition-all duration-300 shadow-sm dark:shadow-none ${theme.borderHover}`}
            >
              {/* Top decorative line indicator */}
              <div className={`absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r ${theme.glowGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              
              <div className="space-y-4">
                {/* Card Header */}
                <div className="flex justify-between items-start">
                  {project.id === "sktch-ai" ? (
                    <img
                      src={sktchLogo}
                      alt="SKTCH.AI Logo"
                      className="w-10 h-10 rounded-xl object-contain border border-slate-200/60 dark:border-white/15 p-1 bg-slate-50/95 dark:bg-white/90 flex-shrink-0 shadow-sm"
                    />
                  ) : project.id === "aura" ? (
                    <img
                      src={auraLogo}
                      alt="AURA Logo"
                      className="w-10 h-10 rounded-xl object-contain border border-slate-200/60 dark:border-white/15 p-1 bg-slate-50/95 dark:bg-white/90 flex-shrink-0 shadow-sm"
                    />
                  ) : (
                    <span className={`p-2.5 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200/50 dark:border-white/10 ${theme.iconColor}`}>
                      <Cpu className="w-4 h-4" />
                    </span>
                  )}
                  
                  {/* Outbound Links */}
                  <div className="flex gap-2 opacity-65 group-hover:opacity-100 transition-opacity">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 hover:bg-slate-150 dark:hover:bg-white/5 rounded-lg text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white transition-colors"
                      aria-label="Source code"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 hover:bg-slate-150 dark:hover:bg-white/5 rounded-lg text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white transition-colors"
                      aria-label="Live demo"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Title & Subtitle */}
                <div>
                  <h3 className={`text-lg md:text-xl font-bold text-slate-850 dark:text-white m-0 transition-colors leading-snug`}>
                    {project.title}
                  </h3>
                  <span className="text-xs text-slate-500 dark:text-slate-450 font-mono font-medium block mt-1">
                    {project.subtitle}
                  </span>
                </div>

                {/* Short Description */}
                <p className="text-xs md:text-sm text-slate-650 dark:text-slate-350 leading-relaxed m-0">
                  {project.description}
                </p>

                {/* Stack Preview (first 5 tags) */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.techStack.slice(0, 5).map((tech, i) => (
                    <span
                      key={i}
                      className={`px-2.5 py-0.5 text-[10px] rounded-md font-mono ${theme.badgeBg}`}
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 5 && (
                    <span className="px-2 py-0.5 text-[10px] bg-slate-100 dark:bg-white/[0.02] text-slate-500 dark:text-slate-400 border border-slate-200/40 dark:border-white/[0.04] rounded-md font-mono">
                      +{project.techStack.length - 5} more
                    </span>
                  )}
                </div>
              </div>

              {/* Deep Dive Action Button */}
              <div className="pt-6 mt-4 border-t border-slate-200/60 dark:border-white/5 flex items-center justify-between">
                <span className="text-[10px] text-slate-400 dark:text-slate-500 font-bold uppercase tracking-wider">
                  Full-Stack System
                </span>
                <button
                  onClick={() => setSelectedProject(project)}
                  className={`text-xs font-bold flex items-center gap-1 group/btn cursor-pointer ${theme.btnText}`}
                >
                  Deep Engineering Dive
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Expanded Project Modal Details */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
