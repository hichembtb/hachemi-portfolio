import { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "yas-home",
    title: "YasHome",
    tagline: "A production real-estate mobile application for discovering, publishing, and comparing properties in Algeria.",
    company: "Signature Consulting",
    platforms: ["iOS", "Android"],
    description: "Production cross-platform mobile application for Algeria's real estate ecosystem. As the main Flutter developer, I took over the existing production apps to lead continuous mobile development, UI/UX redesigns, bug fixing, and major experience overhauls across iOS and Android.",
    fullDescription: [
      "YasHome is a comprehensive real-estate platform connecting property seekers, individual owners, licensed real-estate agencies, and property developers across Algeria. It enables users to browse apartments and houses for sale or rent, publish listings with detailed amenities, explore real estate visually through interactive maps, and compare prospective homes side by side.",
      "I joined the YasHome project through Signature Consulting as the main Flutter developer responsible for the mobile applications on iOS and Android. The application was already completed and published to the App Store and Google Play by a prior developer.",
      "Since taking ownership of the mobile codebase, I have been responsible for maintaining the production applications, implementing new mobile features, addressing critical bug fixes, refactoring legacy components, optimizing performance, and executing comprehensive UI/UX overhauls for core user journeys."
    ],
    role: "Flutter Developer",
    period: "2025 — Present",
    category: "Mobile App",
    technologies: [
      "Flutter",
      "Dart",
      "Flutter Bloc / Cubit",
      "Firebase",
      "Google Maps",
      "Dio / REST APIs",
      "Flutter Secure Storage",
      "Sentry",
      "Shorebird"
    ],
    architecture: [
      "State-driven BLoC & Cubit architecture for robust UI-to-business logic separation",
      "Dio networking layer with interceptors for JWT token refresh and error handling",
      "Encrypted local credentials via Flutter Secure Storage",
      "Shorebird integration for seamless Over-The-Air (OTA) production updates",
      "Sentry crash analytics and real-time performance tracing"
    ],
    roleScope: [
      "Took over the mobile application as the main Flutter developer for iOS & Android.",
      "Leading ongoing mobile feature development, UI improvements, and bug fixes.",
      "Redesigned the multi-step Property Publishing experience to make creating listings intuitive.",
      "Redesigned the Map Discovery experience for fluid geospatial property browsing.",
      "Redesigned the Property Comparison experience for clear attribute-by-attribute evaluation.",
      "Managing production releases, Sentry error monitoring, and OTA patching via Shorebird."
    ],
    majorContributions: [
      {
        title: "Property Publishing Experience",
        subtitle: "Streamlined Multi-Step Listing Creation",
        description: "I redesigned and improved the property publishing experience, turning what was previously a complex form into an intuitive, guided step-by-step workflow that makes listing properties for sale or rent significantly easier and clearer for both private owners and agencies.",
        steps: [
          "Property Type",
          "Property Details",
          "Amenities",
          "Location",
          "Photos",
          "Publish"
        ],
        highlights: [
          "Intuitive step-by-step wizard replacing cluttered legacy forms",
          "Interactive amenity selector with clear iconography",
          "Map-assisted precise address and geolocation placement",
          "Multi-image upload with instant reordering and preview"
        ]
      },
      {
        title: "Map Discovery Experience",
        subtitle: "Intuitive Geospatial Property Exploration",
        description: "I redesigned the in-app map experience to make discovering real estate visually easier and more intuitive. The upgraded interface combines responsive custom property markers, interactive bottom-sheet preview cards, category shortcuts, and instant filter toggles.",
        highlights: [
          "Custom dynamic price & category markers on Google Maps",
          "Interactive carousel / bottom-sheet synced with map viewport",
          "Instant category shortcuts (Apartments, Villas, Commercial, Lands)",
          "Smooth clustering and camera animations during regional browsing"
        ]
      },
      {
        title: "Property Comparison Experience",
        subtitle: "Clear Side-by-Side Evaluation",
        description: "I redesigned the property comparison UI to provide users with a clean, structured side-by-side view. Property seekers can easily evaluate price differences, surface areas, room layouts, and distinct amenities across multiple listings in a unified matrix.",
        highlights: [
          "Persistent comparison drawer and selected-properties state",
          "Structured side-by-side attribute matrix (Price, Surface, Rooms, Floor)",
          "Instant highlight of amenity differences between chosen properties",
          "Clean visual contrast tailored for quick decision-making"
        ]
      },
      {
        title: "Continuous Maintenance & Production Engineering",
        subtitle: "Stability, Monitoring & Rapid Hotfixes",
        description: "Beyond major feature redesigns, my ongoing responsibilities include maintaining the production iOS and Android apps, fixing bugs, improving framerates, managing app store compliance, and utilizing Shorebird for zero-downtime over-the-air code push updates.",
        highlights: [
          "Zero-downtime OTA hotfixes using Shorebird",
          "Real-time crash diagnostics and telemetry via Sentry",
          "Continuous UI polish and smooth 60fps transitions across devices",
          "App Store & Google Play Store release lifecycle management"
        ]
      }
    ],
    features: [
      {
        title: "Property Search & Advanced Filters",
        description: "Filter listings by transaction type (Sale/Rent), price range, wilaya/city, property type, and specific amenities.",
        icon: "Search"
      },
      {
        title: "Interactive Map Exploration",
        description: "Discover properties directly on Google Maps with custom price pins and synchronized listing sheets.",
        icon: "MapPin"
      },
      {
        title: "Streamlined Property Publishing",
        description: "Intuitive multi-step publishing flow for owners, agencies, and real-estate promoters to list properties.",
        icon: "FilePlus"
      },
      {
        title: "Side-by-Side Property Comparison",
        description: "Compare multiple properties simultaneously across key specifications, pricing, and amenities.",
        icon: "Columns"
      },
      {
        title: "Agency & Developer Directory",
        description: "Explore verified real-estate agencies, developer projects, and direct contact channels.",
        icon: "Building2"
      },
      {
        title: "Property Requests & Needs",
        description: "Allows seekers to publish specific real-estate requests for agencies and owners to respond to.",
        icon: "HelpCircle"
      }
    ],
    coverImage: "/images/projects/yas-home/phone-responsive.png",
    galleryImages: [
      "/images/projects/yas-home/phone-responsive.png",
      "/images/projects/yas-home/screenshot_1.png",
      "/images/projects/yas-home/screenshot_2.png",
      "/images/projects/yas-home/screenshot_3.png",
      "/images/projects/yas-home/screenshot_4.png",
      "/images/projects/yas-home/screenshot_5.png",
      "/images/projects/yas-home/screenshot_6.png",
      "/images/projects/yas-home/screenshot_7.png",
      "/images/projects/yas-home/screenshot_8.png"
    ],
    websiteUrl: "https://yas-home.com/",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.yashome.app",
    appStoreUrl: "https://apps.apple.com/us/app/yas-home-real-estate/id6754520633",
    isPrivate: true,
    featured: true,
    stats: [
      { label: "Company", value: "Signature Consulting" },
      { label: "Role", value: "Flutter Developer" },
      { label: "Platforms", value: "iOS & Android" },
      { label: "Status", value: "Production / Live" }
    ],
    highlights: [
      "Production real-estate app live on App Store & Google Play",
      "Redesigned multi-step Property Publishing workflow",
      "Enhanced visual Map Discovery experience",
      "Clear side-by-side Property Comparison UI",
      "Ongoing development, maintenance & Shorebird OTA updates"
    ]
  },
  {
    slug: "popo-grocery-delivery",
    title: "POPO Grocery Delivery",
    tagline: "On-demand grocery delivery mobile application connecting customers with local stores.",
    description: "A comprehensive mobile delivery platform built with Flutter, Firebase, and GetX, providing real-time ordering, OTP phone authentication, intuitive cart checkout, and seamless order dispatching.",
    fullDescription: [
      "POPO Grocery Delivery is an end-to-end mobile consumer application designed to simplify on-demand grocery shopping. The application provides users with a fast, fluid, and intuitive shopping experience from product discovery to door-step delivery.",
      "Built natively for cross-platform performance using Flutter and Dart, POPO leverages Firebase Authentication with phone SMS OTP verification, Cloud Firestore for real-time inventory and order synchronization, and Firebase Storage for product media delivery.",
      "The state management is powered by GetX, ensuring lightning-fast reactivity and ultra-smooth UI transitions even during heavy product listing scrolling."
    ],
    role: "Lead Mobile Developer & Architect",
    period: "2023",
    category: "Mobile App",
    technologies: [
      "Flutter",
      "Dart",
      "Firebase Auth",
      "Cloud Firestore",
      "Firebase Storage",
      "GetX State Management",
      "Google Play Console"
    ],
    architecture: [
      "Reactive MVVM pattern with GetX controllers",
      "Real-time Firestore listeners for instant order & cart updates",
      "Secure SMS OTP authentication flow",
      "Cached image pipelines for smooth low-bandwidth catalog browsing"
    ],
    features: [
      {
        title: "Phone Number Authentication",
        description: "Frictionless login and signup with verified SMS OTP phone number authentication.",
        icon: "ShieldCheck"
      },
      {
        title: "Product Catalog & Cart",
        description: "Browse rich categorized groceries, view item details, and add desired products with instant quantity adjustment.",
        icon: "ShoppingBag"
      },
      {
        title: "Address Details & Delivery Pinpoint",
        description: "Save multiple delivery addresses, apartment numbers, and special delivery instructions.",
        icon: "MapPin"
      },
      {
        title: "Seamless Checkout & Place Order",
        description: "Order summary breakdown, price calculation, and instant order placement with real-time tracking status.",
        icon: "CreditCard"
      },
      {
        title: "Profile & History Management",
        description: "Edit user profile, update personal information, and inspect past order receipts.",
        icon: "UserCheck"
      }
    ],
    coverImage: "/images/projects/popo-portfolio.png",
    galleryImages: [
      "/images/projects/popo-portfolio.png",
      "/images/projects/Screenshot-2023-09-15-194947.png"
    ],
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.hachemiboutalbi.popo",
    githubUrl: "https://github.com/hichembtb",
    isPrivate: true,
    featured: true,
    stats: [
      { label: "Platform", value: "Android (Play Store)" },
      { label: "Tech Stack", value: "Flutter & Firebase" },
      { label: "State Mgmt", value: "GetX Reactive" }
    ],
    highlights: [
      "Published on the Google Play Store",
      "Real-time synchronized grocery cart",
      "Zero-latency state updates with GetX"
    ]
  },
  {
    slug: "product-manager",
    title: "Product Manager (SARL SAFIOR)",
    tagline: "Enterprise client debt, inventory credit, and payment tracking management suite.",
    description: "A business management mobile application developed for SARL SAFIOR to streamline client accounts, credit tracking, payment histories, and enterprise balance transactions.",
    fullDescription: [
      "Product Manager is a business-critical mobile solution created for SARL SAFIOR to replace manual accounting ledgers with a digitized, automated mobile management system.",
      "The app enables managers and sales agents to manage client directories, track credit balances in real time, record installment payments, and view comprehensive financial audit histories on the go.",
      "Engineered with Flutter and backed by Google Cloud Firestore, the system ensures high data integrity, role-based access control, and instant data persistence across corporate devices."
    ],
    role: "Mobile App Developer",
    period: "2022 - 2023",
    category: "Enterprise",
    technologies: [
      "Flutter",
      "Dart",
      "Firebase Auth",
      "Cloud Firestore",
      "Firebase Storage",
      "GetX State Management"
    ],
    architecture: [
      "Modular Clean Architecture with GetX dependency injection",
      "Firestore atomic transactions for client financial balance calculations",
      "Role-based authentication & session persistence"
    ],
    features: [
      {
        title: "Secure Authentication",
        description: "Dedicated Sign In and Sign Up portals with protected access for authorized enterprise staff.",
        icon: "Lock"
      },
      {
        title: "Complete Client Management",
        description: "Add, edit, view, and delete client profiles with contact and company metadata.",
        icon: "Users"
      },
      {
        title: "Credit & Debt Tracking",
        description: "Log credit lines, outstanding customer debts, invoice details, and dynamic balance calculations.",
        icon: "BadgeDollarSign"
      },
      {
        title: "Payment Receipts & Logging",
        description: "Record installment payments, deposit receipts, and automatically deduct from total credit.",
        icon: "Receipt"
      },
      {
        title: "Full Client Financial History",
        description: "Generate complete chronological transaction histories and statement overviews per client.",
        icon: "History"
      }
    ],
    coverImage: "/images/projects/sarl-safior-preview.png",
    galleryImages: [
      "/images/projects/sarl-safior-preview.png",
      "/images/projects/SARL-SAFIOR-PRODUCT-MANAGER-PREVIEW.png"
    ],
    githubUrl: "https://github.com/hichembtb/product_manager",
    isPrivate: false,
    featured: false,
    stats: [
      { label: "Target Client", value: "SARL SAFIOR" },
      { label: "Codebase", value: "Open Source" },
      { label: "Architecture", value: "Clean MVVM + GetX" }
    ],
    highlights: [
      "Custom business workflow optimization",
      "Real-time debt & balance computation",
      "Full client audit timeline"
    ]
  },
  {
    slug: "teaclass",
    title: "TeaClass",
    tagline: "Academic management and schedule system for school administrations and teaching faculties.",
    description: "A dual-portal academic management application built in Flutter with dedicated workflows for administrators and teachers to manage marks, student attendance, schedules, and grading computations.",
    fullDescription: [
      "TeaClass is an educational management tool tailored for modern academic institutions. It bridges the communication and data gap between school administrative offices and teaching staff.",
      "Admins can orchestrate the school roster, manage teachers and student enrollments, and publish official teaching schedules. Teachers benefit from automated grade calculation, attendance sheets, and instant access to school-wide schedules.",
      "The app was developed using Flutter and Firebase, featuring granular role-based UI routing and automated final result computation algorithms."
    ],
    role: "Full-Stack Mobile Engineer",
    period: "2022",
    category: "Mobile App",
    technologies: [
      "Flutter",
      "Dart",
      "Firebase Auth",
      "Cloud Firestore",
      "Firebase Storage",
      "GetX State Management"
    ],
    architecture: [
      "Role-segregated routing (Admin View vs. Teacher View)",
      "Automated grade weighting & final score calculation engine",
      "Cloud schedule PDF/image synchronization pipeline"
    ],
    features: [
      {
        title: "Admin Portal: Roster Management",
        description: "Add, edit, and manage teacher profiles, student enrollments, and classroom distributions.",
        icon: "UserPlus"
      },
      {
        title: "Admin Portal: Schedule Dispatch",
        description: "Upload, update, and broadcast official weekly teaching timetables and room assignments.",
        icon: "Calendar"
      },
      {
        title: "Teacher Portal: Grading & Marks",
        description: "Input exam, quiz, and project marks with instant real-time calculation of student final scores.",
        icon: "GraduationCap"
      },
      {
        title: "Teacher Portal: Attendance Tracker",
        description: "Daily attendance logging, absence tallies, and automated participation record generation.",
        icon: "CheckSquare"
      },
      {
        title: "Timetable & Schedule Viewer",
        description: "Interactive preview and offline download of personal and peer teaching schedules.",
        icon: "Download"
      }
    ],
    adminFeatures: [
      "Sign in with Admin Credentials",
      "Add, Edit & Delete Teachers",
      "Add, Edit & Delete Students",
      "Upload Teacher Schedules & Room Allocations"
    ],
    teacherFeatures: [
      "Sign in with Teacher Credentials",
      "Add & Manage Student Exam Marks",
      "Track Student Attendance & Absences",
      "Automatic Calculation of Student Final Results",
      "Preview & Download Personal Teaching Schedule",
      "Preview & Download Colleague Teacher Schedules"
    ],
    coverImage: "/images/projects/teaclass-portfolio.png",
    galleryImages: [
      "/images/projects/teaclass-portfolio.png",
      "/images/projects/teaclass-preview.png"
    ],
    githubUrl: "https://github.com/hichembtb",
    isPrivate: true,
    featured: false,
    stats: [
      { label: "Role Portals", value: "Admin & Teacher" },
      { label: "Grading Engine", value: "Automated Calculation" },
      { label: "Storage", value: "Cloud Storage" }
    ],
    highlights: [
      "Multi-role security and access control",
      "Automated academic grade computations",
      "Integrated timetable distribution"
    ]
  },
  {
    slug: "notemy",
    title: "NOTEMY",
    tagline: "Ultra-fast, offline-first personal notes and media attachment application.",
    description: "A lightweight, privacy-focused mobile notes application built with Flutter and Hive NoSQL database, delivering blazing fast offline storage and image attachments.",
    fullDescription: [
      "NOTEMY was built to provide an instant, friction-free note-taking experience with zero reliance on cloud latency. Powered by the high-performance Hive NoSQL key-value database, it opens instantly and provides instant search and persistence.",
      "Users can capture rich thought notes, attach photos directly from their camera or gallery, organize ideas, and edit notes with immediate local reactivity.",
      "The UI is clean, minimalist, and built for distraction-free writing with modern Flutter animations."
    ],
    role: "Mobile Developer",
    period: "2022",
    category: "Open Source",
    technologies: [
      "Flutter",
      "Dart",
      "Hive Local Database",
      "GetX State Management",
      "Image Picker",
      "Path Provider"
    ],
    architecture: [
      "Offline-first architecture with Hive TypeAdapters",
      "Local media caching and asynchronous file handling",
      "Lightweight reactive controller with GetX"
    ],
    features: [
      {
        title: "Fast Note Creation",
        description: "Quickly compose notes with title, detailed description, and markdown formatting.",
        icon: "FileText"
      },
      {
        title: "Rich Media Attachments",
        description: "Attach high-resolution photos and illustrations directly to each note with interactive preview.",
        icon: "Image"
      },
      {
        title: "Instant Editing & Updating",
        description: "Smooth in-place editing with live saving to the local Hive database.",
        icon: "Edit3"
      },
      {
        title: "Fast Deletion & Clean Up",
        description: "Swipe-to-delete notes with instant local storage cleanup and undo capability.",
        icon: "Trash2"
      }
    ],
    coverImage: "/images/projects/notemy-portfolio.png",
    galleryImages: [
      "/images/projects/notemy-portfolio.png",
      "/images/projects/notemy-preview.png"
    ],
    githubUrl: "https://github.com/hichembtb/NOTEMY",
    isPrivate: false,
    featured: false,
    stats: [
      { label: "Storage", value: "Hive NoSQL (Offline)" },
      { label: "Speed", value: "<10ms Response" },
      { label: "Codebase", value: "Open Source" }
    ],
    highlights: [
      "Zero internet connection required",
      "High performance Hive binary storage",
      "Clean, minimalist writing UI"
    ]
  },
  {
    slug: "noter",
    title: "NOTER",
    tagline: "Smart client debt ledger and installment payment manager for micro-businesses.",
    description: "A focused financial tracking mobile app designed for shopkeepers and freelancers to record client credits, debts, installments, and payment balances.",
    fullDescription: [
      "NOTER offers an agile, effortless solution for tracking receivables and customer debts without complicated accounting software. It allows users to register client accounts, record debit/credit transactions, and manage payments on the fly.",
      "Built with Flutter, Dart, Firebase Auth, and Cloud Firestore, NOTER keeps all debt records synchronized across all devices securely.",
      "Its clean, card-based interface makes tracking outstanding client debts quick and straightforward."
    ],
    role: "Mobile Developer",
    period: "2022",
    category: "Open Source",
    technologies: [
      "Flutter",
      "Dart",
      "Firebase Auth",
      "Cloud Firestore",
      "Firebase Storage",
      "GetX State Management"
    ],
    architecture: [
      "Cloud Firestore transaction logging",
      "Real-time balance computation",
      "Secure user authentication and data partitioning"
    ],
    features: [
      {
        title: "User Authentication",
        description: "Safe sign-in and sign-up with encrypted credentials and cloud sync.",
        icon: "UserCheck"
      },
      {
        title: "Client Directory",
        description: "Add, edit, and organize client profiles with quick contact shortcuts.",
        icon: "Users"
      },
      {
        title: "Credit & Debt Records",
        description: "Log debit entries with descriptions, dates, and amounts for every client.",
        icon: "CreditCard"
      },
      {
        title: "Payment Installments",
        description: "Track partial or full payments and watch balances automatically adjust.",
        icon: "DollarSign"
      }
    ],
    coverImage: "/images/projects/noter-portfolio.png",
    galleryImages: [
      "/images/projects/noter-portfolio.png",
      "/images/projects/noter-preview.png"
    ],
    githubUrl: "https://github.com/hichembtb/noter",
    isPrivate: false,
    featured: false,
    stats: [
      { label: "Backend", value: "Cloud Firestore" },
      { label: "License", value: "MIT Open Source" },
      { label: "Focus", value: "Ledger & Debt Tracking" }
    ],
    highlights: [
      "Real-time customer balance calculations",
      "Clean debit/credit transaction history",
      "Cloud-synced and available across devices"
    ]
  },
  {
    slug: "trouvex",
    title: "TROUVEX",
    tagline: "A simple service-discovery mobile app developed as a final-semester project.",
    description: "A simple service-discovery mobile app developed as a final-semester project.",
    fullDescription: [
      "TROUVEX is a simple final-semester university project built with Flutter and Firebase that allows users to find local services or post requests for services they need.",
      "The application was designed as an academic mobile project where users can browse available local service providers, and providers can offer their skills to people looking for assistance in their area."
    ],
    role: "Mobile Developer (Academic Project)",
    period: "2022",
    status: "University Project",
    category: "Mobile App",
    technologies: [
      "Flutter",
      "Firebase",
      "Dart"
    ],
    features: [
      {
        title: "Find Local Services",
        description: "Browse and search for available local service providers.",
        icon: "Search"
      },
      {
        title: "Post a Service Request",
        description: "Submit a request for specific services needed with contact and location details.",
        icon: "PlusCircle"
      },
      {
        title: "View Available Providers",
        description: "Browse registered service providers and view direct contact information.",
        icon: "Users"
      },
      {
        title: "Offer Services",
        description: "Enable service providers to list their availability and skill offerings.",
        icon: "Briefcase"
      }
    ],
    coverImage: "/images/projects/trouvex-portfolio.png",
    galleryImages: [
      "/images/projects/trouvex-portfolio.png"
    ],
    githubUrl: "https://github.com/hichembtb",
    isPrivate: true,
    featured: false,
    stats: [
      { label: "Type", value: "University Project" },
      { label: "Tech Stack", value: "Flutter & Firebase" },
      { label: "Role", value: "Mobile Developer" }
    ],
    highlights: [
      "Final-semester university project",
      "Simple service discovery & request workflow",
      "Built with Flutter and Firebase"
    ]
  }
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find((p) => p.slug === slug);
};

export const getFeaturedProjects = (): Project[] => {
  return projects.filter((p) => p.featured);
};
