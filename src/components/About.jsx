import { motion } from "framer-motion";
import { BookOpen, GraduationCap } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 15 } },
  };

  const stats = [
    { label: "Role", value: "Associate Developer" },
    { label: "Education", value: "B.Tech CS & AI (NSUT)" },
    { label: "Core Stack", value: "MERN / MEAN / Next.js" },
    { label: "AI Integration", value: "Gemini / OpenAI / Claude" },
  ];

  return (
    <section id="about" className="py-20 md:py-28 relative px-4 md:px-8 max-w-6xl mx-auto bg-transparent">
      {/* Scroll Reveal Container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 lg:grid-cols-12 gap-12"
      >
        {/* Left: About Text & Stats */}
        <div className="lg:col-span-7 text-left space-y-8">
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 dark:text-white m-0 tracking-tight">
              About <span className="text-gradient-purple-cyan">Me</span>
            </h2>
            <div className="h-1 w-16 bg-indigo-600 dark:bg-indigo-500 rounded-full" />
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-slate-650 dark:text-slate-300 text-sm md:text-base leading-relaxed m-0"
          >
            I am a software engineer based in New Delhi, India. I specialize in crafting robust, high-performance web applications and integration systems. With a strong academic background in **Artificial Intelligence** from Netaji Subhas University of Technology, I love bridging the gap between advanced backend algorithms and polished, interactive user interfaces.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-slate-550 dark:text-slate-400 text-xs md:text-sm leading-relaxed m-0"
          >
            Over the past few years, I've worked on large-scale production web and mobile projects, building modular architectures, real-time sync systems, vector databases, and multi-model AI workflows. I strive for clean, performance-optimized code and modular frontend designs.
          </motion.p>

          {/* Stats Grid */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 gap-4 pt-2"
          >
            {stats.map((stat, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl glass-card relative overflow-hidden group hover:border-indigo-500/20 transition-all duration-300"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/5 rounded-full blur-xl group-hover:bg-indigo-500/10 transition-all duration-300" />
                <span className="text-[10px] font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider block mb-1">
                  {stat.label}
                </span>
                <span className="text-sm md:text-base font-extrabold text-slate-800 dark:text-white leading-tight">
                  {stat.value}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: Education Timeline */}
        <div className="lg:col-span-5 text-left space-y-8">
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 dark:text-white m-0 tracking-tight">
              My <span className="text-gradient-cyan-emerald">Education</span>
            </h2>
            <div className="h-1 w-16 bg-indigo-600 dark:bg-indigo-500 rounded-full" />
          </motion.div>

          {/* Education Timeline */}
          <div className="relative border-l border-slate-200 dark:border-white/10 pl-6 ml-2 space-y-8">
            {portfolioData.education.map((edu, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative group"
              >
                {/* Timeline node icon */}
                <span className="absolute -left-[37px] top-1.5 flex items-center justify-center w-6 h-6 rounded-full bg-slate-100 dark:bg-slate-900 border border-indigo-500/30 text-indigo-600 dark:text-indigo-400 group-hover:scale-105 transition-all duration-300 shadow-sm">
                  <GraduationCap className="w-3.5 h-3.5" />
                </span>

                <div className="p-5 rounded-2xl glass-card hover:border-indigo-500/10 transition-all duration-300 space-y-2.5 relative overflow-hidden">
                  <span className="inline-block px-2.5 py-1 rounded-lg bg-indigo-50 dark:bg-indigo-500/10 text-indigo-650 dark:text-indigo-400 text-[10px] font-mono font-bold border border-indigo-100/50 dark:border-none">
                    {edu.period}
                  </span>

                  <h3 className="text-sm md:text-base font-bold text-slate-800 dark:text-white leading-snug">
                    {edu.degree}
                  </h3>

                  <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                    <BookOpen className="w-3.5 h-3.5 text-indigo-500" />
                    <span className="font-semibold">{edu.institution}</span>
                  </div>

                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    {edu.details}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
