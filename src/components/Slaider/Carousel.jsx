import React, { useState } from 'react';
import {CarouselContainer, CarouselInner, CarouselItem, CarouselButton} from './Carousel.styled';

export const Carousel = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <CarouselContainer>
      <CarouselInner index={currentIndex}>
        {slides.map((slide, index) => (
          <CarouselItem key={index}>
            <img src={slide} alt={`Slide ${index}`} />
          </CarouselItem>
        ))}
      </CarouselInner>
      <CarouselButton onClick={goToPrevious} className="prev">❮</CarouselButton>
      <CarouselButton onClick={goToNext} className="next">❯</CarouselButton>
    </CarouselContainer>
  );
};

export default Carousel;