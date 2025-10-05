import { getProjectById } from "@/utils";
import { notFound } from "next/navigation";
import Hero from "@/components/Hero";
import ProjectDetails from "@/components/ProjectDetails";

const ProjectPage = async (props: { params: Promise<{ id: string }> }) => {
  const params = await props.params;
  const id = params.id;
  const project = getProjectById(id);

  if (!project) {
    return notFound();
  }
  return (
    <>
      <Hero project={project} />
      <ProjectDetails project={project} />
    </>
  );
};

export default ProjectPage;
