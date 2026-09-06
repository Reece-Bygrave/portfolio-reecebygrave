//src/components/Hero.jsx
import React from "react";
import { FileText, Github, Linkedin, Terminal, GraduationCap, Cpu, ArrowDown } from "lucide-react";
import "../styles/Hero.css";
import ScrollIndicator from "./ScrollIndicator";

const Hero = ({ scrollToProjects }) => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-28 pb-20 px-4 sm:px-6">
      
      <div className="hero-content relative z-10 text-center max-w-4xl mx-auto text-white flex flex-col items-center">
        
        {/* Availability / Role Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-cyan-400/40 bg-cyan-950/40 backdrop-blur-md mb-6 shadow-[0_0_15px_rgba(34,211,238,0.25)]">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="text-xs sm:text-sm font-medium text-cyan-200 tracking-wide">
            Junior Automation Developer • Open to Opportunities
          </span>
        </div>

        {/* CV Name & Role Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight mb-3">
          Reece Bygrave
        </h1>
        
        <p className="text-lg sm:text-2xl font-semibold bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 bg-clip-text text-transparent mb-4">
          Junior Automation Developer & BSc Computer Science Graduate
        </p>

        {/* CV Profile Summary */}
        <p className="max-w-2xl text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed mb-8">
          Computer Science graduate with a strong foundation in software engineering, automated testing, and workflow scripting. Passionate about building robust automated test suites, streamlining repetitive processes, and ensuring software reliability.
        </p>

        {/* CV Snapshot Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 w-full max-w-3xl mb-9 text-left">
          
          <div className="p-4 rounded-xl border border-white/10 bg-black/60 backdrop-blur-md hover:border-cyan-400/60 hover:shadow-[0_0_15px_rgba(34,211,238,0.2)] transition duration-300">
            <div className="flex items-center gap-2 text-cyan-400 mb-1.5">
              <GraduationCap size={18} />
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Education</span>
            </div>
            <p className="text-sm font-semibold text-white">BSc (Hons) Computer Science</p>
            <p className="text-xs text-slate-400 mt-0.5">Nottingham Trent University</p>
          </div>

          <div className="p-4 rounded-xl border border-white/10 bg-black/60 backdrop-blur-md hover:border-cyan-400/60 hover:shadow-[0_0_15px_rgba(34,211,238,0.2)] transition duration-300">
            <div className="flex items-center gap-2 text-cyan-400 mb-1.5">
              <Terminal size={18} />
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Specialization</span>
            </div>
            <p className="text-sm font-semibold text-white">Test & Process Automation</p>
            <p className="text-xs text-slate-400 mt-0.5">Selenium · Python · API Testing</p>
          </div>

          <div className="p-4 rounded-xl border border-white/10 bg-black/60 backdrop-blur-md hover:border-cyan-400/60 hover:shadow-[0_0_15px_rgba(34,211,238,0.2)] transition duration-300">
            <div className="flex items-center gap-2 text-cyan-400 mb-1.5">
              <Cpu size={18} />
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Core Toolkit</span>
            </div>
            <p className="text-sm font-semibold text-white">Python · SQL · Java · Git</p>
            <p className="text-xs text-slate-400 mt-0.5">CI/CD Pipelines · REST APIs</p>
          </div>

        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-6">
          
          <button
            onClick={scrollToProjects}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm text-black bg-gradient-to-r from-cyan-400 to-blue-500 hover:shadow-[0_0_20px_rgba(56,189,248,0.6)] transition duration-300 transform hover:-translate-y-0.5"
          >
            <span>View Projects</span>
            <ArrowDown size={15} />
          </button>

          <a
            href="/Reece_Bygrave_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download="Reece_Bygrave_Resume.pdf"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm text-white border border-cyan-400/40 hover:border-cyan-300 bg-white/5 hover:bg-cyan-950/30 transition duration-300 transform hover:-translate-y-0.5"
          >
            <FileText size={16} className="text-cyan-400" />
            <span>Download CV</span>
          </a>

          <a
            href="https://github.com/Reece-Bygrave"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-sm text-slate-300 hover:text-white border border-white/15 hover:border-white/40 bg-white/5 hover:bg-white/10 transition duration-300 transform hover:-translate-y-0.5"
          >
            <Github size={16} />
            <span>GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/in/reece-bygrave-70174a160/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-sm text-slate-300 hover:text-white border border-white/15 hover:border-white/40 bg-white/5 hover:bg-white/10 transition duration-300 transform hover:-translate-y-0.5"
          >
            <Linkedin size={16} />
            <span>LinkedIn</span>
          </a>

        </div>

      </div>

      <ScrollIndicator />
    </section>
  );
};

export default Hero;
