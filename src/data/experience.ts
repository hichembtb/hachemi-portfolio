import { ExperienceItem } from "@/types";

export const experienceData: ExperienceItem[] = [
  {
    period: "2025 — Present",
    role: "Flutter Developer",
    company: "Signature Consulting",
    location: "Algeria (Hybrid / Remote)",
    type: "Professional Role",
    description: "Main Flutter developer responsible for the YasHome iOS and Android mobile applications. Leading continuous mobile engineering, UI/UX redesigns, bug fixes, OTA deployment with Shorebird, and performance optimization.",
    achievements: [
      "Took over the established YasHome production mobile apps, ensuring reliable ongoing feature delivery and store compliance.",
      "Redesigned the multi-step Property Publishing experience, significantly streamlining listing creation for owners and agencies.",
      "Redesigned and enhanced the visual Map Discovery experience with custom property markers, category shortcuts, and filter interactions.",
      "Redesigned the side-by-side Property Comparison UI for clear, structured real-estate spec evaluations.",
      "Integrated Shorebird for rapid zero-downtime over-the-air hotfix deployment and Sentry for real-time crash monitoring."
    ],
    technologies: ["Flutter", "Dart", "Flutter Bloc / Cubit", "Google Maps", "Firebase", "Dio", "Sentry", "Shorebird", "App Store", "Google Play"]
  },
  {
    period: "2023 — 2024",
    role: "Lead Mobile Developer & Freelance Software Engineer",
    company: "Independent / Freelance",
    location: "Remote / Algeria",
    type: "Contract & Independent",
    description: "Architecting and releasing production-ready mobile applications for startups and consumer platforms. Spearheaded the creation of POPO Grocery Delivery and published it to the Google Play Store.",
    achievements: [
      "Engineered POPO Grocery Delivery with phone OTP authentication, dynamic cart system, and real-time Firestore synchronization.",
      "Managed complete release lifecycle on Google Play Console, including compliance, bundle generation, and deployment.",
      "Delivered responsive mobile UI/UX designs with fluid 60fps animations using GetX and Flutter."
    ],
    technologies: ["Flutter", "Dart", "Firebase", "GetX", "Google Play Console", "Cloud Firestore"]
  },
  {
    period: "2022 — 2023",
    role: "Mobile App Developer (Contract)",
    company: "SARL SAFIOR",
    location: "Algeria",
    type: "Client Project",
    description: "Designed and implemented the Product Manager enterprise suite to digitalize client debts, balance tracking, and payment logging for SARL SAFIOR.",
    achievements: [
      "Eliminated manual bookkeeping errors by building a reliable cloud-backed debt & credit ledger.",
      "Implemented real-time client transaction records, financial histories, and balance updates.",
      "Constructed role-secured database schema and optimized query latency with Cloud Firestore."
    ],
    technologies: ["Flutter", "Dart", "Firebase Auth", "Cloud Firestore", "GetX State Management"]
  },
  {
    period: "2021 — 2022",
    role: "Open Source Contributor & Mobile Developer",
    company: "Self-Initiated & Community",
    location: "Remote",
    type: "Open Source & Academic",
    description: "Developed and published several specialized mobile applications including TeaClass, NOTEMY, and NOTER, exploring state architectures and offline-first database systems.",
    achievements: [
      "Created TeaClass: a dual-portal academic management system for school administrative staff and teachers.",
      "Engineered NOTEMY: a high-performance offline note app utilizing Hive NoSQL with instant disk persistence.",
      "Published 15+ public code repositories showcasing modular Flutter architectures."
    ],
    technologies: ["Flutter", "Dart", "Hive DB", "Firebase", "GetX", "Git & GitHub"]
  }
];
