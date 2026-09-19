import Image from "next/image";
import type { Project, ProjectStatus } from "@/lib/types";

const statusLabels: Record<ProjectStatus, string> = {
  live: "Live",
  beta: "Beta",
  building: "Building",
  paused: "Paused",
};

/**
 * Stato comunicato con opacita'/peso piu' un solo accento per "live":
 * niente semaforo verde/giallo/rosso, per restare coerenti col brand.
 */
const statusStyles: Record<ProjectStatus, string> = {
  live: "border-accent/40 bg-accent/10 text-accent-soft",
  beta: "border-vertex-silver/25 bg-vertex-silver/5 text-vertex-silver",
  building: "border-vertex-border bg-transparent text-vertex-silverMuted",
  paused: "border-vertex-border/70 bg-transparent text-vertex-silverMuted",
};

const statusDotStyles: Record<ProjectStatus, string> = {
  live: "bg-accent opacity-100",
  beta: "bg-vertex-silver opacity-70",
  building: "bg-vertex-silverMuted opacity-45",
  paused: "bg-vertex-steel opacity-30",
};

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group relative flex flex-col justify-between gap-6 rounded-lg border border-vertex-border bg-vertex-surface p-6 transition duration-200 ease-out will-change-transform hover:-translate-y-1 hover:border-accent/40 focus-within:border-accent/40 focus-within:ring-2 focus-within:ring-accent/50 motion-reduce:transition-none motion-reduce:hover:translate-y-0">
      <div>
        <div className="flex items-start justify-between gap-4">
          <ProjectMark project={project} />

          <span className="shrink-0 pt-1 text-[11px] font-medium uppercase tracking-[0.16em] text-vertex-silverMuted">
            {project.category}
          </span>
        </div>

        <h3 className="mt-4 text-lg font-medium text-vertex-highlight">
          {/* Stretched link: the whole card is clickable, one link in the DOM. */}
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-200 ease-out hover:text-accent-soft focus-visible:outline-none motion-reduce:transition-none"
          >
            {project.name}
            <ExternalLinkIcon />
          </a>
        </h3>

        <p className="mt-2 text-sm leading-relaxed text-vertex-silverMuted">
          {project.tagline}
        </p>
      </div>

      <span
        className={`inline-flex w-fit items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-[0.12em] ${statusStyles[project.status]}`}
      >
        <span
          aria-hidden
          className={`h-1.5 w-1.5 rounded-full ${statusDotStyles[project.status]}`}
        />
        {statusLabels[project.status]}
      </span>
    </article>
  );
}

/**
 * Logo reale se `project.logo` e' valorizzato, altrimenti monogramma
 * col colore accento. Il monogramma evita di inventare loghi che non hai.
 */
function ProjectMark({ project }: { project: Project }) {
  if (project.logo) {
    return (
      <Image
        src={project.logo}
        alt={`Logo ${project.name}`}
        width={44}
        height={44}
        className="h-11 w-11 rounded-lg border border-vertex-border bg-vertex-bg object-contain p-1.5"
      />
    );
  }

  return (
    <span
      aria-hidden
      className="grid h-11 w-11 place-items-center rounded-lg border border-accent/30 bg-accent/10 text-base font-semibold text-accent-soft"
    >
      {project.name.charAt(0).toUpperCase()}
    </span>
  );
}

function ExternalLinkIcon() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="ml-1.5 inline h-3.5 w-3.5 -translate-y-px text-vertex-steel transition-colors duration-200 ease-out group-hover:text-accent-soft motion-reduce:transition-none"
    >
      <path d="M13.5 4.5H19.5V10.5" />
      <path d="M19.5 4.5L11 13" />
      <path d="M16.5 14.25V18a1.5 1.5 0 0 1-1.5 1.5H6A1.5 1.5 0 0 1 4.5 18V9A1.5 1.5 0 0 1 6 7.5h3.75" />
    </svg>
  );
}
