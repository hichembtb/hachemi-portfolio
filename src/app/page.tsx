import { Hero } from "@/components/home/Hero";
import { StatsOverview } from "@/components/home/StatsOverview";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { SkillsOverview } from "@/components/home/SkillsOverview";
import { ExperienceTimeline } from "@/components/home/ExperienceTimeline";
import { CallToAction } from "@/components/home/CallToAction";

export default function HomePage() {
  return (
    <div className="relative">
      <Hero />
      <StatsOverview />
      <FeaturedProjects />
      <SkillsOverview />
      <ExperienceTimeline />
      <CallToAction />
    </div>
  );
}
