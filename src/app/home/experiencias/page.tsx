import { SectionTitle, Text } from "../../styles";
import Section from "@/containers/Section";
import ProjectList from "@/containers/ProjectList";
import ExpirienceList from "@/containers/ExpirienceList";
import GithubReposList from "@/containers/GithubReposList";
import * as S from "./styles";

const Experiences = () => {
  return (
    <>
      <Section img="/experiencia.jpg">
        <S.Expiriences>
          <SectionTitle>Experiências</SectionTitle>
          <Text>
            Minha trajetória profissional e projetos refletem minha evolução
            como desenvolvedor full stack, atuando na construção de aplicações
            web completas. Desenvolvo interfaces modernas e responsivas no
            frontend, integrando-as a APIs e serviços no backend para garantir
            soluções funcionais e bem estruturadas, incluindo integrações com
            serviços externos e aplicações que utilizam Inteligência Artificial.
          </Text>
          <Text>
            Tenho experiência com integração de APIs, organização de código,
            controle de versão, testes automatizados e deploy de aplicações.
            Também aplico boas práticas de desenvolvimento, incluindo
            componentização, gerenciamento de estado, acessibilidade web (A11Y)
            e estruturação de projetos voltada à manutenção e evolução contínua
            das aplicações.
          </Text>
        </S.Expiriences>
      </Section>
      <ExpirienceList />
      <ProjectList />
      <GithubReposList />
    </>
  );
};

export default Experiences;
