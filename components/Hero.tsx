"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { countByStatus, totalProjects } from "@/data/projects";
import { EASE } from "@/lib/motion";

const counters = [
  { label: "Progetti", value: totalProjects },
  { label: "Live", value: countByStatus.live },
  { label: "Beta", value: countByStatus.beta },
  { label: "In cantiere", value: countByStatus.building },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-vertex-border bg-vertex-bg">
      {/* flat subtle grid decoration — no gradients */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative mx-auto grid w-full max-w-5xl items-center gap-12 px-6 pb-16 pt-28 sm:pb-20 sm:pt-32 lg:grid-cols-[1.35fr_0.9fr] xl:max-w-6xl xl:gap-16 2xl:max-w-7xl">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
          }}
        >
          <motion.p
            variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } } }}
            className="inline-flex items-center gap-2 rounded-full border border-vertex-border bg-vertex-surface px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-vertex-silverMuted"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse-dot" aria-hidden />
            Piattaforma Vertex
          </motion.p>

          <motion.h1
            variants={{ hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } } }}
            className="mt-5 text-[44px] font-bold tracking-tight text-vertex-highlight sm:text-6xl lg:text-[64px] leading-[0.9]"
          >
            Tutti i miei
            <br />
            <span className="text-vertex-silverMuted">progetti.</span>
          </motion.h1>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } } }}
            className="mt-5 max-w-xl text-balance text-[17px] leading-relaxed text-vertex-silverMuted"
          >
            Non un catalogo. Non un marketplace. La raccolta ordinata di ciò che sto costruendo —
            dal live al cantiere, ogni card con il colore del suo sito.
          </motion.p>

          <motion.dl
            variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } } }}
            className="mt-8 flex flex-wrap gap-6"
          >
            {counters.map((c) => (
              <div key={c.label} className="rounded-xl border border-vertex-border bg-vertex-surface px-4 py-3 min-w-[92px]">
                <dt className="text-[10px] font-semibold uppercase tracking-[0.14em] text-vertex-silverMuted">{c.label}</dt>
                <dd className="mt-1 text-xl font-bold tabular-nums text-vertex-highlight">{c.value}</dd>
              </div>
            ))}
          </motion.dl>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } } }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="inline-flex min-h-11 items-center rounded-full bg-white px-6 text-sm font-semibold text-black transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
            >
              Esplora i progetti
            </a>
            <a
              href="#about"
              className="inline-flex min-h-11 items-center rounded-full border border-vertex-border bg-vertex-surface px-6 text-sm font-medium text-vertex-silver transition-colors hover:border-vertex-border-strong hover:text-vertex-highlight"
            >
              Chi sono
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: EASE, delay: 0.25 } }}
          className="relative mx-auto w-full max-w-[320px] lg:max-w-none"
        >
          <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="relative">
            <div className="relative rounded-[28px] border border-vertex-border bg-vertex-surface p-6 shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
              <Image
                src="/vertex.png"
                alt="Logo Vertex"
                width={320}
                height={320}
                priority
                className="mx-auto w-full max-w-[180px] lg:max-w-[200px] object-contain"
              />
              <div className="mt-6 flex items-center justify-center gap-2 text-xs text-vertex-silverMuted">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse-dot" />
                16 progetti · aggiornato ora
              </div>
            </div>
            {/* floating mini cards hint */}
            <div className="absolute -left-4 top-6 hidden rounded-xl border border-vertex-border bg-vertex-bgRaised px-3 py-2 shadow-xl sm:flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#3B82F6]" /> <span className="text-xs font-medium text-vertex-highlight">CaptionBoost</span>
            </div>
            <div className="absolute -right-3 bottom-8 hidden rounded-xl border border-vertex-border bg-vertex-bgRaised px-3 py-2 shadow-xl sm:flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#EF4444]" /> <span className="text-xs font-medium text-vertex-highlight">Maxthenics</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
