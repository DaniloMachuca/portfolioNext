import { Experience } from "@/data/data";

import { Text } from "@/app/styles";
import * as S from "./styles";

type Props = {
  experience: Experience;
};

const ExpirienceCard = ({ experience }: Props) => {
  return (
    <S.ExperienceCard>
      <header>
        <div>
          <Text>{experience.title}</Text>
          <Text>{experience.date}</Text>
        </div>
      </header>
      <S.Details>
        <Text>Cargo: {experience.position}</Text>
        <Text>Empresa: {experience.company}</Text>
      </S.Details>
      <S.Description>
        Descrição do cargo:
        <Text>{experience.description}</Text>
      </S.Description>
    </S.ExperienceCard>
  );
};

export default ExpirienceCard;
