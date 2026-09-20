import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { StatusBadge } from "@/components/StatusBadge";
import { accentClasses, accentVars } from "@/lib/accents";
import { cn } from "@/lib/cn";
import { projectIcons } from "@/lib/project-icon";
import type { Project } from "@/lib/types";

/**
 * Vera card — flat, pulita, moderna. Niente gradienti.
 * - Barra superiore solida 3px nel colore del progetto (presa dal sito live)
 * - Tile 44px con bg tenue, bordo sottile
 * - Hover: lift + bordo più visibile + freccia che scivola
 * - Solo transform/opacity nelle transizioni
 */
export function ProjectCard({ project }: { project: Project }) {
  const accent = accentClasses[project.accent];

  return (
    <article
      style={accentVars(project.accent)}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-[16px] bg-vertex-surface",
        "border border-vertex-border",
        "transition-all duration-300 ease-out",
        "hover:-translate-y-1.5 hover:border-vertex-border-strong hover:shadow-[0_12px_32px_rgba(0,0,0,0.35)]",
        "focus-within:ring-2 focus-within:ring-white/10 focus-within:ring-offset-2 focus-within:ring-offset-vertex-bg",
        "motion-reduce:transition-none motion-reduce:hover:translate-y-0"
      )}
    >
      <div aria-hidden className="card-accent-bar" />

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <ProjectMark project={project} />
          <span className="rounded-full border border-vertex-border bg-vertex-bgRaised px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-vertex-silverMuted">
            {project.category}
          </span>
        </div>

        <h3 className="mt-4 text-[17px] font-semibold leading-snug tracking-tight">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-vertex-highlight after:absolute after:inset-0 focus-visible:outline-none"
          >
            {project.name}
            <ArrowUpRight
              aria-hidden
              className={cn(
                "h-3.5 w-3.5 shrink-0 text-vertex-silverMuted",
                "transition-all duration-300 ease-out",
                "group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-vertex-highlight",
                "motion-reduce:transition-none"
              )}
            />
          </a>
        </h3>

        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-vertex-silverMuted">
          {project.tagline}
        </p>

        <div className="mt-5 flex items-center justify-between gap-3 border-t border-vertex-border/60 pt-4">
          <StatusBadge status={project.status} />
          <span className="flex items-center gap-1.5 text-xs text-vertex-silverMuted">
            <span className={cn("h-1.5 w-1.5 rounded-full", accent.dot)} aria-hidden />
            <span className="hidden sm:inline">Apri</span>
            <ArrowUpRight aria-hidden className="h-3 w-3" />
          </span>
        </div>
      </div>
    </article>
  );
}

function ProjectMark({ project }: { project: Project }) {
  if (project.logo) {
    return (
      <Image
        src={project.logo}
        alt={`Logo ${project.name}`}
        width={44}
        height={44}
        className="h-11 w-11 shrink-0 rounded-xl border border-vertex-border bg-vertex-bg object-contain p-1.5"
      />
    );
  }

  if (project.icon) {
    const Icon = projectIcons[project.icon];
    return (
      <span aria-hidden className="tile-flat transition-transform duration-300 ease-out group-hover:scale-[1.03] motion-reduce:transition-none">
        <Icon className="h-5 w-5" strokeWidth={1.75} />
      </span>
    );
  }

  return (
    <span aria-hidden className="tile-flat text-sm font-semibold">
      {project.name.charAt(0).toUpperCase()}
    </span>
  );
}
