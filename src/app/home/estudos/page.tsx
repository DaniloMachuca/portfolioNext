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
              Sou estudante de <b>Ciência da Computação</b> na UNIP, onde
              desenvolvo fundamentos sólidos em <b>programação</b>,{" "}
              <b>algoritmos</b>, <b>estruturas de dados</b> e{" "}
              <b>desenvolvimento de sistemas</b>. Complemento minha graduação
              com cursos que ampliam meu conhecimento em{" "}
              <b>desenvolvimento de aplicações</b> e <b>tecnologias modernas</b>
              , mantendo minha curiosidade sempre ativa. Pretendo continuar me
              especializando para expandir minha atuação em diferentes áreas do
              <b>desenvolvimento de software</b>.
            </Text>
          </div>
        </>
      </Section>
      <Section img="/unip.png" textDirection="left" color="dark">
        <div>
          <SectionTitle>Minha graduação</SectionTitle>
          <Text>
            A Unip é uma instituição reconhecida pela qualidade de ensino e
            <b> incentivo à inovação tecnológica</b>, oque tem contribuído muito
            para o aprimoramento das minhas habilidades. Após concluir minha
            graduação, tenho planos de seguir com uma <b>pós-graduação</b> em
            <b> Engenharia de Software</b> e, posteriormente, um <b>mestrado</b>{" "}
            no exterior, com o objetivo de aprofundar meus conhecimentos e
            ampliar minha atuação no <b>setor de tecnologia</b>.
          </Text>
        </div>
      </Section>
      <CourseList />
    </>
  );
};

export default Study;
