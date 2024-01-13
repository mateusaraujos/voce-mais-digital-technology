import { useState, useEffect } from "react";
import { ThemeProvider as StyledComponentsThemeProvider } from "styled-components";

import { CustomTheme } from "../types/themeTypes";
import { ThemeContext } from "../contexts/ThemeContext";
import App from "../App";

import faviconLight from "../resources/assets/images/icons/favicon-light.ico";
import faviconDark from "../resources/assets/images/icons/favicon-dark.ico";
import { useDynamicHead } from "../hooks/useDynamicHead";

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

  const faviconStyle = theme.mode === "light" ? faviconLight : faviconDark;
  const themeColor = theme.mode === "light" ? "#3fa63b" : "#0d0d0d";

  // Modifica <head> dinamicamente
  useDynamicHead(faviconStyle, themeColor);

  return (
    <StyledComponentsThemeProvider theme={theme}>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <App />
      </ThemeContext.Provider>
    </StyledComponentsThemeProvider>
  );
}
