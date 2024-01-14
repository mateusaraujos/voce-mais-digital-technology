import { useTheme } from "../../hooks/useTheme";
import { ModeImage, ThemeButton } from "../../styles/themeButton";

import imgLightMode from "../../assets/images/icons/light_mode.svg";
import imgDarkMode from "../../assets/images/icons/dark_mode.svg";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <ThemeButton onClick={toggleTheme}>
      <ModeImage
        src={theme.mode === "light" ? imgDarkMode : imgLightMode}
        alt={theme.mode === "light" ? "Modo Escuro" : "Modo Claro"}
      />
    </ThemeButton>
  );
}
