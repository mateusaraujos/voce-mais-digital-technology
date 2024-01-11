import { useTheme } from "../../hooks/useTheme";
import { ModeImage, ThemeButton } from "../../resources/themes/themeButton";

import imgLightMode from "../../resources/assets/images/icons/light_mode.svg";
import imgDarkMode from "../../resources/assets/images/icons/dark_mode.svg";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <ThemeButton onClick={toggleTheme}>
      <ModeImage
        src={theme.mode === "light" ? imgDarkMode : imgLightMode}
        alt="Mode"
      />
    </ThemeButton>
  );
}
