import { Project } from "@/data/data";

import { SectionTitle, Text, Btn } from "@/app/styles";
import * as S from "./styles";

type Props = {
  project: Project;
};

const Hero = ({ project }: Props) => {
  return (
    <S.Banner style={{ backgroundImage: `url(${project.image})` }}>
      <div className="container">
        <S.Infos>
          <SectionTitle>{project.title}</SectionTitle>
          <Text>{project.shortDescription}</Text>
          <div>
            <Btn href={project.deploy} target="_blank">
              Ver Projeto
            </Btn>
            <Btn href={project.github} target="_blank">
              Ver Código
            </Btn>
          </div>
        </S.Infos>
      </div>
    </S.Banner>
  );
};

export default Hero;
