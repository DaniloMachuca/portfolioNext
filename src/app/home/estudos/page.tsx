"use client";

import Section from "@/containers/Section";
import { SectionTitle, Text } from "@/app/styles";
import CourseList from "@/containers/CourseList";
import { useEffect } from "react";
import Aos from "aos";

const Study = () => {
  useEffect(() => {
    Aos.init();
    window.scrollTo({
      top: 0,
    });
  }, []);
  return (
    <>
      <Section img="/formatura.jpg">
        <>
          <div>
            <SectionTitle>Educação e Qualificação</SectionTitle>
            <Text>
              Sou estudante de Ciência da Computação na UNIP, onde desenvolvo
              fundamentos sólidos em programação, algoritmos, estruturas de
              dados e desenvolvimento de sistemas. Complemento minha graduação
              com cursos que ampliam meu conhecimento em desenvolvimento de
              aplicações e tecnologias modernas, mantendo minha curiosidade
              sempre ativa. Pretendo continuar me especializando para expandir
              minha atuação em diferentes áreas do desenvolvimento de software
              por meio de um mestrado e/ou uma pós-graduação.
            </Text>
          </div>
        </>
      </Section>
      <Section img="/unip.png" textDirection="left" color="dark">
        <div>
          <SectionTitle>Minha graduação</SectionTitle>
          <Text>
            A Unip é uma instituição reconhecida pela qualidade de ensino e
            incentivo à inovação tecnológica. Tal formação tem contribuído muito
            para o aprimoramento das minhas habilidades analíticas e de
            desenvolvimento. Após concluir minha graduação, tenho planos de
            seguir com uma pós-graduação em Engenharia de Software e,
            posteriormente, um mestrado no exterior, com o objetivo de
            aprofundar meus conhecimentos e ampliar minha atuação no setor de
            tecnologia.
          </Text>
        </div>
      </Section>
      <CourseList />
    </>
  );
};

export default Study;
