"use client";

import { useEffect } from "react";
import { Inter } from "next/font/google";

import AOS from "aos";
import "aos/dist/aos.css";

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
              Desenvolvedor Full Stack e estudante de Ciência da Computação na
              UNIP.
            </h4>
            <Text>
              Sou naturalmente curioso e autodidata, o que me leva a explorar
              novas tecnologias e diferentes formas de resolver problemas. Atuo
              de maneira versátil no desenvolvimento de aplicações web
              completas, trabalhando tanto no frontend quanto no backend, com
              foco em organização, boas práticas e soluções eficientes. Busco
              constantemente expandir meu conhecimento técnico e evoluir
              profissionalmente através de projetos reais e desafios práticos.
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
            software, buscando integrar diferentes tecnologias de forma coerente
            dentro de um mesmo projeto. Tenho facilidade para aprender novas
            ferramentas e aplicá-las na prática, sempre priorizando código bem
            estruturado, clareza na comunicação e organização do fluxo de
            trabalho. Utilizo princípios de metodologias ágeis, como organização
            de tarefas e ciclos iterativos, para manter produtividade, foco e
            evolução constante do projeto.
          </Text>
        </div>
      </Section>
      <Skills />
    </>
  );
};

export default Home;
