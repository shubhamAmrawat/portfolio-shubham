import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Download, Mail, Sparkles, Terminal } from "lucide-react";
import { Github, Linkedin } from "./SocialIcons";
import { portfolioData } from "../data/portfolioData";

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
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } },
  };

  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center justify-center pt-24 pb-16 md:py-32 overflow-hidden px-4 md:px-8"
    >
      {/* Dynamic Grid Background with fade-out */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-35 pointer-events-none z-0" />

      {/* Decorative Orbs */}
      <div className="absolute top-[20%] left-[10%] w-[300px] h-[300px] bg-indigo-500 rounded-full glow-orb animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-[20%] right-[10%] w-[250px] h-[250px] bg-cyan-500 rounded-full glow-orb animate-float-slow pointer-events-none" />

      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10 relative">
        {/* Left: Introduction */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col items-start text-left gap-6"
        >
          {/* Badge */}
          {/* <motion.div
            variants={itemVariants}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-indigo-400 text-xs font-semibold uppercase tracking-wider"
          >
            <Sparkles className="w-3.5 h-3.5 animate-spin" />
            AI Integration & Full Stack
          </motion.div> */}

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-extrabold tracking-tight text-white m-0"
          >
            Hi, I'm <span className="text-gradient-primary">{portfolioData.personal.name}</span>
          </motion.h1>

          {/* Cycling Roles */}
          <motion.div variants={itemVariants} className="h-10 md:h-12 flex items-center overflow-hidden">
            <span className="text-lg md:text-2xl text-slate-300 font-medium mr-2">I am an</span>
            <div className="relative h-full flex items-center">
              <AnimatePresence mode="wait">
                <motion.span
                  key={roleIndex}
                  initial={{ y: 25, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -25, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="text-lg md:text-2xl font-bold font-mono text-cyan-400 select-none whitespace-nowrap"
                >
                  {roles[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Short Bio */}
          <motion.p
            variants={itemVariants}
            className="text-slate-400 text-base md:text-lg max-w-xl leading-relaxed m-0"
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
              className="px-6 py-3.5 bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 text-white font-semibold rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-indigo-950/50 group border border-indigo-500/20"
            >
              View Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href={portfolioData.personal.resumeUrl}
              download
              className="px-6 py-3.5 bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20 font-semibold rounded-2xl transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4 text-indigo-400" />
              Download Resume
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="flex items-center gap-4 mt-4">
            <a
              href={portfolioData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-indigo-500/50 text-slate-400 hover:text-white rounded-xl transition-all duration-300"
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={portfolioData.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-indigo-500/50 text-slate-400 hover:text-white rounded-xl transition-all duration-300"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${portfolioData.personal.email}`}
              className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-indigo-500/50 text-slate-400 hover:text-white rounded-xl transition-all duration-300"
              aria-label="Email Me"
            >
              <Mail className="w-5 h-5" />
            </a>
          </motion.div>
        </motion.div>

        {/* Right: Mock Terminal Showcase */}
        <motion.div
          initial={{ opacity: 0, x: 50, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4, type: "spring" }}
          className="lg:col-span-5 w-full flex justify-center"
        >
          <div className="w-full max-w-md glass-card rounded-2xl border border-white/10 overflow-hidden shadow-2xl relative">
            {/* Glow backing */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 via-cyan-500 to-emerald-500 rounded-2xl opacity-10 blur-md -z-10 group-hover:opacity-20 transition duration-1000" />
            
            {/* Title Bar */}
            <div className="bg-[#0c0d15] px-4 py-3 flex items-center justify-between border-b border-white/5">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>
              <div className="flex items-center gap-1.5 text-xs text-slate-500 font-mono">
                <Terminal className="w-3 h-3" />
                shubham_developer.sh
              </div>
              <div className="w-12" />
            </div>

            {/* Terminal Body */}
            <div className="p-5 font-mono text-xs text-left leading-relaxed text-slate-300 bg-[#06070c]/70 space-y-4">
              <div>
                <span className="text-emerald-400">~/shubham</span>
                <span className="text-slate-400"> $</span>{" "}
                <span className="text-white">cat profile.json</span>
              </div>
              
              <div className="text-indigo-300">
                {`{`}
                <div className="pl-4">
                  <span className="text-slate-400">"name":</span>{" "}
                  <span className="text-cyan-300">"Shubham Amrawat"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">"role":</span>{" "}
                  <span className="text-cyan-300">"Associate Developer"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">"specialization":</span>{" "}
                  <span className="text-cyan-300">"AI + MERN/MEAN"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">"education":</span>{" "}
                  <span className="text-cyan-300">"B.Tech CS & AI (NSUT)"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">"current_focus":</span>{" "}
                  <span className="text-amber-400">["SKTCH.AI", "AURA"]</span>
                </div>
                {`}`}
              </div>

              <div>
                <span className="text-emerald-400">~/shubham</span>
                <span className="text-slate-400"> $</span>{" "}
                <span className="text-white">npm run check-skills</span>
              </div>

              <div className="text-slate-400 space-y-1">
                <div>&gt; Loading technical abilities...</div>
                <div className="grid grid-cols-2 gap-2 text-indigo-400 font-bold">
                  <span>✓ React / TypeScript</span>
                  <span>✓ Node / Express</span>
                  <span>✓ OpenAI / Gemini</span>
                  <span>✓ pgvector / SQL</span>
                  <span>✓ React Native / Expo</span>
                  <span>✓ Angular / MEAN</span>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <span className="text-emerald-400">~/shubham</span>
                <span className="text-slate-400"> $</span>{" "}
                <span className="w-2 h-4 bg-white animate-pulse" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
