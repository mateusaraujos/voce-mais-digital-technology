import { createContext } from "react";

import { ThemeContextProps } from "../types/themeTypes";

export const ThemeContext = createContext<ThemeContextProps | undefined>(
  undefined
);
