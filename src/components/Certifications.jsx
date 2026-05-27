import { motion } from "framer-motion";
import { Award, CheckCircle2, ShieldCheck } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function Certifications() {
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
    <section id="certifications" className="py-20 md:py-28 relative px-4 md:px-8 max-w-6xl mx-auto bg-transparent">
      {/* Background Decorative Gradient blur */}
      <div className="absolute top-[30%] left-[80%] w-[200px] h-[200px] bg-indigo-500 rounded-full glow-orb animate-pulse-slow pointer-events-none opacity-5 dark:opacity-10" />

      {/* Section Header */}
      <div className="text-center space-y-4 mb-16 flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white m-0 tracking-tight">
          Professional <span className="text-gradient-primary">Certifications</span>
        </h2>
        <div className="h-1 w-16 bg-indigo-500 rounded-full" />
        <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base max-w-lg">
          My verified professional qualifications, scoring achievements, and course credentials.
        </p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left relative z-10"
      >
        {portfolioData.certifications.map((cert, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="p-6 rounded-2xl glass-card relative overflow-hidden group hover:border-indigo-500/20 transition-all duration-300 flex flex-col justify-between"
          >
            {/* Corner Accent Glow */}
            <div className="absolute inset-0 bg-indigo-500/0 group-hover:bg-indigo-500/[0.01] transition-colors duration-300 pointer-events-none" />

            <div className="space-y-4">
              {/* Badge Icon */}
              <div className="flex justify-between items-start">
                <span className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-650 dark:text-indigo-400">
                  <Award className="w-4 h-4" />
                </span>
                
                <span className="flex items-center gap-1 text-[9px] font-mono font-bold text-emerald-650 dark:text-emerald-400 uppercase bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-100 dark:border-none">
                  <CheckCircle2 className="w-3 h-3" />
                  Verified
                </span>
              </div>

              {/* Title & Issuer */}
              <div className="space-y-1">
                <h3 className="text-base font-bold text-slate-800 dark:text-white leading-tight group-hover:text-indigo-650 dark:group-hover:text-indigo-400 transition-colors">
                  {cert.title}
                </h3>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-semibold block">
                  {cert.issuer}
                </span>
              </div>
            </div>

            {/* Score Highlight / Completion */}
            <div className="pt-4 mt-6 border-t border-slate-200 dark:border-white/5 flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-mono">
              <ShieldCheck className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              <span>Status: <strong className="text-slate-800 dark:text-white font-bold">{cert.score}</strong></span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
