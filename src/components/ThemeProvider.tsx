import { useState, useEffect } from "react";
import { ThemeProvider as StyledComponentsThemeProvider } from "styled-components";

import { CustomTheme } from "../types/themeTypes";
import { ThemeContext } from "../contexts/ThemeContext";
import App from "../App";

export default function ThemeProvider() {
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
        <App />
      </ThemeContext.Provider>
    </StyledComponentsThemeProvider>
  );
}
