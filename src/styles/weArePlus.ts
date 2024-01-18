import styled from "styled-components";

import { CustomTheme } from "../types/themeTypes";

export const SectionTwo = styled.section<{ theme: CustomTheme }>`
  background-color: ${(props) =>
    props.theme.mode === "light"
      ? "var(--dark-green)"
      : "var(--primary-black)"};
  width: 100%;
  color: var(--primary-white);
  padding: ${(props) => (props.theme.mode === "light" ? "2.5rem 0" : "0")};
`;

export const SectionTwoTitle = styled.h2`
  text-align: center;
  font-size: 2.7rem;
  font-weight: 800;
  margin-bottom: 1.3rem;
`;

export const ContainerQuemSomos = styled.div<{ theme: CustomTheme }>`
  background-color: ${(props) =>
    props.theme.mode === "light" ? "" : "var(--secondary-black)"};
  border-radius: 15px;
  padding: ${(props) => (props.theme.mode === "light" ? "0" : "2.5rem 0")};
  box-shadow: ${(props) =>
    props.theme.mode === "light" ? "" : "0 0 5px var(--primary-black)"};

  .section-plus {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
`;

export const VideoSize = styled.div`
  width: 30rem;

  .video {
    user-select: none;
    width: 100%;
    height: auto;
  }
`;

export const Text = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0 0.5rem;
  grid-auto-flow: row;

  p {
    text-align: left;
    font-size: 1rem;
    margin: 1.2rem;
  }
`;
