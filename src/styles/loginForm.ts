import styled from "styled-components";

import { CustomTheme } from "../types/themeTypes";

export const FormContainerLogin = styled.form<{ theme: CustomTheme }>`
user-select: none;
  background-color: ${(props) =>
    props.theme.mode === "light"
      ? "var(--secondary-white)"
      : "var(--light-green)"};
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0 1rem;
  width: 80%;
  margin: 2rem 0 5rem 0;
  padding: 1.5rem 2rem;
  border-radius: 12px;
  box-shadow: ${(props) =>
    props.theme.mode === "light" ? "" : "0 0 5px var(--primary-black)"};

  label {
    color: #0d0d0d;
    font-weight: 600;
    font-size: 0.9rem;
  }

  .div-1,
  .div-2 {
    grid-column-start: 1;
    grid-column-end: 3;
  }
`;

export const FormInputLogin = styled.input<{ theme: CustomTheme }>`
  margin: 0.2rem 0;
  font-size: 0.9rem;
  width: 100%;
  height: 2rem;
  padding: 0.5rem;
  border: solid 1.5px var(--light-green);
  background-color: var(--secondary-white);
  color: var(--primary-black);

  &:focus {
    box-shadow: ${(props) =>
      props.theme.mode === "light"
        ? "0 0 15px var(--light-green)"
        : "0 0 5px var(--primary-black)"};
    outline: ${(props) =>
      props.theme.mode === "light"
        ? "0 0 15px var(--light-green)"
        : "0 0 5px var(--primary-black)"};
  }
`;

export const FormButtonLogin = styled.button<{ theme: CustomTheme }>`
  grid-column-start: 1;
  grid-column-end: 3;
  cursor: pointer;
  font-family: "Raleway", sans-serif !important;
  font-weight: 600;
  margin: 0.8rem 0 0 0;
  font-size: 1.6rem;
  padding: 0.5rem;
  background-color: ${(props) =>
    props.theme.mode === "light"
      ? "var(--dark-green)"
      : "var(--secondary-black)"};
  color: white;
  border: ${(props) =>
    props.theme.mode === "light"
      ? "var(--dark-green)"
      : "var(--secondary-black)"};
  border-radius: 8px;
  transition: all 0.2s ease-in-out;
  box-shadow: 0 0 5px var(--primary-black);

  &:hover {
    background-color: white;
    color: ${(props) =>
      props.theme.mode === "light"
        ? "var(--dark-green)"
        : "var(--secondary-black)"};
  }

  &:focus {
    border: none;
    outline: ${(props) =>
      props.theme.mode === "light"
        ? "2px solid var(--dark-green)"
        : "2px solid var(--secondary-black)"};
`;
