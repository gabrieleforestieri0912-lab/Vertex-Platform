export type ProjectStatus = "live" | "beta" | "building" | "paused";
export type ProjectCategory = "SaaS" | "Mobile" | "Education";

export interface Project {
  name: string;
  tagline: string;
  status: ProjectStatus;
  category: ProjectCategory;
  url: string;
}
