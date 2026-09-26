import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/data/siteConfig";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { SkillsOverview } from "@/components/home/SkillsOverview";
import {
  Terminal,
  Sparkles,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Me",
  description: `Learn more about ${siteConfig.name} (${siteConfig.handle}) — Mobile Application Developer & Software Engineer.`,
};

export default function AboutPage() {
  const principles = [
    {
      title: "60 FPS Fluidity & Native Feel",
      description:
        "Mobile users demand lightning responsiveness. I optimize widget build trees, avoid redundant state triggers, and engineer buttery smooth animations.",
    },
    {
      title: "Predictable Reactive Architecture",
      description:
        "Using structured state management with GetX and Clean MVVM separation, keeping business logic cleanly decoupled from UI presentation.",
    },
    {
      title: "Offline-First & Cloud Sync",
      description:
        "Architecting systems that continue to work flawlessly with zero connectivity (Hive local storage) and seamlessly synchronize with Cloud Firestore when back online.",
    },
    {
      title: "Enterprise Reliability",
      description:
        "Designing robust data models, atomic transactions for financial ledgers, and secure role-based access control.",
    },
  ];

  return (
    <div className="pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <SectionHeading
            badge="About Me"
            badgeVariant="cyan"
            title="Engineering software with purpose, precision, and passion."
            subtitle="I'm Hachemi Boutalbi, a Mobile Application Developer crafting cross-platform experiences for mobile and web."
          />
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          <div className="lg:col-span-7 space-y-6 text-gray-300 leading-relaxed text-base">
            <p className="text-lg text-white font-medium">
              Hello! I&apos;m Hachemi Boutalbi (known online as{" "}
              <span className="text-sky-400 font-mono">hechcode</span> /{" "}
              <span className="text-sky-400 font-mono">@hichembtb</span>).
            </p>
            <p>
              My software development journey is centered around turning complex real-world requirements into intuitive, elegant, and high-performance digital tools.
            </p>
            <p>
              Over the past years, I have actively worked on production mobile engineering—including taking over and leading the mobile apps for <strong className="text-white">YasHome</strong> (available on the App Store and Google Play via Signature Consulting), developing consumer platforms like <strong className="text-white">POPO Grocery Delivery</strong>, and engineering enterprise management suites like <strong className="text-white">Product Manager for SARL SAFIOR</strong>.
            </p>
            <p>
              I believe great software lives at the intersection of robust architectural foundation, reactive state handling (BLoC / Cubit / GetX), and delightful UI micro-interactions.
            </p>

            <div className="pt-4 flex flex-wrap gap-3">
              <Button
                href="/projects"
                variant="primary"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                View My Projects
              </Button>
              <Button
                href="/contact"
                variant="secondary"
                icon={<Sparkles className="w-4 h-4 text-sky-400" />}
              >
                Get In Touch
              </Button>
            </div>
          </div>

          {/* Quick Specs Card */}
          <div className="lg:col-span-5">
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white/[0.08] space-y-6">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Terminal className="w-4 h-4 text-sky-400" />
                <span>Quick Snapshot</span>
              </h3>

              <div className="space-y-3.5 text-xs sm:text-sm">
                <div className="flex justify-between py-2 border-b border-white/[0.06]">
                  <span className="text-gray-400">Full Name</span>
                  <span className="font-semibold text-white">{siteConfig.name}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/[0.06]">
                  <span className="text-gray-400">Primary Domain</span>
                  <span className="font-semibold text-sky-400">Mobile & Cross-Platform</span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/[0.06]">
                  <span className="text-gray-400">Core Framework</span>
                  <span className="font-semibold text-white">Flutter & Dart</span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/[0.06]">
                  <span className="text-gray-400">Cloud & Database</span>
                  <span className="font-semibold text-white">Firebase & Hive NoSQL</span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/[0.06]">
                  <span className="text-gray-400">Web Stack</span>
                  <span className="font-semibold text-white">Next.js, TypeScript, Tailwind</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-gray-400">Location</span>
                  <span className="font-semibold text-white">{siteConfig.location}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Engineering Principles */}
        <div className="mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-8 flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
            <span>Development Philosophy & Core Principles</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {principles.map((principle, idx) => (
              <div
                key={idx}
                className="glass-card p-6 rounded-2xl border border-white/[0.08] hover:border-emerald-500/30 transition-all space-y-2.5"
              >
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <h3 className="text-base font-bold text-white">
                    {principle.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <SkillsOverview />
      </div>
    </div>
  );
}
