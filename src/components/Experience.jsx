import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, Building2, MapPin, ChevronRight, Terminal } from "lucide-react";
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 15 } },
  };

  return (
    <section id="experience" className="py-20 md:py-28 relative px-4 md:px-8 max-w-6xl mx-auto bg-transparent">
      {/* Background Glow */}
      <div className="absolute top-[20%] right-[5%] w-[300px] h-[300px] bg-indigo-500 rounded-full glow-orb animate-pulse-slow pointer-events-none opacity-5 dark:opacity-10" />

      {/* Section Header */}
      <div className="text-center space-y-4 mb-16 flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white m-0 tracking-tight">
          Professional <span className="text-gradient-primary">Experience</span>
        </h2>
        <div className="h-1 w-16 bg-indigo-600 dark:bg-indigo-500 rounded-full" />
        <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base max-w-lg">
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
            className="p-6 rounded-2xl glass-card relative overflow-hidden group"
          >
            {/* Timeline icon indicator */}
            <span className="absolute top-6 right-6 p-2 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
              <Briefcase className="w-5 h-5" />
            </span>

            <div className="space-y-4">
              <span className="inline-block px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-500/10 text-indigo-650 dark:text-indigo-400 text-xs font-mono font-bold border border-indigo-100/50 dark:border-none">
                {exp.period}
              </span>

              <h3 className="text-lg font-bold text-slate-800 dark:text-white m-0 leading-tight">
                {exp.role}
              </h3>

              <div className="space-y-2 text-xs md:text-sm text-slate-500 dark:text-slate-400">
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                  <span className="text-slate-800 dark:text-white font-semibold">{exp.company}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-slate-400" />
                  <span>{exp.location}</span>
                </div>
              </div>

              <p className="text-xs md:text-sm text-slate-650 dark:text-slate-400 leading-relaxed pt-2 border-t border-slate-200 dark:border-white/5">
                {exp.description}
              </p>

              {/* Company Highlights List */}
              <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-2.5 list-none p-0 pl-1">
                {exp.bullets.map((bullet, i) => (
                  <li key={i} className="flex gap-2 items-start">
                    <ChevronRight className="w-3.5 h-3.5 text-indigo-500 dark:text-indigo-400 flex-shrink-0 mt-0.5" />
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
            <h3 className="text-base font-bold text-slate-800 dark:text-white uppercase tracking-wider flex items-center gap-2">
              <Terminal className="w-4 h-4 text-indigo-650 dark:text-indigo-400" />
              Key Production Deliveries
            </h3>

            {/* Project Selectors */}
            <div className="flex gap-2 overflow-x-auto pb-2">
              {exp.projects.map((project, index) => (
                <button
                  key={index}
                  onClick={() => setActiveProjectIndex(index)}
                  className={`px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-wider whitespace-nowrap transition-all duration-300 border ${
                    activeProjectIndex === index
                      ? "bg-indigo-600 text-white dark:bg-indigo-500/10 dark:text-indigo-400 border-indigo-600 dark:border-indigo-500/30 shadow-md shadow-indigo-600/10 dark:shadow-none"
                      : "bg-slate-200/50 dark:bg-white/5 text-slate-500 dark:text-slate-400 border-slate-300/30 dark:border-white/5 hover:bg-slate-200 dark:hover:bg-white/10 hover:text-slate-700 dark:hover:text-slate-200 cursor-pointer"
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
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="p-6 rounded-2xl glass-card space-y-4"
              >
                <div>
                  <h4 className="text-sm md:text-base font-bold text-slate-800 dark:text-white m-0 leading-tight">
                    {exp.projects[activeProjectIndex].name}
                  </h4>
                  <span className="text-[10px] text-indigo-600 dark:text-indigo-400 font-mono font-bold block mt-1">
                    Platform: {exp.projects[activeProjectIndex].platform}
                  </span>
                </div>

                <div className="border-t border-slate-200 dark:border-white/5 pt-4">
                  <ul className="space-y-3.5 list-none p-0">
                    {exp.projects[activeProjectIndex].bullets.map((bullet, bIndex) => (
                      <li key={bIndex} className="text-xs md:text-sm text-slate-750 dark:text-slate-300 flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 dark:bg-indigo-400 flex-shrink-0 mt-2" />
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
