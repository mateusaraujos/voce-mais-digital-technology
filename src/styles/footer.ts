import styled from "styled-components";

import { CustomTheme } from "../types/themeTypes";

export const StyledFooter = styled.footer<{ theme: CustomTheme }>`
  background-color: ${(props) =>
    props.theme.mode === "light"
      ? "var(--primary-white)"
      : "var(--primary-black)"};
  color: ${(props) =>
    props.theme.mode === "light"
      ? "var(--primary-black)"
      : "var(--primary-white)"};
  width: 100%;
  user-select: none;
  padding: 2rem 0;
`;

export const LogoImageFooter = styled.img`
  height: 6rem;
  width: auto;
  pointer-events: none;
`;

export const By = styled.small`
  color: rgba(128, 128, 128, 0.5);
`;

export const ByLink = styled.a<{ theme: CustomTheme }>`
  color: rgba(128, 128, 128, 0.5);
  padding: 0;
  margin: 0;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: ${(props) =>
      props.theme.mode === "light"
        ? "var(--primary-black)"
        : "var(--primary-white)"};
  }

  &::before {
    background-color: ${(props) =>
      props.theme.mode === "light"
        ? "var(--primary-black)"
        : "var(--primary-white)"};
  }
`;
