import Image from "next/image";
import { AuroraBackground } from "@/components/AuroraBackground";
import { countByStatus, totalProjects } from "@/data/projects";

/**
 * Contatori hero (Fase 3): tutti derivati dai dati di data/projects.ts,
 * zero numeri scritti a mano. Le etichette riprendono le parole già usate
 * nella copy del sito ("cosa è live, cosa è in beta e cosa è ancora in
 * cantiere"). `paused` escluso: 0 progetti e fuori dalla narrativa.
 */
const counters = [
  { label: "Progetti", value: totalProjects },
  { label: "Live", value: countByStatus.live },
  { label: "Beta", value: countByStatus.beta },
  { label: "In cantiere", value: countByStatus.building },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-vertex-border">
      <AuroraBackground />

      <div className="relative mx-auto grid w-full max-w-5xl items-center gap-12 px-6 py-20 sm:py-28 lg:grid-cols-[1.4fr_1fr] xl:max-w-6xl xl:gap-16 2xl:max-w-7xl">
        <div>
          <p
            className="rise-in text-[11px] font-medium uppercase tracking-[0.2em] text-accent-soft"
            style={{ animationDelay: "0ms" }}
          >
            Progetti indipendenti
          </p>

          {/*
            min(3rem, 18vw): a zoom normale resta 48px, ma il termine in vw
            impedisce al wordmark di sfondare lo schermo quando il testo viene
            ingrandito al 200% (i rem raddoppiano, i vw no).
            Wordmark metallico: riflesso del logo tornado (Fase 1).
          */}
          <h1
            className="rise-in text-metal mt-5 text-[min(3rem,18vw)] font-semibold tracking-tight sm:text-6xl lg:text-7xl"
            style={{ animationDelay: "70ms" }}
          >
            Vertex
          </h1>

          {/*
            TODO(copy): claim provvisorio, da rivedere.
            L'elenco dei progetti arriva da data/projects.ts.
          */}
          <p
            className="rise-in mt-6 max-w-xl text-balance text-lg leading-relaxed text-vertex-silver xl:max-w-2xl"
            style={{ animationDelay: "140ms" }}
          >
            Un unico posto per i progetti che sto costruendo: cosa &egrave;
            live, cosa &egrave; in beta e cosa &egrave; ancora in cantiere.
          </p>

          {/* Contatori derivati dai dati (mai numeri a mano). */}
          <dl
            className="rise-in mt-9 flex flex-wrap gap-x-8 gap-y-4"
            style={{ animationDelay: "210ms" }}
          >
            {counters.map((counter) => (
              <div key={counter.label}>
                <dt className="text-[11px] uppercase tracking-[0.16em] text-vertex-silverMuted">
                  {counter.label}
                </dt>
                <dd className="mt-1 text-2xl font-semibold tabular-nums text-vertex-highlight">
                  {counter.value}
                </dd>
              </div>
            ))}
          </dl>

          <div
            className="rise-in mt-9 flex flex-wrap items-center gap-3"
            style={{ animationDelay: "280ms" }}
          >
            {/*
              hover scurisce invece di schiarire: bianco su accent-deep/85
              resta ≥ 7:1 (fix contrasto Fase 1; hover su accent era 4.2:1).
            */}
            <a
              href="#projects"
              className="inline-flex min-h-11 max-w-full items-center rounded-md bg-accent-deep px-5 text-sm font-medium text-white transition-colors duration-200 ease-out hover:bg-accent-deep/85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-soft focus-visible:ring-offset-2 focus-visible:ring-offset-vertex-bg motion-reduce:transition-none"
            >
              Vedi i progetti
            </a>
            <a
              href="#about"
              className="inline-flex min-h-11 max-w-full items-center rounded-md border border-vertex-border px-5 text-sm font-medium text-vertex-silver transition-colors duration-200 ease-out hover:border-accent/40 hover:text-vertex-highlight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-soft focus-visible:ring-offset-2 focus-visible:ring-offset-vertex-bg motion-reduce:transition-none"
            >
              Chi sono
            </a>
          </div>
        </div>

        {/* Logo Vertex: asset reale dal repo, prima non usato da nessuna parte. */}
        <div
          className="rise-in relative mx-auto w-full max-w-xs lg:max-w-none"
          style={{ animationDelay: "180ms" }}
        >
          {/* Glow brand dietro il logo: già sfocato staticamente (.glow-grad). */}
          <div aria-hidden className="glow-grad" />
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
