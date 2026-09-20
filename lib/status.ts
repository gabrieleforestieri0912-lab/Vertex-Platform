import {
  Activity,
  FlaskConical,
  Hammer,
  Pause,
  type LucideIcon,
} from "lucide-react";
import type { BadgeTone } from "@/components/ui/Badge";
import type { ProjectStatus } from "@/lib/types";

/**
 * Metadata di stato (D5/D8): etichetta italiana + icona + tone del Badge.
 * Lo stato NON è mai comunicato solo col colore: icona e testo sono la
 * fonte primaria (accessibilità). Icone: live = impulso attivo, beta =
 * laboratorio, building = in costruzione ("in cantiere" è la parola già
 * usata dalla copy del sito), paused = pausa.
 *
 * Colori (tone): live → viola (accento brand), beta → ciano (in prova),
 * building → ambra (cantiere), paused → neutro metallico.
 * → TODO: confermare le coppie stato→colore.
 */
export const statusMeta: Record<
  ProjectStatus,
  { label: string; icon: LucideIcon; tone: BadgeTone }
> = {
  live: { label: "Live", icon: Activity, tone: "violet" },
  beta: { label: "Beta", icon: FlaskConical, tone: "cyan" },
  building: { label: "In cantiere", icon: Hammer, tone: "amber" },
  paused: { label: "In pausa", icon: Pause, tone: "neutral" },
};
