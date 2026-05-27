import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, Building2, Calendar, MapPin, ChevronRight, Terminal, Award } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function Experience() {
  const exp = portfolioData.experience[0]; // Active professional experience
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 15 } },
  };

  return (
    <section id="experience" className="py-20 md:py-28 relative px-4 md:px-8 max-w-6xl mx-auto">
      {/* Background Glow */}
      <div className="absolute top-[20%] right-[5%] w-[300px] h-[300px] bg-emerald-500 rounded-full glow-orb animate-pulse-slow pointer-events-none" />

      {/* Section Header */}
      <div className="text-center space-y-4 mb-16 flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white m-0">
          Professional <span className="text-gradient-cyan-emerald">Experience</span>
        </h2>
        <div className="h-1 w-20 bg-cyan-500 rounded-full" />
        <p className="text-slate-400 text-sm md:text-base max-w-lg">
          My professional milestones and real-world project contributions.
        </p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start text-left"
      >
        {/* Left Col: Company Metadata & Core Experience */}
        <div className="lg:col-span-5 space-y-6">
          <motion.div
            variants={itemVariants}
            className="p-6 rounded-2xl glass-card border border-white/5 relative overflow-hidden group"
          >
            {/* Timeline icon indicator */}
            <span className="absolute top-6 right-6 p-2 rounded-xl bg-indigo-500/10 text-indigo-400">
              <Briefcase className="w-5 h-5" />
            </span>

            <div className="space-y-4">
              <span className="inline-block px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-mono font-bold">
                {exp.period}
              </span>

              <h3 className="text-xl font-bold text-white m-0 leading-tight">
                {exp.role}
              </h3>

              <div className="space-y-2 text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-cyan-400" />
                  <span className="text-white font-medium">{exp.company}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-slate-500" />
                  <span>{exp.location}</span>
                </div>
              </div>

              <p className="text-sm text-slate-400 leading-relaxed pt-2 border-t border-white/5">
                {exp.description}
              </p>

              {/* Company Highlights List */}
              <ul className="text-xs text-slate-400 space-y-2 list-none p-0 pl-1">
                {exp.bullets.map((bullet, i) => (
                  <li key={i} className="flex gap-2 items-start">
                    <ChevronRight className="w-3.5 h-3.5 text-indigo-400 flex-shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Right Col: Deep Dive key projects */}
        <div className="lg:col-span-7 space-y-6">
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <Terminal className="w-4 h-4 text-cyan-400" />
              Key Production Deliveries
            </h3>

            {/* Project Selectors */}
            <div className="flex gap-2 overflow-x-auto pb-2">
              {exp.projects.map((project, index) => (
                <button
                  key={index}
                  onClick={() => setActiveProjectIndex(index)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-300 border ${
                    activeProjectIndex === index
                      ? "bg-cyan-500/10 text-cyan-400 border-cyan-500/30"
                      : "bg-white/5 text-slate-400 border-white/5 hover:bg-white/10 hover:text-slate-200"
                  }`}
                >
                  {project.name.split(" - ")[0]}
                </button>
              ))}
            </div>

            {/* Project Detail Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProjectIndex}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className="p-6 rounded-2xl glass-card border border-white/5 space-y-4"
              >
                <div>
                  <h4 className="text-base md:text-lg font-bold text-white m-0 leading-tight">
                    {exp.projects[activeProjectIndex].name}
                  </h4>
                  <span className="text-xs text-indigo-400 font-mono font-medium block mt-1">
                    Platform: {exp.projects[activeProjectIndex].platform}
                  </span>
                </div>

                <div className="border-t border-white/5 pt-4">
                  <ul className="space-y-3 list-none p-0">
                    {exp.projects[activeProjectIndex].bullets.map((bullet, bIndex) => (
                      <li key={bIndex} className="text-xs md:text-sm text-slate-300 flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0 mt-2" />
                        <span className="leading-relaxed">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
