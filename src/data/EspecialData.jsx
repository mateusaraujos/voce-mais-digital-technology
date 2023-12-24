import imgInsta from "../assets/img/items/insta.png";
import imgWhats from "../assets/img/items/whats.png";

import cursoExemplo1 from "../assets/img/cursos/informatica.png";
import cursoExemplo2 from "../assets/img/cursos/manutencao.png";
import cursoExemplo3 from "../assets/img/cursos/evolucao.png";

export const EXEMPLOS_CURSOS = [
  {
    imagem: cursoExemplo1,
    alt: "Informática",
    legenda: (
      <>
        Informática Básica
        <br /> e Avançada
      </>
    ),
  },
  {
    imagem: cursoExemplo2,
    alt: "Manutenção",
    legenda: (
      <>
        Manutenção
        <br /> em Hardware <br />
        (Notebook/PC)
      </>
    ),
  },
  {
    imagem: cursoExemplo3,
    alt: "Evolução",
    legenda: "Evolução Profissional",
  },
];

export const TEXTO_MAIS_DIGITAL = [
  {
    id: "p-1",
    texto: (
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
    texto: (
      <>
        Nossa missão é oferecer cursos práticos e especializados que capacitam
        estudantes e profissionais a dominar habilidades essenciais no universo
        digital.
      </>
    ),
  },
  {
    id: "p-3",
    texto: (
      <>
        Nós valorizamos a excelência, a criatividade e a experiência do
        aprendizado. Acreditamos que cada passo na jornada tecnológica é uma
        oportunidade para o crescimento.
      </>
    ),
  },
  {
    id: "p-4",
    texto: (
      <>
        Junte-se a nós e mergulhe em um ambiente de aprendizado inovador, onde a
        educação se concentra com a tecnologia, e cada conquista é um passo
        adiante para um futuro brilhante.
      </>
    ),
  },
];

export const SOCIAL_LINKS = [
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
