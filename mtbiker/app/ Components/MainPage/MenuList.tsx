"use client";

import React from "react";
import { MenuListItem } from "./MenuListItem";
import data from "../../Texts/menu_items.json";
import { MagazineFrontPage } from "./MagazineFrontPage";
import bicykle from "../../images/menuItemsImages/bicykle.png";
import komponenty from "../../images/menuItemsImages/komponenty.png";
import kolesa from "../../images/menuItemsImages/kolesa.png";
import oblecenie from "../../images/menuItemsImages/oblecenie.png";
import plaste from "../../images/menuItemsImages/plaste.png";
import servis from "../../images/menuItemsImages/servis.png";
import { BenefitCards } from "./BenefitCards";

export const MenuList = () => {
  const imagesList = [
    bicykle.src,
    komponenty.src,
    plaste.src,
    kolesa.src,
    oblecenie.src,
    servis.src,
  ];
  const menuTexts = data.texts;
  return (
    <div {...{ className: "w-full flex justify-center" }}>
      <div
        {...{
          className: "max-w-screen-xl flex justify-center mt-10 gap-10",
        }}
      >
        <MagazineFrontPage />
        <div
          {...{
            className: "flex flex-col gap-2 w-[40%] h-auto",
          }}
        >
          <div>
            <p {...{ className: "text-sm" }}>Obľúbené kategórie v shope</p>
          </div>
          <div
            {...{
              className: "grid grid-cols-2 gap-5",
            }}
          >
            {menuTexts.map((menu, i) => (
              <MenuListItem {...{ label: menu.text, src: imagesList[i] }} />
            ))}
          </div>
          <button
            {...{
              className: "btn bg-orange-400 text-white hover:bg-orange-500",
            }}
          >
            Zobraziť celý sortiment
          </button>

          <div {...{ className: "flex flex-col gap-3 w-[100%]" }}>
            <BenefitCards />
          </div>
        </div>
      </div>
    </div>
  );
};
