"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { EASE, fadeUp } from "@/lib/motion";

export interface RevealProps {
  /**
   * Ritardo dell'entrata in MILLISECONDI (convertito in secondi qui dentro,
   * che è l'unità di framer): usato per lo stagger, es. colonne stato.
   */
  delay?: number;
  className?: string;
  children?: ReactNode;
}

/**
 * Reveal on scroll (framer-motion): fade + risalita di 16px, SOLO
 * transform/opacity. `once: true`: l'animazione gira una sola volta, poi
 * l'observer interno di framer viene rilasciato. La riduzione per
 * `prefers-reduced-motion` arriva dal MotionConfig globale (solo fade).
 */
export function Reveal({ delay = 0, className, children }: RevealProps) {
  return (
    <motion.div
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ duration: 0.7, ease: EASE, delay: delay / 1000 }}
    >
      {children}
    </motion.div>
  );
}
