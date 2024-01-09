import styled from "styled-components";
import { CustomTheme } from "../../types/themeTypes";

import { Link } from "react-router-dom";

export const StyledHeader = styled.header<{ theme: CustomTheme }>`
  background-color: ${(props) =>
    props.theme.mode === "light"
      ? "var(--primary-white)"
      : "var(--primary-black)"};
`;

export const LogoImage = styled.img`
  height: 4rem;
  width: auto;
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
`;
