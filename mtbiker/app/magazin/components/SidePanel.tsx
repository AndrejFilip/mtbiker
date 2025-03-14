import React from "react";
import { MagazineDropdownMenu } from "./MagazineDropdownMenu";
import Link from "next/link";
import { MagazineArticleItemProps } from "@/app/types";

export const SidePanel = ({
  setSelectedItem,
  articles,
}: {
  setSelectedItem: (item: string) => void;
  articles: MagazineArticleItemProps[];
}) => {
  return (
    <div {...{ className: "max-w-xs" }}>
      <div {...{ className: "flex flex-col gap-3 " }}>
        <div>
          <p {...{ className: "text-md font-extrabold font-sans" }}>
            Obľúbené kategórie
          </p>
        </div>
        <div>
          <MagazineDropdownMenu {...{ setSelectedItem }} />
        </div>

        <div
          {...{
            className:
              "p-5 w-full border border-gray-300 border-t-4 border-t-orange-400",
          }}
        >
          <div {...{ className: "flex flex-col gap-2" }}>
            <p {...{ className: "text-md font-extrabold font-sans" }}>
              Najčítanejšie za 30 dní
            </p>
            {articles?.slice(0, 5).map((article) => (
              <div {...{ className: "flex flew-row gap-2" }}>
                <span
                  {...{ className: "font-extrabold text-md text-orange-400" }}
                >
                  {article.id}.
                </span>
                <span
                  {...{
                    className:
                      "font-sans text-sm hover:text-orange-400 hover:underline cursor-pointer",
                  }}
                >
                  {article.header}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div
          {...{
            className: "tooltip",
            "data-tip": "Pridávanie článkov už čoskoro!",
          }}
        >
          <button
            {...{
              className:
                "btn rounded-none bg-orange-400 text-white font-bold text-s w-full hover:bg-orange-500",
            }}
          >
            + Chcem pridať článok
          </button>
        </div>
        <div {...{ className: "pl-5 pt-5 bg-base-200 flex flex-col gap-5" }}>
          <div>
            <span {...{ className: "text-md font-extrabold font-sans" }}>
              MTHIKER outdoor magazín
            </span>
          </div>
          <div {...{ className: "flex flex-row gap-5" }}>
            <div {...{ className: "flex flex-col gap-3" }}>
              <span {...{ className: "text-sm font-sans" }}>
                Nový rozmer outdoorovej platformy
              </span>
              <Link
                {...{
                  href: "https://www.mthiker.sk/clanky?gclid=CjwKCAiA6t-6BhA3EiwAltRFGKE5CDm31451yUDuFsI-1Y9PfbYCsuvb5ASK90eV3tH8kyfKe3JaiBoCh_gQAvD_BwE",
                }}
              >
                <span
                  {...{
                    className:
                      "text-sm font-sans font-bold text-orange-400 hover:text-orange-500 hover:underline cursor-pointer",
                  }}
                >
                  Zobraziť viac
                </span>
              </Link>
            </div>
            <img
              {...{
                src: "https://includes.mtbiker.sk/images/magazin/mthiker.svg",
                className: "w-[100px] h-[100px] pb-7 mr-2",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
