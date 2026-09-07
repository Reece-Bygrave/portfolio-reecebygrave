// src/pages/ProjectDetail.jsx
import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Sparkles,
  Terminal,
  CheckCircle2,
  Cpu,
  Mail,
  AlertCircle,
  Clock,
  UserCheck,
  Target
} from "lucide-react";
import { getProjectBySlug } from "../data/projectsData";
import { useTheme } from "../context/ThemeContext";

const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = getProjectBySlug(slug);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // If project slug not found
  if (!project) {
    return (
      <div className="min-h-screen pt-32 pb-20 px-4 max-w-4xl mx-auto flex flex-col items-center justify-center text-center">
        <div className="p-4 rounded-2xl bg-rose-100 dark:bg-rose-950/40 border border-rose-300 dark:border-rose-500/40 mb-6 text-rose-600 dark:text-rose-400">
          <AlertCircle size={40} />
        </div>
        <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-3">Project Not Found</h1>
        <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-md">
          The requested project could not be located.
        </p>
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold text-sm hover:shadow-[0_0_20px_rgba(56,189,248,0.5)] transition duration-300"
        >
          <ArrowLeft size={16} />
          <span>Back to All Projects</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-28 pb-20 px-4 sm:px-6 max-w-4xl mx-auto">
      
      {/* Top Navigation */}
      <div className="flex items-center justify-between gap-4 mb-6">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-black dark:hover:text-white bg-white/80 dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/25 transition duration-300 group shadow-sm"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform duration-300" />
          <span>Back to Projects</span>
        </button>

        <div className="hidden sm:flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 font-mono">
          <Link to="/" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Home</Link>
          <span>/</span>
          <Link to="/projects" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Projects</Link>
          <span>/</span>
          <span className="text-slate-800 dark:text-slate-200 truncate max-w-[200px]">{project.shortTitle || project.title}</span>
        </div>
      </div>

      {/* Header */}
      <header className="mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3 border transition-colors"
          style={{
            borderColor: `${project.color}55`,
            backgroundColor: `${project.color}15`,
            color: project.color
          }}
        >
          <Sparkles size={13} />
          <span>{project.category}</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight mb-3 transition-colors">
          {project.title}
        </h1>

        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-6 transition-colors">
          {project.tagline}
        </p>

        {/* Quick Snapshot Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 p-3.5 rounded-2xl bg-white/80 dark:bg-black/60 backdrop-blur-xl border border-slate-200/80 dark:border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.04)] dark:shadow-none transition-colors">
          <div className="p-1.5">
            <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 mb-0.5">
              <UserCheck size={13} style={{ color: project.color }} />
              <span>Role</span>
            </div>
            <p className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white truncate">{project.role}</p>
          </div>

          <div className="p-1.5">
            <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 mb-0.5">
              <Clock size={13} style={{ color: project.color }} />
              <span>Timeline</span>
            </div>
            <p className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white truncate">{project.timeline}</p>
          </div>

          <div className="p-1.5">
            <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 mb-0.5">
              <Target size={13} style={{ color: project.color }} />
              <span>Status</span>
            </div>
            <p className="text-xs sm:text-sm font-semibold text-emerald-600 dark:text-emerald-400 truncate">{project.status}</p>
          </div>

          <div className="p-1.5 flex items-center justify-start sm:justify-end">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-slate-700 dark:text-white bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/20 border border-slate-200 dark:border-white/15 transition duration-200"
            >
              <Github size={13} />
              <span>GitHub</span>
              <ExternalLink size={11} className="text-slate-400" />
            </a>
          </div>
        </div>
      </header>

      {/* Featured Media with Performance Metrics Strip */}
      <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-white/15 bg-zinc-950 mb-8 shadow-xl"
        style={{
          boxShadow: isDark
            ? `0 16px 40px -10px rgba(0, 0, 0, 0.7), 0 0 20px ${project.color}18`
            : `0 14px 30px -8px rgba(0, 0, 0, 0.1), 0 0 15px ${project.color}20`
        }}
      >
        <div className="relative h-60 sm:h-80 md:h-96 w-full overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />
        </div>

        {/* Quick Stats Banner inside media showcase */}
        {project.stats && (
          <div className="bg-black/85 backdrop-blur-md border-t border-white/10 p-3.5 sm:p-4">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center divide-x divide-white/10">
              {project.stats.map((stat, i) => (
                <div key={i} className={i !== 0 ? "pl-3" : ""}>
                  <p className="text-base sm:text-lg font-extrabold tracking-tight"
                    style={{ color: i === 0 ? project.color : "#fff" }}
                  >
                    {stat.value}
                  </p>
                  <p className="text-[10px] sm:text-[11px] text-slate-400 font-medium uppercase tracking-wider mt-0.5">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Content Sections */}
      <div className="space-y-6">

        {/* 1. Objective & What I Built (2 clean cards) */}
        {project.summary && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl border border-slate-200/80 dark:border-white/10 bg-white/80 dark:bg-black/60 backdrop-blur-xl shadow-sm">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 block mb-2">
                The Objective
              </span>
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {project.summary.objective}
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-slate-200/80 dark:border-white/10 bg-white/80 dark:bg-black/60 backdrop-blur-xl shadow-sm">
              <span className="text-xs font-bold uppercase tracking-wider block mb-2" style={{ color: project.color }}>
                What I Built
              </span>
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {project.summary.built}
              </p>
            </div>
          </div>
        )}

        {/* 2. Key Engineering & Automation Highlights */}
        {project.highlights && (
          <section className="rounded-2xl border border-slate-200/80 dark:border-white/10 bg-white/80 dark:bg-black/60 backdrop-blur-xl p-5 sm:p-6 shadow-sm">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider mb-4"
              style={{ color: project.color }}
            >
              <Terminal size={14} />
              <span>Key Technical & Automation Highlights</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {project.highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl border border-slate-200/80 dark:border-white/10 bg-slate-50 dark:bg-white/[0.02]"
                >
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-900 dark:text-white mb-1.5">
                    <CheckCircle2 size={15} style={{ color: project.color }} className="shrink-0" />
                    <span>{item.title}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 3. Problem Solving & Challenges */}
        {project.challenges && (
          <section className="rounded-2xl border border-slate-200/80 dark:border-white/10 bg-white/80 dark:bg-black/60 backdrop-blur-xl p-5 sm:p-6 shadow-sm">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider mb-4"
              style={{ color: project.color }}
            >
              <Cpu size={14} />
              <span>Challenges Faced & Technical Solutions</span>
            </div>

            <div className="space-y-3.5">
              {project.challenges.map((c, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.02]"
                >
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white mb-2">
                    {c.title}
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm">
                    <div className="p-3 rounded-lg bg-rose-50 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-500/20 text-slate-700 dark:text-slate-300">
                      <span className="block text-[11px] font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400 mb-0.5">Problem:</span>
                      {c.problem}
                    </div>
                    <div className="p-3 rounded-lg bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-500/20 text-slate-700 dark:text-slate-300">
                      <span className="block text-[11px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-0.5">Solution:</span>
                      {c.solution}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 4. Tech Stack */}
        <section className="rounded-2xl border border-slate-200/80 dark:border-white/10 bg-white/80 dark:bg-black/60 backdrop-blur-xl p-5 sm:p-6 shadow-sm">
          <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">Technologies Used</h2>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t, idx) => (
              <span
                key={idx}
                className="px-3.5 py-1.5 rounded-lg text-xs font-medium border text-slate-800 dark:text-slate-200"
                style={{
                  backgroundColor: isDark ? "rgba(255, 255, 255, 0.04)" : "rgba(0, 0, 0, 0.03)",
                  borderColor: isDark ? `${project.color}44` : "rgba(203, 213, 225, 0.8)"
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </section>

        {/* Quick Contact CTA */}
        <div className="rounded-2xl border border-slate-200/80 dark:border-white/10 bg-gradient-to-r from-cyan-50 via-white to-blue-50 dark:from-cyan-950/30 dark:via-black dark:to-blue-950/30 p-6 sm:p-8 text-center shadow-sm transition-colors">
          <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mb-2 transition-colors">
            Interested in discussing this project?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-md mx-auto mb-5 transition-colors">
            Open to Junior Automation Developer, QA Engineer, or Graduate Software roles.
          </p>
          <a
            href="mailto:Reecebygraveuk@gmail.com"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-xs sm:text-sm text-black bg-gradient-to-r from-cyan-400 to-blue-500 hover:shadow-[0_0_20px_rgba(56,189,248,0.5)] transition duration-300 transform hover:-translate-y-0.5"
          >
            <Mail size={14} />
            <span>Contact Reece</span>
          </a>
        </div>

      </div>

    </div>
  );
};

export default ProjectDetail;
