import type { AccentFamily } from "@/lib/accents";

export type ProjectStatus = "live" | "beta" | "building" | "paused";
export type ProjectCategory =
  | "SaaS"
  | "Mobile"
  | "Desktop"
  | "Extension"
  | "Education";

/**
 * Nomi di icone lucide-react usabili nel campo `icon` dei progetti.
 * La risoluzione nome → componente avviene a compile-time nella mappa
 * tipizzata di `lib/project-icon.ts` (Fase 4): un nome fuori da questa
 * union, o non presente in lucide-react, rompe la build invece di
 * mostrare una card senza icona.
 */
export type ProjectIcon =
  | "Bot"
  | "Brain"
  | "Braces"
  | "Captions"
  | "Dumbbell"
  | "FileText"
  | "FolderOpen"
  | "Gauge"
  | "GraduationCap"
  | "ListChecks"
  | "Mic"
  | "Monitor"
  | "Repeat"
  | "Rocket"
  | "ScrollText"
  | "Sparkles"
  | "Wand2";

export interface Project {
  name: string;
  tagline: string;
  status: ProjectStatus;
  category: ProjectCategory;
  url: string;
  /**
   * Logo del progetto, path dentro /public (es. "/logos/agentcloud.png").
   * Se assente, la card mostra un monogramma col colore accento.
   */
  logo?: string;
  /**
   * Famiglia di accento cromatica (D2/D3): determina gradiente, glow e
   * monogramma della card. Vedasi `lib/accents.ts`.
   */
  accent: AccentFamily;
  /**
   * Progetto in evidenza nella sezione top della griglia (D6: AgentCloud).
   * Al più uno per elenco, vedi `getFeaturedProject`.
   */
  featured?: boolean;
  /** Nome dell'icona lucide-react per il monogramma (union `ProjectIcon`). */
  icon?: ProjectIcon;
}
