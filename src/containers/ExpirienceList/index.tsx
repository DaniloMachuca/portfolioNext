import { experiences } from "@/data/data";

import { SectionTitle, Text } from "@/app/styles";
import ExpirienceCard from "@/components/ExpirienceCard";
import * as S from "./styles";

const ExpirienceList = () => {
  return (
    <S.background>
      <S.Experiences data-aos="fade-up">
        <SectionTitle>Experiências Profissionais</SectionTitle>
        <Text>Segue uma lista contando minha trajetória profissional: </Text>
        <S.ExperienceList>
          {experiences.map((e) => (
            <ExpirienceCard key={e.id} experience={e} />
          ))}
        </S.ExperienceList>
      </S.Experiences>
    </S.background>
  );
};

export default ExpirienceList;
