import { useTheme } from "../../hooks/useTheme";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button className="" onClick={toggleTheme}>
      {theme.mode === "light" ? "Escuro" : "Claro"}
    </button>
  );
}
