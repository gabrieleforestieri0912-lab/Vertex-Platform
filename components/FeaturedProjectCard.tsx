import { ArrowUpRight, Star } from "lucide-react";
import { StatusBadge } from "@/components/StatusBadge";
import { GradientText } from "@/components/ui/GradientText";
import { accentClasses, accentVars } from "@/lib/accents";
import { cn } from "@/lib/cn";
import { projectIcons } from "@/lib/project-icon";
import type { Project } from "@/lib/types";

/**
 * Card del progetto in evidenza (D6: AgentCloud, flagship).
 * Card grande con gradiente ricco: anello sfumato + glow dell'accento del
 * progetto, tagline, badge di stato (icona + testo) e CTA unica sul link
 * reale del progetto (per AgentCloud è la repo GitHub: nessun URL inventato).
 *
 * Il CTA è l'unico link della card (niente stretched link su una card di
 * queste dimensioni): focus visibile standard, navigazione da tastiera ok.
 *
 * Hover/focus: SOLO transform (lift) e opacity (anello + glow), come le
 * card standard; niente animazioni di layout o filtri.
 */
export function FeaturedProjectCard({
  project,
  className,
}: {
  project: Project;
  className?: string;
}) {
  const accent = accentClasses[project.accent];
  const Icon = project.icon ? projectIcons[project.icon] : undefined;

  return (
    <article
      style={accentVars(project.accent)}
      className={cn(
        "gradient-border group relative isolate overflow-hidden rounded-lg bg-vertex-surface/70 backdrop-blur-sm",
        "transition duration-200 ease-out will-change-transform hover:-translate-y-1",
        "motion-reduce:transition-none motion-reduce:hover:translate-y-0",
        className
      )}
    >
      <div aria-hidden className="glow-grad" />

      <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.5fr_auto] lg:items-center lg:gap-14">
        <div>
          {/* Tile icona: visibile solo sotto lg (su lg+ c'è il pannello grande). */}
          {Icon ? (
            <span
              aria-hidden
              className={cn(
                "mb-5 grid h-12 w-12 place-items-center rounded-lg border lg:hidden",
                accent.border,
                accent.tile
              )}
            >
              <Icon className={cn("h-6 w-6", accent.text)} />
            </span>
          ) : null}

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <span
              className={cn(
                "inline-flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-[0.2em]",
                accent.text
              )}
            >
              <Star aria-hidden className="h-3 w-3" />
              In evidenza
            </span>
            <StatusBadge status={project.status} />
            <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-vertex-silverMuted">
              {project.category}
            </span>
          </div>

          <h3 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            <GradientText family={project.accent}>{project.name}</GradientText>
          </h3>

          <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-vertex-silver sm:text-lg">
            {project.tagline}
          </p>

          <div className="mt-7">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "inline-flex min-h-11 items-center gap-2 rounded-md px-5 text-sm font-medium text-white",
                "transition-[background-color,opacity] duration-200 ease-out hover:opacity-90",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-soft focus-visible:ring-offset-2 focus-visible:ring-offset-vertex-bg",
                accent.deep,
                "motion-reduce:transition-none"
              )}
            >
              {/* TODO(copy): etichetta CTA da confermare */}
              Apri {project.name}
              <ArrowUpRight
                aria-hidden
                className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0 motion-reduce:group-hover:translate-y-0"
              />
            </a>
          </div>
        </div>

        {/* Pannello decorativo (solo lg+): tile grande su glow dell'accento. */}
        <div aria-hidden className="relative hidden lg:block">
          <div
            className={cn(
              "relative isolate grid h-44 w-44 place-items-center rounded-2xl border",
              accent.border,
              "bg-vertex-surface-elevated/80"
            )}
          >
            <div className="glow-grad" />
            {Icon ? (
              <Icon className={cn("h-16 w-16", accent.text)} strokeWidth={1.25} />
            ) : (
              <span
                className={cn(
                  "text-5xl font-semibold",
                  accent.text
                )}
              >
                {project.name.charAt(0).toUpperCase()}
              </span>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
