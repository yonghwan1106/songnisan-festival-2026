"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
}

export default function Section({ children, className = "", title, subtitle }: SectionProps) {
  return (
    <section className={`py-16 px-4 ${className}`}>
      <div className="max-w-5xl mx-auto">
        {(title || subtitle) && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            {title && <h2 className="text-2xl md:text-3xl font-bold mb-2">{title}</h2>}
            {subtitle && <p className="text-gray-400">{subtitle}</p>}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}
