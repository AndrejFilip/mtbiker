import React from "react";
import zlavy from "../../images/cards/zlavy.png";

export const BenefitCard = () => {
  return (
    <div
      {...{
        className:
          "flex flex-row bg-orange-100 items-center justify-evenly p-3",
      }}
    >
      <div {...{ className: "flex flex-col gap-1 w-[70%]" }}>
        <p {...{ className: "text-md font-bold" }}>Zľavy a výpredaj</p>
        <p {...{ className: "test-sm[5px]" }}>
          Tisícky produktov so super zľavami.
        </p>
        <button
          {...{
            className:
              "btn bg-orange-400 text-white w-[200px] hover:bg-orange-500",
          }}
        >
          Zobraziť ponuku
        </button>
      </div>
      <div {...{ className: "flex justify-end" }}>
        <img {...{ src: zlavy.src, className: "w-[60%]" }}></img>
      </div>
    </div>
  );
};
