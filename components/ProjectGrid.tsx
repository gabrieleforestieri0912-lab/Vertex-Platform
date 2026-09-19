import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export function ProjectGrid() {
  return (
    <section
      id="projects"
      className="mx-auto w-full max-w-5xl scroll-mt-8 px-6 py-16 sm:py-20"
    >
      <div className="flex items-baseline justify-between gap-4">
        <h2 className="text-[11px] font-medium uppercase tracking-[0.2em] text-vertex-silverMuted">
          Progetti
        </h2>
        <span className="text-xs text-vertex-steel">
          {projects.length} in totale
        </span>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
}
