// src/data/projectsData.js

export const projects = [
  {
    slug: "crime-tracker",
    title: "Real-time Crime Tracking Application",
    shortTitle: "Crime Tracking App",
    category: "Automated Ingestion & Spatial Analytics",
    badgeText: "Data Pipeline & Mapping",
    color: "#00f0ff", // Neon Cyan
    tagline: "Full-stack Android application backed by automated cloud ingestion pipelines for real-time incident mapping and spatial analytics.",
    description:
      "A full-stack mobile and cloud tracking system engineered with automated background API polling, spatial data parsing, and live incident mapping.",
    image: "/images/project1.png",
    role: "Lead Developer",
    timeline: "Final Year Project",
    status: "Completed",
    github: "https://github.com/Reece-Bygrave",
    tech: ["Java / Python", "SQL", "Android Studio", "Google Cloud", "REST APIs", "GeoJSON", "Google Maps SDK"],

    stats: [
      { label: "Query Speed", value: "< 120ms" },
      { label: "Ingestion Uptime", value: "99.8%" },
      { label: "Data Pipeline", value: "Automated Cron" },
      { label: "Platform", value: "Android & Cloud" }
    ],

    highlights: [
      {
        title: "Automated Background Ingestion",
        detail: "Engineered automated scheduled workers to regularly poll police REST APIs, normalize disparate GeoJSON payloads, and update localized incident records."
      },
      {
        title: "Optimized Spatial Indexing",
        detail: "Implemented spatial SQL queries with bounding boxes and quadtree marker clustering on the Android client to ensure smooth 60 FPS map rendering."
      },
      {
        title: "Automated Resilient Error Recovery",
        detail: "Built retry logic with exponential backoff and localized fallback caching to handle upstream API drops and rate-limiting gracefully."
      },
      {
        title: "Automated Data Validation & QA",
        detail: "Authored automated unit tests verifying API coordinate integrity, payload schema compliance, and boundary conditions before committing records."
      }
    ],

    challenges: [
      {
        title: "UI Stutter During Large GeoJSON Parsing",
        problem: "Parsing multi-megabyte spatial payloads on the main Android thread caused noticeable UI lag.",
        solution: "Decoupled ingestion into asynchronous background worker threads, batch-rendering clusters to keep UI responsive."
      },
      {
        title: "Upstream API Outages & Rate Limits",
        problem: "External police data feeds occasionally throttled burst queries or suffered maintenance outages.",
        solution: "Added an automated retry mechanism with exponential backoff and local cache persistence for uninterrupted uptime."
      }
    ],

    summary: {
      objective: "Provide citizens and community watches with immediate, localized crime intelligence instead of waiting on static, fragmented monthly reports.",
      built: "Engineered an end-to-end cloud pipeline that continuously aggregates public safety data into a spatial SQL database and visualizes live heatmaps on Android."
    }
  },
  {
    slug: "pokemon-tcg-ar",
    title: "Holographic Pokemon Trading Card Game (TCG)",
    shortTitle: "Holographic Pokemon AR",
    category: "Computer Vision & Mixed Reality",
    badgeText: "Computer Vision & MR",
    color: "#ff00ff", // Neon Pink
    tagline: "Augmented reality system on Microsoft HoloLens 2 utilizing optical computer vision to track physical cards and project interactive 3D holographic battles.",
    description:
      "An augmented reality application on Microsoft HoloLens 2 utilizing computer vision pipelines to automatically detect, track physical cards, and render dynamic holographic card statistics in 3D space.",
    image: "/images/project2.jpg",
    role: "Mixed Reality Developer",
    timeline: "Showcase & AR Research",
    status: "Completed",
    github: "https://github.com/Reece-Bygrave",
    tech: ["C#", "Unity 3D", "MRTK", "Vuforia CV", "Microsoft HoloLens 2", "Spatial Audio"],

    stats: [
      { label: "Card Detection", value: "< 80ms" },
      { label: "Target Frame Rate", value: "60 FPS (HoloLens 2)" },
      { label: "Tracking Precision", value: "6DoF Spatial" },
      { label: "Interaction", value: "Optical Hand Mesh" }
    ],

    highlights: [
      {
        title: "Autonomous Computer Vision Tracking",
        detail: "Leveraged Vuforia image feature extraction to detect physical cards and anchor 3D digital creature models with sub-millimeter precision."
      },
      {
        title: "Spatial Hand Interaction via MRTK",
        detail: "Integrated HoloLens 2 optical hand tracking, allowing players to naturally tap floating holographic attack statistics and command actions in mid-air."
      },
      {
        title: "Automated Battle State Synchronization",
        detail: "Automated real-time damage calculation, elemental type advantages, and health bars locked above physical playing cards."
      },
      {
        title: "Hardware Performance & Test Automation",
        detail: "Built Unity PlayMode automated tests for card logic and profiled draw calls to sustain a locked 60 FPS within HoloLens 2 thermal limits."
      }
    ],

    challenges: [
      {
        title: "Optical Tracking Jitter & Hand Occlusion",
        problem: "When players picked up cards, their hands partially obscured artwork, causing model flickering.",
        solution: "Wrote a custom pose-smoothing filter in C# that lerps transform matrices over brief occlusion frames to eliminate visual snapping."
      },
      {
        title: "Strict Thermal & Frame Rate Limits",
        problem: "Rendering high-polygon animated models and particle effects throttled the mobile HoloLens 2 processor.",
        solution: "Implemented object pooling, texture atlasing, and lightweight unlit shaders to ensure consistent 60 FPS performance."
      }
    ],

    summary: {
      objective: "Eliminate manual paper damage calculations and dice counters in tabletop card games through interactive augmented reality.",
      built: "Developed a standalone HoloLens 2 app that automatically tracks physical cards, renders dynamic 3D battle animations, and responds to natural gestures."
    }
  }
];

export const getProjectBySlug = (slug) => {
  return projects.find((p) => p.slug === slug);
};
