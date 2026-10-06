"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { Project, ProjectStatus } from "@/lib/types";

export type Locale = "it" | "en";

const STORAGE_KEY = "vertex-locale";

/** Timezone che consideriamo Italia: chi accede da qui vede l'italiano. */
const ITALY_TIMEZONES = new Set([
  "Europe/Rome",
  "Europe/Vatican",
  "Europe/San_Marino",
]);

function detectInitialLocale(): Locale {
  if (typeof window === "undefined") return "it";
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "it" || stored === "en") return stored;
  } catch {
    /* storage non disponibile: si prosegue con l'auto-detect */
  }
  const navLang =
    typeof window.navigator !== "undefined"
      ? window.navigator.language || ""
      : "";
  const isItalianLang = navLang.toLowerCase().startsWith("it");
  let timeZone = "";
  try {
    timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
  } catch {
    timeZone = "";
  }
  // Paese Italia = lingua italiana + fuso orario italiano.
  // Fuori dall'Italia (lingua o fuso diversi) → inglese.
  if (isItalianLang && (timeZone === "" || ITALY_TIMEZONES.has(timeZone)))
    return "it";
  if (!isItalianLang) return "en";
  // Lingua IT ma fuso estero (es. italiano all'estero): resta IT,
  // l'utente può comunque passare a EN col toggle.
  return "it";
}

const dict = {
  it: {
    navMain: "Principale",
    navProjects: "Progetti",
    navStatus: "Stato",
    navAbout: "Chi sono",
    navExplore: "Esplora",
    heroBadge: "Piattaforma Vertex",
    heroTitleA: "Tutti i miei",
    heroTitleB: "progetti.",
    heroSubtitle:
      "Non un catalogo. Non un marketplace. La raccolta ordinata di ciò che sto costruendo — dal live al cantiere, ogni card con il colore del suo sito.",
    counterProjects: "Progetti",
    counterLive: "Live",
    counterBeta: "Beta",
    counterBuilding: "In cantiere",
    heroExplore: "Esplora i progetti",
    heroAbout: "Chi sono",
    heroUpdated: (n: number) => `${n} progetti · aggiornato ora`,
    collectionEyebrow: "Collezione",
    collectionTitle: "Tutti i progetti, in un unico posto",
    collectionDesc:
      "Non un marketplace — la piattaforma che raccoglie ciò che sto costruendo. Ogni card ha il suo colore, preso dal sito live. Nessun gradiente, solo tinte piatte e pulite.",
    sectionLive: "Live",
    sectionBeta: "Beta",
    sectionBuilding: "In cantiere",
    cardOpen: "Apri",
    cardOpenSite: "Sito",
    cardOpenGithub: "GitHub",
    featuredBadge: "In evidenza",
    featuredFlagship: "Flagship",
    featuredOpen: (name: string) => `Apri ${name}`,
    statusEyebrow: "Avanzamento",
    statusTitle: "Il portfolio, stato per stato",
    statusSubtitle: (n: number) => `${n} progetti, dal cantiere al live.`,
    statusEmpty: "Nessun progetto in questo stato.",
    aboutEyebrow: "Chi sono",
    aboutTitle: "A 360°",
    aboutIntroTitle: "In due righe",
    aboutFocusTitle: "Focus attuale",
    aboutStackTitle: "Stack",
    aboutFactsTitle: "In breve",
    aboutIntro:
      "Progetto e sviluppo prodotti digitali in autonomia, dall'idea al deploy: web app, tool desktop ed estensioni pubblicati sotto il nome Vertex. Qui trovi cosa è live, cosa è in beta e cosa è ancora in cantiere.",
    aboutFocus: [
      "Portare AgentCloud, il progetto flagship, dalla waitlist al lancio pubblico.",
      "Consolidare i quattro prodotti live: Curriculuxe, InFolders, VoiceFlow e CaptionBoost.",
      "Riportare online i deploy morti di Taskly, StackUp e Mind-Project: oggi puntano alla repo.",
    ],
    factProjects: "Progetti",
    factProjectsValue: (total: number, live: number) =>
      `${total} nell'hub, ${live} live`,
    factSince: "Su GitHub dal",
    factSinceValue: "settembre 2025",
    factActivity: "Ultima attività",
    factActivityValue: "settembre 2026",
    footerSections: "Sezioni",
    footerContacts: "Contatti",
    footerRights: (year: number) =>
      `© ${year} Gabriele. Tutti i diritti riservati.`,
    searchLabel: "Cerca tra i progetti",
    searchPlaceholder: "Cerca per nome o descrizione…",
    searchClear: "Cancella la ricerca",
    filterCategory: "Filtra per categoria",
    filterAll: "Tutti",
    resultsCount: (n: number) =>
      `${n} ${n === 1 ? "progetto" : "progetti"}`,
    emptyTitle: "Nessun progetto trovato",
    emptyDesc: "Prova a cambiare categoria o a modificare la ricerca.",
    emptyReset: "Azzera filtri",
    langLabel: "Lingua",
    langItalian: "Italiano",
    langEnglish: "English",
    switchToEnglish: "Passa all'inglese",
    switchToItalian: "Passa all'italiano",
  },
  en: {
    navMain: "Main",
    navProjects: "Projects",
    navStatus: "Status",
    navAbout: "About",
    navExplore: "Explore",
    heroBadge: "Vertex Platform",
    heroTitleA: "All my",
    heroTitleB: "projects.",
    heroSubtitle:
      "Not a catalog. Not a marketplace. The curated collection of what I'm building — from live to building, each card in its site's color.",
    counterProjects: "Projects",
    counterLive: "Live",
    counterBeta: "Beta",
    counterBuilding: "Building",
    heroExplore: "Explore projects",
    heroAbout: "About me",
    heroUpdated: (n: number) => `${n} projects · updated now`,
    collectionEyebrow: "Collection",
    collectionTitle: "All projects, in one place",
    collectionDesc:
      "Not a marketplace — the platform collecting what I'm building. Each card has its own color, taken from the live site. No gradients, just clean flat tones.",
    sectionLive: "Live",
    sectionBeta: "Beta",
    sectionBuilding: "Building",
    cardOpen: "Open",
    cardOpenSite: "Website",
    cardOpenGithub: "GitHub",
    featuredBadge: "Featured",
    featuredFlagship: "Flagship",
    featuredOpen: (name: string) => `Open ${name}`,
    statusEyebrow: "Progress",
    statusTitle: "The portfolio, state by state",
    statusSubtitle: (n: number) => `${n} projects, from building to live.`,
    statusEmpty: "No projects in this state.",
    aboutEyebrow: "About",
    aboutTitle: "At 360°",
    aboutIntroTitle: "In short",
    aboutFocusTitle: "Current focus",
    aboutStackTitle: "Stack",
    aboutFactsTitle: "At a glance",
    aboutIntro:
      "I design and build digital products solo, from idea to deploy: web apps, desktop tools and extensions published under the Vertex name. Here you'll find what's live, what's in beta and what's still building.",
    aboutFocus: [
      "Bring AgentCloud, the flagship project, from waitlist to public launch.",
      "Consolidate the four live products: Curriculuxe, InFolders, VoiceFlow and CaptionBoost.",
      "Bring the dead deploys of Taskly, StackUp and Mind-Project back online: they point to the repo today.",
    ],
    factProjects: "Projects",
    factProjectsValue: (total: number, live: number) =>
      `${total} in hub, ${live} live`,
    factSince: "On GitHub since",
    factSinceValue: "September 2025",
    factActivity: "Last activity",
    factActivityValue: "September 2026",
    footerSections: "Sections",
    footerContacts: "Contacts",
    footerRights: (year: number) => `© ${year} Gabriele. All rights reserved.`,
    searchLabel: "Search projects",
    searchPlaceholder: "Search by name or description…",
    searchClear: "Clear search",
    filterCategory: "Filter by category",
    filterAll: "All",
    resultsCount: (n: number) =>
      `${n} ${n === 1 ? "project" : "projects"}`,
    emptyTitle: "No projects found",
    emptyDesc: "Try changing category or editing your search.",
    emptyReset: "Reset filters",
    langLabel: "Language",
    langItalian: "Italiano",
    langEnglish: "English",
    switchToEnglish: "Switch to English",
    switchToItalian: "Switch to Italian",
  },
} as const;

export type Strings = (typeof dict)[Locale];

const statusLabel: Record<ProjectStatus, { it: string; en: string }> = {
  live: { it: "Live", en: "Live" },
  beta: { it: "Beta", en: "Beta" },
  building: { it: "In cantiere", en: "Building" },
  paused: { it: "In pausa", en: "Paused" },
};

export function getStatusLabel(status: ProjectStatus, locale: Locale): string {
  return statusLabel[status][locale];
}

export function getProjectTagline(project: Project, locale: Locale): string {
  if (locale === "en" && project.taglineEn) return project.taglineEn;
  return project.tagline;
}

interface LanguageContextValue {
  locale: Locale;
  t: Strings;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
}

const LanguageContext = createContext<LanguageContextValue>({
  locale: "it",
  t: dict.it,
  setLocale: () => {},
  toggleLocale: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("it");
  const [ready, setReady] = useState(false);

  // Auto-detect dal paese (fuso orario) + lingua browser al primo mount.
  useEffect(() => {
    setLocaleState(detectInitialLocale());
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    document.documentElement.lang = locale;
    try {
      window.localStorage.setItem(STORAGE_KEY, locale);
    } catch {
      /* ignora: storage non disponibile */
    }
  }, [locale, ready]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
  }, []);

  const toggleLocale = useCallback(() => {
    setLocaleState((prev) => (prev === "it" ? "en" : "it"));
  }, []);

  const value = useMemo<LanguageContextValue>(
    () => ({ locale, t: dict[locale], setLocale, toggleLocale }),
    [locale, setLocale, toggleLocale],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  return useContext(LanguageContext);
}
