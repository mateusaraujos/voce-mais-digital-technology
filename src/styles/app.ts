import styled from "styled-components";

import { CustomTheme } from "../types/themeTypes";

export const HomeScreen = styled.div<{ theme: CustomTheme }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props) =>
    props.theme.mode === "light"
      ? "var(--primary-white)"
      : "var(--primary-black)"};
  user-select: none;
`;

export const InitialLogo = styled.img`
  animation: heartbeat 1s infinite;
  width: 5rem;
  height: auto;

  /* Animação para a imagem de inicialização V+ */
  @keyframes heartbeat {
    0% {
      transform: scale(1);
    }
    10% {
      transform: scale(1.1);
    }
    20% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
`;
