import { useState } from "react";
import { skills } from "@/data/data";

import { SectionTitle, Text } from "@/app/styles";
import * as S from "./styles";

const Skills = () => {
  const getSkillFiltered = (s: string) => {
    return skills.filter((c) => c.category === s);
  };

  const [active, setActive] = useState("frontend");

  return (
    <S.Skills data-aos="fade-up">
      <SectionTitle>Conhecimentos Técnicos</SectionTitle>
      <Text>
        Alguns conhecimentos Técnicos que adquiri durante minha carreira e por
        meio de estudos:
      </Text>
      <S.optionList>
        <li>
          <S.tabBtn
            onClick={() => setActive("frontend")}
            className={active === "frontend" ? "active" : ""}
          >
            Front-end
          </S.tabBtn>
        </li>
        <li>
          <S.tabBtn
            onClick={() => setActive("backend")}
            className={active === "backend" ? "active" : ""}
          >
            Back-end
          </S.tabBtn>
        </li>
        <li>
          <S.tabBtn
            onClick={() => setActive("tools")}
            className={active === "tools" ? "active" : ""}
          >
            Ferramentas
          </S.tabBtn>
        </li>
      </S.optionList>
      <S.SkillList>
        {getSkillFiltered(active).map((c) => (
          <S.Skill key={c.name} color={c.color}>
            <div>
              <c.icon />
            </div>
            <span>{c.name}</span>
          </S.Skill>
        ))}
      </S.SkillList>
    </S.Skills>
  );
};

export default Skills;
