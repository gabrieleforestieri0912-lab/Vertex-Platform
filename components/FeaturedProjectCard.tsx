import { ArrowUpRight, Star } from "lucide-react";
import { StatusBadge } from "@/components/StatusBadge";
import { accentClasses, accentVars } from "@/lib/accents";
import { cn } from "@/lib/cn";
import { projectIcons } from "@/lib/project-icon";
import type { Project } from "@/lib/types";

export function FeaturedProjectCard({ project, className }: { project: Project; className?: string }) {
  const accent = accentClasses[project.accent];
  const Icon = project.icon ? projectIcons[project.icon] : undefined;

  return (
    <article
      style={accentVars(project.accent)}
      className={cn(
        "group relative overflow-hidden rounded-[20px] bg-vertex-surface border border-vertex-border",
        "hover:border-vertex-border-strong hover:shadow-[0_16px_40px_rgba(0,0,0,0.4)]",
        "transition-all duration-300 ease-out",
        className
      )}
    >
      <div aria-hidden className="card-accent-bar h-1" />
      <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.6fr_280px] lg:items-center">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white text-black px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.08em]">
              <Star aria-hidden className="h-3 w-3 fill-black" /> In evidenza
            </span>
            <StatusBadge status={project.status} />
            <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-vertex-silverMuted">
              {project.category}
            </span>
          </div>

          <h3 className="mt-4 flex items-center gap-2 text-3xl font-bold tracking-tight text-vertex-highlight sm:text-4xl">
            {project.name}
            <span className="hidden sm:inline-flex h-7 w-7 items-center justify-center rounded-full border border-vertex-border bg-vertex-bgRaised">
              <ArrowUpRight className="h-3.5 w-3.5 text-vertex-silverMuted group-hover:text-vertex-highlight transition-colors" />
            </span>
          </h3>

          <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-vertex-silver">{project.tagline}</p>

          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-full px-6 text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 hover:scale-[1.02] active:scale-[0.98]"
            style={{ background: "var(--accent)" }}
          >
            Apri {project.name}
            <ArrowUpRight aria-hidden className="h-4 w-4" />
          </a>
        </div>

        <div aria-hidden className="relative hidden lg:grid place-items-center">
          <div className="relative grid h-48 w-48 place-items-center rounded-[20px] border border-vertex-border bg-vertex-bgRaised">
            <div className="absolute inset-0 rounded-[20px] opacity-[0.08]" style={{ background: "var(--accent)" }} />
            {Icon ? (
              <Icon className="h-16 w-16" style={{ color: "var(--accent)" }} strokeWidth={1.5} />
            ) : (
              <span className="text-5xl font-bold" style={{ color: "var(--accent)" }}>
                {project.name.charAt(0).toUpperCase()}
              </span>
            )}
          </div>
          <div className="absolute -bottom-2 -right-2 rounded-full border border-vertex-border bg-vertex-surface px-3 py-1.5 text-xs font-medium text-vertex-silverMuted shadow-lg">
            Flagship
          </div>
        </div>
      </div>
    </article>
  );
}
