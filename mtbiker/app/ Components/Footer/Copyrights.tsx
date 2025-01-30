import React from "react";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";

export const Copyrights = () => {
  return (
    <div>
      <div {...{ className: "divider w-full" }} />
      <div {...{ className: "flex flex-row p-8" }}>
        <div
          {...{
            className: "flex  w-[40%] flex flex-row items-center",
          }}
        >
          <Link
            {...{
              href: "https://www.mthiker.sk",
            }}
          >
            <p {...{ className: " text-sm font-bold text-black" }}>
              Navštív aj MTHIKER
            </p>
          </Link>
        </div>
        <div
          {...{
            className: "flex flex-row gap-5 w-[60%] items-center justify-end",
          }}
        >
          <div {...{ className: "flex flex-row gap-5" }}>
            <FaFacebook />
            <FaInstagram />
            <FaYoutube />
            <AiFillTikTok />
          </div>
          <div {...{ className: "flex flex-row justify-end gap-5" }}>
            <div>
              <p {...{ className: "text-sm" }}>Všeobecné podmienky</p>
            </div>
            <div>
              <p {...{ className: "text-sm" }}>Ochrana súkromia</p>
            </div>
            <div>
              <p {...{ className: "text-sm" }}>
                © 1998 - 2025 MTBIKER.shop s.r.o.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
