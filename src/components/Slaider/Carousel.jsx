import {Carousell, CarouselInner, CarouselItem, CarouselImg, CarouselButton1, CarouselButton2} from "./Carousel.styled"

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
    <Carousell>
      <CarouselInner style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {slides.map((slide, index) => (
          <CarouselItem key={index}>
            <CarouselImg src={slide} alt={`Slide ${index}`} />
          </CarouselItem>
        ))}
      </CarouselInner>
      <CarouselButton1 onClick={goToPrevious} className="carousel-button prev">Previous</CarouselButton1>
      <CarouselButton2 onClick={goToNext} className="carousel-button next">Next</CarouselButton2>
    </Carousell>
  );
};

