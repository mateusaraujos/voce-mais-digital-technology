import styled from "styled-components";

import { CustomTheme } from "../../types/themeTypes";

export const SealArticle = styled.article<{ theme: CustomTheme }>`
  color: var(--primary-black);
  background-color: ${(props) =>
    props.theme.mode === "light"
      ? "var(--light-green)"
      : "var(--primary-orange)"};
`;
