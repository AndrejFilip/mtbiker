import Link from "next/link";
import React from "react";
import { getPurchaseItems } from "../../Texts/getPurchaseItems";

export const PurchaseItems = () => {
  const texts = getPurchaseItems().items;
  return (
    <div {...{ className: "flex flex-col gap-3" }}>
      <div>
        <p {...{ className: "text-sm text-gray-600 font-bold" }}>NÁKUP</p>
      </div>
      <div {...{ className: "flex flex-col gap-2" }}>
        {texts.map((item) => (
          <p {...{ className: "text-sm" }}>{item.name}</p>
        ))}
      </div>
    </div>
  );
};
