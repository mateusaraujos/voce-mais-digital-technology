import styled from "styled-components";

import { CustomTheme } from "../types/themeTypes";

export const SealArticle = styled.article<{ theme: CustomTheme }>`
  color: ${(props) =>
    props.theme.mode === "light"
      ? "var(--primary-black)"
      : "var(--primary-white)"};
  background-color: ${(props) =>
    props.theme.mode === "light"
      ? "var(--light-green)"
      : "var(--primary-orange)"};
`;

export const Stamp = styled.img`
  border-radius: 50%;
  pointer-events: none;
`;
