import { useState, useEffect } from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import CustomPoints from "../CustomPoints/CustomPoints";
import { useTheme } from "../../hooks/useTheme";
import { CarouselProps } from "../../types/appTypes";
import {
  Banner,
  BannerSize,
  CarouselSection,
  SectionCarousel,
} from "../../styles/carousel";

export default function Carousel({ images }: CarouselProps) {
  const { theme } = useTheme();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 4000);

    return () => clearInterval(intervalId);
  }, [images]);

  const settings: Settings = {
    accessibility: true,
    dots: true,
    appendDots: (dots) => <CustomPoints dots={dots} />,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    arrows: false,
    beforeChange: (_current: number, next: number) => setCurrentSlide(next),
  };

  return (
    <CarouselSection theme={theme} className="section-zero">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-slide ${
              index === currentSlide ? "active" : ""
            }`}
          >
            <SectionCarousel className="section-carousel">
              <BannerSize className="banner-size">
                <Banner
                  className="banner"
                  src={image}
                  alt={`Carousel image ${index + 1}`}
                />
              </BannerSize>
            </SectionCarousel>
          </div>
        ))}
      </Slider>
    </CarouselSection>
  );
}
