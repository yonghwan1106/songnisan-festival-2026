"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface PageHeaderProps {
  icon?: LucideIcon;
  iconColor?: string;
  tag?: string;
  tagColor?: string;
  title: string;
  subtitle?: string;
  gradientFrom?: string;
  gradientVia?: string;
  gradientTo?: string;
}

export default function PageHeader({
  icon: Icon,
  iconColor = "text-emerald-400",
  tag,
  tagColor = "bg-emerald-500/20 text-emerald-400",
  title,
  subtitle,
  gradientFrom = "from-gray-900",
  gradientVia = "via-emerald-950/30",
  gradientTo = "to-gray-900",
}: PageHeaderProps) {
  return (
    <section
      className={`pt-24 pb-16 px-4 bg-gradient-to-br ${gradientFrom} ${gradientVia} ${gradientTo}`}
    >
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {tag && (
            <div className={`inline-flex items-center gap-2 ${tagColor} rounded-full px-4 py-2 mb-4`}>
              {Icon && <Icon className={`w-5 h-5 ${iconColor}`} />}
              <span>{tag}</span>
            </div>
          )}
          <h1 className="text-3xl md:text-5xl font-bold mb-4">{title}</h1>
          {subtitle && (
            <p className="text-lg md:text-xl text-gray-400">{subtitle}</p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
