import React from "react";
import shimano from "../../images/partners/shimano.png";
import maxxis from "../../images/partners/maxxis.png";
import sram from "../../images/partners/sram.png";
import castelli from "../../images/partners/castelli.png";
import sportful from "../../images/partners/sportful.png";
import ctm from "../../images/partners/ctm.png";
import sis from "../../images/partners/sis.png";

export const HorizontalAutomaticScrollBar = () => {
  return (
    <div
      {...{
        id: "scroll",
        className:
          "flex flex-row items-center flex-nowrap overflow-hidden w-full h-[70px] bg-base-200 [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)] mt-2",
      }}
    >
      <div>
        <ul
          {...{
            className:
              "flex flex-row justify-center items-center animate-infinite-scroll space-x-15 md:justify-start [&_li]:mx-8 [&_img]:max-w-[150px]",
          }}
        >
          <li>
            <img {...{ src: shimano.src, alt: "images" }} />
          </li>
          <li>
            <img {...{ src: maxxis.src, alt: "images" }} />
          </li>
          <li>
            <img {...{ src: sram.src, alt: "images" }} />
          </li>
          <li>
            <img {...{ src: castelli.src, alt: "images" }} />
          </li>
          <li>
            <img {...{ src: ctm.src, alt: "images" }} />
          </li>
          <li>
            <img {...{ src: sportful.src, alt: "images" }} />
          </li>
          <li>
            <img {...{ src: sis.src, alt: "images" }} />
          </li>
        </ul>
      </div>

      <div {...{ className: "w-full bg-base-200", "aria-hidden": true }}>
        <ul
          {...{
            className:
              "flex flex-row justify-center items-center animate-infinite-scroll space-x-15 md:justify-start [&_li]:mx-8 [&_img]:max-w-[150px]",
          }}
        >
          <li>
            <img {...{ src: shimano.src, alt: "images" }} />
          </li>
          <li>
            <img {...{ src: maxxis.src, alt: "images" }} />
          </li>
          <li>
            <img {...{ src: sram.src, alt: "images" }} />
          </li>
          <li>
            <img {...{ src: castelli.src, alt: "images" }} />
          </li>
          <li>
            <img {...{ src: ctm.src, alt: "images" }} />
          </li>
          <li>
            <img {...{ src: sportful.src, alt: "images" }} />
          </li>
          <li>
            <img {...{ src: sis.src, alt: "images" }} />
          </li>
        </ul>
      </div>
    </div>
  );
};
