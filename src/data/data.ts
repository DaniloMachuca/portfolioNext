import { IconType } from "react-icons";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaGit,
  FaFigma,
  FaDatabase,
  FaFirefoxBrowser,
  FaChrome,
  FaGulp,
  FaGrunt,
  FaGithub,
} from "react-icons/fa";
import {
  SiTypescript,
  SiRedux,
  SiNextdotjs,
  SiVite,
  SiGoland,
  SiCplusplus,
  SiSass,
  SiLess,
  SiBootstrap,
  SiVuedotjs,
  SiJest,
  SiCypress,
  SiC,
  SiJson,
  SiVercel,
  SiStyledcomponents,
  SiTailwindcss,
  SiKubernetes,
  SiReactrouter,
} from "react-icons/si";

import { FaMagnifyingGlass } from "react-icons/fa6";
import { BsBoxSeam } from "react-icons/bs";
import { MdOutlineViewKanban } from "react-icons/md";

export interface Project {
  id: string;
  title: string;
  image: string;
  skillsUsed: string[];
  AllSkills: string[];
  description: string[];
  github: string;
  deploy: string;
  shortDescription: string;
}

export interface Skills {
  name: string;
  icon: IconType;
  category: "frontend" | "backend" | "tools";
  color: string;
}

export interface Course {
  id: string;
  title: string;
  certificate: string;
  image: string;
  place: string;
}

export interface Experience {
  id: string;
  title: string;
  position: string;
  company: string;
  date: string;
  description: string;
}

export const skills: Skills[] = [
  // -- Front-End --
  { name: "HTML5", category: "frontend", icon: FaHtml5, color: "#E34F26" },
  { name: "CSS3", category: "frontend", icon: FaCss3Alt, color: "#1572B6" },
  {
    name: "JavaScript (ES6+)",
    category: "frontend",
    icon: FaJs,
    color: "#F7DF1E",
  },
  {
    name: "TypeScript",
    category: "frontend",
    icon: SiTypescript,
    color: "#3178C6",
  },
  { name: "Sass", category: "frontend", icon: SiSass, color: "#CC6699" },
  { name: "LESS", category: "frontend", icon: SiLess, color: "#2b4d85ff" },
  {
    name: "Styled Components",
    category: "frontend",
    icon: SiStyledcomponents,
    color: "#DB7093",
  },
  {
    name: "Bootstrap",
    category: "frontend",
    icon: SiBootstrap,
    color: "#7952B3",
  },
  {
    name: "tailwindcss",
    category: "frontend",
    icon: SiTailwindcss,
    color: "#06B6D4",
  },
  {
    name: "React (Hooks)",
    category: "frontend",
    icon: FaReact,
    color: "#61DAFB",
  },
  {
    name: "React Router DOM",
    category: "frontend",
    icon: SiReactrouter,
    color: "#CA4245",
  },
  {
    name: "Next.js",
    category: "frontend",
    icon: SiNextdotjs,
    color: "#000000",
  },
  { name: "Redux", category: "frontend", icon: SiRedux, color: "#764ABC" },
  { name: "Vue.js", category: "frontend", icon: SiVuedotjs, color: "#4FC08D" },
  {
    name: "SEO Técnico",
    category: "frontend",
    icon: FaMagnifyingGlass,
    color: "#6185fbff",
  },

  // -- Back-End --
  { name: "Node.js", category: "backend", icon: FaNodeJs, color: "#339933" },
  { name: "Python", category: "backend", icon: FaPython, color: "#3776AB" },
  { name: "C", category: "backend", icon: SiC, color: "#A8B9CC" },
  { name: "C++", category: "backend", icon: SiCplusplus, color: "#00599C" },
  { name: "Golang", category: "backend", icon: SiGoland, color: "#00ADD8" },
  { name: "JSON", category: "backend", icon: SiJson, color: "#000000" },
  { name: "SQL", category: "backend", icon: FaDatabase, color: "#4479A1" },

  // -- Ferramentas --
  { name: "Jest", category: "tools", icon: SiJest, color: "#C21325" },
  {
    name: "React Testing Library",
    category: "tools",
    icon: FaReact,
    color: "#61DAFB",
  },
  { name: "Cypress", category: "tools", icon: SiCypress, color: "#2f4158ff" },
  { name: "Gulp", category: "tools", icon: FaGulp, color: "#CF4647" },
  { name: "Grunt", category: "tools", icon: FaGrunt, color: "#FBA919" },
  { name: "Parcel", category: "tools", icon: BsBoxSeam, color: "#F5BE03" },
  { name: "Vite", category: "tools", icon: SiVite, color: "#646CFF" },
  { name: "Git", category: "tools", icon: FaGit, color: "#F05032" },
  { name: "Vercel", category: "tools", icon: SiVercel, color: "#000000" },
  {
    name: "Chrome DevTools",
    category: "tools",
    icon: FaChrome,
    color: "#4285F4",
  },
  {
    name: "Firefox DevTools",
    category: "tools",
    icon: FaFirefoxBrowser,
    color: "#FF9400",
  },
  { name: "Figma", category: "tools", icon: FaFigma, color: "#F24E1E" },
  { name: "GitHub", category: "tools", icon: FaGithub, color: "#000000" },
  {
    name: "Kanban",
    category: "tools",
    icon: MdOutlineViewKanban,
    color: "#0066ffff",
  },
  {
    name: "Kubernetes",
    category: "tools",
    icon: SiKubernetes,
    color: "#326CE5",
  },
];

export const projects: Project[] = [
  {
    id: "efood",
    title: "eFood",
    image: "/ProjectsImages/efood.png",
    skillsUsed: [
      "React (Hooks)",
      "Redux",
      "React Router DOM",
      "Cypress",
      "Vercel",
    ],
    AllSkills: [
      "React (Hooks)",
      "Redux",
      "React Router DOM",
      "Cypress",
      "Vite",
      "Vercel",
      "Yup",
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "TypeScript",
    ],
    description: [
      "O eFood é um site inspirado em aplicativos de delivery, desenvolvido com React iniciado com Vite para proporcionar uma experiência dinâmica e interativa aos usuários. O layout foi planejado para ser responsivo, garantindo boa usabilidade em dispositivos móveis e desktops.",
      "O gerenciamento de estado global foi implementado com Redux, permitindo que dados como o carrinho de pedidos e informações do usuário fossem compartilhados de forma eficiente entre os componentes da aplicação.",
      "A navegação entre diferentes páginas e seções do site foi realizada utilizando React Router DOM, proporcionando transições rápidas e mantendo a aplicação organizada com rotas bem definidas.",
      "Para estudo e prática de integração com APIs, foi criada uma API fictícia que simula os produtos e o processo de pedido. Essa API permitiu testar requisições, tratamento de dados e respostas assíncronas dentro da aplicação.",
      "O cadastro de dados de pagamento e entrega foi implementado com formulários validados utilizando a biblioteca Yup, garantindo que os dados inseridos pelos usuários fossem consistentes e prevenindo erros comuns de input.",
      "Testes automatizados foram implementados com Cypress, incluindo fluxos de preenchimento de formulários, validação de campos e simulação de interações do usuário, assegurando a confiabilidade da aplicação antes do deploy.",
      "O projeto foi criado com Vite, permitindo uma configuração rápida e otimizada para desenvolvimento, e o deploy foi realizado na Vercel, tornando a aplicação acessível online.",
    ],
    github: "https://github.com/DaniloMachuca/eFood",
    deploy: "https://e-food-danilomachuca.vercel.app/",
    shortDescription:
      "Site de delivery inspirado em apps reais, criado com React e Vite, com Redux, Router DOM, validação de formulários e testes automatizados.",
  },

  {
    id: "disney-clone",
    title: "Disney+ Clone",
    image: "/ProjectsImages/disneyclone.png",
    skillsUsed: ["Sass", "Gulp", "HTML5", "CSS3"],
    AllSkills: ["Sass", "Gulp", "HTML5", "CSS3", "JavaScript (ES6+)"],
    description: [
      "O Disney+ Clone é um projeto de estudo voltado para a recriação visual do site da Disney+, com foco no layout e estilização, sem funcionalidades de backend.",
      "Todo o design foi desenvolvido utilizando Sass, permitindo modularidade, reuso de estilos e organização eficiente do código CSS.",
      "O projeto foi compilado e automatizado utilizando Gulp, facilitando tarefas como minificação de arquivos CSS, otimização de imagens e live reload durante o desenvolvimento.",
      "A versão final do clone apresenta um layout responsivo, mantendo a fidelidade visual ao site original, incluindo cabeçalho, banners, carrosséis de filmes e seções de conteúdo.",
      "O projeto teve como objetivo principal aprimorar habilidades em pré-processadores CSS e automação de tarefas front-end, sem a necessidade de integração com APIs ou banco de dados.",
      "Embora seja apenas um clone visual, ele demonstra boas práticas de organização de código, modularização e utilização de ferramentas de workflow modernas.",
    ],
    github: "https://github.com/DaniloMachuca/disneyplus_clone",
    deploy: "https://disneyplus-clone-olive.vercel.app/",
    shortDescription:
      "Clone visual do site Disney+, desenvolvido com Sass e compilado com Gulp, focado em layout e responsividade.",
  },
  {
    id: "eplay",
    title: "ePlay",
    image: "/ProjectsImages/eplay.png",
    skillsUsed: [
      "React (Hooks)",
      "Redux",
      "React Router DOM",
      "Cypress",
      "Vercel",
    ],
    AllSkills: [
      "React (Hooks)",
      "Redux",
      "React Router DOM",
      "Cypress",
      "Yup",
      "Vite",
      "Vercel",
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "TypeScript",
    ],
    description: [
      "O ePlay é um e-commerce de jogos desenvolvido com React, criado para simular a experiência de compra de produtos digitais, incluindo visualização de produtos, adição ao carrinho e checkout.",
      "O gerenciamento do estado global do carrinho foi implementado com Redux, permitindo que as informações sobre produtos selecionados e quantidades fossem compartilhadas de forma eficiente entre diferentes componentes da aplicação.",
      "A navegação entre páginas, incluindo páginas dinâmicas de produtos, foi realizada com React Router DOM, proporcionando uma experiência fluida e consistente para o usuário.",
      "O projeto possui integração com uma API que fornece os dados dos produtos, permitindo a exibição dinâmica de informações, como imagens, descrições, preços e disponibilidade.",
      "Para garantir que os dados inseridos nos formulários de checkout fossem válidos, a biblioteca Yup foi utilizada para validação de campos como nome, endereço e dados de pagamento.",
      "Testes automatizados foram implementados com Cypress, incluindo fluxos de adição de produtos ao carrinho, preenchimento de formulários e validação de campos, garantindo a confiabilidade da aplicação.",
      "O projeto foi criado com Vite, permitindo uma configuração rápida e otimizada para desenvolvimento, e o deploy foi realizado na Vercel, tornando a aplicação acessível online.",
      "O ePlay demonstra boas práticas de organização de código, integração com API, gerenciamento de estado, validação de formulários e testes automatizados, simulando funcionalidades de um e-commerce real.",
    ],
    github: "https://github.com/DaniloMachuca/eplay-v1",
    deploy: "https://eplay-v1.vercel.app/",
    shortDescription:
      "E-commerce de jogos desenvolvido com React, Redux, Router DOM, integração com API, validação de formulários e testes automatizados.",
  },
  {
    id: "vale-do-paraiba",
    title: "Indústria Automotiva no Vale do Paraíba",
    image: "/ProjectsImages/desenvolvimento-automotivo.png",
    skillsUsed: ["HTML5", "CSS3", "SMACSS", "BEM"],
    AllSkills: ["HTML5", "CSS3", "SMACSS", "BEM"],
    description: [
      "Esta página acadêmica apresenta uma pesquisa sobre o desenvolvimento da indústria automotiva no Vale do Paraíba, explorando aspectos econômicos, sociais e tecnológicos da região.",
      "O projeto foi desenvolvido apenas com HTML e CSS, focando em boas práticas de organização e semântica do código, permitindo que o conteúdo fosse apresentado de forma clara e acessível.",
      "Durante o desenvolvimento, foram aplicadas metodologias de organização CSS como SMACSS e BEM, garantindo modularidade, consistência e manutenção facilitada do código.",
      "O projeto teve como objetivo também treinar habilidades de pesquisa acadêmica, sintetizando informações relevantes em uma estrutura de página web que fosse didática e visualmente organizada.",
      "Apesar de ser um projeto simples em termos de funcionalidade, ele demonstra atenção a boas práticas de HTML e CSS, organização de conteúdo e aplicação de metodologias modernas de desenvolvimento front-end.",
    ],
    github: "https://github.com/DaniloMachuca/APS-Automotivo",
    deploy: "https://industria-automotiva-vale-do-paraiba.vercel.app/",
    shortDescription:
      "Página acadêmica sobre a indústria automotiva do Vale do Paraíba, desenvolvida com HTML e CSS aplicando SMACSS e BEM.",
  },
  {
    id: "restaurante",
    title: "Site para Restaurante",
    image: "/ProjectsImages/site-para-restaurante.png",
    skillsUsed: ["Bootstrap", "JavaScript (ES6+)", "HTML5", "CSS3"],
    AllSkills: ["Bootstrap", "JavaScript (ES6+)", "HTML5", "CSS3"],
    description: [
      "O projeto consiste em um site para restaurante, desenvolvido com Bootstrap, visando criar um layout responsivo e visualmente agradável para apresentação do estabelecimento.",
      "Algumas funcionalidades interativas foram implementadas utilizando JavaScript, incluindo abas que permitem exibir o cardápio com base em diferentes categorias de pratos.",
      "O desenvolvimento focou em boas práticas de estruturação do HTML e CSS, aproveitando a modularidade e componentes prontos do Bootstrap para agilizar a construção da interface.",
      "O projeto serve como um exemplo de aplicação de front-end voltado para negócios locais, combinando responsividade, usabilidade e pequenas interações dinâmicas.",
      "Embora simples, o site demonstra capacidade de integrar frameworks de estilo com scripts personalizados para criar funcionalidades interativas e melhor experiência do usuário.",
    ],
    github: "https://github.com/DaniloMachuca/site_Restaurante",
    deploy: "https://site-restaurante-danilomachuca-bootstrap.vercel.app/",
    shortDescription:
      "Site responsivo para restaurante, desenvolvido com Bootstrap e JavaScript, incluindo funcionalidades interativas no cardápio.",
  },
  {
    id: "contact-list",
    title: "Lista de Contatos",
    image: "/ProjectsImages/lista-de-contatos.png",
    skillsUsed: ["React (Hooks)", "Redux", "Styled Components", "LocalStorage"],
    AllSkills: [
      "React (Hooks)",
      "Redux",
      "Styled Components",
      "LocalStorage",
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "TypeScript",
    ],
    description: [
      "O projeto Lista de Contatos é uma aplicação desenvolvida em React para gerenciar informações de contatos de forma simples e prática.",
      "O gerenciamento de estado global foi implementado com Redux, permitindo que os dados dos contatos fossem compartilhados e atualizados de maneira eficiente entre os componentes.",
      "A estilização da aplicação foi feita com Styled Components, garantindo modularidade, organização e reaproveitamento de estilos no código.",
      "Os dados dos contatos são armazenados no LocalStorage do navegador, permitindo persistência das informações mesmo após o fechamento da aplicação.",
      "O projeto tem como objetivo demonstrar boas práticas em React, incluindo gerenciamento de estado, estilização modular e persistência de dados no front-end.",
      "A aplicação é totalmente funcional para adicionar, editar e remover contatos, servindo como estudo para manipulação de dados locais e integração com React e Redux.",
    ],
    github: "https://github.com/DaniloMachuca/lista-de-contatos-react",
    deploy: "https://lista-de-contatos-react-rho.vercel.app/",
    shortDescription:
      "Aplicação de gerenciamento de contatos em React, com Redux, Styled Components e persistência de dados no LocalStorage.",
  },
  {
    id: "course-market",
    title: "Course Market",
    image: "/ProjectsImages/course-market.png",
    skillsUsed: ["Next.js", "Redux Toolkit", "TailwindCSS"],
    AllSkills: [
      "Next.js",
      "React",
      "Redux Toolkit",
      "TailwindCSS",
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "TypeScript",
    ],
    description: [
      "O Course Market é uma plataforma didática desenvolvida com Next.js para simular um marketplace simples de compra de cursos. O projeto tem como foco a prática de conceitos modernos de front-end, incluindo criação de páginas, gerenciamento de estado global e componentização.",
      "A interface foi construída com TailwindCSS, garantindo um layout moderno, responsivo e fácil de manter. A Home apresenta uma seção de cursos em destaque, utilizando imagens de placeholder para simular um catálogo real.",
      "O estado global da aplicação foi implementado com Redux Toolkit, permitindo o controle eficiente de funcionalidades como cursos favoritos e itens adicionados ao carrinho.",
      "A página de listagem completa de cursos possui filtros por categoria, possibilitando que o usuário refine os resultados de forma dinâmica.",
      "O Checkout conta com um formulário validado, incluindo campos como nome, email e endereço. Os dados do comprador são estruturados de forma independente, permitindo fácil integração com APIs reais no futuro.",
      "Além da simulação visual e funcional, o projeto foi desenvolvido com atenção à escalabilidade, possibilitando transformá-lo em um e-commerce completo com backend, autenticação e sistema de pagamento.",
    ],
    github: "https://github.com/DaniloMachuca/course-market",
    deploy: "https://course-market-danilo-machuca.vercel.app/",
    shortDescription:
      "Marketplace didático de cursos, desenvolvido com Next.js, Redux Toolkit e TailwindCSS, incluindo favoritos, filtros e checkout validado.",
  },
];

export const Courses: Course[] = [
  {
    id: "1",
    title: "Introdução a Programação",
    certificate:
      "https://lms.ebaconline.com.br/certs/validate/92933-53648-14601-89385 ",
    image: "/CourseImages/portugol.png",
    place: "EBAC",
  },
  {
    id: "2",
    title: "Engenheiro de Front-end",
    certificate:
      "https://lms.ebaconline.com.br/certs/validate/59283-53648-65032-89233",
    image: "/CourseImages/engenheiro-de-front-end.png",
    place: "EBAC",
  },
];

export const experiences: Experience[] = [
  {
    id: "1",
    title: "Desenvolvedor Front-End Freelancer",
    company: "Freelancer",
    date: "2024 - Atual",
    description:
      "Desenvolvi interfaces web responsivas e modernas para diversos clientes, utilizando principalmente react e bootstrap.",
    position: "Desenvolvedor Front-End",
  },
];
