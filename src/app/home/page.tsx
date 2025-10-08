"use client";

import { useEffect } from "react";
import { Inter } from "next/font/google";

import AOS from "aos";
import "aos/dist/aos.css";
import useMediaQuery from "@/utils/MediaQuery";

import Section from "@/containers/Section";
import SocialMediaHeaderList from "@/components/SocialMediaHeaderList";
import Skills from "@/components/Skills";
import { SectionTitle, Text } from "../styles";

const titleFont = Inter({
  subsets: ["latin"],
});

const Home = () => {
  useEffect(() => {
    AOS.init();
    window.scrollTo({
      top: 0,
    });
  }, []);

  return (
    <>
      <Section img="/sobre-mim.png" textDirection="left">
        <>
          <div>
            <SectionTitle className={titleFont.className}>
              Danilo Machuca de Souza
            </SectionTitle>
            <h4>
              Desenvolvedor Front-end e estudante de Ciência da Computação na
              UNIP.
            </h4>
            <Text>
              Sou naturalmente curioso e autodidata, o que me leva a explorar
              novas tecnologias e diferentes formas de resolver problemas. Por
              isso, atuo de maneira versátil na criação de softwares, criando
              interfaces modernas e responsivas, fazendo questão de aplicar boas
              práticas de desenvolvimento. E, assim, continuo expandindo
              continuamente meu conhecimento técnico e alcance profissional.
            </Text>
            <SocialMediaHeaderList />
          </div>
        </>
      </Section>
      <Section color="dark" img="/trabalho.jpg" textDirection="right">
        <div>
          <SectionTitle className={titleFont.className}>
            Como eu trabalho:
          </SectionTitle>
          <Text>
            Adoto uma abordagem organizada e analítica no desenvolvimento de
            software, integrando diferentes tecnologias em um mesmo projeto e
            aprendendo novas ferramentas rapidamente. Valorizo comunicação
            clara, código bem estruturado e soluções escaláveis, que possam
            evoluir e se adaptar às necessidades futuras. Além disso, utilizo
            metodologias ágeis, como Scrum e Kanban, para gerenciar tarefas de
            forma eficiente, facilitar a colaboração entre equipes e garantir
            entregas contínuas e adaptáveis às mudanças nos requisitos do
            projeto.
          </Text>
        </div>
      </Section>
      <Skills />
    </>
  );
};

export default Home;
