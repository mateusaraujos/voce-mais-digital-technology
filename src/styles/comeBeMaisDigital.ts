import styled from "styled-components";

import { CustomTheme } from "../types/themeTypes";

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

export const ComeBeDiv = styled.div<{ theme: CustomTheme }>`
  padding: ${(props) =>
    props.theme.mode === "light" ? "0 1rem" : "2.5rem 1rem 3.5rem 1rem"};
`;

export const SectionFourTitle = styled.h2`
  text-align: center;
  font-size: 2.7rem;
  font-weight: 800;
  margin-bottom: 1.3rem;
`;

export const SectionComeBe = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: normal;
  justify-content: space-between;

  .left-side {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
    width: 20rem;
  }

  .fill-blank-fields {
    font-size: 1.3rem;
    font-weight: 600;
    line-height: 1.4rem;
  }

  .your-future {
    font-size: 1.8rem;
    font-weight: 800;
    line-height: 1.9rem;
  }
`;
