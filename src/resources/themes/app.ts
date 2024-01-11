import styled from "styled-components";
import { CustomTheme } from "../../types/themeTypes";

export const HomeScreen = styled.div<{ theme: CustomTheme }>`
  background-color: ${(props) =>
    props.theme.mode === "light"
      ? "var(--primary-white)"
      : "var(--primary-black)"};
`;

export const InitialLogo = styled.img`
  width: 5rem;
  height: auto;
`;
