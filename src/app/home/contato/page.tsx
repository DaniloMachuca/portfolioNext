"use client";
import { Btn, SectionTitle, Text } from "@/app/styles";
import SocialMediaHeaderList from "@/components/SocialMediaHeaderList";
import Section from "@/containers/Section";
import * as S from "./styles";
import Link from "next/link";

const Contact = () => {
  return (
    <S.ImageCircle>
      <Section img="/foto-de-perfil.jpg" textDirection="right" view="100vh">
        <>
          <S.Contact>
            <SectionTitle>Fale comigo</SectionTitle>
            <Text>
              Estou disponível para oportunidades de trabalho, colaborações em
              projetos e esclarecimento de dúvidas. Você pode entrar em contato
              comigo pelo email, LinkedIn, GitHub ou telefone, e também pode
              baixar meu currículo atualizado diretamente pelo botão abaixo.
              Ficarei feliz em conversar sobre como posso contribuir para novos
              desafios.
            </Text>
            <S.Center>
              <SocialMediaHeaderList />
              <Btn href="/curriculo.pdf" target="_blank">
                Veja meu curículo
              </Btn>
            </S.Center>
          </S.Contact>
        </>
      </Section>
    </S.ImageCircle>
  );
};

export default Contact;
