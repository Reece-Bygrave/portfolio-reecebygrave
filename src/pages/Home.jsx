import React, { useRef } from "react";
import Hero from "../components/Hero";
import Grid from "../components/Grid";
import { Mail, FileText, Linkedin, Github, MapPin, Sparkles } from "lucide-react";

const Home = () => {
  const projectsRef = useRef(null);

  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      {/* Hero section */}
      <Hero scrollToProjects={scrollToProjects} />

      {/* Projects section */}
      <section ref={projectsRef} id="projects" className="min-h-screen">
        <Grid />
      </section>

      {/* Contact / CV Quick Connect Section */}
      <section id="contact" className="py-24 px-4 sm:px-6 max-w-4xl mx-auto">
        <div className="relative rounded-3xl border border-white/10 bg-black/60 backdrop-blur-xl p-8 sm:p-12 text-center overflow-hidden shadow-[0_0_30px_rgba(56,189,248,0.15)]">
          
          {/* Subtle background glow */}
          <div className="absolute -top-24 -left-24 w-60 h-60 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-60 h-60 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-cyan-400 bg-cyan-950/40 border border-cyan-400/30 mb-4">
              <Sparkles size={13} />
              Open for Junior Opportunities
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
              Let's Connect
            </h2>

            <p className="text-slate-300 text-sm sm:text-base max-w-lg mb-6 leading-relaxed">
              Seeking Junior Automation Developer, QA Engineer, or Graduate Software Engineering roles. Feel free to reach out directly or review my complete resume.
            </p>

            <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-400 mb-8">
              <MapPin size={15} className="text-cyan-400" />
              <span>Available for Remote, Hybrid & On-site roles</span>
            </div>

            {/* Quick Action Links */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              <a
                href="mailto:Reecebygraveuk@gmail.com"
                className="flex items-center gap-2 px-5 py-3 rounded-xl font-medium text-sm text-black bg-gradient-to-r from-cyan-400 to-blue-500 hover:shadow-[0_0_25px_rgba(56,189,248,0.6)] transition duration-300 transform hover:-translate-y-0.5"
              >
                <Mail size={16} />
                <span>Reecebygraveuk@gmail.com</span>
              </a>

              <a
                href="/Reece_Bygrave_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="Reece_Bygrave_Resume.pdf"
                className="flex items-center gap-2 px-5 py-3 rounded-xl font-medium text-sm text-white border border-cyan-400/40 hover:border-cyan-300 bg-white/5 hover:bg-cyan-950/30 transition duration-300 transform hover:-translate-y-0.5"
              >
                <FileText size={16} className="text-cyan-400" />
                <span>Download CV</span>
              </a>

              <a
                href="https://www.linkedin.com/in/reece-bygrave-70174a160/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-3 rounded-xl font-medium text-sm text-slate-300 hover:text-white border border-white/15 hover:border-white/40 bg-white/5 hover:bg-white/10 transition duration-300 transform hover:-translate-y-0.5"
              >
                <Linkedin size={16} />
                <span>LinkedIn</span>
              </a>

              <a
                href="https://github.com/Reece-Bygrave"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-3 rounded-xl font-medium text-sm text-slate-300 hover:text-white border border-white/15 hover:border-white/40 bg-white/5 hover:bg-white/10 transition duration-300 transform hover:-translate-y-0.5"
              >
                <Github size={16} />
                <span>GitHub</span>
              </a>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
