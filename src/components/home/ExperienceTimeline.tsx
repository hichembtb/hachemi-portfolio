import React from "react";
import { experienceData } from "@/data/experience";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Calendar, MapPin, CheckCircle2 } from "lucide-react";

export const ExperienceTimeline: React.FC = () => {
  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Career Journey"
          badgeVariant="violet"
          title="Experience & Project History"
          subtitle="A track record of engineering cross-platform applications, working with enterprise clients, and shipping production software."
        />

        <div className="relative pl-6 sm:pl-8 border-l border-white/10 space-y-12 ml-2 sm:ml-4">
          {experienceData.map((item, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#080a0f] border-2 border-sky-400 group-hover:border-emerald-400 group-hover:scale-125 transition-all shadow-md shadow-sky-500/20" />

              <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white/[0.08] hover:border-sky-500/30 transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-sky-400 transition-colors">
                      {item.role}
                    </h3>
                    <p className="text-sm font-medium text-gray-300">
                      {item.company}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-gray-400">
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-sky-400" />
                      {item.period}
                    </span>
                    <span>•</span>
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                      {item.location}
                    </span>
                  </div>
                </div>

                <p className="text-sm text-gray-300 leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Achievements */}
                <ul className="space-y-2 mb-5 text-xs sm:text-sm text-gray-400">
                  {item.achievements.map((ach, aIdx) => (
                    <li key={aIdx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/[0.06]">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/[0.06] text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
