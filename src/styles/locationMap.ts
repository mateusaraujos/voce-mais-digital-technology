import styled from "styled-components";

import { CustomTheme } from "../types/themeTypes";

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
`;

export const SectionMap = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;

  .map-size {
    user-select: none;
    width: 30rem;
  }

  .map {
    width: 100%;
    height: auto;
  }

  .adjust-close {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
  }

  .superscription {
    display: flex;
    align-items: center;
    margin-left: -0.8rem;
  }

  .superscription p {
    margin-left: 0;
    font-size: 1rem;
  }
`;

export const SectionThreeTitle = styled.h2`
  line-height: 2.8rem;
  font-size: 3rem;
  font-weight: 900;
  margin-bottom: 1rem;
`;

export const PointImage = styled.img<{ theme: CustomTheme }>`
  background-color: ${(props) =>
    props.theme.mode === "light" ? "" : "var(--primary-white)"};
  border-radius: 50%;
  margin-right: ${(props) => (props.theme.mode === "light" ? "" : "0.5rem")};
  height: 4rem;
  width: auto;
  pointer-events: none;
  user-select: none;
`;
