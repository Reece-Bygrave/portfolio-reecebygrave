// src/components/Hero.jsx
import React from "react";
import "../styles/Hero.css";
import ScrollIndicator from "./ScrollIndicator";

const Hero = () => {
  return (
    <section id="hero"className="relative min-h-screen flex items-center justify-center">
      
      <div className="hero-content relative z-10 text-center px-6 max-w-4xl text-white">
        <h1 className="hero-title">
          Building clean, performant web
          <span>experiences with clarity and intent.</span>
        </h1>

        <p className="hero-subtitle">
          Frontend-Focused <span>Full-Stack Developer</span>
        </p>

        <p className="hero-stack">
          React · TypeScript · Next.js · Node.js
        </p>

        <div className="hero-actions">
          <a href="#projects" className="btn primary">
            View Projects
          </a>
          <a
            href="https://github.com/Reece-Bygrave"
            target="_blank"
            rel="noopener noreferrer"
            className="btn secondary"
          >
            GitHub
          </a>
        </div>
      </div>

      <ScrollIndicator />
    </section>
  );
};

export default Hero;
