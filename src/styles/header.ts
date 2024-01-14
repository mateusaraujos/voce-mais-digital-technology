import { Link } from "react-router-dom";
import styled from "styled-components";

import { CustomTheme } from "../types/themeTypes";

export const StyledHeader = styled.header<{ theme: CustomTheme }>`
  background-color: ${(props) =>
    props.theme.mode === "light"
      ? "var(--primary-white)"
      : "var(--primary-black)"};
`;

export const LogoLink = styled.a<{ theme: CustomTheme }>`
  &:focus {
    outline: ${(props) =>
      props.theme.mode === "light"
        ? "1.5px solid var(--dark-green)"
        : "1.5px solid var(--light-green)"};
  }
`;

export const LogoImage = styled.img`
  height: 4rem;
  width: auto;
  pointer-events: none;
`;

export const PortalLink = styled(Link)<{ theme: CustomTheme }>`
  color: ${(props) =>
    props.theme.mode === "light"
      ? "var(--primary-white)"
      : "var(--primary-black)"};
  background-color: ${(props) =>
    props.theme.mode === "light" ? "var(--dark-green)" : "var(--light-green)"};

  &:hover {
    background-color: ${(props) =>
      props.theme.mode === "light"
        ? "var(--primary-white)"
        : "var(--primary-black)"};
    color: ${(props) =>
      props.theme.mode === "light"
        ? "var(--dark-green)"
        : "var(--light-green)"};

    &::before {
      background-color: ${(props) =>
        props.theme.mode === "light"
          ? "var(--dark-green)"
          : "var(--light-green)"};
    }
  }

  &:focus {
    outline: ${(props) =>
      props.theme.mode === "light"
        ? "1.5px solid var(--dark-green)"
        : "1.5px solid var(--light-green)"};
  }
`;
