import { useState, useEffect } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { CarouselProps } from "../../types/appTypes";

import "./Carrossel.css";

export default function Carrossel({ images }: CarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 4000);

    return () => clearInterval(intervalId);
  }, [images]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    arrows: false,
    beforeChange: (_current: number, next: number) => setCurrentSlide(next),
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
            <div className="section-carousel">
              <div className="banner-size">
                <img
                  className="banner"
                  src={image}
                  alt={`Carousel image ${index + 1}`}
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}
