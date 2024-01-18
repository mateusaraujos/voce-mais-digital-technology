import styled from "styled-components";

import { CustomTheme } from "../types/themeTypes";

export const SealArticle = styled.article<{ theme: CustomTheme }>`
  width: 100%;
  background-color: #00ff83;
  padding: 0.5rem;
  margin-top: 1.5rem;
  color: ${(props) =>
    props.theme.mode === "light"
      ? "var(--primary-black)"
      : "var(--primary-white)"};
  background-color: ${(props) =>
    props.theme.mode === "light"
      ? "var(--light-green)"
      : "var(--primary-orange)"};

  .center-article {
    max-width: 60rem;
    margin: 0 auto;
  }

  .article-commitment {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    p {
      font-size: 1.2rem;
    }
  }
`;

export const Stamp = styled.img`
  user-select: none;
  height: 4.5rem;
  width: auto;
  margin-right: 0.5rem;
  border-radius: 50%;
  pointer-events: none;
`;
