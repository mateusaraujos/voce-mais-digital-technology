import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carrossel.css";

export default function Carrossel({ imagens }) {
  const [slideAtual, setSlideAtual] = useState(0);

  useEffect(() => {
    const intervaloId = setInterval(() => {
      setSlideAtual((slideAnterior) => (slideAnterior + 1) % imagens.length);
    }, 4000);

    return () => clearInterval(intervaloId);
  }, [imagens]);

  const montagem = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    beforeChange: (_current, next) => setSlideAtual(next),
  };

  return (
    <section className="section-zero">
      <Slider {...montagem}>
        {imagens.map((imagem, index) => (
          <div
            key={index}
            className={`carousel-slide ${index === slideAtual ? "active" : ""}`}
          >
            <div className="section-carrossel">
              <div className="tamanho-banner">
                <img
                  className="banner"
                  src={imagem}
                  alt={`Imagem Carrossel ${index + 1}`}
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}

Carrossel.propTypes = {
  imagens: PropTypes.arrayOf(PropTypes.string).isRequired,
};
