import React, { useState, useEffect } from "react";

import { SliderContainer, SlideImage, Dot, DotsWrapper } from "./styles";

const DUMMY_IMAGES = [
  { id: 1, src: "caminho-imagem-1.jpg", alt: " " },
  { id: 2, src: "caminho-imagem-2.jpg", alt: " " },
  { id: 3, src: "caminho-imagem-3.jpg", alt: " " },
];

const ImageSlider = ({ images = DUMMY_IMAGES, interval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <SliderContainer>
      {images.map((image, index) => (
        <SlideImage
          key={image.id}
          src={image.src}
          alt={image.alt}
          $active={index === currentIndex}
        />
      ))}

      <DotsWrapper>
        {images.map((_, index) => (
          <Dot
            key={index}
            $active={index === currentIndex}
            onClick={() => goToSlide(index)}
          />
        ))}
      </DotsWrapper>
    </SliderContainer>
  );
};

export default ImageSlider;
