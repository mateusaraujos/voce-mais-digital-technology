import { FormField } from "./../types/appTypes";

export const LOGIN_FORM: FormField[] = [
  {
    label: "E-mail",
    type: "email",
    name: "email",
    placeholder: "Seu e-mail cadastrado",
    required: true,
  },
  {
    label: "Senha",
    type: "password",
    name: "password",
    placeholder: "Sua senha",
    required: true,
  },
];
