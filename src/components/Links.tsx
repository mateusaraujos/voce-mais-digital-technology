import styled from "styled-components";

import { HeaderLink } from "../types/appTypes";
import { CustomTheme } from "../types/themeTypes";
import { useTheme } from "../hooks/useTheme";

const HeaderLinks = styled.a<{ theme: CustomTheme }>`
  color: ${(props) =>
    props.theme.mode === "light"
      ? "var(--primary-dark)"
      : "var(--primary-white)"};

  border-radius: 4px;
  padding: 2px 10px;

  border: ${(props) =>
    props.theme.mode === "light"
      ? "1px solid var(--dark-green)"
      : "1px solid var(--light-green)"};

  &::before {
    border-radius: 4px;
    background-color: ${(props) =>
      props.theme.mode === "light"
        ? "var(--dark-green)"
        : "var(--light-green)"};
  }
`;

export default function Links({ url, text }: HeaderLink) {
  const { theme } = useTheme();

  return (
    <li>
      <HeaderLinks theme={theme} className="page-links" href={url}>
        {text}
      </HeaderLinks>
    </li>
  );
}
