import styled from "styled-components";

import { CustomTheme } from "../types/themeTypes";

import pattern1 from "../assets/images/pattern1.png";

export const CarouselSection = styled.section<{ theme: CustomTheme }>`
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

export const SectionCarousel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0;
`;

export const BannerSize = styled.div`
  max-width: 80rem;
  margin: 0;
`;

export const Banner = styled.img`
  width: 100%;
  height: auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: -0.4rem;
`;
