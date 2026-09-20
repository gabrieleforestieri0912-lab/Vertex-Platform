import {
  Bot,
  Brain,
  Braces,
  Captions,
  Dumbbell,
  FileText,
  FolderOpen,
  Gauge,
  GraduationCap,
  ListChecks,
  Mic,
  Monitor,
  Repeat,
  Rocket,
  ScrollText,
  Sparkles,
  Wand2,
  type LucideIcon,
} from "lucide-react";
import type { ProjectIcon } from "@/lib/types";

/**
 * Mappa tipizzata nome → componente lucide (Fase 4).
 * La chiave è l'union `ProjectIcon` di lib/types.ts: un nome fuori union, o
 * un'icona non presente in lucide-react, rompe la build qui invece di
 * mostrare a runtime una card senza icona.
 */
export const projectIcons: Record<ProjectIcon, LucideIcon> = {
  Bot,
  Brain,
  Braces,
  Captions,
  Dumbbell,
  FileText,
  FolderOpen,
  Gauge,
  GraduationCap,
  ListChecks,
  Mic,
  Monitor,
  Repeat,
  Rocket,
  ScrollText,
  Sparkles,
  Wand2,
};
