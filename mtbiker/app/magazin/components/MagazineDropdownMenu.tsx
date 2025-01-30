import React from "react";
import { MagazineDropdowmMenuItem } from "./MagazineDropdowmMenuItem";

import { getMagazineDropdownMenuItems } from "../Texts/getMagazineDropdownMenuItems";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";

export const MagazineDropdownMenu = ({
  setSelectedItem,
}: {
  setSelectedItem: (item: string) => void;
}) => {
  const magazineDropdownItems = getMagazineDropdownMenuItems().items;
  return (
    <div {...{ className: "w-full" }}>
      <ul>
        {magazineDropdownItems.map((item) => (
          <MagazineDropdowmMenuItem
            {...{
              name: item.name,
              key: item.id,
              onClick: () => setSelectedItem(item.key),
              value: item.key,
            }}
          />
        ))}

        <div
          {...{
            className:
              "flex flex-row max-w-md h-[50px] border border-gray-300 mb-[-1px] p-5",
          }}
        >
          <div
            {...{
              className:
                "flex flex-row justify-start items-center w-[80%] gap-2",
            }}
          >
            <img
              {...{
                src: "https://includes.mtbiker.sk/images/shop/outdoor-icon.svg",
                alt: "icon",
              }}
            />
            <li {...{ className: "text-sm font-sans" }}>
              <Link
                {...{
                  href: "https://www.mthiker.sk/clanky?gclid=CjwKCAiA6t-6BhA3EiwAltRFGKE5CDm31451yUDuFsI-1Y9PfbYCsuvb5ASK90eV3tH8kyfKe3JaiBoCh_gQAvD_BwE",
                }}
              >
                MTHIKER outdoor magazín
              </Link>
            </li>
          </div>
          <div {...{ className: "flex justify-end items-center w-[20%]" }}>
            <IoIosArrowForward
              {...{ className: "w-[15px] h-[15px] text-orange-400" }}
            />
          </div>
        </div>
        <div
          {...{
            className:
              "flex flex-row min-w-max h-[50px] border-gray-300 border border-gray-300 mb-[-1px] p-5",
          }}
        >
          <div
            {...{
              className:
                "flex flex-row justify-start items-center w-[80%] gap-2",
            }}
          >
            <img
              {...{
                src: "https://includes.mtbiker.sk/images/icon-youtube-color.svg",
                alt: "icon",
              }}
            />
            <li {...{ className: "text-sm font-sans" }}>
              <Link {...{ href: "https://www.mtbiker.sk/clanky/youtube" }}>
                MTBIKER YouTube videá
              </Link>
            </li>
          </div>
          <div {...{ className: "flex justify-end items-center w-[20%]" }}>
            <IoIosArrowForward
              {...{ className: "w-[15px] h-[15px] text-orange-400" }}
            />
          </div>
        </div>
      </ul>
    </div>
  );
};
