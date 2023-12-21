import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carrossel.css";

export default function Carrossel({ images }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 4000);

    return () => clearInterval(intervalId);
  }, [images]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    beforeChange: (current, next) => setCurrentSlide(next),
  };

  return (
    <section className="section-zero">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-slide ${
              index === currentSlide ? "active" : ""
            }`}
          >
            <div className="section-carrossel">
              <div className="tamanho-banner">
                <img
                  className="banner"
                  src={image}
                  alt={`Slide ${index + 1}`}
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
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};
