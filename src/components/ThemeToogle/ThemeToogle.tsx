import React from "react";
import { useTheme } from "../../contexts/ThemeContext";

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button className="" onClick={toggleTheme}>
      {theme.mode === "light" ? "Modo Escuro" : "Modo Claro"}
    </button>
  );
};

export default ThemeToggle;
