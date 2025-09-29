import { projects } from "@/data/data";

export const getProjectById = (id: string) => {
  return projects.find((p) => p.id === id);
};
