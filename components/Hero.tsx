import Image from "next/image";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-vertex-border">
      {/* Glow dell'accento: unico tocco cromatico di fondo. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(75%_60%_at_25%_-10%,rgba(139,92,246,0.22),transparent_70%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent"
      />

      <div className="relative mx-auto grid w-full max-w-5xl items-center gap-12 px-6 py-20 sm:py-28 lg:grid-cols-[1.4fr_1fr] xl:max-w-6xl xl:gap-16 2xl:max-w-7xl">
        <div>
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-accent-soft">
            Progetti indipendenti
          </p>

          <h1 className="mt-5 text-5xl font-semibold tracking-tight text-vertex-highlight sm:text-6xl lg:text-7xl">
            Vertex
          </h1>

          {/*
            TODO(copy): claim provvisorio, da rivedere.
            L'elenco dei progetti arriva da data/projects.ts.
          */}
          <p className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-vertex-silver xl:max-w-2xl">
            Un unico posto per i progetti che sto costruendo: cosa &egrave; live,
            cosa &egrave; in beta e cosa &egrave; ancora in cantiere.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex min-h-11 items-center rounded-md bg-accent-deep px-5 text-sm font-medium text-white transition-colors duration-200 ease-out hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-soft focus-visible:ring-offset-2 focus-visible:ring-offset-vertex-bg motion-reduce:transition-none"
            >
              Vedi i progetti
            </a>
            <a
              href="#about"
              className="inline-flex min-h-11 items-center rounded-md border border-vertex-border px-5 text-sm font-medium text-vertex-silver transition-colors duration-200 ease-out hover:border-accent/40 hover:text-vertex-highlight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-soft focus-visible:ring-offset-2 focus-visible:ring-offset-vertex-bg motion-reduce:transition-none"
            >
              Chi sono
            </a>
          </div>
        </div>

        {/* Logo Vertex: asset reale dal repo, prima non usato da nessuna parte. */}
        <div className="relative mx-auto w-full max-w-xs lg:max-w-none">
          <div
            aria-hidden
            className="absolute inset-0 rounded-full bg-accent/20 blur-3xl"
          />
          <Image
            src="/vertex.png"
            alt="Logo Vertex"
            width={1254}
            height={1254}
            priority
            sizes="(min-width: 1024px) 320px, 256px"
            /*
              mix-blend-screen: il fondo nero del PNG sparisce sulla base scura.
              brightness-150: il logo ha il 90% dei pixel sotto 33/255, senza boost
              su #0A0A0A la parte visibile resta ~11% (misurato: sale al 17%).
              Niente contrast-*: il pivot sul grigio 50% schiaccia i toni scuri.
            */
            className="relative mx-auto w-full max-w-[16rem] mix-blend-screen brightness-150 lg:max-w-[19rem] xl:max-w-[21rem]"
          />
        </div>
      </div>
    </section>
  );
}
