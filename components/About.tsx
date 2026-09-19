/**
 * Sezione "chi sono" a 360°.
 *
 * NESSUN testo e' stato inventato: riempi solo questo oggetto e i placeholder
 * spariscono da soli. Ogni campo vuoto (null / array vuoto) renderizza un box
 * tratteggiato con l'indicazione di cosa va scritto.
 */
type Fact = { label: string; value: string };

const about: {
  intro: string | null;
  focus: string[];
  stack: string[];
  facts: Fact[];
} = {
  // 2-3 righe: chi sei e cosa fai oggi.
  intro: null,

  // Cosa stai costruendo adesso (2-4 punti, una riga l'uno).
  focus: [],

  // Tecnologie con cui lavori davvero (chip).
  stack: [],

  // Righe label/valore: base, ruolo, esperienza, disponibilita', lingue...
  facts: [],
};

export function About() {
  return (
    <section
      id="about"
      className="border-t border-vertex-border bg-vertex-bg"
    >
      <div className="mx-auto w-full max-w-5xl scroll-mt-8 px-6 py-16 sm:py-20">
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
              {about.facts.length ? (
                <dl className="space-y-3">
                  {about.facts.map((fact) => (
                    <div key={fact.label} className="flex gap-4 text-sm">
                      <dt className="w-24 shrink-0 text-vertex-steel">
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
