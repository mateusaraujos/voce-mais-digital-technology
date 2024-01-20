import { DefaultTheme } from "styled-components";

export interface CustomTheme extends DefaultTheme {
  mode: "light" | "dark";
}

export interface ThemeContextProps {
  theme: CustomTheme;
  toggleTheme: () => void;
}
