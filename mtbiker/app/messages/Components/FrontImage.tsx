"use client";

import React from "react";
import { useTranslation } from "react-i18next";

export const FrontImage = () => {
  const { t } = useTranslation();
  return (
    <div {...{ className: "relative" }}>
      <img
        {...{
          src: "https://includes.mtbiker.sk/images/magazin/magazin-cover.jpg?1657533031",
          alt: "front image",
          className: "w-full h-[250px] ",
        }}
      />
      <div
        {...{
          className: "absolute top-[100px] w-full",
        }}
      >
        <div {...{ className: "flex flex-col items-center" }}>
          <p {...{ className: "text-5xl text-white font-extrabold" }}>
            {t("conversations.frontImage")}
          </p>
        </div>
      </div>
    </div>
  );
};
