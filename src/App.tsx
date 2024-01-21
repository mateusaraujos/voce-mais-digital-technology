import { useEffect, useState } from "react";

import AppRouter from "./routes/AppRouter";
import { useTheme } from "./hooks/useTheme";
import { HomeScreen, InitialLogo } from "./styles/app";

import initialLogo from "../src/assets/images/logo-inicial.png";
import darkInitialLogo from "../src/assets/images/dark-logo-inicial.png";

export default function App() {
  const { theme } = useTheme();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
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

  return <AppRouter />;
}
