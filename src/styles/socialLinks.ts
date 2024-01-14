import styled from "styled-components";

import { CustomTheme } from "../types/themeTypes";

export const FooterSocialLink = styled.a<{ theme: CustomTheme }>`
  color: ${(props) =>
    props.theme.mode === "light"
      ? "var(--primary-dark)"
      : "var(--primary-white)"};

  &::before {
    border-radius: 4px;
    background-color: ${(props) =>
      props.theme.mode === "light"
        ? "var(--dark-green)"
        : "var(--light-green)"};
  }
`;

export const SocialIcons = styled.img<{ theme: CustomTheme }>`
  background-color: ${(props) =>
    props.theme.mode === "light" ? "" : "var(--primary-white)"};
  border-radius: 50%;
  margin-right: -0.5rem;
`;
