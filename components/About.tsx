"use client";

import { Reveal } from "@/components/ui/Reveal";
import { countByStatus, totalProjects } from "@/data/projects";
import { useLanguage } from "@/lib/i18n";

/**
 * Sezione "chi sono" a 360°.
 *
 * Stack e facts sono PRE-COMPILATI con dati verificabili presi dai repo pubblici
 * (niente inventato): vedi le note di provenienza accanto a ogni blocco.
 * intro e focus sono finalizzati sui dati verificabili di data/projects.ts
 * (stati, deploy, waitlist). Base, ruolo e disponibilità sono dati personali
 * non deducibili da nessuna fonte: non inventati, da aggiungere a mano se e
 * quando Gabriele li fornisce.
 */
type Fact = { label: string; value: string };

const stack: string[] = [
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
];

export function About() {
  const { t } = useLanguage();

  const facts: Fact[] = [
    {
      label: t.factProjects,
      value: t.factProjectsValue(totalProjects, countByStatus.live),
    },
    { label: t.factSince, value: t.factSinceValue },
    { label: t.factActivity, value: t.factActivityValue },
  ];

  return (
    <section
      id="about"
      className="border-t border-vertex-border bg-vertex-bg"
    >
      <div className="mx-auto w-full max-w-5xl scroll-mt-24 px-6 py-16 sm:py-20 xl:max-w-6xl 2xl:max-w-7xl">
        <Reveal>
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-accent-soft">
            {t.aboutEyebrow}
          </p>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-vertex-highlight sm:text-3xl">
            {t.aboutTitle}
          </h2>
        </Reveal>

        <Reveal delay={140} className="mt-8 grid gap-6 lg:grid-cols-[1.3fr_1fr]">
          <div className="space-y-6">
            <Block title={t.aboutIntroTitle}>
              <p className="text-sm leading-relaxed text-vertex-silver">
                {t.aboutIntro}
              </p>
            </Block>

            <Block title={t.aboutFocusTitle}>
              <ul className="space-y-2">
                {t.aboutFocus.map((item) => (
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
            </Block>
          </div>

          <div className="space-y-6">
            <Block title={t.aboutStackTitle}>
              <ul className="flex flex-wrap gap-2">
                {stack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full border border-vertex-border bg-vertex-surface px-3 py-1 text-xs text-vertex-silver"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </Block>

            <Block title={t.aboutFactsTitle}>
              <dl className="space-y-3">
                {facts.map((fact) => (
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
            </Block>
          </div>
        </Reveal>
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
