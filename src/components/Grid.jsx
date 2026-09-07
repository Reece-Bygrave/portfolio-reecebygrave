import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Terminal, CheckCircle2, Sparkles, ArrowUpRight, ArrowRight, Layers } from "lucide-react";
import { projects } from "../data/projectsData";
import { useTheme } from "../context/ThemeContext";

const Grid = () => {
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className="px-4 py-28 max-w-6xl mx-auto">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-cyan-700 dark:text-cyan-400 bg-cyan-100/60 dark:bg-cyan-950/40 border border-cyan-500/30 dark:border-cyan-400/30 mb-3 transition-colors">
            <Sparkles size={13} />
            Featured Technical Projects
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight transition-colors">
            Selected Automation & Engineering Work
          </h2>
          <p className="mt-2 text-slate-600 dark:text-slate-400 text-base max-w-xl transition-colors">
            Hands-on software and automation systems demonstrating API ingestion, computer vision, data structures, and pipeline reliability. Click any project to view its full case study.
          </p>
        </div>

        <a
          href="https://github.com/Reece-Bygrave"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition group self-start md:self-auto"
        >
          <span>View All on GitHub</span>
          <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
        </a>
      </div>

      {/* 2 Featured Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        {projects.map((p, i) => {
          const isHovered = hoveredIdx === i;

          return (
            <Link
              key={p.slug || i}
              to={`/projects/${p.slug}`}
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(null)}
              className="group relative flex flex-col rounded-2xl overflow-hidden bg-white/80 dark:bg-black/80 border transition-all duration-700 ease-out transform hover:-translate-y-1 block text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 backdrop-blur-md"
              style={{
                borderColor: isHovered
                  ? p.color
                  : isDark
                  ? "rgba(255, 255, 255, 0.12)"
                  : "rgba(203, 213, 225, 0.8)",
                boxShadow: isHovered
                  ? isDark
                    ? `0 14px 30px -8px rgba(0, 0, 0, 0.7), 0 0 20px ${p.color}2e, 0 0 1px ${p.color}`
                    : `0 16px 32px -6px rgba(0, 0, 0, 0.12), 0 0 16px ${p.color}33, 0 0 1px ${p.color}`
                  : isDark
                  ? `0 6px 20px -4px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.06)`
                  : `0 4px 18px -2px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(203, 213, 225, 0.6)`,
              }}
            >
              {/* Image Showcase with Gentle Hover Zoom & Action Overlay */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-zinc-900">
                {p.image && (
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-104"
                  />
                )}

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent transition-opacity duration-500 group-hover:opacity-85" />

                {/* Top Corner Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide backdrop-blur-md border shadow-lg"
                    style={{
                      backgroundColor: "rgba(0, 0, 0, 0.75)",
                      borderColor: p.color,
                      color: "#fff",
                    }}
                  >
                    <span
                      className="h-2 w-2 rounded-full animate-pulse"
                      style={{ backgroundColor: p.color }}
                    />
                    {p.badgeText}
                  </span>
                </div>

                {/* Hover Reveal Action Overlay */}
                <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
                  <span
                    className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-white bg-black/85 backdrop-blur-md border shadow-2xl transition-all duration-500 ease-out transform opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0"
                    style={{ borderColor: p.color }}
                  >
                    <span>View Project Case Study</span>
                    <ArrowRight size={14} style={{ color: p.color }} />
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex flex-col flex-1 gap-4">
                
                {/* Category & Title */}
                <div>
                  <span
                    className="text-xs font-bold uppercase tracking-wider block mb-1 transition-colors duration-500"
                    style={{ color: p.color }}
                  >
                    {p.category}
                  </span>
                  
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight transition-colors duration-500">
                    {p.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed transition-colors">
                  {p.description}
                </p>

                {/* Key Automation Highlights */}
                <div
                  className="rounded-xl p-3.5 sm:p-4 border transition-colors duration-500"
                  style={{
                    backgroundColor: isHovered
                      ? isDark
                        ? "rgba(255, 255, 255, 0.04)"
                        : "rgba(0, 0, 0, 0.03)"
                      : isDark
                      ? "rgba(255, 255, 255, 0.015)"
                      : "rgba(0, 0, 0, 0.015)",
                    borderColor: isHovered
                      ? isDark
                        ? "rgba(255, 255, 255, 0.2)"
                        : "rgba(148, 163, 184, 0.4)"
                      : isDark
                      ? "rgba(255, 255, 255, 0.07)"
                      : "rgba(226, 232, 240, 0.8)"
                  }}
                >
                  <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2.5">
                    <Terminal size={13} style={{ color: p.color }} />
                    <span>Automation Highlights</span>
                  </div>

                  <ul className="space-y-2">
                    {p.automationHighlights.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                        <CheckCircle2
                          size={15}
                          className="mt-0.5 shrink-0 transition-colors duration-500"
                          style={{ color: isHovered ? p.color : isDark ? "#94a3b8" : "#64748b" }}
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack Pills */}
                <div className="pt-2">
                  <div className="flex flex-wrap gap-2">
                    {p.tech.slice(0, 5).map((t, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-medium px-2.5 py-1 rounded-lg border transition-all duration-500"
                        style={{
                          backgroundColor: isHovered
                            ? isDark
                              ? "rgba(255, 255, 255, 0.08)"
                              : "rgba(0, 0, 0, 0.05)"
                            : isDark
                            ? "rgba(255, 255, 255, 0.03)"
                            : "rgba(0, 0, 0, 0.02)",
                          borderColor: isHovered
                            ? `${p.color}66`
                            : isDark
                            ? "rgba(255, 255, 255, 0.12)"
                            : "rgba(203, 213, 225, 0.8)",
                          color: isDark ? (isHovered ? "#fff" : "#cbd5e1") : (isHovered ? "#0f172a" : "#475569")
                        }}
                      >
                        {t}
                      </span>
                    ))}
                    {p.tech.length > 5 && (
                      <span className="text-xs font-medium px-2 py-1 rounded-lg border border-slate-200 dark:border-white/10 text-slate-500 dark:text-slate-400">
                        +{p.tech.length - 5} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Footer Action Link */}
                <div className="pt-4 mt-auto border-t border-slate-200 dark:border-white/10 flex items-center justify-between">
                  <span
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold transition-colors duration-500"
                    style={{ color: isHovered ? p.color : isDark ? "#94a3b8" : "#64748b" }}
                  >
                    <Layers size={14} />
                    <span>Explore Full Case Study</span>
                    <ArrowRight
                      size={14}
                      className="transform group-hover:translate-x-1.5 transition-transform duration-500"
                    />
                  </span>

                  <span
                    className="text-[11px] font-mono px-2.5 py-1 rounded-md border tracking-wider transition-all duration-500"
                    style={{
                      borderColor: isHovered
                        ? `${p.color}55`
                        : isDark
                        ? "rgba(255, 255, 255, 0.1)"
                        : "rgba(203, 213, 225, 0.8)",
                      color: isHovered ? p.color : isDark ? "#94a3b8" : "#64748b",
                      backgroundColor: isHovered ? `${p.color}15` : "transparent"
                    }}
                  >
                    Deep Dive →
                  </span>
                </div>

              </div>
            </Link>
          );
        })}
      </div>

    </div>
  );
};

export default Grid;
