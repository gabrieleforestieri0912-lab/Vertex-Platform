import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import {
  countByStatus,
  getProjectsByStatus,
  totalProjects,
} from "@/data/projects";
import { accentClasses, accentVars } from "@/lib/accents";
import { cn } from "@/lib/cn";
import { projectIcons } from "@/lib/project-icon";
import { statusMeta } from "@/lib/status";
import type { Project, ProjectStatus } from "@/lib/types";

/**
 * Ordine delle colonne (Fase 5): la progressione del pipeline, come da
 * specifica ("Idea → In sviluppo → Pre-launch → Live") mappata sugli stati
 * reali dei dati (D5 adattato in Fase 2): building → beta → live. `paused`
 * è fuori dal pipeline e va in coda. Nessuno stato nascosto: anche una
 * colonna vuota resta visibile, col conteggio derivato dai dati.
 */
const statusOrder: ProjectStatus[] = ["building", "beta", "live", "paused"];

/**
 * Colore dell'icona di colonna, allineato al tone del Badge di stato
 * (lib/status.ts). L'icona colorata è decorativa: il significato resta
 * nell'etichetta testuale (h3), mai nel solo colore.
 */
const statusHeaderText: Record<ProjectStatus, string> = {
  live: "text-accent-soft",
  beta: "text-cyan-soft",
  building: "text-amber-soft",
  paused: "text-vertex-silver",
};

/**
 * Vista per stato (Fase 5). Componente SERVER: legge i dati via gli helper
 * della Fase 2 (getProjectsByStatus / countByStatus), zero interattività,
 * zero JS client. Le mini-card ereditano l'accento del progetto come le
 * card della griglia, così il portfolio si scansiona a colpo d'occhio.
 */
export function PortfolioStatus() {
  return (
    <Section id="stato" className="scroll-mt-24 border-t border-vertex-border">
      <Container>
        <Reveal>
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-accent-soft">
            Avanzamento
          </p>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-vertex-highlight sm:text-3xl">
            Il portfolio, stato per stato
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-vertex-silverMuted">
            {totalProjects} progetti, dal cantiere al live.
          </p>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          {statusOrder.map((status, index) => (
            <Reveal
              key={status}
              delay={Math.min(index * 70, 280)}
              className="flex"
            >
              <StatusColumn status={status} />
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/** Una colonna = uno stato: header con icona + etichetta + conteggio derivato. */
function StatusColumn({ status }: { status: ProjectStatus }) {
  const meta = statusMeta[status];
  const Icon = meta.icon;
  const projects = getProjectsByStatus(status);

  return (
    <div className="flex flex-col rounded-lg border border-vertex-border bg-vertex-surface/40 p-4">
      <div className="flex items-center gap-2.5">
        <Icon
          aria-hidden
          className={cn("h-4 w-4 shrink-0", statusHeaderText[status])}
        />
        <h3 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-vertex-highlight">
          {meta.label}
        </h3>
        <span
          className="ml-auto text-sm font-medium tabular-nums text-vertex-silverMuted"
          aria-label={`${projects.length} ${
            projects.length === 1 ? "progetto" : "progetti"
          }`}
        >
          {countByStatus[status]}
        </span>
      </div>

      {projects.length > 0 ? (
        <ul className="mt-4 flex flex-1 flex-col gap-2.5">
          {projects.map((project) => (
            <li key={project.name}>
              <StatusMiniCard project={project} />
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-4 flex-1 rounded-lg border border-dashed border-vertex-border px-3 py-4 text-xs leading-relaxed text-vertex-silverMuted">
          Nessun progetto in questo stato.
        </p>
      )}
    </div>
  );
}

/**
 * Mini-card colorata: stesso linguaggio della ProjectCard (bordo sfumato
 * dell'accento, tile icona, lift al hover) in versione compatta. Un solo
 * link per card (l'anchor È la card); URL invariato, target/rel per esterni.
 * Hover/focus: SOLO transform e opacity.
 */
function StatusMiniCard({ project }: { project: Project }) {
  const accent = accentClasses[project.accent];
  const Icon = project.icon ? projectIcons[project.icon] : undefined;

  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      style={accentVars(project.accent)}
      className={cn(
        "gradient-border group flex items-center gap-3 rounded-lg bg-vertex-bg/60 p-3",
        "transition duration-200 ease-out will-change-transform hover:-translate-y-0.5",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-soft focus-visible:ring-offset-2 focus-visible:ring-offset-vertex-bg",
        "motion-reduce:transition-none motion-reduce:hover:translate-y-0"
      )}
    >
      <span
        aria-hidden
        className={cn(
          "grid h-9 w-9 shrink-0 place-items-center rounded-md border",
          accent.border,
          accent.tile
        )}
      >
        {Icon ? (
          <Icon className={cn("h-4 w-4", accent.text)} />
        ) : (
          <span className={cn("text-sm font-semibold", accent.text)}>
            {project.name.charAt(0).toUpperCase()}
          </span>
        )}
      </span>

      <span className="min-w-0">
        <span className="block truncate text-sm font-medium text-vertex-highlight">
          {project.name}
        </span>
        <span className="block text-[11px] uppercase tracking-[0.14em] text-vertex-silverMuted">
          {project.category}
        </span>
      </span>

      <ArrowUpRight
        aria-hidden
        className={cn(
          "ml-auto h-4 w-4 shrink-0 text-vertex-steel",
          "transition duration-200 ease-out",
          "group-hover:-translate-y-0.5 group-hover:translate-x-0.5",
          accent.hoverText,
          "motion-reduce:transition-none motion-reduce:group-hover:translate-x-0 motion-reduce:group-hover:translate-y-0"
        )}
      />
    </a>
  );
}
