//src/components/Hero.jsx
import React from "react";
import { Github, Linkedin, GraduationCap, Cpu, Globe } from "lucide-react";
import "../styles/Hero.css";
import ScrollIndicator from "./ScrollIndicator";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-28 pb-20 px-4 sm:px-6">

      <div className="hero-content relative z-10 text-center max-w-4xl mx-auto text-white flex flex-col items-center">

        {/* Availability / Round Box */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-cyan-400/40 bg-cyan-950/40 backdrop-blur-md mb-6 shadow-[0_0_15px_rgba(34,211,238,0.25)]">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="text-xs sm:text-sm font-medium text-cyan-200 tracking-wide">
            Open to Opportunities
          </span>
        </div>

        {/* CV Name & Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight mb-3">
          Reece Bygrave
        </h1>

        <p className="text-lg sm:text-2xl font-semibold bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 bg-clip-text text-transparent mb-4">
          BSc Computer Science Graduate & Educator | Aspiring Developer
        </p>

        {/* CV Profile Summary */}
        <p className="max-w-2xl text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed mb-8">
          Computer Science graduate with a PGCE in Secondary Computing and two years of international teaching experience in Hong Kong. Combining a strong technical foundation with analytical problem-solving and communication skills — focusing on automated testing pipelines, workflow scripting, and reliable software delivery.
        </p>

        {/* CV Snapshot Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 w-full max-w-3xl mb-9 text-left">

          <div className="p-4 rounded-xl border border-white/10 bg-black/60 backdrop-blur-md hover:border-cyan-400/60 hover:shadow-[0_0_15px_rgba(34,211,238,0.2)] transition duration-300">
            <div className="flex items-center gap-2 text-cyan-400 mb-1.5">
              <GraduationCap size={18} />
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Education & PGCE</span>
            </div>
            <p className="text-sm font-semibold text-white">BSc Computer Science & PGCE</p>
            <p className="text-xs text-slate-400 mt-0.5">Nottingham Trent · Manchester Met</p>
          </div>

          <div className="p-4 rounded-xl border border-white/10 bg-black/60 backdrop-blur-md hover:border-cyan-400/60 hover:shadow-[0_0_15px_rgba(34,211,238,0.2)] transition duration-300">
            <div className="flex items-center gap-2 text-cyan-400 mb-1.5">
              <Globe size={18} />
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Experience</span>
            </div>
            <p className="text-sm font-semibold text-white">2 Years Teaching in Hong Kong</p>
            <p className="text-xs text-slate-400 mt-0.5">Secondary Computer Science & ICT</p>
          </div>

          <div className="p-4 rounded-xl border border-white/10 bg-black/60 backdrop-blur-md hover:border-cyan-400/60 hover:shadow-[0_0_15px_rgba(34,211,238,0.2)] transition duration-300">
            <div className="flex items-center gap-2 text-cyan-400 mb-1.5">
              <Cpu size={18} />
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Target Focus</span>
            </div>
            <p className="text-sm font-semibold text-white">Aspiring Automation Developer</p>
            <p className="text-xs text-slate-400 mt-0.5">Python · Selenium · SQL · APIs</p>
          </div>

        </div>

        {/* Action Buttons: GitHub & LinkedIn */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-6">

          <a
            href="https://github.com/Reece-Bygrave"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm text-slate-200 hover:text-white border border-white/15 hover:border-cyan-400/60 bg-black/60 hover:bg-white/5 transition duration-300 shadow-sm transform hover:-translate-y-0.5"
          >
            <Github size={16} className="text-cyan-400" />
            <span>GitHub Profile</span>
          </a>

          <a
            href="https://www.linkedin.com/in/reece-bygrave-70174a160/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm text-slate-200 hover:text-white border border-white/15 hover:border-cyan-400/60 bg-black/60 hover:bg-white/5 transition duration-300 shadow-sm transform hover:-translate-y-0.5"
          >
            <Linkedin size={16} className="text-cyan-400" />
            <span>LinkedIn Profile</span>
          </a>

        </div>

      </div>

      <ScrollIndicator />
    </section>
  );
};

export default Hero;
