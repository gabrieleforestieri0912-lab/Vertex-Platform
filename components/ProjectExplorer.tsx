"use client";

import { useCallback, useMemo, useRef, useState } from "react";
import { Search, SearchX, X } from "lucide-react";
import { FeaturedProjectCard } from "@/components/FeaturedProjectCard";
import { ProjectCard } from "@/components/ProjectCard";
import { Button } from "@/components/ui/Button";
import { Chip } from "@/components/ui/Chip";
import { Reveal } from "@/components/ui/Reveal";
import type { Project, ProjectCategory } from "@/lib/types";

type CategoryFilter = ProjectCategory | "all";

/** Normalizza per confronto: minuscole e niente accenti ("perche" ~ "perché"). */
function normalize(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

/** Chiave compatta del solo nome: "S.A.V.I.A" → "savia" (la ricerca ignora punteggiatura). */
function compact(value: string) {
  return normalize(value).replace(/[^a-z0-9]/g, "");
}

/**
 * Explorer dei progetti (Fase 4): filtri per categoria + ricerca testuale
 * (D10), interamente client-side sui dati statici passati dal server.
 * Il server resta responsabile dei dati; qui solo stato di UI.
 *
 * Il progetto `featured` (D6) partecipa ai filtri come gli altri: quando
 * combacia viene mostrato come card grande in cima ed è tolto dalla griglia
 * (mai duplicato); quando non combacia scompare, coerente con la ricerca.
 */
export function ProjectExplorer({ projects }: { projects: Project[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<CategoryFilter>("all");
  const searchRef = useRef<HTMLInputElement>(null);

  const categories = useMemo(() => {
    const counts = new Map<ProjectCategory, number>();
    for (const project of projects) {
      counts.set(project.category, (counts.get(project.category) ?? 0) + 1);
    }
    return Array.from(counts.entries());
  }, [projects]);

  const results = useMemo(() => {
    const q = normalize(query.trim());
    const qCompact = compact(query.trim());

    return projects.filter((project) => {
      if (category !== "all" && project.category !== category) return false;
      if (!q && !qCompact) return true;
      const nameKey = compact(project.name);
      const haystack = normalize(
        `${project.name} ${project.tagline} ${project.category}`
      );
      return (qCompact.length > 0 && nameKey.includes(qCompact)) || haystack.includes(q);
    });
  }, [projects, query, category]);

  const featuredProject = useMemo(
    () => projects.find((project) => project.featured === true),
    [projects]
  );
  const featuredVisible =
    featuredProject !== undefined && results.includes(featuredProject);
  const gridProjects = featuredVisible
    ? results.filter((project) => project !== featuredProject)
    : results;

  const resetFilters = useCallback(() => {
    setQuery("");
    setCategory("all");
    searchRef.current?.focus();
  }, []);

  const resultsLabel = `${results.length} ${
    results.length === 1 ? "progetto" : "progetti"
  }`;

  return (
    <div>
      {/* Controlli: ricerca + chip categoria. */}
      <Reveal delay={120}>
        <div className="flex flex-col gap-4">
        <div className="relative max-w-md">
          <label htmlFor="project-search" className="sr-only">
            Cerca tra i progetti
          </label>
          <Search
            aria-hidden
            className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-vertex-silverMuted"
          />
          <input
            ref={searchRef}
            id="project-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Cerca per nome o descrizione…"
            autoComplete="off"
            className="min-h-11 w-full rounded-md border border-vertex-border bg-vertex-surface/70 pl-10 pr-10 text-sm text-vertex-highlight placeholder:text-vertex-silverMuted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-soft focus-visible:ring-offset-2 focus-visible:ring-offset-vertex-bg [&::-webkit-search-cancel-button]:appearance-none"
          />
          {query !== "" ? (
            <button
              type="button"
              onClick={() => {
                setQuery("");
                searchRef.current?.focus();
              }}
              aria-label="Cancella la ricerca"
              className="absolute right-1.5 top-1/2 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-md text-vertex-silverMuted transition-colors duration-200 ease-out hover:text-vertex-highlight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-soft motion-reduce:transition-none"
            >
              <X aria-hidden className="h-4 w-4" />
            </button>
          ) : null}
        </div>

        <div
          role="group"
          aria-label="Filtra per categoria"
          className="flex flex-wrap items-center gap-2"
        >
          <Chip
            selected={category === "all"}
            onClick={() => setCategory("all")}
          >
            Tutti{" "}
            <span className="tabular-nums text-vertex-silverMuted">
              {projects.length}
            </span>
          </Chip>
          {categories.map(([cat, count]) => (
            <Chip
              key={cat}
              selected={category === cat}
              onClick={() => setCategory(cat)}
            >
              {cat}{" "}
              <span className="tabular-nums text-vertex-silverMuted">
                {count}
              </span>
            </Chip>
          ))}
        </div>
        </div>
      </Reveal>

      {/* Conteggio risultati: annunciato ai lettori di schermo quando cambia. */}
      <Reveal delay={220} className="mt-8">
        <p
          role="status"
          className="text-[11px] font-medium uppercase tracking-[0.16em] text-vertex-silverMuted"
        >
          {resultsLabel}
        </p>
      </Reveal>

      {featuredVisible && featuredProject ? (
        <Reveal delay={100} className="mt-4">
          <FeaturedProjectCard project={featuredProject} />
        </Reveal>
      ) : null}

      {gridProjects.length > 0 ? (
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {gridProjects.map((project, index) => (
            /*
             * Stagger (Fase 6): delay crescente con cap a 270ms. Le card con
             * chiave stabile non si ri-animano al cambio filtro (React riusa
             * l'istanza, già revealed); le nuove entrano in fade — solo
             * transform/opacity, niente layout animato.
             */
            <Reveal
              key={project.name}
              delay={Math.min(index * 45, 270)}
              className="flex"
            >
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      ) : (
        <Reveal delay={100}>
          <EmptyState onReset={resetFilters} />
        </Reveal>
      )}
    </div>
  );
}

/** Stato vuoto (Fase 4): mai una griglia svuotata in silenzio. */
function EmptyState({ onReset }: { onReset: () => void }) {
  return (
    <div className="mt-4 flex flex-col items-center gap-4 rounded-lg border border-dashed border-vertex-border bg-vertex-surface/40 px-6 py-16 text-center">
      <span
        aria-hidden
        className="grid h-14 w-14 place-items-center rounded-full border border-vertex-border bg-vertex-bgRaised"
      >
        <SearchX className="h-6 w-6 text-vertex-silverMuted" />
      </span>
      <div>
        <p className="text-base font-medium text-vertex-highlight">
          Nessun progetto trovato
        </p>
        <p className="mt-1 text-sm text-vertex-silverMuted">
          Prova a cambiare categoria o a modificare la ricerca.
        </p>
      </div>
      <Button variant="secondary" size="sm" onClick={onReset}>
        Azzera filtri
      </Button>
    </div>
  );
}
