import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes/AppRouter";
import initialLogo from "./assets/img/logo-inicial.png";

export default function App() {
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setCarregando(false);
    }, 2000);
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