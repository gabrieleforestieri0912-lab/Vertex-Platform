import type {
  Project,
  ProjectCategory,
  ProjectStatus,
} from "@/lib/types";

/**
 * Elenco progetti della landing (una card per repo pubblica, esclusa
 * Vertex-Platform che è questo sito).
 *
 * COME SONO STATI COMPILATI — tutto da fonti verificabili:
 * - `tagline`: prima riga descrittiva del README della repo, oppure meta
 *   description del sito live. Dove non esiste nessuna fonte, resta il
 *   segnaposto "Descrizione da definire" (5 progetti) — niente testo inventato.
 * - `url`: la homepage pubblica SOLO se risponde 200 adesso, altrimenti la repo
 *   GitHub. Verificato il 19/09/2026: i deploy di Taskly, StackUp e Mind-Project
 *   risultano morti (404) e quindi qui puntano alla repo.
 * - `status`: `live` = deploy pubblico verificato ora; `beta` = prodotto
 *   descritto come completo nel README ma senza deploy pubblico verificato;
 *   `building` = nessuna descrizione di prodotto disponibile.
 *   ⚠️ Da rivedere a mano: lo stato reale lo conosci solo tu.
 * - `category`: dedotta dalla piattaforma (Next.js -> SaaS, Electron/Flutter
 *   -> Desktop/Mobile, estensione Chrome -> Extension).
 *
 * FASE 2 — campi nuovi (tutti PROPOSTI, nessuna fonte esistente):
 * - `accent`: famiglia cromatica della card (vedi lib/accents.ts). Distribuzione
 *   proposta per dare identità visiva a ogni progetto mantenendo continuità
 *   tra prodotti correlati (Taskly / Taskly-Desktop). → TODO: confermare.
 * - `icon`: nome dell'icona lucide-react del monogramma (union `ProjectIcon`
 *   in lib/types.ts, risolta a compile-time). → TODO: confermare.
 * - `featured`: solo AgentCloud, progetto flagship (decisione D6).
 *
 * Ordine di visualizzazione: live -> beta -> building.
 */
export const projects: Project[] = [
  // --- live (deploy verificato) ---
  {
    name: "Curriculuxe",
    // Fonte: README + meta description di curriculuxe.vercel.app
    tagline:
      "Crea, ottimizza e monitora il curriculum con l'AI: analisi ATS, personalizzazione per job description e Career Market.",
    status: "live",
    category: "Education",
    url: "https://curriculuxe.vercel.app",
    accent: "cyan", // TODO: confermare
    icon: "GraduationCap", // TODO: confermare
  },
  {
    name: "InFolders",
    // Fonte: README + meta description di infolders.vercel.app
    tagline:
      "Estensione Chrome che organizza le conversazioni AI (ChatGPT, Gemini, Claude, Perplexity) in cartelle, bookmark e prompt.",
    status: "live",
    category: "Extension",
    url: "https://infolders.vercel.app",
    accent: "cyan", // TODO: confermare
    icon: "FolderOpen", // TODO: confermare
  },
  {
    name: "VoiceFlow",
    // Fonte: meta description di voiceflow-flax.vercel.app
    tagline:
      "Dettatura vocale push-to-talk per Windows: tieni premuto Ctrl+Spazio, parla, rilascia e il testo compare dove stai scrivendo.",
    status: "live",
    category: "Desktop",
    url: "https://voiceflow-flax.vercel.app",
    accent: "magenta", // TODO: confermare
    icon: "Mic", // TODO: confermare
  },
  {
    name: "CaptionBoost",
    // Fonte: meta description di captionboost.vercel.app
    tagline:
      "Sottotitoli AI per YouTube in tempo reale: traduzione istantanea, aspetto personalizzabile e privacy-first.",
    status: "live",
    category: "SaaS",
    url: "https://captionboost.vercel.app",
    accent: "magenta", // TODO: confermare
    icon: "Captions", // TODO: confermare
  },

  // --- beta (prodotto descritto, deploy pubblico non verificato) ---
  {
    name: "AgentCloud",
    // Fonte: README della repo (fase waitlist)
    tagline:
      "Piattaforma di agenti AI per le aziende: marketplace di agenti pronti al lancio, chat in streaming e billing Stripe con overage.",
    status: "beta",
    category: "SaaS",
    url: "https://github.com/gabrieleforestieri0912-lab/AgentCloud",
    accent: "amber", // TODO: confermare
    icon: "Bot", // TODO: confermare
    featured: true, // D6: flagship — TODO: confermare
  },
  {
    name: "Taskly",
    // Fonte: README della repo. Il deploy in metadata (taskly-pi-five) dà 404.
    tagline:
      "Hub di produttività personale: attività, obiettivi, note, documenti con backlink, workspace e assistenza AI.",
    status: "beta",
    category: "SaaS",
    url: "https://github.com/gabrieleforestieri0912-lab/Taskly",
    accent: "amber", // TODO: confermare (continuità con Taskly-Desktop)
    icon: "ListChecks", // TODO: confermare
  },
  {
    name: "StackUp",
    // Repo: Stackup-Room. Fonte: DOCS-STRUTTURA.md della repo.
    tagline:
      "Piattaforma per imparare a programmare: corsi a pagamento, guide, percorsi di carriera, dashboard utente e certificati.",
    status: "beta",
    category: "Education",
    url: "https://github.com/gabrieleforestieri0912-lab/Stackup-Room",
    accent: "cyan", // TODO: confermare
    icon: "Rocket", // TODO: confermare
  },
  {
    name: "Resumari",
    // Fonte: README della repo
    tagline:
      "Trasforma i video YouTube in trascrizioni istantanee, riassunti e chat, con estensione Chrome, server MCP e API pubblica.",
    status: "beta",
    category: "SaaS",
    url: "https://github.com/gabrieleforestieri0912-lab/Resumari",
    accent: "violet", // TODO: confermare
    icon: "ScrollText", // TODO: confermare
  },
  {
    name: "S.A.V.I.A",
    // Fonte: README della repo
    tagline:
      "Assistente AI desktop con interfaccia HUD in stile JARVIS: modelli multi-provider e controllo vocale.",
    status: "beta",
    category: "Desktop",
    url: "https://github.com/gabrieleforestieri0912-lab/S.A.V.I.A",
    accent: "magenta", // TODO: confermare
    icon: "Sparkles", // TODO: confermare
  },
  {
    name: "OmniHabit",
    // Fonte: README della repo
    tagline:
      "Piattaforma per costruire abitudini che durano, sui principi di Atomic Habits, con OmniMind, il coach AI.",
    status: "beta",
    category: "SaaS",
    url: "https://github.com/gabrieleforestieri0912-lab/OmniHabit",
    accent: "magenta", // TODO: confermare
    icon: "Repeat", // TODO: confermare
  },
  {
    name: "Semplycode",
    // Fonte: README della repo
    tagline:
      "Analizza e spiega il codice con l'AI: scompone la logica, trova i bug e insegna pattern migliori, con estensione Chrome.",
    status: "beta",
    category: "SaaS",
    url: "https://github.com/gabrieleforestieri0912-lab/Semplycode",
    accent: "violet", // TODO: confermare
    icon: "Braces", // TODO: confermare
  },
  {
    name: "Reskill",
    // Fonte: README della repo
    tagline:
      "Genera Skill AI (file Markdown) da web, YouTube, PDF e social, da usare come contesto con Cursor, Claude e ChatGPT.",
    status: "beta",
    category: "SaaS",
    url: "https://github.com/gabrieleforestieri0912-lab/Reskill",
    accent: "cyan", // TODO: confermare
    icon: "Wand2", // TODO: confermare
  },

  // --- building (nessuna descrizione di prodotto disponibile) ---
  {
    name: "Taskly-Desktop",
    // Nessun README né description: app desktop Electron di Taskly (dai file).
    // TODO: sostituire con la descrizione reale.
    tagline: "Descrizione da definire",
    status: "building",
    category: "Desktop",
    url: "https://github.com/gabrieleforestieri0912-lab/Taskly-Desktop",
    accent: "amber", // TODO: confermare (continuità con Taskly)
    icon: "Monitor", // TODO: confermare
  },
  {
    name: "Mind-Project",
    // Nessun README; il deploy in metadata (mind-project-one) dà 404.
    // TODO: sostituire con la descrizione reale.
    tagline: "Descrizione da definire",
    status: "building",
    category: "SaaS",
    url: "https://github.com/gabrieleforestieri0912-lab/Mind-Project",
    accent: "violet", // TODO: confermare
    icon: "Brain", // TODO: confermare
  },
  {
    name: "Maxthenics",
    // README = boilerplate create-next-app: nessuna descrizione di prodotto.
    // TODO: sostituire con la descrizione reale.
    tagline: "Descrizione da definire",
    status: "building",
    category: "SaaS",
    url: "https://github.com/gabrieleforestieri0912-lab/Maxthenics",
    accent: "amber", // TODO: confermare
    icon: "Dumbbell", // TODO: confermare
  },
  {
    name: "Macrox",
    // README = boilerplate Flutter: nessuna descrizione di prodotto.
    // TODO: sostituire con la descrizione reale.
    tagline: "Descrizione da definire",
    status: "building",
    category: "Mobile",
    url: "https://github.com/gabrieleforestieri0912-lab/Macrox",
    accent: "amber", // TODO: confermare
    icon: "Gauge", // TODO: confermare
  },
  {
    name: "AlphaPrjct",
    // Nessun README né description.
    // TODO: sostituire con la descrizione reale.
    tagline: "Descrizione da definire",
    status: "building",
    category: "SaaS",
    url: "https://github.com/gabrieleforestieri0912-lab/AlphaPrjct",
    accent: "violet", // TODO: confermare
    icon: "FileText", // TODO: confermare
  },
];

/* ------------------------------------------------------------------ */
/* Helper tipizzati — sempre derivati dai dati, mai numeri a mano      */
/* ------------------------------------------------------------------ */

/** Tutti i progetti di una categoria (ordine dell'array preservato). */
export function getProjectsByCategory(category: ProjectCategory): Project[] {
  return projects.filter((p) => p.category === category);
}

/** Tutti i progetti in un dato stato (ordine dell'array preservato). */
export function getProjectsByStatus(status: ProjectStatus): Project[] {
  return projects.filter((p) => p.status === status);
}

/**
 * Il progetto in evidenza (D6). Restituisce undefined se nessun progetto ha
 * `featured: true` o se ne hanno più di uno (in quel caso la build in dev
 * avvisa: al più uno per elenco).
 */
export function getFeaturedProject(): Project | undefined {
  const featured = projects.filter((p) => p.featured === true);
  if (featured.length > 1 && process.env.NODE_ENV !== "production") {
    console.warn(
      `[data/projects] ${featured.length} progetti con featured: true — attesi al più uno:`,
      featured.map((p) => p.name).join(", "),
    );
  }
  return featured[0];
}

/** Conteggio progetti per stato, calcolato dai dati. */
export const countByStatus: Record<ProjectStatus, number> = {
  live: getProjectsByStatus("live").length,
  beta: getProjectsByStatus("beta").length,
  building: getProjectsByStatus("building").length,
  paused: getProjectsByStatus("paused").length,
};

/** Conteggio progetti per categoria, calcolato dai dati. */
export const countByCategory: Record<ProjectCategory, number> =
  projects.reduce(
    (acc, p) => {
      acc[p.category] += 1;
      return acc;
    },
    {
      SaaS: 0,
      Mobile: 0,
      Desktop: 0,
      Extension: 0,
      Education: 0,
    } as Record<ProjectCategory, number>,
  );

/** Totale progetti, derivato dall'array (mai scritto a mano). */
export const totalProjects = projects.length;
