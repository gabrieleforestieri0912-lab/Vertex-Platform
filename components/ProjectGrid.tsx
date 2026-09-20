import { ProjectExplorer } from "@/components/ProjectExplorer";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { projects } from "@/data/projects";

/**
 * Sezione progetti (Fase 4). Componente SERVER: importa i dati e li passa
 * come prop al client, che gestisce solo filtri e ricerca. Nessun numero
 * scritto a mano: i conteggi sono derivati dall'array.
 */
export function ProjectGrid() {
  return (
    <Section id="projects" className="scroll-mt-24">
      <Container>
        <Reveal>
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-accent-soft">
            Progetti
          </p>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-vertex-highlight sm:text-3xl">
            {/* TODO(copy): titolo sezione da confermare */}
            Dal live al cantiere, in un unico posto
          </h2>
        </Reveal>

        <div className="mt-8">
          <ProjectExplorer projects={projects} />
        </div>
      </Container>
    </Section>
  );
}
