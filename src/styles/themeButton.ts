import styled from "styled-components";

import { CustomTheme } from "../types/themeTypes";

export const ThemeButton = styled.button<{ theme: CustomTheme }>`
  position: fixed;
  bottom: 2rem;
  left: 2rem;
  width: 3rem;
  height: 3rem;
  background-color: ${(props) =>
    props.theme.mode === "light"
      ? "var(--primary-white)"
      : "var(--primary-black)"};
  border: none;
  box-shadow: ${(props) =>
    props.theme.mode === "dark"
      ? "0 1px 2px 0 rgba(161, 161, 161, 0.5), 0 2px 6px 2px rgba(185, 185, 185, 0.2)"
      : "0 1px 2px 0 rgba(60, 64, 67, 0.3), 0 2px 6px 2px rgba(60, 64, 67, 0.15)"};
  padding: 0;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.3s ease;
  z-index: 3;
  outline: none;

  &:hover {
    background-color: ${(props) =>
      props.theme.mode === "light" ? "lightgrey" : "var(--dark-green)"};
  }
`;

export const ModeImage = styled.img<{ theme: CustomTheme }>`
  margin-top: 0.13rem;
  width: 1.5rem;
  height: 1.5rem;
  pointer-events: none;
  filter: ${(props) =>
    props.theme.mode === "light"
      ? "invert(0%) sepia(0%) saturate(0%) hue-rotate(0deg)"
      : "invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg)"};
`;
