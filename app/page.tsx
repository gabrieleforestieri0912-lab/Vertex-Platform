import { projects } from "@/data/projects";

export default function Home() {
  return (
    <main className="min-h-screen bg-vertex-bg text-vertex-silver">
      {/* Fase 1 placeholder — Fase 2 will replace with Hero + ProjectGrid + Footer */}
      <div className="mx-auto max-w-5xl px-6 py-16">
        <h1 className="text-4xl font-bold tracking-tight text-vertex-highlight">
          Vertex
        </h1>
        <p className="mt-2 text-vertex-silverMuted">
          Fase 1 scaffold complete — components coming in Fase 2.
        </p>
        <p className="mt-6 text-sm text-vertex-steel">
          {projects.length} projects loaded from data/projects.ts
        </p>
      </div>
    </main>
  );
}
