import React from "react";
import data from "../../Texts/menu_items.json";
import Link from "next/link";

export const BikeProductsFooter = () => {
  const texts = data.texts;
  return (
    <div {...{ className: "flex flex-col gap-3" }}>
      <div>
        <p {...{ className: "text-sm text-gray-600 font-bold" }}>
          BIKE PRODUKTY
        </p>
      </div>

      <div {...{ className: "flex flex-col gap-2" }}>
        {texts.map((item) => (
          <p {...{ className: "text-sm" }}>{item.text}</p>
        ))}
      </div>
    </div>
  );
};
