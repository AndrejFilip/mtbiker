import Link from "next/link";
import React from "react";
import { getMtbikerShops } from "../../Texts/getMtbikerShops";
import { MtbikerShopItem } from "./MtbikerShopItem";

export const MtbikerShops = () => {
  const shops = getMtbikerShops().items;
  return (
    <div {...{ className: "flex flex-col gap-3" }}>
      <div>
        <p {...{ className: "text-sm text-gray-600 font-bold" }}>
          MTBIKER PREDAJŇE
        </p>
      </div>

      {shops.map((shop) => (
        <MtbikerShopItem
          {...{ name: shop.name, key: shop.name, address: shop.address }}
        />
      ))}
    </div>
  );
};
