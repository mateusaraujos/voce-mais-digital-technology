import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";

import AppRouter from "./routes/AppRouter";
import { useTheme } from "./hooks/useTheme";
import { HomeScreen, InitialLogo } from "./resources/themes/app";

import initialLogo from "../src/resources/assets/images/logo-inicial.png";
import darkInitialLogo from "../src/resources/assets/images/dark-logo-inicial.png";

export default function App() {
  const { theme } = useTheme();
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setCarregando(false);
    }, 1500);
  }, []);

  if (carregando) {
    return (
      <HomeScreen className="position-fixed">
        <InitialLogo
          className="img-fluid"
          src={theme.mode === "light" ? initialLogo : darkInitialLogo}
          alt="Você + Digital Technology"
          draggable="false"
        />
      </HomeScreen>
    );
  }

  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}
