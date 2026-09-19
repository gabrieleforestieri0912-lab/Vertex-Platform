/**
 * Sezione "chi sono" a 360°.
 *
 * Stack e facts sono PRE-COMPILATI con dati verificabili presi dai repo pubblici
 * (niente inventato): vedi le note di provenienza accanto a ogni blocco.
 * intro e focus restano tuoi: finche' sono vuoti mostrano un box tratteggiato.
 */
type Fact = { label: string; value: string };

const about: {
  intro: string | null;
  focus: string[];
  stack: string[];
  facts: Fact[];
} = {
  /**
   * BOZZA da correggere (scritta sui fatti verificabili: progetti indie
   * pubblicati da solo, ciclo completo idea -> codice -> deploy).
   */
  intro:
    "Progetto e sviluppo prodotti digitali in autonomia, dall'idea al deploy: " +
    "web app, tool desktop e servizi pubblicati sotto il nome Vertex.",

  // BOZZA da correggere: cosa stai costruendo adesso.
  focus: [
    "Consolidare i prodotti gi\u00e0 online (Curriculuxe, Taskly, StackUp) prima di aggiungerne di nuovi.",
    "Web app in Next.js con Supabase e Stripe: autenticazione, pagamenti, dashboard.",
    "Sperimentare con LLM e agenti (AgentCloud, Voiceflow) per automazioni concrete.",
  ],

  /**
   * Fonti:
   * - linguaggi: campo `language` delle 18 repo pubbliche (TypeScript 14,
   *   JavaScript 2, Dart 1, HTML 1);
   * - framework e servizi: dependencies di AgentCloud/package.json.
   */
  stack: [
    "TypeScript",
    "JavaScript",
    "Dart",
    "Next.js",
    "React",
    "Tailwind CSS",
    "Supabase",
    "Stripe",
    "Resend",
    "Anthropic API",
    "Framer Motion",
    "Vitest",
    "Vercel",
  ],

  /**
   * Fonti: GitHub API (`public_repos`, `created_at`) e date di push delle repo.
   * Da completare a mano: base, ruolo, anni di esperienza, disponibilita'.
   */
  facts: [
    { label: "Progetti", value: "18 repository pubbliche" },
    { label: "Su GitHub dal", value: "settembre 2025" },
    { label: "Ultima attivit\u00e0", value: "settembre 2026" },
  ],
};

export function About() {
  return (
    <section
      id="about"
      className="border-t border-vertex-border bg-vertex-bg"
    >
      <div className="mx-auto w-full max-w-5xl scroll-mt-8 px-6 py-16 sm:py-20 xl:max-w-6xl 2xl:max-w-7xl">
        <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-accent-soft">
          Chi sono
        </p>
        <h2 className="mt-4 text-2xl font-semibold tracking-tight text-vertex-highlight sm:text-3xl">
          A 360&deg;
        </h2>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.3fr_1fr]">
          <div className="space-y-6">
            <Block title="In due righe">
              {about.intro ? (
                <p className="text-sm leading-relaxed text-vertex-silver">
                  {about.intro}
                </p>
              ) : (
                <Placeholder>
                  2-3 righe: chi sei e cosa fai oggi — <code>about.intro</code>
                </Placeholder>
              )}
            </Block>

            <Block title="Focus attuale">
              {about.focus.length ? (
                <ul className="space-y-2">
                  {about.focus.map((item) => (
                    <li
                      key={item}
                      className="flex gap-2 text-sm leading-relaxed text-vertex-silverMuted"
                    >
                      <span aria-hidden className="mt-1 text-accent">
                        &bull;
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              ) : (
                <Placeholder>
                  Su cosa stai lavorando adesso, 2-4 punti —{" "}
                  <code>about.focus</code>
                </Placeholder>
              )}
            </Block>
          </div>

          <div className="space-y-6">
            <Block title="Stack">
              {about.stack.length ? (
                <ul className="flex flex-wrap gap-2">
                  {about.stack.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full border border-vertex-border bg-vertex-surface px-3 py-1 text-xs text-vertex-silver"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              ) : (
                <Placeholder>
                  Tecnologie che usi davvero — <code>about.stack</code>
                </Placeholder>
              )}
            </Block>

            <Block title="In breve">
              {/*
                Su schermi stretti label e valore si impilano: con la larghezza
                fissa (w-24) e il gap in rem, a testo ingrandito al 200% la riga
                sfondava la pagina di ~76px.
              */}
              {about.facts.length ? (
                <dl className="space-y-3">
                  {about.facts.map((fact) => (
                    <div
                      key={fact.label}
                      className="flex flex-col text-sm sm:flex-row sm:gap-4"
                    >
                      <dt className="text-vertex-silverMuted sm:w-24 sm:shrink-0">
                        {fact.label}
                      </dt>
                      <dd className="text-vertex-silver">{fact.value}</dd>
                    </div>
                  ))}
                </dl>
              ) : (
                <Placeholder>
                  Base, ruolo, anni di esperienza, disponibilit&agrave; —{" "}
                  <code>about.facts</code>
                </Placeholder>
              )}
            </Block>
          </div>
        </div>
      </div>
    </section>
  );
}

function Block({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3 className="text-[11px] font-medium uppercase tracking-[0.16em] text-vertex-silverMuted">
        {title}
      </h3>
      <div className="mt-3">{children}</div>
    </div>
  );
}

function Placeholder({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-lg border border-dashed border-accent/40 bg-accent/[0.06] px-4 py-3 text-sm leading-relaxed text-accent-soft">
      <span className="mr-2 inline-block font-mono text-[10px] uppercase tracking-[0.14em] text-accent">
        da compilare
      </span>
      {children}
    </div>
  );
}
