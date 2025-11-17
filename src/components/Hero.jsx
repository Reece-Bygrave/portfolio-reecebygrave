import React, { useEffect } from "react";
import "../styles/Hero.css"; // Assuming the pulse effect is in this file

const Hero = () => {
  const shapes = Array.from({ length: 16 }, (_, i) => ({
    id: i + 1,
    delay: -Math.random() * 12, // negative delay for mid-animation start
  }));

  

  return (
    <div className="relative text-[#212121] overflow-hidden min-h-screen flex items-center justify-center">
      {/* Neon shapes */}
      <div className="neon-shapes absolute inset-0 z-0">
        {shapes.map((shape) => (
          <div
            key={shape.id}
            className={`shape shape-${shape.id}`}
            style={{
              animationDelay: `${shape.delay}s`,
            }}
          />
        ))}
      </div>
  <div className="w-full flex justify-center items-center py-10 md:py-20">
      
      {/* Outer Big Box */}
      <div className="
        w-[90%]              /* mobile */
        sm:w-[80%]           /* small screens */
        md:w-[70%]           /* desktop width */
        h-[70vh]             /* 50% screen height */
        mx-auto
        border border-blue-500
        rounded-xl 
        p-6 sm:p-8 md:p-10 
        shadow-[0_0_20px_rgba(0,0,255,0.4)]
        flex flex-col
        justify-center
        bg-slate-900
      ">

        
      </div>
    </div>

      {/* Hero con

<div className="w-full flex justify-center px-4">
<div className="w-[90%] max-w-6xl bg-black/40 backdrop-blur-sm border-[1px] rounded-2xl p-16 shadow-xl glow-animated-border">

    <h1 className="text-5xl font-bold text-yellow-400">Reece Bygrave</h1>
    <h2 className="text-4xl font-bold text-white mt-4">
      Software Engineer | Computer Science Educator
    </h2>
    <p className="text-white/80 mt-4">Teacher. Programmer. Alchemist.</p>

    <div className="flex gap-5 mt-10">
      <button className="px-6 py-3 rounded-xl border border-white/30 hover:scale-105 transition font-medium text-white">
        View Projects
      </button>

      <button className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 hover:scale-105 transition font-medium text-white">
        Contact Me
      </button>
    </div>

  </div>
</div>
tent */}



    </div>
  );
};

export default Hero;
