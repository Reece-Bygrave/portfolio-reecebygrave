import React from "react";
import Hero from "../components/Hero";
import Grid from "../components/Grid";
import { Mail, Linkedin, Github, MapPin, Sparkles } from "lucide-react";

const Home = () => {
  return (
    <div>
      {/* Hero section */}
      <Hero />

      {/* Projects section */}
      <section id="projects" className="min-h-screen">
        <Grid />
      </section>

      {/* Contact Quick Connect Section */}
      <section id="contact" className="py-24 px-4 sm:px-6 max-w-4xl mx-auto">
        <div className="relative rounded-3xl border border-slate-200/80 dark:border-white/10 bg-white/80 dark:bg-black/60 backdrop-blur-xl p-8 sm:p-12 text-center overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.06)] dark:shadow-none transition-colors duration-300">
          
          <div className="relative z-10 flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 mb-4 transition-colors">
              <Sparkles size={13} />
              Open for Opportunities
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-3 transition-colors">
              Let's Connect
            </h2>

            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-lg mb-6 leading-relaxed transition-colors">
              Seeking Junior Automation Developer, QA Engineer, or Graduate Software Engineering roles. Feel free to reach out directly to discuss upcoming opportunities.
            </p>

            <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-8 transition-colors">
              <MapPin size={15} className="text-slate-500 dark:text-slate-400" />
              <span>Available for Remote, Hybrid & On-site roles</span>
            </div>

            {/* Quick Action Links */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              <a
                href="mailto:Reecebygraveuk@gmail.com"
                className="flex items-center gap-2 px-5 py-3 rounded-xl font-medium text-sm text-white dark:text-black bg-slate-900 dark:bg-white hover:bg-slate-800 dark:hover:bg-slate-100 transition duration-300 transform hover:-translate-y-0.5 shadow-sm"
              >
                <Mail size={16} />
                <span>Reecebygraveuk@gmail.com</span>
              </a>

              <a
                href="https://www.linkedin.com/in/reece-bygrave-70174a160/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 rounded-xl font-medium text-sm text-slate-700 dark:text-slate-300 hover:text-black dark:hover:text-white border border-slate-200 dark:border-white/15 hover:border-slate-400 dark:hover:border-white/30 bg-slate-100/70 dark:bg-white/5 hover:bg-slate-200/70 dark:hover:bg-white/10 transition duration-300 transform hover:-translate-y-0.5"
              >
                <Linkedin size={16} className="text-slate-700 dark:text-slate-300" />
                <span>LinkedIn</span>
              </a>

              <a
                href="https://github.com/Reece-Bygrave"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 rounded-xl font-medium text-sm text-slate-700 dark:text-slate-300 hover:text-black dark:hover:text-white border border-slate-200 dark:border-white/15 hover:border-slate-400 dark:hover:border-white/30 bg-slate-100/70 dark:bg-white/5 hover:bg-slate-200/70 dark:hover:bg-white/10 transition duration-300 transform hover:-translate-y-0.5"
              >
                <Github size={16} className="text-slate-700 dark:text-slate-300" />
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
