// src/pages/ProjectDetail.jsx
import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Github,
  Sparkles,
  Terminal,
  CheckCircle2,
  Layers,
  Cpu,
  Database,
  ShieldCheck,
  Activity,
  Mail,
  AlertCircle,
  Clock,
  UserCheck
} from "lucide-react";
import { projects, getProjectBySlug } from "../data/projectsData";
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
          The requested project specification could not be located. Browse all available engineering projects below.
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

  // Find next project for the bottom teaser
  const currentIndex = projects.findIndex((p) => p.slug === project.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <div className="min-h-screen pt-28 pb-24 px-4 sm:px-6 max-w-5xl mx-auto">
      
      {/* Top Navigation & Breadcrumb */}
      <div className="flex items-center justify-between gap-4 mb-8">
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

      {/* Hero Header */}
      <header className="mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 border transition-colors"
          style={{
            borderColor: `${project.color}55`,
            backgroundColor: `${project.color}15`,
            color: project.color
          }}
        >
          <Sparkles size={13} />
          <span>{project.category}</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight mb-4 transition-colors">
          {project.title}
        </h1>

        <p className="text-base sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl mb-8 transition-colors">
          {project.tagline}
        </p>

        {/* Metadata Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-2xl bg-white/80 dark:bg-black/60 backdrop-blur-xl border border-slate-200/80 dark:border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.04)] dark:shadow-none transition-colors">
          <div className="p-2">
            <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 mb-1">
              <UserCheck size={13} style={{ color: project.color }} />
              <span>Role</span>
            </div>
            <p className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white truncate">{project.role}</p>
          </div>

          <div className="p-2">
            <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 mb-1">
              <Clock size={13} style={{ color: project.color }} />
              <span>Timeline</span>
            </div>
            <p className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white truncate">{project.timeline}</p>
          </div>

          <div className="p-2">
            <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 mb-1">
              <Activity size={13} style={{ color: project.color }} />
              <span>Status</span>
            </div>
            <p className="text-xs sm:text-sm font-semibold text-emerald-600 dark:text-emerald-400 truncate">{project.status}</p>
          </div>

          <div className="p-2 flex items-center justify-start sm:justify-end">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-700 dark:text-white bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/20 border border-slate-200 dark:border-white/15 transition duration-300"
            >
              <Github size={14} />
              <span>Repository</span>
              <ExternalLink size={12} className="text-slate-400" />
            </a>
          </div>
        </div>
      </header>

      {/* Featured Media Showcase */}
      <div className="relative rounded-3xl overflow-hidden border border-slate-200 dark:border-white/15 bg-zinc-950 mb-12 shadow-2xl group"
        style={{
          boxShadow: isDark
            ? `0 20px 50px -15px rgba(0, 0, 0, 0.8), 0 0 25px ${project.color}22`
            : `0 20px 40px -10px rgba(0, 0, 0, 0.12), 0 0 20px ${project.color}25`
        }}
      >
        <div className="relative h-72 sm:h-96 md:h-[440px] w-full overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
        </div>

        {/* Floating Badge on Media */}
        <div className="absolute top-5 left-5">
          <span
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide backdrop-blur-md border shadow-lg"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.8)",
              borderColor: project.color,
              color: "#fff",
            }}
          >
            <span
              className="h-2 w-2 rounded-full animate-pulse"
              style={{ backgroundColor: project.color }}
            />
            {project.badgeText}
          </span>
        </div>

        {/* Quick Stats Banner inside media showcase */}
        {project.stats && (
          <div className="absolute bottom-0 inset-x-0 bg-black/85 backdrop-blur-md border-t border-white/10 p-4 sm:p-5">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center divide-x divide-white/10">
              {project.stats.map((stat, i) => (
                <div key={i} className={i !== 0 ? "pl-4" : ""}>
                  <p className="text-lg sm:text-xl font-extrabold tracking-tight"
                    style={{ color: i === 0 ? project.color : "#fff" }}
                  >
                    {stat.value}
                  </p>
                  <p className="text-[11px] sm:text-xs text-slate-400 font-medium uppercase tracking-wider mt-0.5">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Main Content Grid */}
      <div className="space-y-12">

        {/* 1. Problem, Solution & Impact */}
        <section className="rounded-3xl border border-slate-200/80 dark:border-white/10 bg-white/80 dark:bg-black/60 backdrop-blur-xl p-6 sm:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.04)] dark:shadow-none transition-colors">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 mb-6">
            <Sparkles size={14} style={{ color: project.color }} />
            <span>Project Overview & Context</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200/70 dark:border-white/5">
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-rose-400" />
                The Problem
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {project.overview.problem}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200/70 dark:border-white/5">
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: project.color }} />
                The Solution
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {project.overview.solution}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200/70 dark:border-white/5">
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                The Impact
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {project.overview.impact}
              </p>
            </div>
          </div>
        </section>

        {/* 2. System Architecture & Pipeline Breakdown */}
        {project.architecture && (
          <section className="rounded-3xl border border-slate-200/80 dark:border-white/10 bg-white/80 dark:bg-black/60 backdrop-blur-xl p-6 sm:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.04)] dark:shadow-none transition-colors">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider mb-3"
              style={{ color: project.color }}
            >
              <Layers size={14} />
              <span>System Architecture & Pipeline</span>
            </div>
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6 transition-colors">
              How the System Operates End-to-End
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.architecture.layers.map((layer, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.02] hover:border-slate-300 dark:hover:border-white/20 transition duration-300"
                >
                  <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2" style={{ color: idx === 0 ? project.color : undefined }}>
                    {layer.title}
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {layer.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 3. Automation, Testing & QA Engineering Highlights */}
        {project.qaAutomation && (
          <section className="rounded-3xl border border-slate-200/80 dark:border-white/10 bg-gradient-to-b from-white/90 via-slate-50 to-white/90 dark:from-black/80 dark:via-black/60 dark:to-black/80 backdrop-blur-xl p-6 sm:p-8 relative overflow-hidden transition-colors"
            style={{
              borderColor: isDark ? `${project.color}40` : "rgba(203, 213, 225, 0.8)",
              boxShadow: isDark ? `0 0 30px ${project.color}15` : "0 4px 20px rgba(0,0,0,0.04)"
            }}
          >
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider mb-2"
              style={{ color: project.color }}
            >
              <Terminal size={14} />
              <span>Quality Assurance & Reliability</span>
            </div>

            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-3 transition-colors">
              {project.qaAutomation.title}
            </h2>

            <p className="text-sm text-slate-600 dark:text-slate-300 mb-6 max-w-2xl transition-colors">
              {project.qaAutomation.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {project.qaAutomation.points.map((point, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-4 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.02]"
                >
                  <CheckCircle2
                    size={18}
                    className="mt-0.5 shrink-0"
                    style={{ color: project.color }}
                  />
                  <span className="text-sm text-slate-700 dark:text-slate-200 leading-relaxed">{point}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 4. Key Technical Features */}
        {project.keyFeatures && (
          <section className="rounded-3xl border border-slate-200/80 dark:border-white/10 bg-white/80 dark:bg-black/60 backdrop-blur-xl p-6 sm:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.04)] dark:shadow-none transition-colors">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider mb-3"
              style={{ color: project.color }}
            >
              <Cpu size={14} />
              <span>Engineered Capabilities</span>
            </div>

            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6 transition-colors">
              Core Technical Features
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.keyFeatures.map((feat, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.02] hover:border-slate-300 dark:hover:border-white/25 transition duration-300"
                >
                  <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white text-base mb-2">
                    <ShieldCheck size={16} style={{ color: project.color }} />
                    <span>{feat.title}</span>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 5. Challenges & Solutions */}
        {project.challenges && (
          <section className="rounded-3xl border border-slate-200/80 dark:border-white/10 bg-white/80 dark:bg-black/60 backdrop-blur-xl p-6 sm:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.04)] dark:shadow-none transition-colors">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider mb-3"
              style={{ color: project.color }}
            >
              <Database size={14} />
              <span>Engineering Hurdles</span>
            </div>

            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6 transition-colors">
              Challenges Faced & Problem Solving
            </h2>

            <div className="space-y-4">
              {project.challenges.map((c, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.02]"
                >
                  <h4 className="text-base font-bold text-slate-900 dark:text-white mb-3">
                    {c.title}
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div className="p-3.5 rounded-xl bg-rose-50 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-500/20 text-slate-700 dark:text-slate-300">
                      <span className="block text-xs font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400 mb-1">Obstacle:</span>
                      {c.challenge}
                    </div>
                    <div className="p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-500/20 text-slate-700 dark:text-slate-300">
                      <span className="block text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-1">Resolution:</span>
                      {c.solution}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 6. Full Technology Stack */}
        <section className="rounded-3xl border border-slate-200/80 dark:border-white/10 bg-white/80 dark:bg-black/60 backdrop-blur-xl p-6 sm:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.04)] dark:shadow-none transition-colors">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Technologies & Tooling</h2>
          <div className="flex flex-wrap gap-2.5">
            {project.tech.map((t, idx) => (
              <span
                key={idx}
                className="px-4 py-2 rounded-xl text-sm font-medium border text-slate-700 dark:text-slate-200"
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

        {/* 7. Next Project Switcher Teaser */}
        {nextProject && (
          <div className="pt-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs uppercase font-mono tracking-widest text-slate-500 dark:text-slate-400">Next Featured Project</span>
              <span className="text-xs text-slate-500 dark:text-slate-400">Explore both case studies</span>
            </div>

            <Link
              to={`/projects/${nextProject.slug}`}
              className="group flex flex-col sm:flex-row items-start sm:items-center justify-between p-6 rounded-3xl border border-slate-200/80 dark:border-white/10 bg-white/80 dark:bg-black/70 hover:bg-slate-50 dark:hover:bg-black/90 transition-all duration-500 transform hover:-translate-y-1 shadow-[0_6px_25px_rgba(0,0,0,0.05)] dark:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]"
            >
              <div className="flex items-center gap-4 mb-4 sm:mb-0">
                <div className="w-16 h-16 rounded-2xl overflow-hidden bg-zinc-900 border border-slate-200 dark:border-white/10 shrink-0">
                  <img
                    src={nextProject.image}
                    alt={nextProject.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider block mb-0.5"
                    style={{ color: nextProject.color }}
                  >
                    {nextProject.category}
                  </span>
                  <h4 className="text-lg font-extrabold text-slate-900 dark:text-white transition-colors">
                    {nextProject.title}
                  </h4>
                </div>
              </div>

              <div className="inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-300"
                style={{ color: nextProject.color }}
              >
                <span>Read Case Study</span>
                <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform duration-300" />
              </div>
            </Link>
          </div>
        )}

        {/* Quick CTA to Connect */}
        <div className="rounded-3xl border border-slate-200/80 dark:border-white/10 bg-gradient-to-r from-cyan-50 via-white to-blue-50 dark:from-cyan-950/30 dark:via-black dark:to-blue-950/30 p-8 sm:p-10 text-center shadow-[0_4px_20px_rgba(0,0,0,0.04)] dark:shadow-none transition-colors">
          <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-2 transition-colors">Interested in discussing this work?</h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 max-w-md mx-auto mb-6 transition-colors">
            Available for Junior Automation Developer, QA Engineer, or Graduate Software roles.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="mailto:Reecebygraveuk@gmail.com"
              className="flex items-center gap-2 px-6 py-2.5 rounded-xl font-medium text-sm text-black bg-gradient-to-r from-cyan-400 to-blue-500 hover:shadow-[0_0_20px_rgba(56,189,248,0.5)] transition duration-300 transform hover:-translate-y-0.5"
            >
              <Mail size={15} />
              <span>Contact Reece</span>
            </a>
          </div>
        </div>

      </div>

    </div>
  );
};

export default ProjectDetail;
