"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { StatusBadge } from "@/components/StatusBadge";
import { accentClasses, accentVars } from "@/lib/accents";
import { cn } from "@/lib/cn";
import { projectIcons } from "@/lib/project-icon";
import type { Project } from "@/lib/types";

/**
 * Card spettacolare — flat ma con hover teatrale:
 * - lift + scale + shadow XXL
 * - barra che si allarga + shine sweep
 * - logo che zooma + ruota leggera
 * - bordo che si colora con --accent
 * - glow diffuso dietro la card
 */
export function ProjectCard({ project }: { project: Project }) {
  const accent = accentClasses[project.accent];
  const [hover, setHover] = useState(false);

  return (
    <motion.article
      onHoverStart={() => setHover(true)}
      onHoverEnd={() => setHover(false)}
      style={accentVars(project.accent)}
      initial={false}
      whileHover={{ y: -10, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-[20px] bg-vertex-surface",
        "border border-vertex-border",
        "focus-within:ring-2 focus-within:ring-white/10",
      )}
    >
      {/* glow hover */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-px rounded-[20px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(600px circle at 50% 0%, color-mix(in srgb, var(--accent) 14%, transparent), transparent 70%)`,
        }}
      />

      {/* accent bar + shine */}
      <div className="relative h-[3px] w-full overflow-hidden bg-vertex-border">
        <motion.div
          className="absolute inset-y-0 left-0"
          style={{ background: "var(--accent)", width: "100%" }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        />
        {/* shine sweep */}
        <motion.div
          aria-hidden
          className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/40 to-transparent"
          initial={{ x: "-100%" }}
          animate={{ x: hover ? "300%" : "-100%" }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        />
      </div>

      {/* border highlight on hover */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[20px] border opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ borderColor: "color-mix(in srgb, var(--accent) 45%, transparent)" }}
      />

      <div className="relative flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <motion.div
            animate={{ rotate: hover ? 3 : 0, scale: hover ? 1.08 : 1 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            <ProjectMark project={project} hover={hover} />
          </motion.div>
          <span className="rounded-full border border-vertex-border bg-vertex-bgRaised px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-vertex-silverMuted group-hover:border-white/15 group-hover:text-white transition-colors">
            {project.category}
          </span>
        </div>

        <h3 className="mt-4 text-[17px] font-bold leading-snug tracking-tight">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-vertex-highlight after:absolute after:inset-0 focus-visible:outline-none"
          >
            {project.name}
            <motion.span
              animate={{ x: hover ? 3 : 0, y: hover ? -3 : 0 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              className={cn(
                "grid h-6 w-6 place-items-center rounded-full border border-vertex-border bg-vertex-bgRaised",
                "group-hover:border-white/15 group-hover:bg-white group-hover:text-black transition-colors"
              )}
            >
              <ArrowUpRight className="h-3.5 w-3.5" />
            </motion.span>
          </a>
        </h3>

        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-vertex-silverMuted group-hover:text-vertex-silver transition-colors">
          {project.tagline}
        </p>

        <div className="mt-5 flex items-center justify-between gap-3 border-t border-vertex-border/60 pt-4">
          <StatusBadge status={project.status} />
          <motion.span
            animate={{ x: hover ? 2 : 0 }}
            className="flex items-center gap-1.5 text-xs font-semibold text-vertex-silverMuted group-hover:text-white transition-colors"
          >
            <span className={cn("h-2 w-2 rounded-full animate-pulse-dot", accent.dot)} aria-hidden />
            Apri
            <ArrowUpRight className="h-3 w-3" />
          </motion.span>
        </div>
      </div>
    </motion.article>
  );
}

function ProjectMark({ project, hover }: { project: Project; hover: boolean }) {
  if (project.logo) {
    return (
      <motion.div
        animate={{ scale: hover ? 1.04 : 1 }}
        className="h-11 w-11 shrink-0 overflow-hidden rounded-xl border border-vertex-border bg-white p-1.5 shadow-sm group-hover:shadow-md group-hover:border-white/20 transition-all"
      >
        <Image
          src={project.logo}
          alt={`Logo ${project.name}`}
          width={44}
          height={44}
          className="h-full w-full object-contain"
        />
      </motion.div>
    );
  }

  if (project.icon) {
    const Icon = projectIcons[project.icon];
    return (
      <span
        aria-hidden
        className="tile-flat grid h-11 w-11 place-items-center rounded-xl border text-[var(--accent)] group-hover:bg-[var(--accent)] group-hover:text-white group-hover:border-[var(--accent)] transition-colors duration-300"
        style={{ background: "color-mix(in srgb, var(--accent) 12%, transparent)" }}
      >
        <Icon className="h-5 w-5" strokeWidth={1.75} />
      </span>
    );
  }

  return (
    <span aria-hidden className="tile-flat text-sm font-bold">
      {project.name.charAt(0).toUpperCase()}
    </span>
  );
}
