import React from "react";
import { Badge } from "./Badge";

interface SectionHeadingProps {
  badge?: string;
  badgeVariant?: "cyan" | "emerald" | "violet" | "amber" | "neutral";
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  badgeVariant = "cyan",
  title,
  subtitle,
  centered = false,
  className = "",
}) => {
  return (
    <div
      className={`mb-12 md:mb-16 ${
        centered ? "text-center max-w-2xl mx-auto" : "max-w-3xl"
      } ${className}`}
    >
      {badge && (
        <div className={`mb-3 ${centered ? "flex justify-center" : ""}`}>
          <Badge variant={badgeVariant} size="sm">
            {badge}
          </Badge>
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};
