import React from "react";
import { IoIosArrowForward } from "react-icons/io";

export const MagazineDropdowmMenuItem = ({
  name,
  onClick,
  value,
}: {
  name: string;
  onClick: () => void;
  value: string;
}) => {
  return (
    <div
      {...{
        className:
          "flex flex-row min-w-max h-[50px] border-gray-300 border border-gray-300 mb-[-1px] p-5 cursor-pointer hover:bg-gray-100",
        onClick,
        value,
      }}
    >
      <div {...{ className: "flex justify-start items-center w-[80%] gap-2" }}>
        <li
          {...{
            className: "text-sm font-sans ",
          }}
        >
          {name}
        </li>
      </div>
      <div {...{ className: "flex justify-end items-center w-[20%]" }}>
        <IoIosArrowForward
          {...{ className: "w-[15px] h-[15px] text-orange-400" }}
        />
      </div>
    </div>
  );
};
