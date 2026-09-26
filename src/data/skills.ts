import { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    title: "Mobile Development",
    description: "Production expertise in cross-platform mobile engineering with responsive, 60fps native performance.",
    skills: [
      { name: "Flutter", level: "Expert", highlight: true },
      { name: "Dart", level: "Expert", highlight: true },
      { name: "Flutter Bloc / Cubit", level: "Expert", highlight: true },
      { name: "GetX State Management", level: "Advanced", highlight: true },
      { name: "Google Maps API", level: "Advanced", highlight: true },
      { name: "Hive NoSQL & Secure Storage", level: "Advanced", highlight: true },
      { name: "Custom Animations & Canvas", level: "Advanced" },
      { name: "Responsive UI & Layouts", level: "Expert", highlight: true },
    ]
  },
  {
    title: "Backend, Cloud & Monitoring",
    description: "Real-time cloud backends, API networking, error diagnostics, and telemetry.",
    skills: [
      { name: "Dio / RESTful APIs", level: "Expert", highlight: true },
      { name: "Firebase Authentication", level: "Expert", highlight: true },
      { name: "Cloud Firestore", level: "Expert", highlight: true },
      { name: "Firebase Storage", level: "Advanced", highlight: true },
      { name: "Sentry Error Monitoring", level: "Advanced", highlight: true },
      { name: "JSON Serialization & Parsing", level: "Expert" },
      { name: "Push Notifications (FCM)", level: "Proficient" },
      { name: "Offline Sync & Caching", level: "Advanced" },
    ]
  },
  {
    title: "Release & DevOps Tooling",
    description: "Production lifecycle, zero-downtime over-the-air updates, and release pipelines.",
    skills: [
      { name: "Shorebird (OTA Code Push)", level: "Advanced", highlight: true },
      { name: "Apple App Store Connect", level: "Advanced", highlight: true },
      { name: "Google Play Console", level: "Advanced", highlight: true },
      { name: "Git & GitHub Workflow", level: "Advanced", highlight: true },
      { name: "Clean Architecture & MVVM", level: "Advanced", highlight: true },
      { name: "App Performance Profiling", level: "Advanced" },
    ]
  },
  {
    title: "Web & Full-Stack Technologies",
    description: "Modern responsive web interfaces and full-stack integration.",
    skills: [
      { name: "Next.js & React", level: "Advanced", highlight: true },
      { name: "TypeScript / JavaScript", level: "Advanced", highlight: true },
      { name: "Tailwind CSS", level: "Expert", highlight: true },
      { name: "HTML5 & Semantic CSS", level: "Expert" },
      { name: "Postman & API Testing", level: "Proficient" },
      { name: "Framer Motion", level: "Advanced" },
    ]
  }
];
