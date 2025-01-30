import React from "react";
import { FaStar } from "react-icons/fa";

export const Awards = () => {
  return (
    <div {...{ className: "flex flex-col gap-5" }}>
      <div>
        <img
          {...{
            src: "https://includes.mtbiker.sk/images/heureka-badge.png",
            alt: "heureka",
            className: "w-[60%]",
          }}
        />
      </div>
      <div
        {...{
          className: "flex flex-row gap-2 justify-start items-center",
        }}
      >
        <p {...{ className: "text-sm" }}>Google recenzie</p>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <p {...{ className: "text-sm" }}>4.9/5</p>
      </div>
      <div>
        <img
          {...{
            src: "https://includes.mtbiker.sk/images/shop_roku_2023.png?v=2",
            alt: "best",
            className: "w-[60%]",
          }}
        />
      </div>
      <div>
        <img
          {...{
            src: "https://includes.mtbiker.sk/images/shop_roku_2023_vitaz.png",
            alt: "best",
            className: "w-[60%]",
          }}
        />
      </div>
      <div {...{ className: "flex flex-row gap-3 " }}>
        <img
          {...{
            src: "https://includes.mtbiker.sk/images/icons-shop/logo-visa.png?v=2",
            alt: "visa",
            className: "w-[52px] h-[33]",
          }}
        />
        <img
          {...{
            src: "https://includes.mtbiker.sk/images/icons-shop/logo-mc.png?v=2",
            alt: "mc",
            className: "w-[52px] h-[33]",
          }}
        />
        <img
          {...{
            src: "https://includes.mtbiker.sk/images/icons-shop/logo-apple-pay.png",
            alt: "apple",
            className: "w-[52px] h-[33]",
          }}
        />
        <img
          {...{
            src: "https://includes.mtbiker.sk/images/icons-shop/logo-google-pay.png",
            alt: "google",
            className: "w-[52px] h-[33]",
          }}
        />
      </div>
    </div>
  );
};
