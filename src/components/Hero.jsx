//src/components/Hero.jsx
import React from "react";
import { Github, Linkedin, GraduationCap, Cpu, Globe } from "lucide-react";
import "../styles/Hero.css";
import ScrollIndicator from "./ScrollIndicator";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-28 pb-20 px-4 sm:px-6">

      <div className="hero-content relative z-10 text-center max-w-4xl mx-auto text-slate-900 dark:text-white flex flex-col items-center transition-colors">

        {/* Availability / Round Box */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-cyan-500/30 dark:border-cyan-400/40 bg-cyan-100/60 dark:bg-cyan-950/40 backdrop-blur-md mb-6 shadow-[0_0_15px_rgba(34,211,238,0.15)] dark:shadow-[0_0_15px_rgba(34,211,238,0.25)] transition-colors">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="text-xs sm:text-sm font-medium text-cyan-800 dark:text-cyan-200 tracking-wide">
            Open to Opportunities
          </span>
        </div>

        {/* CV Name & Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight mb-3 text-slate-900 dark:text-white transition-colors">
          Reece Bygrave
        </h1>

        <p className="text-lg sm:text-2xl font-semibold bg-gradient-to-r from-cyan-600 via-sky-600 to-blue-600 dark:from-cyan-400 dark:via-sky-300 dark:to-blue-500 bg-clip-text text-transparent mb-4">
          BSc Computer Science Graduate & Educator | Aspiring Developer
        </p>

        {/* CV Profile Summary */}
        <p className="max-w-2xl text-slate-600 dark:text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed mb-8 transition-colors">
          Computer Science graduate with a PGCE in Secondary Computing and two years of international teaching experience in Hong Kong. Combining a strong technical foundation with analytical problem-solving and communication skills — with focus on building and maintaining reliable software through automation, testing and AI integration.
        </p>

        {/* Snapshot Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 w-full max-w-3xl mb-9 text-left">

          <div className="p-4 rounded-xl border border-slate-200/80 dark:border-white/10 bg-white/80 dark:bg-black/60 backdrop-blur-md hover:border-cyan-500/50 dark:hover:border-cyan-400/60 shadow-[0_4px_20px_rgba(0,0,0,0.04)] dark:shadow-[0_0_15px_rgba(34,211,238,0.2)] transition duration-300">
            <div className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400 mb-1.5">
              <GraduationCap size={18} />
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Education</span>
            </div>
            <p className="text-sm font-semibold text-slate-900 dark:text-white">BSc Computer Science & PGCE</p>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Nottingham Trent · Manchester Met</p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200/80 dark:border-white/10 bg-white/80 dark:bg-black/60 backdrop-blur-md hover:border-cyan-500/50 dark:hover:border-cyan-400/60 shadow-[0_4px_20px_rgba(0,0,0,0.04)] dark:shadow-[0_0_15px_rgba(34,211,238,0.2)] transition duration-300">
            <div className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400 mb-1.5">
              <Globe size={18} />
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Experience</span>
            </div>
            <p className="text-sm font-semibold text-slate-900 dark:text-white">2 Years Teaching in Hong Kong</p>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Secondary Computer Science & ICT</p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200/80 dark:border-white/10 bg-white/80 dark:bg-black/60 backdrop-blur-md hover:border-cyan-500/50 dark:hover:border-cyan-400/60 shadow-[0_4px_20px_rgba(0,0,0,0.04)] dark:shadow-[0_0_15px_rgba(34,211,238,0.2)] transition duration-300">
            <div className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400 mb-1.5">
              <Cpu size={18} />
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Target Focus</span>
            </div>
            <p className="text-sm font-semibold text-slate-900 dark:text-white">Aspiring Automation Developer</p>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Python · Selenium · SQL · APIs</p>
          </div>

        </div>

        {/* Action Buttons: GitHub & LinkedIn */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-6">

          <a
            href="https://github.com/Reece-Bygrave"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm text-slate-700 dark:text-slate-200 hover:text-black dark:hover:text-white border border-slate-200 dark:border-white/15 hover:border-cyan-500/60 dark:hover:border-cyan-400/60 bg-white/80 dark:bg-black/60 hover:bg-slate-50 dark:hover:bg-white/5 transition duration-300 shadow-sm transform hover:-translate-y-0.5"
          >
            <Github size={16} className="text-cyan-600 dark:text-cyan-400" />
            <span>GitHub Profile</span>
          </a>

          <a
            href="https://www.linkedin.com/in/reece-bygrave-70174a160/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm text-slate-700 dark:text-slate-200 hover:text-black dark:hover:text-white border border-slate-200 dark:border-white/15 hover:border-cyan-500/60 dark:hover:border-cyan-400/60 bg-white/80 dark:bg-black/60 hover:bg-slate-50 dark:hover:bg-white/5 transition duration-300 shadow-sm transform hover:-translate-y-0.5"
          >
            <Linkedin size={16} className="text-cyan-600 dark:text-cyan-400" />
            <span>LinkedIn Profile</span>
          </a>

        </div>

      </div>

      <ScrollIndicator />
    </section>
  );
};

export default Hero;
