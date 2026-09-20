import type {
  Project,
  ProjectCategory,
  ProjectStatus,
} from "@/lib/types";

/**
 * Elenco progetti della landing (una card per repo pubblica, esclusa
 * Vertex-Platform che è questo sito). Taskly-Desktop non ha una voce
 * autonoma: è l'app desktop di Taskly (repo non più pubblica dal
 * 20/09/2026) ed è presentato dentro la voce Taskly.
 *
 * COME SONO STATI COMPILATI — tutto da fonti verificabili:
 * - `tagline`: prima riga descrittiva del README della repo, oppure meta
 *   description del sito live. Dove non esiste nessuna fonte, resta il
 *   segnaposto "Descrizione da definire" (2 progetti: Mind-Project,
 *   AlphaPrjct) — niente testo inventato.
 * - `url`: la homepage pubblica SOLO se risponde 200 adesso, altrimenti la repo
 *   GitHub. Verificato il 19/09/2026: i deploy di Taskly, StackUp e Mind-Project
 *   risultano morti (404) e quindi qui puntano alla repo.
 * - `status`: `live` = deploy pubblico verificato; `beta` = prodotto
 *   descritto come completo nel README ma senza deploy pubblico verificato;
 *   `building` = nessuna descrizione di prodotto disponibile.
 *   Stati confermati da Gabriele il 20/09/2026 (riverifica: deploy HTTP 200
 *   e README delle repo). Seconda revisione, stesso giorno: trovati i deploy
 *   di Resumari, Semplycode e Maxthenics nei campi homepage delle repo e
 *   verificati con HTTP 200 → passano a `live`; la repo Taskly-Desktop non
 *   è più raggiungibile pubblicamente (404: eliminata o resa privata).
 * - `category`: dedotta dalla piattaforma (Next.js -> SaaS, Electron/Flutter
 *   -> Desktop/Mobile, estensione Chrome -> Extension).
 *
 * FASE 2 — campi nuovi (tutti PROPOSTI, nessuna fonte esistente):
 * - `accent`: famiglia cromatica della card (vedi lib/accents.ts). Distribuzione
 *   confermata (revisione D3: VoiceFlow in cyan; continuità
 *   tra prodotti correlati, es. l'app desktop dentro la voce Taskly).
 * - `icon`: nome dell'icona lucide-react del monogramma (union `ProjectIcon`
 *   in lib/types.ts, risolta a compile-time). → confermate.
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
    accent: "cyan",
    icon: "GraduationCap",
  },
  {
    name: "InFolders",
    // Fonte: README + meta description di infolders.vercel.app
    tagline:
      "Estensione Chrome che organizza le conversazioni AI (ChatGPT, Gemini, Claude, Perplexity) in cartelle, bookmark e prompt.",
    status: "live",
    category: "Extension",
    url: "https://infolders.vercel.app",
    accent: "cyan",
    icon: "FolderOpen",
  },
  {
    name: "VoiceFlow",
    // Fonte: meta description di voiceflow-flax.vercel.app
    tagline:
      "Dettatura vocale push-to-talk per Windows: tieni premuto Ctrl+Spazio, parla, rilascia e il testo compare dove stai scrivendo.",
    status: "live",
    category: "Desktop",
    url: "https://voiceflow-flax.vercel.app",
    // D3: la palette del progetto è teal/indigo → famiglia cyan.
    accent: "cyan",
    icon: "Mic",
  },
  {
    name: "CaptionBoost",
    // Fonte: meta description di captionboost.vercel.app
    tagline:
      "Sottotitoli AI per YouTube in tempo reale: traduzione istantanea, aspetto personalizzabile e privacy-first.",
    status: "live",
    category: "SaaS",
    url: "https://captionboost.vercel.app",
    accent: "magenta",
    icon: "Captions",
  },
  {
    name: "Resumari",
    // Fonti: README della repo + meta description di resumari.vercel.app
    // (deploy trovato nel campo homepage della repo, verificato 20/09/2026).
    tagline:
      "Trasforma i video YouTube in trascrizioni istantanee, riassunti e chat, con estensione Chrome, server MCP e API pubblica.",
    status: "live",
    category: "SaaS",
    url: "https://resumari.vercel.app",
    accent: "violet",
    icon: "ScrollText",
  },
  {
    name: "Semplycode",
    // Fonti: README della repo + deploy semplycode.vercel.app (campo homepage
    // della repo, verificato 20/09/2026).
    tagline:
      "Analizza e spiega il codice con l'AI: scompone la logica, trova i bug e insegna pattern migliori, con estensione Chrome.",
    status: "live",
    category: "SaaS",
    url: "https://semplycode.vercel.app",
    accent: "violet",
    icon: "Braces",
  },
  {
    name: "Maxthenics",
    // Fonte: meta description di maxthenics.vercel.app (campo homepage della
    // repo, verificato 20/09/2026): prima descrizione reale del prodotto.
    tagline:
      "La piattaforma definitiva per il Calisthenics: programmi scientifici personalizzati, tracking avanzato e coaching 1:1 per sbloccare skills come Front Lever e Planche.",
    status: "live",
    category: "SaaS",
    url: "https://maxthenics.vercel.app",
    accent: "amber",
    icon: "Dumbbell",
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
    accent: "amber",
    icon: "Bot",
    featured: true, // D6: flagship — confermato
  },
  {
    name: "Taskly",
    // Fonte: README della repo. Il deploy in metadata (taskly-pi-five) dà 404.
    // Include l'app desktop (Electron, dai file della repo Taskly-Desktop,
    // non più pubblica dal 20/09/2026): il progetto desktop non ha più una
    // voce autonoma nell'hub, viene presentato dentro Taskly.
    tagline:
      "Hub di produttività personale: attività, obiettivi, note, documenti con backlink, workspace e assistenza AI, con app desktop.",
    status: "beta",
    category: "SaaS",
    url: "https://github.com/gabrieleforestieri0912-lab/Taskly",
    accent: "amber",
    icon: "ListChecks",
  },
  {
    name: "StackUp",
    // Repo: Stackup-Room. Fonte: DOCS-STRUTTURA.md della repo.
    tagline:
      "Piattaforma per imparare a programmare: corsi a pagamento, guide, percorsi di carriera, dashboard utente e certificati.",
    status: "beta",
    category: "Education",
    url: "https://github.com/gabrieleforestieri0912-lab/Stackup-Room",
    accent: "cyan",
    icon: "Rocket",
  },
  {
    name: "S.A.V.I.A",
    // Fonte: README della repo
    tagline:
      "Assistente AI desktop con interfaccia HUD in stile JARVIS: modelli multi-provider e controllo vocale.",
    status: "beta",
    category: "Desktop",
    url: "https://github.com/gabrieleforestieri0912-lab/S.A.V.I.A",
    accent: "magenta",
    icon: "Sparkles",
  },
  {
    name: "OmniHabit",
    // Fonte: README della repo
    tagline:
      "Piattaforma per costruire abitudini che durano, sui principi di Atomic Habits, con OmniMind, il coach AI.",
    status: "beta",
    category: "SaaS",
    url: "https://github.com/gabrieleforestieri0912-lab/OmniHabit",
    accent: "magenta",
    icon: "Repeat",
  },
  {
    name: "Reskill",
    // Fonte: README della repo
    tagline:
      "Genera Skill AI (file Markdown) da web, YouTube, PDF e social, da usare come contesto con Cursor, Claude e ChatGPT.",
    status: "beta",
    category: "SaaS",
    url: "https://github.com/gabrieleforestieri0912-lab/Reskill",
    accent: "cyan",
    icon: "Wand2",
  },

  // --- building (nessuna descrizione di prodotto disponibile) ---
  {
    name: "Mind-Project",
    // Nessun README; il deploy in metadata (mind-project-one) dà 404.
    // TODO: sostituire con la descrizione reale.
    tagline: "Descrizione da definire",
    status: "building",
    category: "SaaS",
    url: "https://github.com/gabrieleforestieri0912-lab/Mind-Project",
    accent: "violet",
    icon: "Brain",
  },
  {
    name: "Macrox",
    // Fonte: description nel pubspec.yaml della repo ("Macrox - Tracker
    // Calorico AI"). README = boilerplate Flutter.
    tagline:
      "Tracker calorico AI per tenere sotto controllo le calorie.",
    status: "building",
    category: "Mobile",
    url: "https://github.com/gabrieleforestieri0912-lab/Macrox",
    accent: "amber",
    icon: "Gauge",
  },
  {
    name: "AlphaPrjct",
    // Nessun README né description; la repo contiene pagine HTML statiche
    // (Homepage, Courses, Services) — natura del progetto da definire.
    // TODO: sostituire con la descrizione reale.
    tagline: "Descrizione da definire",
    status: "building",
    category: "SaaS",
    url: "https://github.com/gabrieleforestieri0912-lab/AlphaPrjct",
    accent: "violet",
    icon: "FileText",
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
