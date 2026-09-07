// src/data/projectsData.js

export const projects = [
  {
    slug: "crime-tracker",
    title: "Real-time Crime Tracking Application",
    shortTitle: "Crime Tracking App",
    category: "Automated Ingestion & Spatial Analytics",
    badgeText: "Data Pipeline & Mapping",
    color: "#00f0ff", // Neon Cyan
    glowRgba: "rgba(0, 240, 255, 0.25)",
    tagline: "A cloud-connected mobile platform engineered with automated background API polling, spatial data parsing, and live incident heatmapping.",
    description:
      "A full-stack mobile and cloud tracking system engineered with automated background API polling, spatial data parsing, and live incident mapping.",
    image: "/images/project1.png",
    role: "Lead Full-Stack Developer",
    timeline: "Final Year Capstone Project",
    status: "Completed & Documented",
    github: "https://github.com/Reece-Bygrave",
    tech: ["Java / Python", "SQL", "Android Studio", "Google Cloud", "REST APIs", "GeoJSON", "Google Maps SDK"],
    
    automationHighlights: [
      "Automated background API polling and real-time incident parsing",
      "Spatial SQL queries optimized for live heatmapping & clustering",
      "Automated error recovery and data normalization pipeline"
    ],

    stats: [
      { label: "Query Response", value: "< 120ms" },
      { label: "Ingestion Reliability", value: "99.8%" },
      { label: "Data Pipeline", value: "Automated Cron" },
      { label: "Platform", value: "Android & Cloud" }
    ],

    overview: {
      problem:
        "Public crime data is typically published in fragmented, static monthly datasets without real-time geospatial context, making it difficult for citizens and neighborhood watches to monitor localized safety trends.",
      solution:
        "Architected an end-to-end mobile and cloud analytics system that automatically ingests municipal police feeds via scheduled cron workers, normalizes coordinates into a spatial SQL database, and delivers live interactive heatmaps to Android devices.",
      impact:
        "Achieved 99.8% ingestion reliability and sub-second spatial bounding queries across thousands of historical records without manual data intervention."
    },

    architecture: {
      layers: [
        {
          title: "Automated API Ingestion Service",
          description: "Scheduled background workers regularly querying police REST endpoints with rate-limit monitoring, schema validation, and exponential backoff retry logic."
        },
        {
          title: "Data Normalization & Cleaning",
          description: "ETL pipeline that sanitizes raw GeoJSON payloads, standardizes incident taxonomy classifications, and flags corrupted coordinate records for quarantine."
        },
        {
          title: "High-Performance Spatial SQL",
          description: "Geospatial indexing and bounding-box queries enabling rapid perimeter lookups and live heatmapping aggregations without locking database tables."
        },
        {
          title: "Native Android UI & Clustering",
          description: "Google Maps SDK client with quadtree marker clustering and asynchronous worker threads, preventing UI freezing during large data renders."
        }
      ]
    },

    challenges: [
      {
        title: "Main Thread UI Freezing During Large GeoJSON Parsing",
        challenge: "Parsing multi-megabyte GeoJSON incident payloads on the main Android thread caused UI jank and dropped frames.",
        solution: "Decoupled parsing into asynchronous background worker threads, batch-rendering clusters to keep the interface silky smooth at 60 FPS."
      },
      {
        title: "Upstream API Rate Limiting & Network Outages",
        challenge: "External police APIs throttled burst requests and occasionally experienced server maintenance downtime.",
        solution: "Implemented an automated pipeline retry mechanism with jittered exponential backoff and a local fallback cache ensuring 99.8% service uptime."
      }
    ],

    qaAutomation: {
      title: "Testing, Reliability & QA Practices",
      description: "Rigorous quality engineering practices embedded across the software development lifecycle:",
      points: [
        "Automated unit tests validating payload parsers against edge-case GeoJSON schemas.",
        "Integration testing on spatial SQL queries with mock boundary coordinates and high query concurrency.",
        "Continuous API schema verification to catch upstream payload changes before breaking client builds.",
        "Automated coordinate bounds checking to discard corrupt or inverted GPS coordinates."
      ]
    }
  },
  {
    slug: "pokemon-tcg-ar",
    title: "Holographic Pokemon Trading Card Game (TCG)",
    shortTitle: "Holographic Pokemon AR",
    category: "Computer Vision & Mixed Reality Automation",
    badgeText: "Computer Vision & MR",
    color: "#ff00ff", // Neon Pink
    glowRgba: "rgba(255, 0, 255, 0.25)",
    tagline: "An augmented reality application on Microsoft HoloLens 2 utilizing computer vision pipelines to automatically detect physical cards and render dynamic 3D battles.",
    description:
      "An augmented reality application on Microsoft HoloLens 2 utilizing computer vision pipelines to automatically detect, track physical cards, and render dynamic holographic card statistics in 3D space.",
    image: "/images/project2.jpg",
    role: "Mixed Reality & Computer Vision Developer",
    timeline: "Computer Science Showcase & AR Research",
    status: "Completed & Documented",
    github: "https://github.com/Reece-Bygrave",
    tech: ["C#", "Unity 3D", "MRTK (Mixed Reality Toolkit)", "Vuforia CV Engine", "Microsoft HoloLens 2", "Spatial Audio"],
    
    automationHighlights: [
      "Automated computer vision target recognition & real-time pose tracking",
      "Event dispatching pipeline for 3D gesture interaction on HoloLens 2",
      "Automated real-time state synchronization in Unity MRTK"
    ],

    stats: [
      { label: "Target Detection", value: "< 80ms" },
      { label: "Target Frame Rate", value: "60 FPS (HoloLens 2)" },
      { label: "Tracking Precision", value: "6DoF Spatial" },
      { label: "Input Modality", value: "Optical Hand Mesh" }
    ],

    overview: {
      problem:
        "Tabletop card games rely on manual damage counting, dice, and paper rulebooks, slowing down match pacing, causing rule disputes, and lacking the dynamic combat animations of modern video games.",
      solution:
        "Developed a standalone Microsoft HoloLens 2 application leveraging Vuforia computer vision to detect physical playing cards, anchor 3D digital avatars above them, and execute attacks via natural optical hand gestures.",
      impact:
        "Delivered a locked 60 FPS performance envelope on the mobile HoloLens 2 processor, featuring sub-80ms detection latency and automated real-time battle damage calculations."
    },

    architecture: {
      layers: [
        {
          title: "Computer Vision Feature Recognition",
          description: "High-frequency image feature extraction running on optical sensors, matching physical card art against 2D feature descriptors in under 80ms."
        },
        {
          title: "6DoF Spatial Pose Estimation",
          description: "Translates optical sensor feeds into 3D transformation matrices, anchoring holographic models onto physical playing cards with millimeter accuracy."
        },
        {
          title: "MRTK Hand Gesture Dispatcher",
          description: "Tracks 25-point optical hand skeletons and pinch gestures, dispatching events to card controllers for mid-air holographic stat interaction."
        },
        {
          title: "Unity 3D Real-time Simulation Engine",
          description: "Coordinates particle effects, automated damage calculations, elemental strengths/weaknesses, and 3D spatialized HRTF audio."
        }
      ]
    },

    challenges: [
      {
        title: "Optical Tracking Jitter & Hand Occlusion",
        challenge: "When players drew or moved cards, their hands partially obscured card artwork, causing optical tracking loss and holographic snapping.",
        solution: "Engineered a custom Kalman-inspired pose smoothing filter in C# that interpolates 3D transforms over brief occlusion frames to eliminate visual snapping."
      },
      {
        title: "Thermal Throttling & 60 FPS Frame Rate Budget",
        challenge: "Rendering multiple high-polygon animated 3D models with particle systems pushed the mobile HoloLens 2 Snapdragon processor to throttle.",
        solution: "Implemented strict object pooling, LOD geometry meshes, texture atlasing, and lightweight unlit shaders, maintaining a stable 60 FPS."
      }
    ],

    qaAutomation: {
      title: "Testing, Reliability & QA Practices",
      description: "Rigorous quality engineering and profiling practices tailored to mixed reality hardware constraints:",
      points: [
        "Automated Unity PlayMode test suites verifying damage algorithms, status effects, and card state machines.",
        "Systematic optical testing across multiple lighting environments (natural daylight, fluorescent, low light) to quantify tracking robustness.",
        "Draw-call profiling and frame-budget analysis to ensure GPU workload remained beneath headset thermal limits.",
        "Hand-mesh raycast latency stress testing during rapid gesture sequences to prevent dropped player inputs."
      ]
    }
  }
];

export const getProjectBySlug = (slug) => {
  return projects.find((p) => p.slug === slug);
};
