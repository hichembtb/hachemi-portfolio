import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/data/siteConfig";
import { ExperienceTimeline } from "@/components/home/ExperienceTimeline";
import { CallToAction } from "@/components/home/CallToAction";

export const metadata: Metadata = {
  title: "Experience & Career Journey",
  description: `Professional background and project history of ${siteConfig.name} (${siteConfig.handle}).`,
};

export default function ExperiencePage() {
  return (
    <div className="pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ExperienceTimeline />
        <div className="mt-12">
          <CallToAction />
        </div>
      </div>
    </div>
  );
}
