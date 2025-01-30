import React from "react";
import magazine_front_page from "../../images/magazine_front_page.png";
import data from "../../Texts/magazine_small_pages.json";
import { MagazineFrontSmallPage } from "./MagazineFrontSmallPage";
import first from "../../images/frontSmallImages/first.png";
import second from "../../images/frontSmallImages/second.png";
import Link from "next/link";

export const MagazineFrontPage = () => {
  const magazineTexts = data.texts;
  const imagesSrc = [first.src, second.src];
  return (
    <div {...{ className: "w-[60%] flex flex-col gap-2" }}>
      <p {...{ className: "text-sm" }}>Najnovšie články z magazínu</p>
      <div>
        <img
          {...{
            src: magazine_front_page.src,
            className: "w-full h-[100%]",
            alt: "magazine",
          }}
        />
      </div>
      <div>
        <p
          {...{
            className: "text-lg font-bold font-family hover:text-orange-400",
          }}
        >
          <Link
            {...{
              href: "https://www.mtbiker.sk/clanky/129186/sam-sebe-trenerom-z-0-na-10-hodin-tyzdenne.html",
            }}
          >
            Amatérsky tréning: svoj plán som vystaval na disciplíne a tepovej
            frekvencii
          </Link>
        </p>

        <p {...{ className: "text-sm text-base-0" }}>
          Amatér a štruktúrovaný tréning – ako môže vyzerať tréningový plán a čo
          to všetko obnáša?
        </p>
      </div>
      <div {...{ className: "grid grid-cols-2 gap-2" }}>
        {magazineTexts.map((item, i) => (
          <MagazineFrontSmallPage
            {...{ src: imagesSrc[i], header: item.header, text: item.text }}
          />
        ))}
      </div>
    </div>
  );
};
