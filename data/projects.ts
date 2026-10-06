import type { Project, ProjectCategory, ProjectStatus } from "@/lib/types";

/**
 * Vertex — collezione completa. Ogni card ha logo reale (da /public/logos) quando disponibile,
 * altrimenti tile con icona lucide. Descrizioni prese dai README reali dei progetti.
 * Colori flat solidi (no gradienti) dal sito live.
 *
 * - `url`: link principale (sito live se pubblicato, altrimenti repo GitHub).
 * - `githubUrl`: repository GitHub, mostrato come icona secondaria sulle card.
 * - `tagline` (IT) / `taglineEn` (EN): descrizione nelle due lingue del sito.
 */
export const projects: Project[] = [
  // --- live ---
  {
    name: "Curriculuxe",
    tagline:
      "Piattaforma AI per creare, ottimizzare e monitorare il curriculum: analisi ATS, personalizzazione per job description e Career Market, con Groq Llama 3.3 e Stripe.",
    taglineEn:
      "AI platform to create, optimize and track your resume: ATS analysis, tailoring to job descriptions and Career Market, powered by Groq Llama 3.3 and Stripe.",
    status: "live",
    category: "Education",
    url: "https://curriculuxe.vercel.app",
    githubUrl: "https://github.com/gabrieleforestieri0912-lab/Curriculuxe",
    logo: "/logos/curriculuxe.png",
    accent: "violet",
    icon: "GraduationCap",
  },
  {
    name: "InFolders",
    tagline:
      "Estensione Chrome che organizza le chat AI (ChatGPT, Gemini, Claude, Perplexity) in cartelle annidate, bookmark, prompt e profili — con sync cloud e backup.",
    taglineEn:
      "Chrome extension that organizes AI chats (ChatGPT, Gemini, Claude, Perplexity) into nested folders, bookmarks, prompts and profiles — with cloud sync and backup.",
    status: "live",
    category: "Extension",
    url: "https://infolders.vercel.app",
    githubUrl: "https://github.com/gabrieleforestieri0912-lab/Infolders",
    logo: "/logos/infolders.png",
    accent: "violet",
    icon: "FolderOpen",
  },
  {
    name: "VoiceFlow",
    tagline:
      "Dettatura vocale push-to-talk per Windows: tieni premuto Ctrl+Spazio, parla, rilascia e il testo compare dove stai scrivendo. App desktop + landing Supabase.",
    taglineEn:
      "Push-to-talk voice dictation for Windows: hold Ctrl+Space, speak, release and text appears where you're typing. Desktop app + Supabase landing.",
    status: "live",
    category: "Desktop",
    url: "https://voiceflow-flax.vercel.app",
    githubUrl: "https://github.com/gabrieleforestieri0912-lab/Voiceflow",
    logo: "/logos/voiceflow.png",
    accent: "cyan",
    icon: "Mic",
  },
  {
    name: "CaptionBoost",
    tagline:
      "Sottotitoli AI per YouTube in tempo reale: traduzione istantanea, aspetto personalizzabile e privacy-first. Estensione Chrome + Gemini/OpenAI/Groq/Anthropic.",
    taglineEn:
      "Real-time AI subtitles for YouTube: instant translation, customizable look and privacy-first. Chrome extension + Gemini/OpenAI/Groq/Anthropic.",
    status: "live",
    category: "SaaS",
    url: "https://captionboost.vercel.app",
    githubUrl: "https://github.com/gabrieleforestieri0912-lab/CaptionBoost",
    logo: "/logos/captionboost.png",
    accent: "blue",
    icon: "Captions",
  },
  {
    name: "Resumari",
    tagline:
      "Trasforma i video YouTube in trascrizioni, riassunti e chat AI — con estensione Chrome, server MCP, API pubblica e 11 tool gratuiti per creator.",
    taglineEn:
      "Turn YouTube videos into transcripts, summaries and AI chat — with Chrome extension, MCP server, public API and 11 free creator tools.",
    status: "live",
    category: "SaaS",
    url: "https://resumari.vercel.app",
    githubUrl: "https://github.com/gabrieleforestieri0912-lab/Resumari",
    logo: "/logos/resumari.png",
    accent: "violet",
    icon: "ScrollText",
  },
  {
    name: "Semplycode",
    tagline:
      "Analizza e spiega il codice con l'AI: scompone la logica, trova bug, insegna pattern migliori. Webapp Next.js + estensione sidepanel su qualsiasi pagina.",
    taglineEn:
      "Analyze and explain code with AI: breaks down logic, finds bugs, teaches better patterns. Next.js web app + sidepanel extension on any page.",
    status: "live",
    category: "SaaS",
    url: "https://semplycode.vercel.app",
    githubUrl: "https://github.com/gabrieleforestieri0912-lab/Semplycode",
    logo: "/logos/semplycode.png",
    accent: "emerald",
    icon: "Braces",
  },
  {
    name: "Maxthenics",
    tagline:
      "Piattaforma Calisthenics: programmi scientifici personalizzati, tracking avanzato e coaching 1:1 per sbloccare skill come Front Lever e Planche.",
    taglineEn:
      "Calisthenics platform: personalized science-based programs, advanced tracking and 1:1 coaching to unlock skills like Front Lever and Planche.",
    status: "live",
    category: "SaaS",
    url: "https://maxthenics.vercel.app",
    githubUrl: "https://github.com/gabrieleforestieri0912-lab/Maxthenics",
    logo: "/logos/maxthenics.png",
    accent: "red",
    icon: "Dumbbell",
  },

  // --- beta ---
  {
    name: "AgentCloud",
    tagline:
      "Piattaforma di agenti AI per aziende: marketplace di agenti pronti al lancio, chat in streaming e billing Stripe con overage. Flagship in waitlist.",
    taglineEn:
      "AI agent platform for businesses: marketplace of ready-to-launch agents, streaming chat and Stripe billing with overages. Flagship in waitlist.",
    status: "beta",
    category: "SaaS",
    url: "https://github.com/gabrieleforestieri0912-lab/AgentCloud",
    githubUrl: "https://github.com/gabrieleforestieri0912-lab/AgentCloud",
    logo: "/logos/agentcloud.png",
    accent: "blue",
    icon: "Bot",
    featured: true,
  },
  {
    name: "Taskly",
    tagline:
      "Hub di produttività: task, obiettivi, note, documenti con backlink, workspace e AI. Web + app desktop Electron, Supabase e Stripe.",
    taglineEn:
      "Productivity hub: tasks, goals, notes, backlinked docs, workspaces and AI. Web + Electron desktop app, Supabase and Stripe.",
    status: "beta",
    category: "SaaS",
    url: "https://github.com/gabrieleforestieri0912-lab/Taskly",
    githubUrl: "https://github.com/gabrieleforestieri0912-lab/Taskly",
    logo: "/logos/taskly.png",
    accent: "amber",
    icon: "ListChecks",
  },
  {
    name: "StackUp",
    tagline:
      "Impara a programmare con corsi a pagamento, guide, percorsi di carriera, dashboard utente e certificati. Next.js 16 + Supabase + Stripe.",
    taglineEn:
      "Learn to code with paid courses, guides, career paths, user dashboard and certificates. Next.js 16 + Supabase + Stripe.",
    status: "beta",
    category: "Education",
    url: "https://github.com/gabrieleforestieri0912-lab/Stackup-Room",
    githubUrl: "https://github.com/gabrieleforestieri0912-lab/Stackup-Room",
    logo: "/logos/stackup.png",
    accent: "slate",
    icon: "Rocket",
  },
  {
    name: "StackUp",
    tagline:
      "Genera Skill AI (file Markdown) da web, YouTube, PDF e social — pronte per Cursor, Claude, ChatGPT e Copilot. Tailwind + Supabase + Stripe.",
    taglineEn:
      "Generate AI Skills (Markdown files) from web, YouTube, PDFs and social — ready for Cursor, Claude, ChatGPT and Copilot. Tailwind + Supabase + Stripe.",
    status: "beta",
    category: "SaaS",
    url: "https://github.com/gabrieleforestieri0912-lab/Reskill",
    githubUrl: "https://github.com/gabrieleforestieri0912-lab/Reskill",
    logo: "/logos/reskill.png",
    accent: "cyan",
    icon: "Wand2",
  },

  // --- building ---
  {
    name: "Mind-Project",
    tagline:
      "Coaching mindset + programmi Calisthenics: trasforma la tua vita attraverso mentalità e azioni. Mind Project — Stripe, Supabase e coaching online.",
    taglineEn:
      "Mindset coaching + Calisthenics programs: transform your life through mindset and action. Mind Project — Stripe, Supabase and online coaching.",
    status: "building",
    category: "SaaS",
    url: "https://github.com/gabrieleforestieri0912-lab/Mind-Project",
    githubUrl: "https://github.com/gabrieleforestieri0912-lab/Mind-Project",
    logo: "/logos/mind-project.png",
    accent: "slate",
    icon: "Brain",
  },
  {
    name: "AlphaPrjct",
    tagline: "Progetto statico con pagine HTML (Homepage, Courses, Services) — in definizione.",
    taglineEn: "Static project with HTML pages (Homepage, Courses, Services) — in definition.",
    status: "building",
    category: "SaaS",
    url: "https://github.com/gabrieleforestieri0912-lab/AlphaPrjct",
    githubUrl: "https://github.com/gabrieleforestieri0912-lab/AlphaPrjct",
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
