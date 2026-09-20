/**
 * Sfondo aurora della hero (Fase 3): 4 blob sfocati STATICAMENTE (.blob,
 * filter immobile) con i gradienti nominati delle 4 famiglie (D2).
 * Il movimento è solo transform/opacity via keyframes CSS (globals.css),
 * disattivate con prefers-reduced-motion. Decoro puro: aria-hidden e
 * pointer-events-none; opacity basse per non intaccare il contrasto AA
 * del testo che vi passa sopra (verificato in Fase 1).
 */
export function AuroraBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* viola — dietro l'headline (brand default) */}
      <div className="blob animate-aurora-a bg-grad-violet left-[-12%] top-[-22%] h-[34rem] w-[34rem] opacity-25" />
      {/* ciano — dietro il logo */}
      <div className="blob animate-aurora-b bg-grad-cyan right-[-14%] top-[-10%] h-[30rem] w-[30rem] opacity-20" />
      {/* magenta — bordo sinistro basso (solo da sm: meno rumore su mobile) */}
      <div className="blob animate-aurora-c bottom-[-28%] left-[8%] hidden h-[28rem] w-[28rem] bg-grad-magenta opacity-[0.16] sm:block" />
      {/* ambra — angolo basso destro (solo da md) */}
      <div className="blob animate-aurora-a bottom-[-30%] right-[4%] hidden h-[24rem] w-[24rem] bg-grad-amber opacity-[0.14] md:block" />
      {/* grana + vignettatura per profondità (overlay statico) */}
      <div className="grain-overlay" />
    </div>
  );
}
