import React from "react";
import { FaHouse } from "react-icons/fa6";

export const MtbikerShopItem = ({
  name,
  address,
}: {
  name: string;
  address: string;
}) => {
  return (
    <div>
      <div {...{ className: "flex flex-row gap-2 p-1" }}>
        <div {...{ className: "flex items-center" }}>
          <FaHouse />
        </div>
        <div {...{ className: "flex flex-col gap-1" }}>
          <div>
            <p {...{ className: "text-sm text-bold" }}>{name}</p>
          </div>
          <div>
            <p {...{ className: "text-xs text-gray-500" }}>{address}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
