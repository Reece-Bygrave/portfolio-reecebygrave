import React from "react";

const projects = [
  { 
    image: "/images/project1.png",
    title: "Real-time Crime Tracking Application",
    description: "Interactive map for tracking and visualizing city crime data in real time.",
    tech: "Java • SQL • Android Studio • Google Cloud Services",
    color: "#00f0ff" // Blue Neon
  },
  { 
    image: "/images/project1.jpg",
    title: "Holographic Pokemon Trading Card Game (TCG)",
    description: "An ambitious project to re-create and augment the classic Pokemon TCG with MR technologies through the Hololens2.",
    tech: "Unity • MRTK • C# • Vuforia",
    color: "#ff00ff" // Pink Neon
  },
  { 
    title: "Project Three",
    color: "#00ff88" // Green Neon
  },
  { title: "Project Four", color: "#ff8800" },
  { title: "Project Five", color: "#00ffff" },
  { title: "Project Six", color: "#ff4444" },
];

const Grid = () => {
  return (
    <div className="px-4 py-10 max-w-6xl mx-auto">
      <h2 className="text-4xl sm:text-6xl font-bold text-left mb-5">
        Projects
      </h2>

      <p className="mb-10">A list of projects I have been working on or built</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <div
            key={i}
            className="flex flex-col overflow-hidden transform transition duration-700 hover:scale-105"
            style={{
              backgroundColor: "rgb(0,0,0)", // dark card background
              boxShadow: `0 0 0px ${p.color}, 0 0 7px ${p.color}`, // neon glow
              borderRadius: "6px" // edgy corners
            }}
          >
            {p.image && (
              <img
                src={p.image}
                alt={p.title || p.name}
                className="w-full h-48 object-cover rounded-none"
              />
            )}

            <div className="p-4 flex flex-col gap-3">
              <h3 className="text-xl font-bold text-white">{p.title || p.name}</h3>

              {p.description && (
                <p className="text-sm opacity-80 leading-relaxed text-white">
                  {p.description}
                </p>
              )}

              {p.tech && (
                <p
                  className="text-xs font-semibold opacity-70 mt-auto border-t pt-2"
                  style={{ borderColor: p.color, color: "#fff" }}
                >
                  {p.tech}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grid;
