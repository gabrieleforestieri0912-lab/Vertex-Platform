export type ProjectStatus = "live" | "beta" | "building" | "paused";
export type ProjectCategory =
  | "SaaS"
  | "Mobile"
  | "Desktop"
  | "Extension"
  | "Education";

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
}
