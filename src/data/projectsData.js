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
    tagline: "A cloud-connected mobile telemetry and spatial analytics platform with automated API polling and real-time incident mapping.",
    description:
      "A full-stack mobile and cloud tracking system engineered with automated background API polling, spatial data parsing, and live incident mapping.",
    image: "/images/project1.png",
    role: "Lead Full-Stack & Automation Developer",
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
        "Public crime data is often published in fragmented, static municipal datasets that are difficult for regular citizens and community watches to monitor effectively. Accessing timely information about neighborhood safety was cumbersome, prone to outdated reports, and lacked geospatial context.",
      solution:
        "Architected an end-to-end mobile and cloud analytics system that automatically ingests localized crime feeds via background cron jobs, cleanses and standardizes geographic coordinates into a spatial SQL database, and delivers live interactive heatmaps, clustering, and radius alerts to Android devices.",
      impact:
        "Engineered an automated ingestion pipeline that operates autonomously without manual data reformatting, reducing ingestion delay to minutes and enabling sub-second bounding box queries across thousands of historical records."
    },

    architecture: {
      layers: [
        {
          title: "1. Automated Ingestion Service",
          description: "Scheduled background workers that regularly query external police and municipal public safety REST APIs. Includes rate-limit monitoring, exponential backoff retries, and schema validation."
        },
        {
          title: "2. ETL & Normalization Pipeline",
          description: "Cleanses raw GeoJSON payloads, normalizes disparate incident taxonomies into standard severity categories, strips redundant metadata, and calculates spatial bounding boxes."
        },
        {
          title: "3. Spatial Database (SQL / Cloud)",
          description: "High-performance spatial indexing enabling rapid radius lookups, heatmapping aggregations, and spatial boundary queries without table locks."
        },
        {
          title: "4. Native Android Client",
          description: "Built in Android Studio utilizing Google Maps SDK, custom marker clustering, asynchronous threading to prevent UI stutter, and localized push notifications."
        }
      ]
    },

    keyFeatures: [
      {
        title: "Live Incident Heatmapping & Clustering",
        description: "Dynamic visual representations of crime densities using density-based heatmaps and quadtree marker clustering to maintain high frame rates on mobile hardware."
      },
      {
        title: "Automated Resilient Data Ingestion",
        description: "Autonomous data polling routines equipped with circuit-breaker patterns to handle network drops and upstream API rate limits gracefully."
      },
      {
        title: "Spatial Radius Filtering",
        description: "Enables users to specify custom perimeter zones (e.g. 1km, 5km) and receive immediate historical safety breakdowns for their immediate location."
      },
      {
        title: "Automated Error Recovery & Logging",
        description: "Centralized logging service catching formatting discrepancies in upstream municipal feeds, auto-quarantining corrupt records for offline review."
      }
    ],

    challenges: [
      {
        title: "Mobile UI Freezing During Large GeoJSON Parsing",
        challenge: "Parsing several megabytes of dense GeoJSON coordinates on the main Android thread caused noticeable UI jank and dropped frames.",
        solution: "Decoupled data parsing into background worker coroutines / asynchronous threads, pushing processed cluster primitives to the Google Maps renderer via batches."
      },
      {
        title: "Upstream API Rate Limiting & Flaky Data Feeds",
        challenge: "Third-party municipal crime APIs occasionally throttled burst requests or served partially malformed JSON during maintenance windows.",
        solution: "Implemented an automated pipeline retry mechanism with jittered exponential backoff and a local fallback cache ensuring uninterrupted service availability."
      }
    ],

    qaAutomation: {
      title: "Testing, Reliability & QA Engineering",
      description: "Given the focus on software automation and reliability, rigorous validation practices were embedded across the software development lifecycle:",
      points: [
        "Automated unit tests validating payload parsers against corrupted and edge-case GeoJSON schemas.",
        "Integration tests testing spatial SQL queries with mock boundary limits and high concurrency.",
        "Continuous verification of API endpoint response formats to flag upstream schema drift before breaking the mobile client.",
        "Sanity checks on coordinate boundaries to discard corrupt or inverted GPS coordinate points."
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
    tagline: "An augmented reality system on Microsoft HoloLens 2 using computer vision tracking pipelines to render dynamic holographic 3D card battles.",
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
      { label: "Tracking Precision", value: "6DoF Sub-Millimeter" },
      { label: "Input Modality", value: "Hand Mesh & Gestures" }
    ],

    overview: {
      problem:
        "Traditional tabletop trading card games rely on physical cards, paper rulebooks, manual dice for damage calculation, and static counters. Players must track complex game states in their heads, leading to rule disputes, slow pacing, and an experience disconnected from the dynamic animations of modern video games.",
      solution:
        "Developed a standalone Mixed Reality application deployed to the Microsoft HoloLens 2 headset. Leveraging high-frequency computer vision feature detection and Unity MRTK, the headset automatically recognizes physical cards laid on a tabletop, anchors real-time holographic 3D characters above them, and allows players to trigger attacks via natural hand gestures.",
      impact:
        "Created an intuitive blend of the physical tabletop card game with dynamic digital automation: damage calculations, status effects, and holographic attack visuals are automatically computed and projected directly onto the physical playmat in real time."
    },

    architecture: {
      layers: [
        {
          title: "1. Computer Vision Recognition (Vuforia Engine)",
          description: "High-frequency image feature extraction running on the HoloLens 2 optical sensor feed. Matches physical card artwork against pre-indexed 2D feature descriptors in under 80ms."
        },
        {
          title: "2. 6DoF Pose Estimation & Anchor Pipeline",
          description: "Translates camera optical coordinates into 3D spatial transformation matrices (Position, Rotation, Scale), pinning digital avatars directly atop physical playing cards with sub-millimeter precision."
        },
        {
          title: "3. MRTK Event Bus & Gesture Dispatcher",
          description: "Tracks user hand skeletons and pinch gestures, dispatching events to card game controllers to trigger ability casts, card flips, and holographic menu interactions."
        },
        {
          title: "4. Unity 3D Real-time Simulation Engine",
          description: "Manages 3D asset instantiation, particle effects, dynamic lighting, health state tracking, and 3D spatial audio for realistic atmospheric presence."
        }
      ]
    },

    keyFeatures: [
      {
        title: "Autonomous 6DoF Image Tracking",
        description: "Robust tracking pipeline that maintains holographic anchor lock even as cards are rotated, moved across the table, or tilted at oblique angles."
      },
      {
        title: "Spatial Hand Interaction via MRTK",
        description: "Full hand-tracking interface allowing players to point, tap, and interact with floating holographic menus and 3D battle statistics in mid-air."
      },
      {
        title: "Automated Battle State Synchronization",
        description: "Internal game logic automatically updates damage counters, elemental weaknesses, and HP bars above active cards without requiring manual player tracking."
      },
      {
        title: "Spatialized 3D Soundscapes",
        description: "Head-related transfer function (HRTF) spatial audio anchors creature cries and attack sound effects precisely at the card's real-world 3D location."
      }
    ],

    challenges: [
      {
        title: "Optical Tracking Jitter & Partial Hand Occlusion",
        challenge: "When players drew or moved cards, their hands partially obscured the card artwork, causing optical tracking loss and holographic asset jitter.",
        solution: "Engineered a custom Kalman-inspired pose smoothing filter in C# that caches recent velocity vectors and interpolates 3D transforms over brief occlusion frames to eliminate visual snapping."
      },
      {
        title: "Aggressive Thermal & Frame Rate Limits on HoloLens 2",
        challenge: "Rendering multiple high-polygon animated 3D monsters with particle effects caused the mobile Snapdragon processor to throttle below the 60 FPS threshold.",
        solution: "Implemented strict object pooling, geometry LODs (Levels of Detail), texture atlasing, and lightweight unlit shaders, maintaining a rock-solid 60 FPS under dual-card battle conditions."
      }
    ],

    qaAutomation: {
      title: "Testing, Reliability & QA Engineering",
      description: "Rigorous quality assurance and test automation principles applied to mixed reality hardware constraints:",
      points: [
        "Automated Unity PlayMode test suites verifying battle state math, status effects, and card state machines.",
        "Systematic optical testing under diverse lighting environments (natural sunlight, fluorescent, low light) to quantify Vuforia tracking reliability.",
        "Performance profiling and frame-budget analysis to verify draw calls remained beneath the HoloLens 2 thermal limits.",
        "Stress testing hand-mesh raycasting latency during rapid gesture sequences to prevent missed player inputs."
      ]
    }
  }
];

export const getProjectBySlug = (slug) => {
  return projects.find((p) => p.slug === slug);
};
