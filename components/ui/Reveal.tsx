"use client";

import {
  useEffect,
  useRef,
  useState,
  type HTMLAttributes,
} from "react";
import { cn } from "@/lib/cn";

export interface RevealProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Ritardo della transizione in ms: usato per lo stagger (griglie, colonne).
   * Applicato come transition-delay, quindi NON blocca il contenuto: senza
   * JS (o col contenuto già a schermo) non c'è nessun nascondimento.
   */
  delay?: number;
}

/**
 * Reveal on scroll (Fase 6): fade + risalita minima (16px), SOLO
 * transform/opacity. Il contenuto è SSR e visibile di default: lo stato
 * nascosto viene applicato solo DOPO il mount, e solo se l'elemento è sotto
 * il fold — così senza JS non si nasconde nulla e chi ha
 * `prefers-reduced-motion` non vede nessuna animazione (nessun armed).
 *
 * L'observer si disconnette dopo il primo reveal: zero lavoro a regime.
 * Nei client component si può riusare direttamente (ProjectExplorer);
 * nelle sezioni server avvolge i blocchi già renderizzati dal server.
 */
export function Reveal({
  delay = 0,
  className,
  style,
  children,
  ...props
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [armed, setArmed] = useState(false);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    // Niente observer API o reduced-motion: il contenuto resta visibile, punto.
    if (!el || !("IntersectionObserver" in window)) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Già nel viewport al mount (es. sezione corta su desktop): niente animazione.
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) return;

    setArmed(true);

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      // Reveal poco prima che il blocco entri del tutto: si vede il movimento.
      { rootMargin: "0px 0px -12% 0px", threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ ...style, transitionDelay: `${delay}ms` }}
      className={cn(
        "transition-[opacity,transform] duration-700 ease-out motion-reduce:transition-none",
        armed && !revealed
          ? "translate-y-4 opacity-0"
          : "translate-y-0 opacity-100",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
