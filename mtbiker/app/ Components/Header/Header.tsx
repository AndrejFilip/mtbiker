"use client";

import React from "react";
import mtbiker from "../../images/mtbiker.png";
import { MenuButtons } from "./MenuButtons";
import { NotificationsButton } from "./NotificationsButton";

import { WeatherButton } from "./WeatherButton";
import { Dropdown } from "../MainPage/Dropdown";
import Link from "next/link";

export const Header = () => {
  const isUserLogged = localStorage.getItem("logged") === "true";
  console.log(isUserLogged);
  return (
    <div
      {...{
        className: "bg-white w-full h-[75px] flex flex-row",
      }}
    >
      <div {...{ className: "flex justify-start gap-5 w-2/5" }}>
        <Link {...{ href: "/" }}>
          <img
            {...{
              alt: "Logo",
              src: mtbiker.src,
              className: "w-[75px] h-[75px]",
            }}
          ></img>
        </Link>
        <MenuButtons />
      </div>
      <div
        {...{
          className: "flex items-center space-x-2 w-3/5 justify-end mr-2",
        }}
      >
        <WeatherButton />
        {isUserLogged ? (
          <>
            <NotificationsButton />
            <Dropdown />
          </>
        ) : (
          <div>
            <span
              {...{
                className:
                  "text-orange-400 hover:underline hover:text-orange-500 cursor-pointer",
              }}
            >
              Prihlásiť sa
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
