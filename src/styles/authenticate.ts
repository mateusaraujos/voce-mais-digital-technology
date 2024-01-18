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
  padding: 0.8rem 0.5rem 0.5rem 0.5rem;
  background-color: ${(props) =>
    props.theme.mode === "light"
      ? "var(--primary-white)"
      : "var(--secondary-black)"};

  blockquote {
    width: 100%;
    padding: 1rem 1rem 5rem 1rem;
    font-weight: 400;
    font-size: 2.2rem;

    cite {
      display: block;
      font-weight: 600;
    }
  }
`;

export const LoginSection = styled.section<{ theme: CustomTheme }>`
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 3rem 1.5rem 1.5rem 1.5rem;
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
`;
