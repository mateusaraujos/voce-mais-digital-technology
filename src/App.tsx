import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes/AppRouter";
import initialLogo from "../src/resources/assets/images/logo-inicial.png";

export default function App() {
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setCarregando(false);
    }, 1500);
  }, []);

  if (carregando) {
    return (
      <div className="position-fixed">
        <img
          className="img-fluid"
          src={initialLogo}
          alt="Você + Digital Technology"
          draggable="false"
        />
      </div>
    );
  }

  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}
