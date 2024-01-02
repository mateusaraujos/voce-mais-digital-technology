import { CourseExample, SocialLink, TextMaisDigital } from "../types/types";

import imgInsta from "../assets/img/items/insta.png";
import imgWhats from "../assets/img/items/whats.png";
import cursoExemplo1 from "../assets/img/cursos/informatica.png";
import cursoExemplo2 from "../assets/img/cursos/manutencao.png";
import cursoExemplo3 from "../assets/img/cursos/evolucao.png";

export const COURSE_EXAMPLES: CourseExample[] = [
  {
    image: cursoExemplo1,
    alt: "Informática",
    subtitle: (
      <>
        Informática Básica
        <br /> e Avançada
      </>
    ),
  },
  {
    image: cursoExemplo2,
    alt: "Manutenção",
    subtitle: (
      <>
        Manutenção
        <br /> em Hardware <br />
        (Notebook/PC)
      </>
    ),
  },
  {
    image: cursoExemplo3,
    alt: "Evolução",
    subtitle: "Evolução Profissional",
  },
];

export const TEXTS_MAIS_DIGITAL: TextMaisDigital[] = [
  {
    id: "p-1",
    text: (
      <>
        Na <strong>Você+Digital Technology</strong>, nossa paixão é desbravar o
        mundo tecnológico e tornar a educação acessível para todos. Nascemos da
        convicção de que a tecnologia é uma ferramenta poderosa para transformar
        vidas e impulsionar o futuro.
      </>
    ),
  },
  {
    id: "p-2",
    text: (
      <>
        Nossa missão é oferecer cursos práticos e especializados que capacitam
        estudantes e profissionais a dominar habilidades essenciais no universo
        digital.
      </>
    ),
  },
  {
    id: "p-3",
    text: (
      <>
        Nós valorizamos a excelência, a criatividade e a experiência do
        aprendizado. Acreditamos que cada passo na jornada tecnológica é uma
        oportunidade para o crescimento.
      </>
    ),
  },
  {
    id: "p-4",
    text: (
      <>
        Junte-se a nós e mergulhe em um ambiente de aprendizado inovador, onde a
        educação se concentra com a tecnologia, e cada conquista é um passo
        adiante para um futuro brilhante.
      </>
    ),
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    children: "@vocemaisdigital_",
    url: "https://www.instagram.com/vocemaisdigital_/",
    image: imgInsta,
    alt: "Instagram",
  },
  {
    children: <span data-phone="(99) 9999-9999">(99) 9999-9999</span>,
    url: "#",
    image: imgWhats,
    alt: "WhatsApp",
  },
];
