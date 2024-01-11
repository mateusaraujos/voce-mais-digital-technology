import styled from "styled-components";

import { CustomTheme } from "../../types/themeTypes";

export const SectionTwo = styled.section<{ theme: CustomTheme }>`
  background-color: ${(props) =>
    props.theme.mode === "light"
      ? "var(--dark-green)"
      : "var(--primary-black)"};
  width: 100%;
  color: var(--primary-white);
  padding: ${(props) => (props.theme.mode === "light" ? "2.5rem 0" : "0")};
  user-select: none;
`;

export const ContainerQuemSomos = styled.div<{ theme: CustomTheme }>`
  background-color: ${(props) =>
    props.theme.mode === "light" ? "" : "var(--secondary-black)"};
  border-radius: 15px;
  padding: ${(props) => (props.theme.mode === "light" ? "0" : "2.5rem 0")};
  box-shadow: ${(props) =>
    props.theme.mode === "light" ? "" : "0 0 5px var(--primary-black)"};
`;
