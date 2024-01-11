import { CustomTheme } from "./../../types/themeTypes";
import styled from "styled-components";

import pattern1 from "../assets/images/pattern1.png";

export const CorouselSection = styled.section<{ theme: CustomTheme }>`
  ${(props) => (props.theme.mode === "light" ? "" : "filter: brightness(90%)")};
  background-size: 55%;
  background-repeat: repeat;
  margin: 0;
  position: relative;
  user-select: none;
  width: 100%;
  background-image: url(${pattern1});

  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(237, 235, 231, 0.5);
    backdrop-filter: blur(5px);
  }
`;
