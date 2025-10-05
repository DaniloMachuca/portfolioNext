import { Project } from "@/data/data";
import * as S from "./styles";
import { SectionTitle, Text } from "@/app/styles";

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
            <S.Btn href={project.deploy}>Ver Projeto</S.Btn>
            <S.Btn href={project.github}>Ver Código</S.Btn>
          </div>
        </S.Infos>
      </div>
    </S.Banner>
  );
};

export default Hero;
