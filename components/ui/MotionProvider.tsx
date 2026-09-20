"use client";

import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Config motion globale (Fase 6, rivista): con `prefers-reduced-motion`
 * framer disattiva le animazioni di transform/layout e lascia SOLO i fade
 * (regola 5 del progetto: animazioni ridotte a semplice fade).
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
