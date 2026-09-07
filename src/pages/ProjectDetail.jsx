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
  ShieldCheck,
  Mail,
  AlertCircle,
  Clock,
  UserCheck,
  Wrench,
  Flame
} from "lucide-react";
import { projects, getProjectBySlug } from "../data/projectsData";

const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = getProjectBySlug(slug);

  // If project slug not found
  if (!project) {
    return (
      <div className="min-h-screen pt-32 pb-20 px-4 max-w-4xl mx-auto flex flex-col items-center justify-center text-center">
        <div className="p-4 rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 mb-6 text-slate-600 dark:text-slate-400">
          <AlertCircle size={40} />
        </div>
        <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-3">Project Not Found</h1>
        <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-md">
          The requested project could not be located.
        </p>
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-black font-semibold text-sm hover:bg-slate-800 dark:hover:bg-slate-100 transition duration-300 shadow-sm"
        >
          <ArrowLeft size={16} />
          <span>Back to All Projects</span>
        </Link>
      </div>
    );
  }

  // Find next project for bottom switcher
  const currentIndex = projects.findIndex((p) => p.slug === project.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <div className="min-h-screen pt-28 pb-20 px-4 sm:px-6 max-w-5xl mx-auto">
      
      {/* Top Navigation & Breadcrumbs */}
      <div className="flex items-center justify-between gap-4 mb-6">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-black dark:hover:text-white bg-white/80 dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/25 transition duration-200 group shadow-sm"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform duration-200" />
          <span>Back to Projects</span>
        </button>

        <div className="hidden sm:flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 font-mono">
          <Link to="/" className="hover:text-black dark:hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <Link to="/projects" className="hover:text-black dark:hover:text-white transition-colors">Projects</Link>
          <span>/</span>
          <span className="text-slate-800 dark:text-slate-200 truncate max-w-[200px]">{project.shortTitle || project.title}</span>
        </div>
      </div>

      {/* Header */}
      <header className="mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3 border border-slate-200 dark:border-white/15 bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 transition-colors">
          <Sparkles size={13} />
          <span>{project.category}</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight mb-3 transition-colors">
          {project.title}
        </h1>

        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6 max-w-3xl transition-colors">
          {project.tagline}
        </p>

        {/* Quick Facts Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-3.5 rounded-2xl bg-white/80 dark:bg-black/60 backdrop-blur-xl border border-slate-200/80 dark:border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.04)] dark:shadow-none transition-colors">
          <div className="p-1.5">
            <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 mb-0.5">
              <UserCheck size={13} />
              <span>Role</span>
            </div>
            <p className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white truncate">{project.role}</p>
          </div>

          <div className="p-1.5">
            <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 mb-0.5">
              <Clock size={13} />
              <span>Timeline</span>
            </div>
            <p className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white truncate">{project.timeline}</p>
          </div>

          <div className="p-1.5">
            <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 mb-0.5">
              <ShieldCheck size={13} />
              <span>Status</span>
            </div>
            <p className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white truncate">{project.status}</p>
          </div>

          <div className="p-1.5 flex items-center justify-start sm:justify-end">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-slate-700 dark:text-white bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/20 border border-slate-200 dark:border-white/15 transition duration-200"
            >
              <Github size={13} />
              <span>Repository</span>
              <ExternalLink size={11} className="text-slate-400" />
            </a>
          </div>
        </div>
      </header>

      {/* Featured Visual with Performance Metrics Strip */}
      <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-white/15 bg-zinc-950 mb-8 shadow-xl">
        <div className="relative h-60 sm:h-80 md:h-[400px] w-full overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />
        </div>

        {/* Quick Stats Bar under image */}
        {project.stats && (
          <div className="bg-black/85 backdrop-blur-md border-t border-white/10 p-3.5 sm:p-4">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center divide-x divide-white/10">
              {project.stats.map((stat, i) => (
                <div key={i} className={i !== 0 ? "pl-3" : ""}>
                  <p className="text-base sm:text-lg font-extrabold text-white tracking-tight">
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

      {/* Digestible Content Stack */}
      <div className="space-y-6">

        {/* 1. At a Glance: Problem, Solution & Impact */}
        {project.overview && (
          <section className="rounded-2xl border border-slate-200/80 dark:border-white/10 bg-white/80 dark:bg-black/60 backdrop-blur-xl p-5 sm:p-6 shadow-sm">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-4">
              <Sparkles size={14} />
              <span>Executive Summary</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200/70 dark:border-white/5">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200 block mb-1.5 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                  The Problem
                </span>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {project.overview.problem}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200/70 dark:border-white/5">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200 block mb-1.5 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                  What I Engineered
                </span>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {project.overview.solution}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200/70 dark:border-white/5">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200 block mb-1.5 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                  Key Impact
                </span>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {project.overview.impact}
                </p>
              </div>
            </div>
          </section>
        )}

        {/* 2. System Architecture & Pipeline Breakdown */}
        {project.architecture && (
          <section className="rounded-2xl border border-slate-200/80 dark:border-white/10 bg-white/80 dark:bg-black/60 backdrop-blur-xl p-5 sm:p-6 shadow-sm">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-4">
              <Layers size={14} />
              <span>System Architecture & Pipeline</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {project.architecture.layers.map((layer, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl border border-slate-200/80 dark:border-white/10 bg-slate-50 dark:bg-white/[0.02] hover:border-slate-300 dark:hover:border-white/20 transition duration-200"
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded border border-slate-300 dark:border-white/20 text-slate-700 dark:text-slate-300 bg-slate-200/50 dark:bg-white/10">
                      0{idx + 1}
                    </span>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                      {layer.title}
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {layer.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 3. Testing, Reliability & QA Practices */}
        {project.qaAutomation && (
          <section className="rounded-2xl border border-slate-200/80 dark:border-white/10 bg-white/80 dark:bg-black/60 backdrop-blur-xl p-5 sm:p-6 shadow-sm">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
              <Terminal size={14} />
              <span>Quality Assurance & Automation Highlights</span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
              {project.qaAutomation.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.qaAutomation.points.map((point, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3.5 rounded-xl border border-slate-200/80 dark:border-white/10 bg-slate-50 dark:bg-white/[0.02]"
                >
                  <CheckCircle2
                    size={16}
                    className="mt-0.5 shrink-0 text-slate-600 dark:text-slate-300"
                  />
                  <span className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 4. Practical Problem Solving & Challenges */}
        {project.challenges && (
          <section className="rounded-2xl border border-slate-200/80 dark:border-white/10 bg-white/80 dark:bg-black/60 backdrop-blur-xl p-5 sm:p-6 shadow-sm">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-4">
              <Flame size={14} />
              <span>Challenges Solved & Engineering Trade-offs</span>
            </div>

            <div className="space-y-3.5">
              {project.challenges.map((c, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.02]"
                >
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white mb-2.5">
                    {c.title}
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm">
                    <div className="p-3 rounded-lg bg-slate-100/70 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300">
                      <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200 mb-0.5">Obstacle:</span>
                      {c.challenge}
                    </div>
                    <div className="p-3 rounded-lg bg-slate-100/70 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300">
                      <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200 mb-0.5">Resolution:</span>
                      {c.solution}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 5. Technologies & Tooling */}
        <section className="rounded-2xl border border-slate-200/80 dark:border-white/10 bg-white/80 dark:bg-black/60 backdrop-blur-xl p-5 sm:p-6 shadow-sm">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
            <Wrench size={13} />
            <span>Technologies & Tools</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t, idx) => (
              <span
                key={idx}
                className="px-3.5 py-1.5 rounded-lg text-xs font-medium border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.03] text-slate-700 dark:text-slate-300"
              >
                {t}
              </span>
            ))}
          </div>
        </section>

        {/* 6. Next Project Switcher */}
        {nextProject && (
          <div className="pt-2">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] uppercase font-mono tracking-widest text-slate-500 dark:text-slate-400">Next Featured Project</span>
              <span className="text-[11px] text-slate-500 dark:text-slate-400">Quick Switch</span>
            </div>

            <Link
              to={`/projects/${nextProject.slug}`}
              className="group flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 sm:p-5 rounded-2xl border border-slate-200/80 dark:border-white/10 bg-white/80 dark:bg-black/70 hover:bg-slate-50 dark:hover:bg-black/90 transition-all duration-300 transform hover:-translate-y-0.5 shadow-sm"
            >
              <div className="flex items-center gap-3.5 mb-3 sm:mb-0">
                <div className="w-12 h-12 rounded-xl overflow-hidden bg-zinc-900 border border-slate-200 dark:border-white/10 shrink-0">
                  <img
                    src={nextProject.image}
                    alt={nextProject.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider block mb-0.5 text-slate-500 dark:text-slate-400">
                    {nextProject.category}
                  </span>
                  <h4 className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white transition-colors">
                    {nextProject.title}
                  </h4>
                </div>
              </div>

              <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 group-hover:text-black dark:group-hover:text-white transition-colors duration-200">
                <span>View Project</span>
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-200" />
              </div>
            </Link>
          </div>
        )}

        {/* 7. Quick Contact CTA */}
        <div className="rounded-2xl border border-slate-200/80 dark:border-white/10 bg-white/80 dark:bg-black/60 p-6 sm:p-8 text-center shadow-sm transition-colors">
          <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mb-2 transition-colors">
            Interested in discussing this work?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-md mx-auto mb-5 transition-colors">
            Available for Junior Automation Developer, QA Engineer, or Graduate Software roles.
          </p>
          <a
            href="mailto:Reecebygraveuk@gmail.com"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-xs sm:text-sm text-white dark:text-black bg-slate-900 dark:bg-white hover:bg-slate-800 dark:hover:bg-slate-100 transition duration-300 transform hover:-translate-y-0.5 shadow-sm"
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
