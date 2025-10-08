"use client";

import Section from "@/containers/Section";
import ProjectList from "@/containers/ProjectList";
import { SectionTitle, Text } from "../../styles";
import * as S from "./styles";
import { useEffect } from "react";
import Aos from "aos";

const Experiences = () => {
  useEffect(() => {
    Aos.init();
    window.scrollTo({
      top: 0,
    });
  }, []);
  return (
    <>
      <Section img="/experiencia.jpg">
        <S.Expiriences>
          <SectionTitle>Experiências</SectionTitle>
          <Text>
            Minha trajetória profissional e projetos estão reunidos aqui. Grande
            parte do meu trabalho está focada em criar{" "}
            <b>interfaces modernas e responsivas</b>, com ênfase em{" "}
            <b>desenvolvimento front-end</b>, <b>componentização</b>, uso de{" "}
            <b>frameworks e bibliotecas</b>. Também atuo com{" "}
            <b>controle de versão</b>, <b>estilização modular</b> e{" "}
            <b>integração com APIs</b>.
          </Text>
          <Text>
            Tenho experiência com <b>acessibilidade web (A11Y)</b>, utilização
            de <b>DevTools</b> para análise e depuração, processos de{" "}
            <b>build e bundling</b>, <b>deploy e hospedagem</b>, implementação
            de <b>design systems</b> e <b>gerenciamento de estado</b>. Meus
            projetos incluem ainda <b>testes de interface</b> para assegurar
            qualidade e consistência.
          </Text>
        </S.Expiriences>
      </Section>
      <ProjectList />
    </>
  );
};

export default Experiences;
