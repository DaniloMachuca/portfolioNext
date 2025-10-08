import { Project } from "@/data/data";

import { SectionTitle, Text } from "@/app/styles";
import * as S from "./styles";

type Props = {
  project: Project;
};

const ProjectDetails = ({ project }: Props) => {
  return (
    <>
      <S.Details className="container">
        <SectionTitle>Detalhes do Projeto: </SectionTitle>
        {project.description.map((d) => (
          <Text key={d}>{d}</Text>
        ))}
      </S.Details>
      <S.SkillSection>
        <div className="container">
          <SectionTitle>Tecnologias Utilizadas: </SectionTitle>
          <ul>
            {project.AllSkills.map((s) => (
              <li key={s}>
                <Text>{s}</Text>
              </li>
            ))}
          </ul>
        </div>
      </S.SkillSection>
    </>
  );
};

export default ProjectDetails;
