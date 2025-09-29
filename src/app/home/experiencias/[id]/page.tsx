import { getProjectById } from "@/utils";
import { notFound } from "next/navigation";

const ProjectPage = async (props: { params: Promise<{ id: string }> }) => {
  const params = await props.params;
  const id = params.id;
  const project = getProjectById(id);

  if (!project) {
    return notFound();
  }
  return (
    <>
      <p>{project.title}</p>
    </>
  );
};

export default ProjectPage;
