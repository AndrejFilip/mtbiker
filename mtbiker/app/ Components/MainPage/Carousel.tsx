import React, { useEffect, useState } from "react";
import { CarouselItem } from "./CarouselItem";
import { getCarousel } from "../../Texts/getCarousel";

const data = getCarousel().carousel;
export const Carousel = () => {
  const [carouselPosition, setCarouselPosition] = useState(1);
  return (
    <div
      {...{
        className: "carousel w-full scroll-smooth",
        id: "carousel",
      }}
    >
      {data.map((carousel) => (
        <CarouselItem
          {...{
            key: carousel.id,
            header: carousel.header,
            body: carousel.body,
            id: carousel.id,
            imageSrc: carousel.imageSrc,
            carouselPosition,
            setCarouselPosition,
          }}
        />
      ))}
    </div>
  );
};
