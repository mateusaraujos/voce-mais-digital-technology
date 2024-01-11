import styled from "styled-components";

import { CustomTheme } from "../../types/themeTypes";

export const SectionThree = styled.section<{ theme: CustomTheme }>`
  background-color: ${(props) =>
    props.theme.mode === "light"
      ? "var(--primary-white)"
      : "var(--primary-black)"};
  color: ${(props) =>
    props.theme.mode === "light"
      ? "var(--primary-black)"
      : "var(--primary-white)"};
  width: 100%;
  padding-top: 1.5rem;
  user-select: none;
`;

export const PointImage = styled.img<{ theme: CustomTheme }>`
  background-color: ${(props) =>
    props.theme.mode === "light" ? "" : "var(--primary-white)"};
  border-radius: 50%;
  margin-right: ${(props) => (props.theme.mode === "light" ? "" : "0.5rem")};
  height: 4rem;
  width: auto;
`;
