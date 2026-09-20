import { Activity, FlaskConical, Hammer, Pause, type LucideIcon } from "lucide-react";
import type { BadgeTone } from "@/components/ui/Badge";
import type { ProjectStatus } from "@/lib/types";

export const statusMeta: Record<ProjectStatus, { label: string; icon: LucideIcon; tone: BadgeTone }> = {
  live: { label: "Live", icon: Activity, tone: "emerald" },
  beta: { label: "Beta", icon: FlaskConical, tone: "blue" },
  building: { label: "In cantiere", icon: Hammer, tone: "amber" },
  paused: { label: "In pausa", icon: Pause, tone: "neutral" },
};
