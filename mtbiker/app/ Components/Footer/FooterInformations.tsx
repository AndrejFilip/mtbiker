import React from "react";
import { Awards } from "./Awards";
import { BikeProductsFooter } from "./BikeProductsFooter";
import { PurchaseItems } from "./PurchaseItems";
import { ContactsFooter } from "./ContactsFooter";
import { MtbikerShops } from "./MtbikerShops";
import { Copyrights } from "./Copyrights";

export const FooterInformations = () => {
  return (
    <div>
      <div {...{ className: "w-full flex justify-center" }}>
        <div
          {...{
            className: "w-[90%] flex flex-row justify-evenly p-5",
          }}
        >
          <Awards />
          <BikeProductsFooter />
          <PurchaseItems />
          <ContactsFooter />
          <MtbikerShops />
        </div>
      </div>
      <div {...{ className: "flex justify-center" }}>
        <div
          {...{
            className: "w-[90%]",
          }}
        >
          <Copyrights />
        </div>
      </div>
    </div>
  );
};
