import styled from "styled-components";

import { CustomTheme } from "../../types/themeTypes";

export const SectionFour = styled.section<{ theme: CustomTheme }>`
  background-color: ${(props) =>
    props.theme.mode === "light"
      ? "var(--dark-green)"
      : "var(--secondary-black)"};

  width: 100%;
  color: var(--primary-white);
  padding: ${(props) =>
    props.theme.mode === "light" ? "2.5rem 0 3.5rem 0" : "0"};
  user-select: none;
`;

export const ComeBeDivision = styled.div<{ theme: CustomTheme }>`
  padding: ${(props) =>
    props.theme.mode === "light" ? "0 1rem" : "2.5rem 1rem 3.5rem 1rem"};
`;
