import { BannerType, FormField, HeaderLink, ToCourse } from "../types/appTypes";

import imgBanner1 from "../assets/img/banners/banner-1.png";
import imgBanner2 from "../assets/img/banners/banner-2.png";
import imgBanner3 from "../assets/img/banners/banner-3.png";

export const HEADER_LINKS: HeaderLink[] = [
  { url: "#section-one", text: "Cursos" },
  { url: "#section-two", text: "Quem somos" },
  { url: "#section-four", text: "Quero ser +digital" },
];

export const BANNERS: BannerType[] = [imgBanner1, imgBanner2, imgBanner3];

export const FORM_FIELDS: FormField[] = [
  {
    label: "Nome",
    type: "text",
    name: "nome",
    placeholder: "Seu nome completo",
    required: true,
  },
  {
    label: "Telefone",
    type: "tel",
    name: "telefone",
    placeholder: "Número do seu celular",
    required: true,
  },
  {
    label: "Curso",
    type: "select",
    name: "curso",
    choices: [
      { value: "ReactJS", label: "ReactJS" },
      { value: "Angular", label: "Angular" },
      { value: "Vue.js", label: "Vue.js" },
    ],
    placeholder: "Escolha o que quer cursar",
    required: false,
  },
  {
    label: "E-mail",
    type: "email",
    name: "email",
    placeholder: "Seu E-mail mais usado",
    required: false,
  },
  {
    label: "Estado",
    type: "select",
    name: "estado",
    choices: [
      { value: "AL", label: "Alagoas" },
      { value: "BA", label: "Bahia" },
      { value: "CE", label: "Ceará" },
    ],
    placeholder: "Selecione seu estado",
    required: true,
  },
  {
    label: "Cidade",
    type: "select",
    name: "cidade",
    choices: [
      { value: "AL", label: "Alagoas" },
      { value: "BA", label: "Bahia" },
      { value: "CE", label: "Ceará" },
    ],
    placeholder: "Selecione sua cidade",
    required: true,
  },
  {
    label: "Como conheceu a Você + Digital?",
    type: "select",
    name: "comoConheceu",
    choices: [
      { value: "Pesquisa", label: "Pesquisa no Google" },
      { value: "Recomendacao", label: "Recomendação de Amigos" },
      { value: "Instagram", label: "Instagram" },
    ],
    placeholder: "Nos diga como nos conheceu...",
    required: false,
  },
];

export const SOME_COURSES: ToCourse[] = [
  {
    url: "#",
    text: "Informática básica e avançada",
  },
  {
    url: "#",
    text: "Manutenção em Hardware",
  },
  {
    url: "#",
    text: "Evolução Profissional",
  },
];
