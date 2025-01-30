import React from "react";
import mthiker from "../../images/mthiker.png";

import Link from "next/link";

export const MenuButtons = () => {
  return (
    <div {...{ className: "flex flew-row items-center gap-4 " }}>
      <Link
        {...{
          className: "bg-white hover:text-orange-400",
          href: "/magazin",
        }}
      >
        E-shop
      </Link>
      <Link
        {...{
          className: "bg-white hover:text-orange-400",
          href: "/magazin",
        }}
      >
        Magazín
      </Link>
      <Link
        {...{ className: "bg-white hover:text-orange-400", href: "/magazin" }}
      >
        Bazár
      </Link>
      <Link
        {...{
          className: " bg-white hover:text-orange-400",
          href: "/magazin",
        }}
      >
        Komunita
      </Link>

      <img
        {...{
          alt: "mthiker",
          src: mthiker.src,
          className: "w-[40px] h-[40px]",
        }}
      ></img>
    </div>
  );
};
