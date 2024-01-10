import styled from "styled-components";
import { CustomTheme } from "../../types/themeTypes";

export const CorouselSection = styled.section<{ theme: CustomTheme }>`
  ${(props) => (props.theme.mode === "light" ? "" : "filter: brightness(80%)")}
`;
