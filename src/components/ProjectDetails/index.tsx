import { Project } from "@/data/data";
import * as S from "./styles";
import { SectionTitle, Text } from "@/app/styles";
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
