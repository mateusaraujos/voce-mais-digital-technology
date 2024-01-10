import styled from "styled-components";
import { CustomTheme } from "../../types/themeTypes";

export const ThemeButton = styled.button<{ theme: CustomTheme }>`
  position: fixed;
  bottom: 20px;
  left: 20px;
  width: 2.5rem;
  height: 2.5rem;
  background-color: rgba(13, 13, 13, 0);
  border: none;
  padding: 0;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.3s ease;
  z-index: 3;
  outline: none;

  background-color: ${(props) =>
    props.theme.mode === "light"
      ? "var(--primary-white)"
      : "var(--light-green)"};

  &:focus {
    outline: 2px solid var(--primary-black);
  }
`;

export const ModeImage = styled.img`
  margin-top: 0.2rem;
  width: 2rem;
  height: 2rem;
`;
