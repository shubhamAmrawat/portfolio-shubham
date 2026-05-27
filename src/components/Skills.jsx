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
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: "spring", stiffness: 80, damping: 15 },
    },
  };

  // Maps categories to appropriate icons and color accents
  const categoryMeta = {
    "Languages": {
      icon: Code,
      glowColor: "group-hover:border-indigo-500/40",
      textColor: "text-indigo-400",
      barColor: "bg-indigo-500",
    },
    "Frontend & UI": {
      icon: Eye,
      glowColor: "group-hover:border-cyan-500/40",
      textColor: "text-cyan-400",
      barColor: "bg-cyan-500",
    },
    "Backend & Runtime": {
      icon: Terminal,
      glowColor: "group-hover:border-emerald-500/40",
      textColor: "text-emerald-400",
      barColor: "bg-emerald-500",
    },
    "Database & Cloud": {
      icon: Database,
      glowColor: "group-hover:border-amber-500/40",
      textColor: "text-amber-400",
      barColor: "bg-amber-500",
    },
    "AI & Integrations": {
      icon: Cpu,
      glowColor: "group-hover:border-rose-500/40",
      textColor: "text-rose-400",
      barColor: "bg-rose-500",
    },
    "Tools & DevOps": {
      icon: Workflow,
      glowColor: "group-hover:border-purple-500/40",
      textColor: "text-purple-400",
      barColor: "bg-purple-500",
    },
  };

  return (
    <section id="skills" className="py-20 md:py-28 relative px-4 md:px-8 max-w-6xl mx-auto">
      {/* Background Decorative Blur */}
      <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-indigo-600 rounded-full glow-orb animate-pulse-slow pointer-events-none" />

      {/* Section Header */}
      <div className="text-center space-y-4 mb-16 flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white m-0">
          Skills & <span className="text-gradient-primary">Technologies</span>
        </h2>
        <div className="h-1 w-20 bg-indigo-500 rounded-full" />
        <p className="text-slate-400 text-sm md:text-base max-w-lg">
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
          const meta = categoryMeta[categoryGroup.category] || {
            icon: Code,
            glowColor: "group-hover:border-indigo-500/40",
            textColor: "text-indigo-400",
            barColor: "bg-indigo-500",
          };
          const Icon = meta.icon;

          return (
            <motion.div
              key={index}
              variants={cardVariants}
              className={`p-6 rounded-2xl glass-card border border-white/5 relative overflow-hidden group transition-all duration-300 ${meta.glowColor}`}
              onMouseEnter={() => setHoveredCategory(categoryGroup.category)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              {/* Corner Ambient Glow */}
              <div className="absolute -top-12 -right-12 w-28 h-28 bg-white/5 rounded-full blur-xl group-hover:bg-indigo-500/10 transition-all duration-500" />

              {/* Title & Icon */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-2.5 rounded-xl bg-white/5 border border-white/10 ${meta.textColor}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white m-0">
                  {categoryGroup.category}
                </h3>
              </div>

              {/* Skill Bars */}
              <div className="space-y-4">
                {categoryGroup.items.map((skill, sIndex) => (
                  <div key={sIndex} className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs font-semibold">
                      <span className="text-slate-300 font-medium">{skill.name}</span>
                      <span className="text-slate-500 font-mono">{skill.level}%</span>
                    </div>
                    {/* Progress Bar Container */}
                    <div className="h-1.5 w-full bg-slate-900/60 rounded-full overflow-hidden border border-white/[0.02]">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
                        className={`h-full rounded-full ${meta.barColor}`}
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
