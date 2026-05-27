import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ArrowUpRight, Cpu } from "lucide-react";
import { Github } from "./SocialIcons";
import { portfolioData } from "../data/portfolioData";
import ProjectModal from "./ProjectModal";

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
    <section id="projects" className="py-20 md:py-28 relative px-4 md:px-8 max-w-6xl mx-auto">
      {/* Background decoration orbs */}
      <div className="absolute bottom-[10%] left-[5%] w-[250px] h-[250px] bg-indigo-500 rounded-full glow-orb animate-float-medium pointer-events-none" />

      {/* Section Header */}
      <div className="text-center space-y-4 mb-16 flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white m-0">
          Personal <span className="text-gradient-purple-cyan">Projects</span>
        </h2>
        <div className="h-1 w-20 bg-indigo-500 rounded-full" />
        <p className="text-slate-400 text-sm md:text-base max-w-lg">
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
        {portfolioData.projects.map((project) => (
          <motion.div
            key={project.id}
            variants={cardVariants}
            className="p-6 rounded-3xl glass-card border border-white/5 relative overflow-hidden group flex flex-col justify-between hover:border-indigo-500/30 transition-all duration-300 shadow-xl"
          >
            {/* Top decorative line indicator */}
            <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-indigo-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div className="space-y-4">
              {/* Card Header */}
              <div className="flex justify-between items-start">
                <span className="p-2 rounded-xl bg-white/5 border border-white/10 text-indigo-400">
                  <Cpu className="w-5 h-5" />
                </span>
                
                {/* Outbound Links */}
                <div className="flex gap-2 opacity-60 group-hover:opacity-100 transition-opacity">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 hover:bg-white/5 rounded-lg text-slate-400 hover:text-white transition-colors"
                    aria-label="Source code"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 hover:bg-white/5 rounded-lg text-slate-400 hover:text-white transition-colors"
                    aria-label="Live demo"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Title & Subtitle */}
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white m-0 group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>
                <span className="text-xs text-slate-400 font-mono font-medium block mt-1">
                  {project.subtitle}
                </span>
              </div>

              {/* Short Description */}
              <p className="text-xs md:text-sm text-slate-300 leading-relaxed m-0">
                {project.description}
              </p>

              {/* Stack Preview (first 5 tags) */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {project.techStack.slice(0, 5).map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 text-[10px] md:text-xs bg-indigo-500/10 text-indigo-300 rounded-md font-mono"
                  >
                    {tech}
                  </span>
                ))}
                {project.techStack.length > 5 && (
                  <span className="px-2 py-0.5 text-[10px] md:text-xs bg-slate-800 text-slate-400 rounded-md font-mono">
                    +{project.techStack.length - 5} more
                  </span>
                )}
              </div>
            </div>

            {/* Deep Dive Action Button */}
            <div className="pt-6 mt-4 border-t border-white/5 flex items-center justify-between">
              <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider">
                Full-Stack System
              </span>
              <button
                onClick={() => setSelectedProject(project)}
                className="text-xs md:text-sm font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 group/btn"
              >
                Deep Engineering Dive
                <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </motion.div>
        ))}
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
