import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Download, Mail, Terminal } from "lucide-react";
import { portfolioData } from "../data/portfolioData";
import { Github, Linkedin } from "./SocialIcons";
import profilePic from "../assets/profile_pic.png";

const roles = [
  "Full-Stack Developer",
  "AI Integration Specialist",
  "MERN / MEAN Developer",
  "CS & AI NSUT Alum",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } },
  };

  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center justify-center pt-28 pb-16 md:py-32 overflow-hidden px-4 md:px-8 bg-transparent"
    >
      {/* Dynamic Grid Background with theme adaptation */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] dark:bg-[radial-gradient(#11131f_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_75%,transparent_100%)] opacity-60 dark:opacity-40 pointer-events-none z-0" />

      {/* Decorative Orbs */}
      <div className="absolute top-[20%] left-[10%] w-[300px] h-[300px] bg-indigo-500 rounded-full glow-orb animate-pulse-slow pointer-events-none opacity-5 dark:opacity-10" />
      <div className="absolute bottom-[20%] right-[10%] w-[250px] h-[250px] bg-violet-500 rounded-full glow-orb animate-float-slow pointer-events-none opacity-5 dark:opacity-10" />

      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10 relative">
        
        {/* Left: Introduction */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col items-start text-left gap-5"
        >
          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-800 dark:text-white m-0 leading-[1.1]"
          >
            Hi, I'm <span className="text-gradient-primary">{portfolioData.personal.name}</span>
          </motion.h1>

          {/* Cycling Roles */}
          <motion.div variants={itemVariants} className="h-8 md:h-10 flex items-center overflow-hidden">
            <span className="text-base md:text-xl text-slate-500 dark:text-slate-400 font-medium mr-2">I am a</span>
            <div className="relative h-full flex items-center">
              <AnimatePresence mode="wait">
                <motion.span
                  key={roleIndex}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="text-base md:text-xl font-bold font-mono text-indigo-600 dark:text-indigo-400 select-none whitespace-nowrap"
                >
                  {roles[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Short Bio */}
          <motion.p
            variants={itemVariants}
            className="text-slate-600 dark:text-slate-400 text-sm md:text-base max-w-xl leading-relaxed m-0"
          >
            {portfolioData.personal.summary}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mt-2"
          >
            <a
              href="#projects"
              className="px-5 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/10 dark:shadow-none group border border-transparent"
            >
              View Projects
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href={portfolioData.personal.resumeUrl}
              download
              className="px-5 py-3 bg-white dark:bg-white/[0.02] hover:bg-slate-100 dark:hover:bg-white/[0.08] text-slate-700 dark:text-white border border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 font-bold text-xs uppercase tracking-wider rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Download className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
              Download Resume
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="flex items-center gap-3 mt-2">
            <a
              href={portfolioData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-white dark:bg-white/[0.02] hover:bg-slate-100 dark:hover:bg-white/[0.08] border border-slate-200 dark:border-white/10 hover:border-indigo-500/30 dark:hover:border-indigo-500/30 text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white rounded-xl transition-all duration-300"
              aria-label="GitHub Profile"
            >
              <Github className="w-4.5 h-4.5" />
            </a>
            <a
              href={portfolioData.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-white dark:bg-white/[0.02] hover:bg-slate-100 dark:hover:bg-white/[0.08] border border-slate-200 dark:border-white/10 hover:border-indigo-500/30 dark:hover:border-indigo-500/30 text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white rounded-xl transition-all duration-300"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4.5 h-4.5" />
            </a>
            <a
              href={`mailto:${portfolioData.personal.email}`}
              className="p-2.5 bg-white dark:bg-white/[0.02] hover:bg-slate-100 dark:hover:bg-white/[0.08] border border-slate-200 dark:border-white/10 hover:border-indigo-500/30 dark:hover:border-indigo-500/30 text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white rounded-xl transition-all duration-300"
              aria-label="Email Me"
            >
              <Mail className="w-4.5 h-4.5" />
            </a>
          </motion.div>
        </motion.div>

        {/* Right: Portrait Profile Pic + Mock Terminal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="lg:col-span-5 w-full flex flex-col items-center gap-6 justify-center"
        >
          {/* Profile Photo Avatar Frame */}
          <div className="relative group select-none">
            {/* Pulsing glows */}
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full opacity-40 dark:opacity-60 blur-md group-hover:opacity-75 transition-opacity duration-300 animate-spin-slow" />
            <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full animate-pulse opacity-30 dark:opacity-40" />
            
            {/* Image itself */}
            <img
              src={profilePic}
              alt="Shubham Amrawat Portrait"
              className="relative w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white dark:border-[#020204] object-cover shadow-xl z-10 transition-transform duration-500 group-hover:scale-[1.02]"
              draggable="false"
            />
          </div>

          {/* Terminal */}
          <div className="w-full max-w-sm bg-white/80 dark:bg-black/25 backdrop-blur-md rounded-xl border border-slate-200/50 dark:border-white/[0.05] overflow-hidden shadow-md dark:shadow-none relative">
            
            {/* Title Bar */}
            <div className="bg-slate-200/60 dark:bg-white/[0.02] px-4 py-2 flex items-center justify-between border-b border-slate-300/30 dark:border-white/[0.03]">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              </div>
              <div className="flex items-center gap-1 text-[10px] text-slate-500 font-mono">
                <Terminal className="w-3 h-3" />
                profile.sh
              </div>
              <div className="w-10" />
            </div>

            {/* Terminal Body */}
            <div className="p-4 font-mono text-[11px] text-left leading-relaxed text-slate-700 dark:text-slate-300 space-y-3">
              <div>
                <span className="text-indigo-600 dark:text-indigo-400">~/shubham</span>
                <span className="text-slate-400"> $</span>{" "}
                <span className="text-slate-800 dark:text-white font-semibold">cat profile.json</span>
              </div>
              
              <div className="text-indigo-600 dark:text-indigo-300/90">
                {`{`}
                <div className="pl-4">
                  <span className="text-slate-500 dark:text-slate-400">"name":</span>{" "}
                  <span className="text-indigo-700 dark:text-indigo-400">"Shubham Amrawat"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-500 dark:text-slate-400">"role":</span>{" "}
                  <span className="text-indigo-700 dark:text-indigo-400">"Associate Developer"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-500 dark:text-slate-400">"specialization":</span>{" "}
                  <span className="text-indigo-700 dark:text-indigo-400">"AI + MERN/MEAN"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-500 dark:text-slate-400">"education":</span>{" "}
                  <span className="text-indigo-700 dark:text-indigo-400">"B.Tech CS & AI (NSUT)"</span>
                </div>
                {`}`}
              </div>

              <div>
                <span className="text-indigo-600 dark:text-indigo-400">~/shubham</span>
                <span className="text-slate-400"> $</span>{" "}
                <span className="w-1.5 h-3 bg-indigo-600 dark:bg-white inline-block animate-pulse align-middle" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
