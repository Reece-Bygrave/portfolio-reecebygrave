import React, { useState } from "react";
import { ExternalLink, Github, Terminal, CheckCircle2, Sparkles, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Real-time Crime Tracking Application",
    category: "Automated Ingestion & Spatial Analytics",
    description:
      "A full-stack mobile and cloud tracking system engineered with automated background API polling, spatial data parsing, and live incident mapping.",
    image: "/images/project1.png",
    color: "#00f0ff", // Neon Cyan
    glowRgba: "rgba(0, 240, 255, 0.4)",
    badgeText: "Data Pipeline & Mapping",
    automationHighlights: [
      "Automated background API polling and real-time incident parsing",
      "Spatial SQL queries optimized for live heatmapping & clustering",
      "Automated error recovery and data normalization pipeline"
    ],
    tech: ["Java / Python", "SQL", "Android Studio", "Google Cloud", "REST APIs"],
    link: "https://github.com/Reece-Bygrave"
  },
  {
    title: "Holographic Pokemon Trading Card Game (TCG)",
    category: "Computer Vision & Mixed Reality Automation",
    description:
      "An augmented reality application on Microsoft HoloLens 2 utilizing computer vision pipelines to automatically detect, track physical cards, and render dynamic holographic card statistics in 3D space.",
    image: "/images/project2.jpg",
    color: "#ff00ff", // Neon Pink
    glowRgba: "rgba(255, 0, 255, 0.4)",
    badgeText: "Computer Vision & MR",
    automationHighlights: [
      "Automated computer vision target recognition & real-time pose tracking",
      "Event dispatching pipeline for 3D gesture interaction on HoloLens 2",
      "Automated real-time state synchronization in Unity MRTK"
    ],
    tech: ["C#", "Unity 3D", "MRTK", "Vuforia CV", "HoloLens 2"],
    link: "https://github.com/Reece-Bygrave"
  }
];

const Grid = () => {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  return (
    <div className="px-4 py-28 max-w-6xl mx-auto">
      
      {/* Section Header with CV / Automation emphasis */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-cyan-400 bg-cyan-950/40 border border-cyan-400/30 mb-3">
            <Sparkles size={13} />
            Featured Technical Projects
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Selected Automation & Engineering Work
          </h2>
          <p className="mt-2 text-slate-400 text-base max-w-xl">
            Hands-on software and automation systems demonstrating API ingestion, computer vision, data structures, and pipeline reliability.
          </p>
        </div>

        <a
          href="https://github.com/Reece-Bygrave"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-cyan-400 transition group self-start md:self-auto"
        >
          <span>View All on GitHub</span>
          <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </div>

      {/* 2 Featured Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        {projects.map((p, i) => {
          const isHovered = hoveredIdx === i;

          return (
            <div
              key={i}
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(null)}
              className="group relative flex flex-col rounded-2xl overflow-hidden bg-black/75 border transition-all duration-500 transform hover:-translate-y-2"
              style={{
                borderColor: isHovered ? p.color : "rgba(255, 255, 255, 0.12)",
                boxShadow: isHovered
                  ? `0 0 25px ${p.color}, 0 0 60px ${p.glowRgba}`
                  : `0 0 12px ${p.color}33`,
              }}
            >
              {/* Image Showcase with Hover Zoom & Action Overlay */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-zinc-900">
                {p.image && (
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                )}

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent transition-opacity duration-300 group-hover:opacity-85" />

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

                {/* Hover Reveal Action Overlay Button */}
                <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pointer-events-auto flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-white bg-black/80 backdrop-blur-md border border-white/20 shadow-2xl transition-all duration-300 transform opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:bg-white/20"
                    style={{ borderColor: p.color }}
                  >
                    <span>Inspect Code on GitHub</span>
                    <ExternalLink size={14} style={{ color: p.color }} />
                  </a>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex flex-col flex-1 gap-4">
                
                {/* Category & Title */}
                <div>
                  <span
                    className="text-xs font-bold uppercase tracking-wider block mb-1 transition-colors duration-300"
                    style={{ color: p.color }}
                  >
                    {p.category}
                  </span>
                  
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight group-hover:text-white transition-colors duration-300">
                    {p.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-300 leading-relaxed">
                  {p.description}
                </p>

                {/* Key Automation Highlights (Interactive Reveal / Illumination on Hover) */}
                <div
                  className="rounded-xl p-3.5 sm:p-4 border transition-colors duration-300"
                  style={{
                    backgroundColor: isHovered ? "rgba(255, 255, 255, 0.04)" : "rgba(255, 255, 255, 0.015)",
                    borderColor: isHovered ? "rgba(255, 255, 255, 0.2)" : "rgba(255, 255, 255, 0.07)"
                  }}
                >
                  <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                    <Terminal size={13} style={{ color: p.color }} />
                    <span>Automation Highlights</span>
                  </div>

                  <ul className="space-y-2">
                    {p.automationHighlights.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2
                          size={15}
                          className="mt-0.5 shrink-0 transition-colors duration-300"
                          style={{ color: isHovered ? p.color : "#94a3b8" }}
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack Pills */}
                <div className="mt-auto pt-2">
                  <div className="flex flex-wrap gap-2">
                    {p.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-medium px-2.5 py-1 rounded-lg border transition-all duration-300"
                        style={{
                          backgroundColor: isHovered ? "rgba(255, 255, 255, 0.08)" : "rgba(255, 255, 255, 0.03)",
                          borderColor: isHovered ? `${p.color}66` : "rgba(255, 255, 255, 0.12)",
                          color: isHovered ? "#fff" : "#cbd5e1"
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Action Link */}
                <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold transition-colors duration-300"
                    style={{ color: isHovered ? p.color : "#94a3b8" }}
                  >
                    <Github size={15} />
                    <span>View Repository & Documentation</span>
                    <ArrowUpRight
                      size={14}
                      className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                    />
                  </a>
                </div>

              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};

export default Grid;
