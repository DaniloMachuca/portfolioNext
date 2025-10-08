import { projects } from "@/data/data";

export const getProjectById = (id: string) => {
  return projects.find((p) => p.id === id);
};

export interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
}
