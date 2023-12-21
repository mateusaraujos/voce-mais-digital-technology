import { useState, useEffect } from "react";
import { BANNERS } from "../../data/data";
import "./Carrossel.css";

export default function Carrossel() {
  const [slideAtual, setSlideAtual] = useState(0);

  useEffect(() => {
    const intervaloId = setInterval(() => {
      setSlideAtual((slideAnterior) => (slideAnterior + 1) % BANNERS.length);
    }, 4000);

    return () => clearInterval(intervaloId);
  }, []);

  return (
    <section className="section-zero">
      <div className="no-p">
        <div className="section-carrossel">
          <div className="carousel">
            {BANNERS.map((slide, index) => (
              <div
                key={index}
                className={`slide ${
                  index === slideAtual ? "active" : "hidden"
                }`}
              >
                <div className="tamanho-banner">
                  <img
                    className="banner"
                    src={slide.imagem}
                    alt={slide.legenda}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
