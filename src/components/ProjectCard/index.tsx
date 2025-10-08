"use client";

import Image from "next/image";
import { Project } from "@/data/data";

import * as S from "./styles";

type Props = {
  project: Project;
};

const ProjectCard = ({ project }: Props) => {
  return (
    <S.Reset href={`/home/experiencias/${project.id}`}>
      <S.CardContainer>
        <S.CardHeader>
          <Image
            src={project.image}
            alt={project.title}
            width={1577}
            height={865}
          />
          <h4>{project.title}</h4>
        </S.CardHeader>
        <p>{project.shortDescription}</p>
        <S.SkillList>
          {project.skillsUsed.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </S.SkillList>
      </S.CardContainer>
    </S.Reset>
  );
};

export default ProjectCard;
