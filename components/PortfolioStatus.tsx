"use client";

import { ArrowUpRight } from "lucide-react";
import { GitHubIcon } from "@/components/GitHubIcon";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { countByStatus, getProjectsByStatus, totalProjects } from "@/data/projects";
import { accentClasses, accentVars } from "@/lib/accents";
import { cn } from "@/lib/cn";
import { getStatusLabel, useLanguage } from "@/lib/i18n";
import { projectIcons } from "@/lib/project-icon";
import { statusMeta } from "@/lib/status";
import type { Project, ProjectStatus } from "@/lib/types";

const statusOrder: ProjectStatus[] = ["live", "beta", "building", "paused"];

const statusDot: Record<ProjectStatus, string> = {
  live: "bg-emerald-500",
  beta: "bg-blue-500",
  building: "bg-amber-500",
  paused: "bg-vertex-silverMuted",
};

export function PortfolioStatus() {
  const { t } = useLanguage();

  return (
    <Section id="stato" className="scroll-mt-24 border-t border-vertex-border">
      <Container>
        <Reveal>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-vertex-silverMuted">{t.statusEyebrow}</p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-vertex-highlight sm:text-3xl">
            {t.statusTitle}
          </h2>
          <p className="mt-2 text-sm text-vertex-silverMuted">{t.statusSubtitle(totalProjects)}</p>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          {statusOrder.map((status, index) => (
            <Reveal key={status} delay={Math.min(index * 70, 280)} className="flex">
              <StatusColumn status={status} />
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function StatusColumn({ status }: { status: ProjectStatus }) {
  const meta = statusMeta[status];
  const { locale, t } = useLanguage();
  const Icon = meta.icon;
  const projects = getProjectsByStatus(status);

  return (
    <div className="flex flex-1 flex-col rounded-[16px] border border-vertex-border bg-vertex-surface p-4">
      <div className="flex items-center gap-2.5">
        <span className={cn("grid h-7 w-7 place-items-center rounded-lg border border-vertex-border bg-vertex-bgRaised")}>
          <Icon className="h-3.5 w-3.5 text-vertex-silverMuted" />
        </span>
        <h3 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-vertex-highlight">{getStatusLabel(status, locale)}</h3>
        <span className={cn("ml-auto h-2 w-2 rounded-full", statusDot[status])} aria-hidden />
        <span className="text-sm font-semibold tabular-nums text-vertex-silverMuted">{countByStatus[status]}</span>
      </div>

      {projects.length > 0 ? (
        <ul className="mt-4 flex flex-1 flex-col gap-2">
          {projects.map((project) => (
            <li key={project.name}>
              <StatusMiniCard project={project} />
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-4 flex-1 rounded-xl border border-dashed border-vertex-border px-3 py-4 text-xs leading-relaxed text-vertex-silverMuted">
          {t.statusEmpty}
        </p>
      )}
    </div>
  );
}

function StatusMiniCard({ project }: { project: Project }) {
  const accent = accentClasses[project.accent];
  const Icon = project.icon ? projectIcons[project.icon] : undefined;
  const showGithub =
    project.githubUrl && project.githubUrl !== project.url;

  return (
    <div
      style={accentVars(project.accent)}
      className={cn(
        "group flex items-center gap-3 rounded-xl border border-vertex-border bg-vertex-bgRaised p-3",
        "transition-all duration-200 hover:-translate-y-0.5 hover:border-vertex-border-strong hover:shadow-sm",
      )}
    >
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${project.name}`}
        className="flex min-w-0 flex-1 items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/10 rounded-lg"
      >
        <span className="tile-flat h-9 w-9 rounded-lg">
          {Icon ? <Icon className="h-4 w-4" /> : <span className="text-xs font-bold">{project.name.charAt(0)}</span>}
        </span>
        <span className="min-w-0">
          <span className="block truncate text-sm font-medium text-vertex-highlight">{project.name}</span>
          <span className="block text-[11px] uppercase tracking-[0.12em] text-vertex-silverMuted">{project.category}</span>
        </span>
        <ArrowUpRight className="ml-auto h-3.5 w-3.5 shrink-0 text-vertex-silverMuted group-hover:text-vertex-highlight transition-colors" />
      </a>
      {showGithub ? (
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`GitHub — ${project.name}`}
          title={`GitHub — ${project.name}`}
          className="grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-vertex-border text-vertex-silverMuted transition-colors hover:border-white/25 hover:text-white"
        >
          <GitHubIcon className="h-4 w-4" />
        </a>
      ) : project.url.includes("github.com") ? (
        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg text-vertex-silverMuted">
          <GitHubIcon className="h-4 w-4" />
        </span>
      ) : null}
    </div>
  );
}
