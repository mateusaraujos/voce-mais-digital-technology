import { Link } from "react-router-dom";
import styled from "styled-components";

import { CustomTheme } from "../types/themeTypes";

export const StyledHeader = styled.header<{ theme: CustomTheme }>`
  width: 100%;
  user-select: none;
  background-color: ${(props) =>
    props.theme.mode === "light"
      ? "var(--primary-white)"
      : "var(--primary-black)"};

  .light-green {
    height: 0.35rem;
    background-color: #00ff83 !important;
  }

  .dark-green {
    height: 0.35rem;
    background-color: #3fa63b !important;
  }

  .center-header {
    max-width: 55rem;
    margin: 0 auto;
    padding: 0.2rem 0;
  }

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  nav ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }

  ul a {
    text-decoration: none;
    padding: 0.1rem 0.5rem;
    margin: 0 0.5rem;
  }
`;

export const LogoLink = styled.a<{ theme: CustomTheme }>`
  &:before {
    position: relative;
  }

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
  padding: 0.2rem 0.8rem;
  border-radius: 4px;
  transition: all 0.2s ease-in-out;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);

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
