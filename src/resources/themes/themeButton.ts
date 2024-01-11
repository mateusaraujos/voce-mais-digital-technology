import styled from "styled-components";
import { CustomTheme } from "../../types/themeTypes";

export const ThemeButton = styled.button<{ theme: CustomTheme }>`
  position: fixed;
  bottom: 20px;
  left: 20px;
  width: 2.5rem;
  height: 2.5rem;
  background-color: rgba(13, 13, 13, 0);
  border: 2px solid var(--primary-black);
  padding: 0;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.3s ease;
  z-index: 3;
  outline: none;
  background-color: var(--primary-white);

  &:focus {
    outline: 1px solid var(--primary-black);
  }

  &:hover {
    transform: scale(1.1);
  }
`;

export const ModeImage = styled.img`
  margin-top: 0.13rem;
  width: 1.2rem;
  height: 1.2rem;
`;
