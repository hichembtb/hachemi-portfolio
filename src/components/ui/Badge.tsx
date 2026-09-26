import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "cyan" | "emerald" | "violet" | "amber" | "neutral";
  size?: "sm" | "md";
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "neutral",
  size = "sm",
  className = "",
}) => {
  const variantStyles = {
    cyan: "bg-sky-500/10 text-sky-400 border-sky-500/20",
    emerald: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    violet: "bg-violet-500/10 text-violet-400 border-violet-500/20",
    amber: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    neutral: "bg-white/5 text-gray-300 border-white/10",
  };

  const sizeStyles = {
    sm: "text-xs px-2.5 py-0.5 font-medium rounded-full border",
    md: "text-sm px-3.5 py-1 font-medium rounded-full border",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 transition-colors ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {children}
    </span>
  );
};
