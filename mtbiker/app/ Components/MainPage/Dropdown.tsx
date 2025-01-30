import React from "react";
import { CiUser } from "react-icons/ci";
import { DropdownMenuitem } from "./DropdownMenuitem";

export const dropdownMenuItems = [
  {
    name: "Môj profil",
    page: "magazin",
  },
  {
    name: "Nastavenia",
    page: "nastavenia",
  },
];
export const Dropdown = () => {
  return (
    <div {...{ className: "dropdown dropdown-end" }}>
      <CiUser
        {...{
          type: "button",
          className: "w-[30px] h-[30px] cursor-pointer",
          tabIndex: 0,
        }}
      />
      <ul
        {...{
          className: "dropdown-content menu z-[1] w-52 p-2",
          tabIndex: 0,
        }}
      >
        {dropdownMenuItems.map((item) => (
          <DropdownMenuitem {...{ name: item.name, page: item.page }} />
        ))}
      </ul>
    </div>
  );
};
