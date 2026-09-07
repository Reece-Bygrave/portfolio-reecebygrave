// src/pages/ProjectDetail.jsx
import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Sparkles,
  CheckCircle2,
  Mail,
  AlertCircle,
  Wrench
} from "lucide-react";
import { getProjectBySlug } from "../data/projectsData";

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
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-black font-semibold text-sm hover:bg-slate-800 dark:hover:bg-slate-100 transition duration-300 shadow-sm"
        >
          <ArrowLeft size={16} />
          <span>Back to Projects</span>
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
          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-black dark:hover:text-white bg-white/80 dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/25 transition duration-200 group shadow-sm"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform duration-200" />
          <span>Back to Projects</span>
        </button>

        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-slate-700 dark:text-white bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/20 border border-slate-200 dark:border-white/15 transition duration-200"
        >
          <Github size={14} />
          <span>GitHub Repo</span>
          <ExternalLink size={12} className="text-slate-400" />
        </a>
      </div>

      {/* Header */}
      <header className="mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3 border border-slate-200 dark:border-white/15 bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 transition-colors">
          <Sparkles size={13} />
          <span>{project.category}</span>
        </div>

        <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight mb-3 transition-colors">
          {project.title}
        </h1>

        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl transition-colors">
          {project.tagline}
        </p>
      </header>

      {/* Featured Visual with Key Stats */}
      <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-white/15 bg-zinc-950 mb-7 shadow-lg">
        <div className="relative h-56 sm:h-72 md:h-80 w-full overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />
        </div>

        {/* Quick Stats Bar */}
        {project.stats && (
          <div className="bg-black/85 backdrop-blur-md border-t border-white/10 p-3 sm:p-3.5">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center divide-x divide-white/10">
              {project.stats.map((stat, i) => (
                <div key={i} className={i !== 0 ? "pl-2" : ""}>
                  <p className="text-sm sm:text-base font-extrabold text-white tracking-tight">
                    {stat.value}
                  </p>
                  <p className="text-[10px] text-slate-400 font-medium uppercase tracking-wider mt-0.5">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Digestible Content */}
      <div className="space-y-6">

        {/* Overview: Problem & What I Built */}
        {project.overview && (
          <section className="rounded-2xl border border-slate-200/80 dark:border-white/10 bg-white/80 dark:bg-black/60 backdrop-blur-xl p-5 sm:p-6 shadow-sm">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-4">
              Project Overview
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200/70 dark:border-white/5">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200 mb-1.5">
                  The Problem
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {project.overview.problem}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200/70 dark:border-white/5">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200 mb-1.5">
                  The Solution
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {project.overview.solution}
                </p>
              </div>
            </div>

            {/* Key Automation / Engineering Highlights */}
            {project.automationHighlights && (
              <div className="pt-3 border-t border-slate-200/70 dark:border-white/5">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200 mb-2.5">
                  Key Deliverables
                </h3>
                <div className="space-y-2">
                  {project.automationHighlights.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                      <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-slate-500 dark:text-slate-400" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>
        )}

        {/* Technologies & Tools */}
        <section className="rounded-2xl border border-slate-200/80 dark:border-white/10 bg-white/80 dark:bg-black/60 backdrop-blur-xl p-5 sm:p-6 shadow-sm">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
            <Wrench size={13} />
            <span>Technologies & Tools</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-lg text-xs font-medium border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.03] text-slate-700 dark:text-slate-300"
              >
                {t}
              </span>
            ))}
          </div>
        </section>

      </div>

      {/* Centered Bottom Action Button */}
      <div className="mt-12 mb-6 flex justify-center items-center text-center">
        <a
          href="mailto:Reecebygraveuk@gmail.com"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium text-sm text-white dark:text-black bg-slate-900 dark:bg-white hover:bg-slate-800 dark:hover:bg-slate-100 transition duration-300 transform hover:-translate-y-0.5 shadow-md"
        >
          <Mail size={16} />
          <span>Contact Reece</span>
        </a>
      </div>

    </div>
  );
};

export default ProjectDetail;
