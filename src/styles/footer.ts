import styled from "styled-components";

import { CustomTheme } from "../types/themeTypes";

export const StyledFooter = styled.footer<{ theme: CustomTheme }>`
  width: 100%;
  padding: 2rem 0;
  background-color: ${(props) =>
    props.theme.mode === "light"
      ? "var(--primary-white)"
      : "var(--primary-black)"};
  color: ${(props) =>
    props.theme.mode === "light"
      ? "var(--primary-black)"
      : "var(--primary-white)"};

  .center-footer {
    line-height: 2rem;
    max-width: 55rem;
    margin: 1.5rem auto;
  }

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    user-select: none;
  }

  .courses-pad {
    padding-left: 1rem;
  }
`;

export const LogoImageFooter = styled.img`
  height: 6rem;
  width: auto;
  user-select: none;
  pointer-events: none;
`;

export const Social = styled.div`
  display: flex;
  flex-direction: column;

  .icon {
    height: 1.8rem;
    width: auto;
    margin-right: 0.5rem;
  }

  ul li {
    line-height: 1.9rem;
  }

  .address {
    padding-left: 0.1rem;
  }

  address {
    line-height: 1rem;
    margin-top: 1.5rem;
    user-select: auto;
  }
`;

export const Copy = styled.div`
  text-align: center;
  margin: 4rem 0;
`;

export const By = styled.small`
  color: rgba(128, 128, 128, 0.2);
  user-select: none;
`;

export const ByLink = styled.a<{ theme: CustomTheme }>`
  color: rgba(128, 128, 128, 0.2);
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
