import type { Project, ProjectCategory, ProjectStatus } from "@/lib/types";

/**
 * Vertex — collezione completa. Ogni card ha logo reale (da /public/logos) quando disponibile,
 * altrimenti tile con icona lucide. Descrizioni prese dai README reali dei progetti.
 * Colori flat solidi (no gradienti) dal sito live.
 */
export const projects: Project[] = [
  // --- live ---
  {
    name: "Curriculuxe",
    tagline:
      "Piattaforma AI per creare, ottimizzare e monitorare il curriculum: analisi ATS, personalizzazione per job description e Career Market, con Groq Llama 3.3 e Stripe.",
    status: "live",
    category: "Education",
    url: "https://curriculuxe.vercel.app",
    logo: "/logos/curriculuxe.png",
    accent: "violet",
    icon: "GraduationCap",
  },
  {
    name: "InFolders",
    tagline:
      "Estensione Chrome che organizza le chat AI (ChatGPT, Gemini, Claude, Perplexity) in cartelle annidate, bookmark, prompt e profili — con sync cloud e backup.",
    status: "live",
    category: "Extension",
    url: "https://infolders.vercel.app",
    logo: "/logos/infolders.png",
    accent: "violet",
    icon: "FolderOpen",
  },
  {
    name: "VoiceFlow",
    tagline:
      "Dettatura vocale push-to-talk per Windows: tieni premuto Ctrl+Spazio, parla, rilascia e il testo compare dove stai scrivendo. App desktop + landing Supabase.",
    status: "live",
    category: "Desktop",
    url: "https://voiceflow-flax.vercel.app",
    logo: "/logos/voiceflow.png",
    accent: "cyan",
    icon: "Mic",
  },
  {
    name: "CaptionBoost",
    tagline:
      "Sottotitoli AI per YouTube in tempo reale: traduzione istantanea, aspetto personalizzabile e privacy-first. Estensione Chrome + Gemini/OpenAI/Groq/Anthropic.",
    status: "live",
    category: "SaaS",
    url: "https://captionboost.vercel.app",
    logo: "/logos/captionboost.png",
    accent: "blue",
    icon: "Captions",
  },
  {
    name: "Resumari",
    tagline:
      "Trasforma i video YouTube in trascrizioni, riassunti e chat AI — con estensione Chrome, server MCP, API pubblica e 11 tool gratuiti per creator.",
    status: "live",
    category: "SaaS",
    url: "https://resumari.vercel.app",
    logo: "/logos/resumari.png",
    accent: "violet",
    icon: "ScrollText",
  },
  {
    name: "Semplycode",
    tagline:
      "Analizza e spiega il codice con l'AI: scompone la logica, trova bug, insegna pattern migliori. Webapp Next.js + estensione sidepanel su qualsiasi pagina.",
    status: "live",
    category: "SaaS",
    url: "https://semplycode.vercel.app",
    logo: "/logos/semplycode.png",
    accent: "emerald",
    icon: "Braces",
  },
  {
    name: "Maxthenics",
    tagline:
      "Piattaforma Calisthenics: programmi scientifici personalizzati, tracking avanzato e coaching 1:1 per sbloccare skill come Front Lever e Planche.",
    status: "live",
    category: "SaaS",
    url: "https://maxthenics.vercel.app",
    logo: "/logos/maxthenics.png",
    accent: "red",
    icon: "Dumbbell",
  },

  // --- beta ---
  {
    name: "AgentCloud",
    tagline:
      "Piattaforma di agenti AI per aziende: marketplace di agenti pronti al lancio, chat in streaming e billing Stripe con overage. Flagship in waitlist.",
    status: "beta",
    category: "SaaS",
    url: "https://github.com/gabrieleforestieri0912-lab/AgentCloud",
    logo: "/logos/agentcloud.png",
    accent: "blue",
    icon: "Bot",
    featured: true,
  },
  {
    name: "Taskly",
    tagline:
      "Hub di produttività: task, obiettivi, note, documenti con backlink, workspace e AI. Web + app desktop Electron, Supabase e Stripe.",
    status: "beta",
    category: "SaaS",
    url: "https://github.com/gabrieleforestieri0912-lab/Taskly",
    logo: "/logos/taskly.png",
    accent: "amber",
    icon: "ListChecks",
  },
  {
    name: "StackUp",
    tagline:
      "Impara a programmare con corsi a pagamento, guide, percorsi di carriera, dashboard utente e certificati. Next.js 16 + Supabase + Stripe.",
    status: "beta",
    category: "Education",
    url: "https://github.com/gabrieleforestieri0912-lab/Stackup-Room",
    logo: "/logos/stackup.png",
    accent: "slate",
    icon: "Rocket",
  },
  {
    name: "S.A.V.I.A",
    tagline:
      "Assistente AI desktop con HUD in stile JARVIS: Electron, multi-provider (OpenRouter/OpenCode/Local) e controllo vocale. v4.0.0.",
    status: "beta",
    category: "Desktop",
    url: "https://github.com/gabrieleforestieri0912-lab/S.A.V.I.A",
    accent: "magenta",
    icon: "Sparkles",
  },
  {
    name: "OmniHabit",
    tagline:
      "Costruisci abitudini che durano sui principi di Atomic Habits, con OmniMind — il coach AI che ti segue ogni giorno. App Flutter.",
    status: "beta",
    category: "SaaS",
    url: "https://github.com/gabrieleforestieri0912-lab/OmniHabit",
    logo: "/logos/omnihabit.png",
    accent: "emerald",
    icon: "Repeat",
  },
  {
    name: "Reskill",
    tagline:
      "Genera Skill AI (file Markdown) da web, YouTube, PDF e social — pronte per Cursor, Claude, ChatGPT e Copilot. Tailwind + Supabase + Stripe.",
    status: "beta",
    category: "SaaS",
    url: "https://github.com/gabrieleforestieri0912-lab/Reskill",
    logo: "/logos/reskill.png",
    accent: "cyan",
    icon: "Wand2",
  },

  // --- building ---
  {
    name: "Mind-Project",
    tagline:
      "Coaching mindset + programmi Calisthenics: trasforma la tua vita attraverso mentalità e azioni. Mind Project — Stripe, Supabase e coaching online.",
    status: "building",
    category: "SaaS",
    url: "https://github.com/gabrieleforestieri0912-lab/Mind-Project",
    logo: "/logos/mind-project.png",
    accent: "slate",
    icon: "Brain",
  },
  {
    name: "Macrox",
    tagline:
      "Tracker calorico AI in Flutter: descrivi cosa hai mangiato, l'AI calcola calorie e macro, diario, peso, streak e onboarding. Supabase + Gemini.",
    status: "building",
    category: "Mobile",
    url: "https://github.com/gabrieleforestieri0912-lab/Macrox",
    logo: "/logos/macrox.png",
    accent: "amber",
    icon: "Gauge",
  },
  {
    name: "AlphaPrjct",
    tagline: "Progetto statico con pagine HTML (Homepage, Courses, Services) — in definizione.",
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
