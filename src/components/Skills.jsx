import { useState } from "react";
import { motion } from "framer-motion";
import { Cpu, Code, Database, Eye, Terminal, Workflow } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function Skills() {
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.98, y: 15 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: "spring", stiffness: 80, damping: 15 },
    },
  };

  // Category meta with unified Indigo-Violet design system
  const categoryMeta = {
    "Languages": { icon: Code },
    "Frontend & UI": { icon: Eye },
    "Backend & Runtime": { icon: Terminal },
    "Database & Cloud": { icon: Database },
    "AI & Integrations": { icon: Cpu },
    "Tools & DevOps": { icon: Workflow },
  };

  return (
    <section id="skills" className="py-20 md:py-28 relative px-4 md:px-8 max-w-6xl mx-auto bg-transparent">
      {/* Background Decorative Blur */}
      <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-indigo-500 rounded-full glow-orb animate-pulse-slow pointer-events-none opacity-5 dark:opacity-10" />

      {/* Section Header */}
      <div className="text-center space-y-4 mb-16 flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white m-0 tracking-tight">
          Skills & <span className="text-gradient-primary">Technologies</span>
        </h2>
        <div className="h-1 w-16 bg-indigo-600 dark:bg-indigo-500 rounded-full" />
        <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base max-w-lg">
          A structured representation of my technology stack, tools, and technical proficiency.
        </p>
      </div>

      {/* Skills Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left relative z-10"
      >
        {portfolioData.skills.map((categoryGroup, index) => {
          const meta = categoryMeta[categoryGroup.category] || { icon: Code };
          const Icon = meta.icon;

          return (
            <motion.div
              key={index}
              variants={cardVariants}
              className="p-6 rounded-2xl glass-card relative overflow-hidden group hover:border-indigo-500/20 transition-all duration-300"
              onMouseEnter={() => setHoveredCategory(categoryGroup.category)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              {/* Corner Ambient Glow */}
              <div className="absolute -top-12 -right-12 w-28 h-28 bg-indigo-500/5 rounded-full blur-xl group-hover:bg-indigo-500/10 transition-all duration-500" />

              {/* Title & Icon */}
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200/50 dark:border-white/10 text-indigo-600 dark:text-indigo-400">
                  <Icon className="w-4 h-4" />
                </div>
                <h3 className="text-base font-bold text-slate-800 dark:text-white m-0">
                  {categoryGroup.category}
                </h3>
              </div>

              {/* Skill Bars */}
              <div className="space-y-4">
                {categoryGroup.items.map((skill, sIndex) => (
                  <div key={sIndex} className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs font-semibold">
                      <span className="text-slate-650 dark:text-slate-350 font-medium">{skill.name}</span>
                      <span className="text-slate-400 dark:text-slate-500 font-mono text-[10px]">{skill.level}%</span>
                    </div>
                    {/* Progress Bar Container */}
                    <div className="h-1.5 w-full bg-slate-200 dark:bg-slate-900 rounded-full overflow-hidden border border-slate-300/[0.05] dark:border-white/[0.02]">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-violet-500"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
