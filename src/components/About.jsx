import { motion } from "framer-motion";
import { Award, BookOpen, GraduationCap, MapPin, Milestone } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 15 } },
  };

  const stats = [
    { label: "Role", value: "Associate Software Developer" },
    { label: "Education", value: "B.Tech CS & AI (NSUT)" },
    { label: "Core Stack", value: "MERN / MEAN / Next.js" },
    { label: "AI Integration", value: "Gemini / OpenAI / Claude" },
  ];

  return (
    <section id="about" className="py-20 md:py-28 relative px-4 md:px-8 max-w-6xl mx-auto">
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
            <h2 className="text-3xl md:text-4xl font-extrabold text-white m-0">
              About <span className="text-gradient-purple-cyan">Me</span>
            </h2>
            <div className="h-1 w-20 bg-indigo-500 rounded-full" />
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-slate-300 text-base md:text-lg leading-relaxed m-0"
          >
            I am a software engineer based in New Delhi, India. I specialize in crafting robust, high-performance web applications and integration systems. With a strong academic background in **Artificial Intelligence** from Netaji Subhas University of Technology, I love bridging the gap between advanced backend algorithms and polished, interactive user interfaces.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-slate-400 text-sm md:text-base leading-relaxed m-0"
          >
            Over the past few years, I've worked on large-scale production web and mobile projects, building modular architectures, real-time sync systems, vector databases, and multi-model AI workflows. I strive for clean, performance-optimized code and modular frontend designs.
          </motion.p>

          {/* Stats Grid */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 gap-4 pt-4"
          >
            {stats.map((stat, i) => (
              <div
                key={i}
                className="p-4 rounded-2xl glass-card border border-white/5 flex flex-col gap-1 relative overflow-hidden group hover:border-indigo-500/30 transition-all duration-300"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/5 rounded-full blur-xl group-hover:bg-indigo-500/10 transition-all duration-300" />
                <span className="text-xs font-semibold text-indigo-400 uppercase tracking-wider">
                  {stat.label}
                </span>
                <span className="text-sm md:text-base font-bold text-white leading-tight">
                  {stat.value}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: Education Timeline */}
        <div className="lg:col-span-5 text-left space-y-8">
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white m-0">
              My <span className="text-gradient-cyan-emerald">Education</span>
            </h2>
            <div className="h-1 w-20 bg-cyan-500 rounded-full" />
          </motion.div>

          {/* Education Timeline */}
          <div className="relative border-l border-white/10 pl-6 ml-2 space-y-8">
            {portfolioData.education.map((edu, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative group"
              >
                {/* Timeline node icon */}
                <span className="absolute -left-[37px] top-1.5 flex items-center justify-center w-6 h-6 rounded-full bg-[#0a0b12] border border-cyan-500 text-cyan-400 group-hover:scale-110 transition-all duration-300">
                  <GraduationCap className="w-3.5 h-3.5" />
                </span>

                <div className="p-5 rounded-2xl glass-card border border-white/5 hover:border-cyan-500/20 transition-all duration-300 space-y-2 relative overflow-hidden">
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-cyan-500/0 group-hover:bg-cyan-500/[0.02] transition-colors duration-300 pointer-events-none" />

                  <span className="inline-block px-2.5 py-1 rounded-lg bg-cyan-500/10 text-cyan-400 text-xs font-mono font-semibold">
                    {edu.period}
                  </span>

                  <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors leading-tight">
                    {edu.degree}
                  </h3>

                  <div className="flex items-center gap-1.5 text-xs text-slate-400">
                    <BookOpen className="w-3.5 h-3.5 text-indigo-400" />
                    <span>{edu.institution}</span>
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed pt-1">
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
