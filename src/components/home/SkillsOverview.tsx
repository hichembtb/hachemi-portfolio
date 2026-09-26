import React from "react";
import { skillCategories } from "@/data/skills";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Smartphone, Cloud, Globe, Wrench, CheckCircle2 } from "lucide-react";

export const SkillsOverview: React.FC = () => {
  const categoryIcons = [
    <Smartphone key="1" className="w-5 h-5 text-sky-400" />,
    <Cloud key="2" className="w-5 h-5 text-emerald-400" />,
    <Globe key="3" className="w-5 h-5 text-violet-400" />,
    <Wrench key="4" className="w-5 h-5 text-amber-400" />,
  ];

  return (
    <section className="py-20 relative bg-[#07090e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Technical Capabilities"
          badgeVariant="emerald"
          title="Skills, Tools & Architecture"
          subtitle="A battle-tested technology stack focused on building reliable, scalable, and delightful digital experiences."
          centered={true}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={category.title}
              className="glass-card rounded-2xl p-6 sm:p-8 border border-white/[0.08] hover:border-emerald-500/30 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3.5 mb-3">
                  <div className="p-3 rounded-xl bg-white/[0.04] border border-white/[0.08]">
                    {categoryIcons[idx % categoryIcons.length]}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {category.title}
                    </h3>
                    <p className="text-xs text-gray-400">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Skills list */}
                <div className="grid grid-cols-2 gap-2.5 mt-6">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className={`flex items-center justify-between p-3 rounded-xl border text-xs transition-colors ${
                        skill.highlight
                          ? "bg-white/[0.04] border-white/[0.1] text-white"
                          : "bg-black/20 border-white/[0.04] text-gray-400"
                      }`}
                    >
                      <div className="flex items-center gap-2 truncate">
                        <CheckCircle2
                          className={`w-3.5 h-3.5 shrink-0 ${
                            skill.highlight
                              ? "text-emerald-400"
                              : "text-gray-500"
                          }`}
                        />
                        <span className="font-medium truncate">{skill.name}</span>
                      </div>
                      <span className="text-[10px] font-mono text-gray-500 shrink-0 ml-2">
                        {skill.level}
                      </span>
                    </div>
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
