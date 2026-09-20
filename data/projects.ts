import type { Project, ProjectCategory, ProjectStatus } from "@/lib/types";

/**
 * Progetti Vertex — piattaforma che raccoglie tutti i tuoi prodotti.
 * Ogni progetto ha un colore solido flat preso dal suo sito live (no gradienti).
 * - Curriculuxe #818CF8 → violet
 * - InFolders #A855F7 → violet
 * - VoiceFlow #5EEAD4 teal → cyan
 * - CaptionBoost #4C94FF → blue
 * - Resumari #9333EA → violet
 * - Semplycode #10B981 → emerald
 * - Maxthenics #DC2626 → red
 * - AgentCloud #038BFE → blue
 * - Taskly amber, StackUp slate, S.A.V.I.A magenta, OmniHabit emerald
 * - Reskill cyan, Macrox amber, Mind slate, Alpha slate
 */
export const projects: Project[] = [
  // --- live ---
  {
    name: "Curriculuxe",
    tagline:
      "Crea, ottimizza e monitora il curriculum con l'AI: analisi ATS, personalizzazione per job description e Career Market.",
    status: "live",
    category: "Education",
    url: "https://curriculuxe.vercel.app",
    accent: "violet",
    icon: "GraduationCap",
  },
  {
    name: "InFolders",
    tagline:
      "Estensione Chrome che organizza le conversazioni AI (ChatGPT, Gemini, Claude, Perplexity) in cartelle, bookmark e prompt.",
    status: "live",
    category: "Extension",
    url: "https://infolders.vercel.app",
    accent: "violet",
    icon: "FolderOpen",
  },
  {
    name: "VoiceFlow",
    tagline:
      "Dettatura vocale push-to-talk per Windows: tieni premuto Ctrl+Spazio, parla, rilascia e il testo compare dove stai scrivendo.",
    status: "live",
    category: "Desktop",
    url: "https://voiceflow-flax.vercel.app",
    accent: "cyan",
    icon: "Mic",
  },
  {
    name: "CaptionBoost",
    tagline:
      "Sottotitoli AI per YouTube in tempo reale: traduzione istantanea, aspetto personalizzabile e privacy-first.",
    status: "live",
    category: "SaaS",
    url: "https://captionboost.vercel.app",
    accent: "blue",
    icon: "Captions",
  },
  {
    name: "Resumari",
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
    tagline:
      "Analizza e spiega il codice con l'AI: scompone la logica, trova i bug e insegna pattern migliori, con estensione Chrome.",
    status: "live",
    category: "SaaS",
    url: "https://semplycode.vercel.app",
    accent: "emerald",
    icon: "Braces",
  },
  {
    name: "Maxthenics",
    tagline:
      "La piattaforma definitiva per il Calisthenics: programmi scientifici personalizzati, tracking avanzato e coaching 1:1.",
    status: "live",
    category: "SaaS",
    url: "https://maxthenics.vercel.app",
    accent: "red",
    icon: "Dumbbell",
  },

  // --- beta ---
  {
    name: "AgentCloud",
    tagline:
      "Piattaforma di agenti AI per le aziende: marketplace di agenti pronti al lancio, chat in streaming e billing Stripe.",
    status: "beta",
    category: "SaaS",
    url: "https://github.com/gabrieleforestieri0912-lab/AgentCloud",
    accent: "blue",
    icon: "Bot",
    featured: true,
  },
  {
    name: "Taskly",
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
    tagline:
      "Piattaforma per imparare a programmare: corsi a pagamento, guide, percorsi di carriera, dashboard utente e certificati.",
    status: "beta",
    category: "Education",
    url: "https://github.com/gabrieleforestieri0912-lab/Stackup-Room",
    accent: "slate",
    icon: "Rocket",
  },
  {
    name: "S.A.V.I.A",
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
    tagline:
      "Piattaforma per costruire abitudini che durano, sui principi di Atomic Habits, con OmniMind, il coach AI.",
    status: "beta",
    category: "SaaS",
    url: "https://github.com/gabrieleforestieri0912-lab/OmniHabit",
    accent: "emerald",
    icon: "Repeat",
  },
  {
    name: "Reskill",
    tagline:
      "Genera Skill AI da web, YouTube, PDF e social, da usare come contesto con Cursor, Claude e ChatGPT.",
    status: "beta",
    category: "SaaS",
    url: "https://github.com/gabrieleforestieri0912-lab/Reskill",
    accent: "cyan",
    icon: "Wand2",
  },

  // --- building ---
  {
    name: "Mind-Project",
    tagline: "Descrizione da definire",
    status: "building",
    category: "SaaS",
    url: "https://github.com/gabrieleforestieri0912-lab/Mind-Project",
    accent: "slate",
    icon: "Brain",
  },
  {
    name: "Macrox",
    tagline: "Tracker calorico AI per tenere sotto controllo le calorie.",
    status: "building",
    category: "Mobile",
    url: "https://github.com/gabrieleforestieri0912-lab/Macrox",
    accent: "amber",
    icon: "Gauge",
  },
  {
    name: "AlphaPrjct",
    tagline: "Descrizione da definire",
    status: "building",
    category: "SaaS",
    url: "https://github.com/gabrieleforestieri0912-lab/AlphaPrjct",
    accent: "slate",
    icon: "FileText",
  },
];

export function getProjectsByCategory(category: ProjectCategory): Project[] {
  return projects.filter((p) => p.category === category);
}

export function getProjectsByStatus(status: ProjectStatus): Project[] {
  return projects.filter((p) => p.status === status);
}

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

export const countByStatus: Record<ProjectStatus, number> = {
  live: getProjectsByStatus("live").length,
  beta: getProjectsByStatus("beta").length,
  building: getProjectsByStatus("building").length,
  paused: getProjectsByStatus("paused").length,
};

export const countByCategory: Record<ProjectCategory, number> = projects.reduce(
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

export const totalProjects = projects.length;
