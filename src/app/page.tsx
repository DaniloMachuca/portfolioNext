"use client";

import Section from "@/containers/Section";
import { Inter } from "next/font/google";
import useMediaQuery from "@/utils/MediaQuery";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import SocialMediaHeaderList from "@/components/SocialMediaHeaderList";

const titleFont = Inter({
  subsets: ["latin"],
});

const Home = () => {
  const isSmallScreen = useMediaQuery("max-width: 768px");
  useEffect(() => {
    isSmallScreen
      ? AOS.init({ disable: true })
      : AOS.init({
          duration: 1400,
        });
    window.scrollTo({
      top: 0,
    });
  }, []);

  return (
    <>
      <Section img="/sobre-mim.png" textDirection="left">
        <>
          <div>
            <h3 className={titleFont.className}>Danilo Machuca de Souza</h3>
            <h4>
              Desenvolvedor Front-end e estudante de Ciência da Computação na
              UNIP.
            </h4>
            <p>
              Sou naturalmente curioso e autodidata, oque me leva a explorar
              novas tecnologias e diferentes formas de resolver problemas, o que
              me permite atuar de maneira versátil em projetos digitais. Crio
              interfaces modernas e responsivas, aplicando boas práticas de
              desenvolvimento, enquanto continuo expandindo meu conhecimento
              técnico e meu alcance profissional.
            </p>
            <SocialMediaHeaderList />
          </div>
        </>
      </Section>
      <Section color="dark" img="/trabalho.jpg" textDirection="right">
        <div>
          <h3 className={titleFont.className}>Como eu trabalho:</h3>
          <p>
            Adoto uma abordagem organizada e analítica no desenvolvimento de
            software. Sou capaz de aprender novas ferramentas rapidamente e
            integrar diferentes tecnologias em um mesmo projeto. Valorizo
            comunicação clara, código bem estruturado e soluções escaláveis, que
            possam evoluir e se adaptar às necessidades futuras.
          </p>
        </div>
      </Section>
    </>
  );
};

export default Home;
