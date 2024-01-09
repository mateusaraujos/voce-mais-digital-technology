import { useState } from "react";
import { ThemeProvider as StyledComponentsThemeProvider } from "styled-components";

import { CustomTheme, ThemeProviderProps } from "../types/themeTypes";
import { ThemeContext } from "../contexts/ThemeContext";

export default function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<CustomTheme>({
    mode: "light",
  });

  const toggleTheme = () => {
    setTheme((prevTheme) => ({
      ...prevTheme,
      mode: prevTheme.mode === "light" ? "dark" : "light",
    }));
  };

  return (
    <StyledComponentsThemeProvider theme={theme}>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    </StyledComponentsThemeProvider>
  );
}
