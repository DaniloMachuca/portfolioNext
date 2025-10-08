import { projects } from "@/data/data";

import ProjectCard from "@/components/ProjectCard";
import { SectionTitle, Text } from "@/app/styles";
import * as S from "./styles";

const ProjectList = () => {
  return (
    <S.Projects data-aos="fade-up">
      <SectionTitle>Projetos em destaque: </SectionTitle>
      <Text>
        Aqui estão alguns projetos que desenvolvi durante minha tragetória como
        programador.
      </Text>
      <S.ProjectList>
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </S.ProjectList>
    </S.Projects>
  );
};

export default ProjectList;
