import type { Variants } from "framer-motion";

/**
 * Sistema motion condiviso (Fase 6, rivista: framer-motion).
 *
 * - Easing firma del sito: stessa curva usata prima dalla hero in CSS
 *   (cubic-bezier 0.22, 1, 0.36, 1) — accelerazione decisa, uscita morbida.
 * - Tutte le animazioni sono SOLO transform + opacity (regola del progetto).
 * - La riduzione per `prefers-reduced-motion` è gestita globalmente da
 *   MotionProvider (MotionConfig reducedMotion="user"): framer disattiva le
 *   animazioni di transform/layout e lascia solo i fade.
 * - L'aurora resta in CSS keyframes: decoro infinito, zero JS nel loop.
 */
export const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/** Entrata base: fade + risalita minima. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

/** Entrata con scala leggera: titoli display, logo, superfici grandi. */
export const fadeScale: Variants = {
  hidden: { opacity: 0, y: 12, scale: 0.96 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

/**
 * Contenitore con stagger: i figli con variants entrano in sequenza
 * (l'ordine è quello del DOM). Ritardi puntuali dei figli = 0: la
 * coreografia la fa solo lo stagger, così niente doppioni di delay.
 */
export function stagger(
  staggerChildren = 0.08,
  delayChildren = 0.05
): Variants {
  return {
    hidden: {},
    visible: { transition: { staggerChildren, delayChildren } },
  };
}
