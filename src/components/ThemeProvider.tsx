import { useState, useEffect } from "react";
import { ThemeProvider as StyledComponentsThemeProvider } from "styled-components";

import { CustomTheme, ThemeProviderProps } from "../types/themeTypes";
import { ThemeContext } from "../contexts/ThemeContext";

export default function ThemeProvider({ children }: ThemeProviderProps) {
  const prefersDarkTheme = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;

  const [theme, setTheme] = useState<CustomTheme>({
    mode: prefersDarkTheme ? "dark" : "light",
  });

  const toggleTheme = () => {
    setTheme((prevTheme) => ({
      ...prevTheme,
      mode: prevTheme.mode === "light" ? "dark" : "light",
    }));
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = () => {
      setTheme((prevTheme) => ({
        ...prevTheme,
        mode: mediaQuery.matches ? "dark" : "light",
      }));
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  return (
    <StyledComponentsThemeProvider theme={theme}>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    </StyledComponentsThemeProvider>
  );
}
