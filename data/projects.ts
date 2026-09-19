import type { Project } from "@/lib/types";

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
  },
  {
    name: "InFolders",
    // Fonte: README + meta description di infolders.vercel.app
    tagline:
      "Estensione Chrome che organizza le conversazioni AI (ChatGPT, Gemini, Claude, Perplexity) in cartelle, bookmark e prompt.",
    status: "live",
    category: "Extension",
    url: "https://infolders.vercel.app",
  },
  {
    name: "VoiceFlow",
    // Fonte: meta description di voiceflow-flax.vercel.app
    tagline:
      "Dettatura vocale push-to-talk per Windows: tieni premuto Ctrl+Spazio, parla, rilascia e il testo compare dove stai scrivendo.",
    status: "live",
    category: "Desktop",
    url: "https://voiceflow-flax.vercel.app",
  },
  {
    name: "CaptionBoost",
    // Fonte: meta description di captionboost.vercel.app
    tagline:
      "Sottotitoli AI per YouTube in tempo reale: traduzione istantanea, aspetto personalizzabile e privacy-first.",
    status: "live",
    category: "SaaS",
    url: "https://captionboost.vercel.app",
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
  },
  {
    name: "Taskly",
    // Fonte: README della repo. Il deploy in metadata (taskly-pi-five) dà 404.
    tagline:
      "Hub di produttività personale: attività, obiettivi, note, documenti con backlink, workspace e assistenza AI.",
    status: "beta",
    category: "SaaS",
    url: "https://github.com/gabrieleforestieri0912-lab/Taskly",
  },
  {
    name: "StackUp",
    // Repo: Stackup-Room. Fonte: DOCS-STRUTTURA.md della repo.
    tagline:
      "Piattaforma per imparare a programmare: corsi a pagamento, guide, percorsi di carriera, dashboard utente e certificati.",
    status: "beta",
    category: "Education",
    url: "https://github.com/gabrieleforestieri0912-lab/Stackup-Room",
  },
  {
    name: "Resumari",
    // Fonte: README della repo
    tagline:
      "Trasforma i video YouTube in trascrizioni istantanee, riassunti e chat, con estensione Chrome, server MCP e API pubblica.",
    status: "beta",
    category: "SaaS",
    url: "https://github.com/gabrieleforestieri0912-lab/Resumari",
  },
  {
    name: "S.A.V.I.A",
    // Fonte: README della repo
    tagline:
      "Assistente AI desktop con interfaccia HUD in stile JARVIS: modelli multi-provider e controllo vocale.",
    status: "beta",
    category: "Desktop",
    url: "https://github.com/gabrieleforestieri0912-lab/S.A.V.I.A",
  },
  {
    name: "OmniHabit",
    // Fonte: README della repo
    tagline:
      "Piattaforma per costruire abitudini che durano, sui principi di Atomic Habits, con OmniMind, il coach AI.",
    status: "beta",
    category: "SaaS",
    url: "https://github.com/gabrieleforestieri0912-lab/OmniHabit",
  },
  {
    name: "Semplycode",
    // Fonte: README della repo
    tagline:
      "Analizza e spiega il codice con l'AI: scompone la logica, trova i bug e insegna pattern migliori, con estensione Chrome.",
    status: "beta",
    category: "SaaS",
    url: "https://github.com/gabrieleforestieri0912-lab/Semplycode",
  },
  {
    name: "Reskill",
    // Fonte: README della repo
    tagline:
      "Genera Skill AI (file Markdown) da web, YouTube, PDF e social, da usare come contesto con Cursor, Claude e ChatGPT.",
    status: "beta",
    category: "SaaS",
    url: "https://github.com/gabrieleforestieri0912-lab/Reskill",
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
  },
  {
    name: "Mind-Project",
    // Nessun README; il deploy in metadata (mind-project-one) dà 404.
    // TODO: sostituire con la descrizione reale.
    tagline: "Descrizione da definire",
    status: "building",
    category: "SaaS",
    url: "https://github.com/gabrieleforestieri0912-lab/Mind-Project",
  },
  {
    name: "Maxthenics",
    // README = boilerplate create-next-app: nessuna descrizione di prodotto.
    // TODO: sostituire con la descrizione reale.
    tagline: "Descrizione da definire",
    status: "building",
    category: "SaaS",
    url: "https://github.com/gabrieleforestieri0912-lab/Maxthenics",
  },
  {
    name: "Macrox",
    // README = boilerplate Flutter: nessuna descrizione di prodotto.
    // TODO: sostituire con la descrizione reale.
    tagline: "Descrizione da definire",
    status: "building",
    category: "Mobile",
    url: "https://github.com/gabrieleforestieri0912-lab/Macrox",
  },
  {
    name: "AlphaPrjct",
    // Nessun README né description.
    // TODO: sostituire con la descrizione reale.
    tagline: "Descrizione da definire",
    status: "building",
    category: "SaaS",
    url: "https://github.com/gabrieleforestieri0912-lab/AlphaPrjct",
  },
];
