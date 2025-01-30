import Link from "next/link";
import React, { useEffect } from "react";
import {
  FaArrowRight,
  FaFacebook,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

type carouselProps = {
  header: string;
  body: string;
  imageSrc: string;
  id: string;
  carouselPosition: number;
  setCarouselPosition(position: number): void;
};

export const CarouselItem: React.FC<carouselProps> = ({
  header,
  body,
  imageSrc,
  id,
  carouselPosition,
  setCarouselPosition,
}) => {
  if (carouselPosition > 3) {
    carouselPosition = 0;
  }

  const swipeCarousel = () => {
    setCarouselPosition(carouselPosition + 1);
    document
      .getElementById(`slide${carouselPosition}`)
      ?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  };

  return (
    <div
      {...{
        id: id,
        className: "carousel-item w-full relative",
      }}
    >
      <div {...{ className: "flex justify-row w-full h-[450px]" }}>
        <div {...{ className: "w-[40%] bg-zinc-800 flex justify-center" }}>
          <div
            {...{
              className: "w-[80%] flex flex-col items-start gap-5 p-9 mt-9",
            }}
          >
            <p {...{ className: "text-white text-2xl font-bold" }}>{header}</p>
            <p {...{ className: "text-white text-sm w-[100%]" }}>{body}</p>
            <p {...{ className: "text-white text-md" }}>SLEDUJ NÁS</p>
            <div {...{ className: "flex flex-row gap-4" }}>
              <div>
                <Link
                  {...{
                    href: "https://www.facebook.com/mtbiker.sk",
                    className: "btn btn-circle",
                  }}
                >
                  <FaFacebook
                    {...{
                      className: "bg-white w-[30px] h-[30px]",
                    }}
                  />
                </Link>
              </div>
              <div>
                <Link
                  {...{
                    href: "https://www.instagram.com/mtbiker_sk/",
                    className: "btn btn-circle",
                  }}
                >
                  <FaInstagram
                    {...{ className: "bg-white w-[30px] h-[30px]" }}
                  />
                </Link>
              </div>
              <div>
                <Link
                  {...{
                    href: "https://www.youtube.com/user/MTBikersk/videos",
                    className: "btn btn-circle",
                  }}
                >
                  <FaYoutube {...{ className: "bg-white w-[30px] h-[30px]" }} />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div {...{ className: "w-[60%] overflow-y-hidden" }}>
          <img {...{ src: imageSrc, className: "w-full h-[100%]" }}></img>
        </div>
      </div>
      <div
        {...{
          className: "absolute right-5 top-1/2 flex",
        }}
      >
        <div {...{ className: "flex justify-center items-center" }}>
          <button
            {...{
              type: "button",
              className:
                "btn btn-circle bg-orange-400 relative hover:bg-orange-500 border-0",
              onClick: () => swipeCarousel(),
            }}
          >
            <FaArrowRight {...{ className: "text-white" }} />
          </button>
          f
        </div>
      </div>
    </div>
  );
};
