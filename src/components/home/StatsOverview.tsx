import React from "react";
import { siteConfig } from "@/data/siteConfig";
import { Smartphone, GitBranch, Layers, Award } from "lucide-react";

export const StatsOverview: React.FC = () => {
  const statIcons = [
    <Smartphone key="1" className="w-5 h-5 text-sky-400" />,
    <Layers key="2" className="w-5 h-5 text-emerald-400" />,
    <Award key="3" className="w-5 h-5 text-amber-400" />,
    <GitBranch key="4" className="w-5 h-5 text-violet-400" />,
  ];

  return (
    <section className="py-8 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {siteConfig.stats.map((stat, idx) => (
            <div
              key={stat.label}
              className="glass-card rounded-2xl p-5 sm:p-6 border border-white/[0.08] hover:border-sky-500/30 transition-all group"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.06] group-hover:bg-white/[0.08] transition-colors">
                  {statIcons[idx % statIcons.length]}
                </div>
                <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white group-hover:text-sky-400 transition-colors">
                  {stat.value}
                </span>
              </div>
              <p className="text-xs sm:text-sm font-medium text-gray-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
