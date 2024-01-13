import { useEffect, useState } from "react";
import { ScrollUpButton } from "../../resources/themes/scrollToTop";
import { ModeImage } from "../../resources/themes/themeButton";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // const rootElement = document.getElementById("root");

  // // Mostrar botão quando a página é rolada para baixo a 100vh
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > window.innerHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // Função para rolar para o topo.
  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    isVisible && (
      <ScrollUpButton onClick={scrollToTop}>
        <ModeImage src="/img/icons/arrow-up.svg" alt="Seta para cima" />
      </ScrollUpButton>
    )
  );
}
