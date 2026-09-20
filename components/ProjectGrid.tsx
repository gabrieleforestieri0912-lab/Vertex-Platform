"use client";

import { motion } from "framer-motion";
import { FeaturedProjectCard } from "@/components/FeaturedProjectCard";
import { ProjectCard } from "@/components/ProjectCard";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { getFeaturedProject, getProjectsByStatus } from "@/data/projects";
import { EASE } from "@/lib/motion";

export function ProjectGrid() {
  const featured = getFeaturedProject();
  const live = getProjectsByStatus("live");
  const beta = getProjectsByStatus("beta").filter((p) => !p.featured);
  const building = getProjectsByStatus("building");

  return (
    <Section id="projects" className="scroll-mt-24">
      <Container>
        <Reveal>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-vertex-silverMuted">Collezione</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-vertex-highlight sm:text-4xl">
            Tutti i progetti, in un unico posto
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-vertex-silverMuted sm:text-base">
            Non un marketplace — la piattaforma che raccoglie ciò che sto costruendo. Ogni card ha il suo colore,
            preso dal sito live. Nessun gradiente, solo tinte piatte e pulite.
          </p>
        </Reveal>

        {featured ? (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: EASE }}
            className="mt-10"
          >
            <FeaturedProjectCard project={featured} />
          </motion.div>
        ) : null}

        <div className="mt-12 space-y-14">
          <ProjectSection title="Live" count={live.length} dotClass="bg-emerald-500" projects={live} startDelay={0} />
          <ProjectSection title="Beta" count={beta.length} dotClass="bg-blue-500" projects={beta} startDelay={0.1} />
          <ProjectSection title="In cantiere" count={building.length} dotClass="bg-amber-500" projects={building} startDelay={0.15} />
        </div>
      </Container>
    </Section>
  );
}

function ProjectSection({
  title,
  count,
  dotClass,
  projects,
  startDelay,
}: {
  title: string;
  count: number;
  dotClass: string;
  projects: import("@/lib/types").Project[];
  startDelay: number;
}) {
  if (projects.length === 0) return null;
  return (
    <div>
      <div className="flex items-center gap-3">
        <span className={`h-2 w-2 rounded-full ${dotClass}`} aria-hidden />
        <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-vertex-highlight">{title}</h3>
        <span className="rounded-full bg-vertex-surfaceElevated px-2.5 py-0.5 text-xs font-medium tabular-nums text-vertex-silverMuted">
          {count}
        </span>
        <div className="ml-2 h-px flex-1 bg-vertex-border" aria-hidden />
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.5, ease: EASE, delay: Math.min(index * 0.06, 0.24) + startDelay }}
            className="flex"
          >
            <div className="flex w-full">
              <div className="w-full">
                <ProjectCard project={project} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
