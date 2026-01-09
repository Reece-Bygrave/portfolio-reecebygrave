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






    </div>
  );
};

export default Hero;
