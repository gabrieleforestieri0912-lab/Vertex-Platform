export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-vertex-border">
      {/* Soft monochrome glow — no saturated brand color. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_60%_at_50%_-20%,rgba(232,232,232,0.07),transparent_70%)]"
      />

      <div className="relative mx-auto w-full max-w-5xl px-6 py-24 sm:py-32">
        <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-vertex-steel">
          Progetti indipendenti
        </p>

        <h1 className="mt-5 text-5xl font-semibold tracking-tight text-vertex-highlight sm:text-7xl">
          Vertex
        </h1>

        {/*
          TODO(copy): claim provvisorio, da rivedere.
          L'elenco dei progetti arriva da data/projects.ts.
        */}
        <p className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-vertex-silverMuted">
          Un unico posto per i progetti che sto costruendo: cosa &egrave; live,
          cosa &egrave; in beta e cosa &egrave; ancora in cantiere.
        </p>

        <a
          href="#projects"
          className="mt-10 inline-flex items-center gap-2 text-sm text-vertex-silverMuted underline-offset-4 transition-colors duration-200 ease-out hover:text-vertex-highlight hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vertex-highlight/40 motion-reduce:transition-none"
        >
          Vedi i progetti
          <span aria-hidden>&darr;</span>
        </a>
      </div>
    </section>
  );
}
