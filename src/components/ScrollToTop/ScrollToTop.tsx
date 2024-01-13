import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const rootElement = document.getElementById("root");

  // Mostrar botão quando a página é rolada para baixo a 100vh
  useEffect(() => {
    if (rootElement) {
      const toggleVisibility = () => {
        if (rootElement.scrollTop > window.innerHeight) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };

      rootElement.addEventListener("scroll", toggleVisibility);

      return () => {
        rootElement.removeEventListener("scroll", toggleVisibility);
      };
    }
  }, [rootElement]);

  // Função para rolar para o topo.
  const scrollToTop = () => {
    if (rootElement) {
      rootElement.scroll({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        style={{ position: "fixed", bottom: "20px", right: "20px" }}
      >
        Voltar ao topo
      </button>
    )
  );
}
