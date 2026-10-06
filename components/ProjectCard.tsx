"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { GitHubIcon } from "@/components/GitHubIcon";
import { StatusBadge } from "@/components/StatusBadge";
import { accentClasses, accentVars } from "@/lib/accents";
import { cn } from "@/lib/cn";
import { getProjectTagline, useLanguage } from "@/lib/i18n";
import { projectIcons } from "@/lib/project-icon";
import type { Project } from "@/lib/types";

/**
 * Card flat con hover sobrio:
 * - leggero sollevamento
 * - bordo che si colora appena con --accent
 * - link principale (sito live o repo) + icona GitHub quando disponibile
 */
export function ProjectCard({ project }: { project: Project }) {
  const accent = accentClasses[project.accent];
  const { locale, t } = useLanguage();
  const isGithubUrl = project.url.includes("github.com");
  const showGithubIcon =
    project.githubUrl && project.githubUrl !== project.url;

  return (
    <motion.article
      style={accentVars(project.accent)}
      initial={false}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-[20px] bg-vertex-surface",
        "border border-vertex-border hover:border-vertex-border-strong hover:shadow-[0_8px_24px_rgba(0,0,0,0.35)]",
        "transition-[border-color,box-shadow] duration-300",
        "focus-within:ring-2 focus-within:ring-white/10",
      )}
    >
      {/* accent bar */}
      <div className="relative h-[3px] w-full overflow-hidden bg-vertex-border">
        <motion.div
          className="absolute inset-y-0 left-0"
          style={{ background: "var(--accent)", width: "100%" }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>

      <div className="relative flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <ProjectMark project={project} />
          </div>
          <div className="flex items-center gap-2">
            <span className="rounded-full border border-vertex-border bg-vertex-bgRaised px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-vertex-silverMuted group-hover:border-white/15 group-hover:text-white transition-colors">
              {project.category}
            </span>
            {showGithubIcon ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`GitHub — ${project.name}`}
                title={`GitHub — ${project.name}`}
                onClick={(e) => e.stopPropagation()}
                className="relative z-10 grid h-7 w-7 place-items-center rounded-full border border-vertex-border bg-vertex-bgRaised text-vertex-silverMuted transition-colors hover:border-white/25 hover:text-white hover:bg-white/10"
              >
                <GitHubIcon className="h-3.5 w-3.5" />
              </a>
            ) : null}
          </div>
        </div>

        <h3 className="mt-4 text-[17px] font-bold leading-snug tracking-tight">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-vertex-highlight after:absolute after:inset-0 focus-visible:outline-none"
          >
            {project.name}
            <span
              className={cn(
                "grid h-6 w-6 place-items-center rounded-full border border-vertex-border bg-vertex-bgRaised",
                "group-hover:border-white/15 group-hover:bg-white group-hover:text-black transition-colors"
              )}
            >
              {isGithubUrl ? (
                <GitHubIcon className="h-3.5 w-3.5" />
              ) : (
                <ArrowUpRight className="h-3.5 w-3.5" />
              )}
            </span>
          </a>
        </h3>

        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-vertex-silverMuted group-hover:text-vertex-silver transition-colors">
          {getProjectTagline(project, locale)}
        </p>

        <div className="mt-5 flex items-center justify-between gap-3 border-t border-vertex-border/60 pt-4">
          <StatusBadge status={project.status} />
          <span
            className="relative z-10 flex items-center gap-1.5 text-xs font-semibold text-vertex-silverMuted group-hover:text-white transition-colors"
          >
            <span className={cn("h-2 w-2 rounded-full animate-pulse-dot", accent.dot)} aria-hidden />
            {isGithubUrl ? t.cardOpenGithub : t.cardOpenSite}
            {isGithubUrl ? (
              <GitHubIcon className="h-3 w-3" />
            ) : (
              <ArrowUpRight className="h-3 w-3" />
            )}
            {showGithubIcon ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`GitHub — ${project.name}`}
                onClick={(e) => e.stopPropagation()}
                className="ml-1 grid h-6 w-6 place-items-center rounded-full border border-vertex-border text-vertex-silverMuted transition-colors hover:border-white/25 hover:text-white"
              >
                <GitHubIcon className="h-3 w-3" />
              </a>
            ) : null}
          </span>
        </div>
      </div>
    </motion.article>
  );
}

function ProjectMark({ project }: { project: Project }) {
  if (project.logo) {
    return (
      <div className="h-11 w-11 shrink-0 overflow-hidden rounded-xl border border-transparent bg-transparent">
        <Image
          src={project.logo}
          alt={`Logo ${project.name}`}
          width={44}
          height={44}
          className="h-full w-full rounded-xl object-contain"
        />
      </div>
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
    <span className="tile-flat text-sm font-bold">
      {project.name.charAt(0).toUpperCase()}
    </span>
  );
}
