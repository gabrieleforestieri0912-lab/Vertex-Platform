import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { StatusBadge } from "@/components/StatusBadge";
import { accentClasses, accentVars } from "@/lib/accents";
import { cn } from "@/lib/cn";
import { projectIcons } from "@/lib/project-icon";
import type { Project } from "@/lib/types";

/**
 * Card progetto (Fase 4): identità cromatica per progetto via `accent`
 * (bordo sfumato + glow + tile icona, primitiva CSS della Fase 1).
 *
 * - Un solo link per card (stretched link sul titolo): l'intera card è
 *   cliccabile con un solo tab stop; il link resta identico ai dati
 *   (target/rel per esterni).
 * - Hover/focus: SOLO transform (lift) e opacity (bordo + glow, vedi
 *   globals.css .gradient-border/.glow-grad). Niente filtri o layout animati.
 * - Il badge di stato comunica con icona + testo, mai solo colore.
 */
export function ProjectCard({ project }: { project: Project }) {
  const accent = accentClasses[project.accent];
  const Icon = project.icon ? projectIcons[project.icon] : undefined;

  return (
    <article
      style={accentVars(project.accent)}
      className={cn(
        "gradient-border group relative isolate flex flex-col rounded-lg bg-vertex-surface/70 p-5 backdrop-blur-sm",
        "transition duration-200 ease-out will-change-transform hover:-translate-y-1",
        "focus-within:ring-2 focus-within:ring-accent-soft focus-within:ring-offset-2 focus-within:ring-offset-vertex-bg",
        "motion-reduce:transition-none motion-reduce:hover:translate-y-0"
      )}
    >
      <div aria-hidden className="glow-grad" />

      <div className="flex items-start justify-between gap-3">
        <ProjectMark project={project} />
        <span className="pt-1 text-[11px] font-medium uppercase tracking-[0.16em] text-vertex-silverMuted">
          {project.category}
        </span>
      </div>

      <h3 className="mt-4 text-lg font-medium leading-snug">
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-vertex-highlight after:absolute after:inset-0 after:rounded-lg focus-visible:outline-none"
        >
          {project.name}
          <ArrowUpRight
            aria-hidden
            className={cn(
              "ml-1 inline h-4 w-4 -translate-y-px text-vertex-steel",
              "transition-[color,transform] duration-200 ease-out",
              "group-hover:translate-x-0.5 group-hover:-translate-y-[3px]",
              accent.hoverText,
              "motion-reduce:transition-none motion-reduce:group-hover:translate-x-0 motion-reduce:group-hover:translate-y-0"
            )}
          />
        </a>
      </h3>

      <p className="mt-2 text-sm leading-relaxed text-vertex-silverMuted">
        {project.tagline}
      </p>

      <div className="mt-auto pt-5">
        <StatusBadge status={project.status} />
      </div>
    </article>
  );
}

/**
 * Logo reale se `project.logo` è valorizzato, altrimenti tile con l'icona
 * lucide del progetto, con fallback finale sul monogramma col colore
 * accento. Nessun logo inventato.
 */
function ProjectMark({ project }: { project: Project }) {
  const accent = accentClasses[project.accent];

  if (project.logo) {
    return (
      <Image
        src={project.logo}
        alt={`Logo ${project.name}`}
        width={44}
        height={44}
        className="h-11 w-11 shrink-0 rounded-lg border border-vertex-border bg-vertex-bg object-contain p-1.5"
      />
    );
  }

  if (project.icon) {
    const Icon = projectIcons[project.icon];
    return (
      <span
        aria-hidden
        className={cn(
          "grid h-11 w-11 shrink-0 place-items-center rounded-lg border",
          accent.border,
          accent.tile
        )}
      >
        <Icon className={cn("h-5 w-5", accent.text)} />
      </span>
    );
  }

  return (
    <span
      aria-hidden
      className={cn(
        "grid h-11 w-11 shrink-0 place-items-center rounded-lg border text-base font-semibold",
        accent.border,
        accent.tile,
        accent.text
      )}
    >
      {project.name.charAt(0).toUpperCase()}
    </span>
  );
}
