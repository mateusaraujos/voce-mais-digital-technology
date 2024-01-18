import styled from "styled-components";

import { CustomTheme } from "../types/themeTypes";

export const MainAuthenticate = styled.main`
  display: flex;
  min-height: 100vh;
  color: ${(props) =>
    props.theme.mode === "light"
      ? "var(--primary-black)"
      : "var(--primary-white)"};

  @media (max-width: 414px), (max-width: 896px) {
    flex-direction: column;
  }
`;

export const Presentation = styled.section<{ theme: CustomTheme }>`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  padding: 0.8rem 0.5rem 0.5rem 0.5rem;
  background-color: ${(props) =>
    props.theme.mode === "light"
      ? "var(--primary-white)"
      : "var(--secondary-black)"};

  .logo-link {
    width: 8rem;
  }

  blockquote {
    width: 100%;
    max-width: 30rem;
    padding: 2rem;
    margin-bottom: 3rem;
    font-weight: 600;
    font-size: 1.8rem;

    cite {
      display: block;
      font-weight: 800;
    }
  }

  @media (max-width: 414px), (max-width: 896px) {
    padding-bottom: 0;

    blockquote {
      max-width: 100%;
    }
  }
`;

export const LoginSection = styled.section<{ theme: CustomTheme }>`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0.8rem 0.5rem 0.5rem 0.5rem;
  background-color: ${(props) =>
    props.theme.mode === "light"
      ? "var(--dark-green)"
      : "var(--primary-black)"};

  h1 {
    text-align: center;
    font-size: 3rem;
    font-weight: 900;
    color: var(--primary-white) !important;
  }

  @media (max-width: 414px), (max-width: 896px) {
    padding: 3rem 0.5rem 3rem 0.5rem;
  }
`;
