import styled from "styled-components";

import { CustomTheme } from "../types/themeTypes";

export const HeaderLinks = styled.a<{ theme: CustomTheme }>`
  color: ${(props) =>
    props.theme.mode === "light"
      ? "var(--primary-dark)"
      : "var(--primary-white)"};

  border-radius: 4px;
  padding: 2px 10px;

  border: ${(props) =>
    props.theme.mode === "light"
      ? "1px solid var(--dark-green)"
      : "1px solid var(--light-green)"};

  &::before {
    border-radius: 4px;
    background-color: ${(props) =>
      props.theme.mode === "light"
        ? "var(--dark-green)"
        : "var(--light-green)"};
  }

  &:focus {
    outline: ${(props) =>
      props.theme.mode === "light"
        ? "1.5px solid var(--dark-green)"
        : "1.5px solid var(--light-green)"};
  }
`;
