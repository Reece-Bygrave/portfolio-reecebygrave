// BackgroundLayout.jsx
import React from "react";
import "../styles/Hero.css";

const BackgroundLayout = ({ children }) => {
  const shapes = Array.from({ length: 16 }, (_, i) => ({
    id: i + 1,
    delay: -Math.random() * 12,
  }));

  return (
    <div className="relative min-h-screen bg-slate-50 dark:bg-black text-slate-900 dark:text-white transition-colors duration-300">
      <div className="neon-shapes fixed inset-0 pointer-events-none -z-10 opacity-20 dark:opacity-100 transition-opacity duration-300">
        {shapes.map((shape) => (
          <div
            key={shape.id}
            className={`shape shape-${shape.id}`}
            style={{ animationDelay: `${shape.delay}s` }}
          />
        ))}
      </div>
      {children}
    </div>
  );
};

export default BackgroundLayout;
