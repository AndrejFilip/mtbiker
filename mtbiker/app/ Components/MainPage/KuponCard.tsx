import React from "react";
import kupon from "../../images/cards/rsz_kupon.png";

export const KuponCard = () => {
  return (
    <div
      {...{
        className: "flex flex-row bg-base-200 items-center justify-evenly p-3 ",
      }}
    >
      <div {...{ className: "flex flex-col gap-1 ml-auto w-[70%]" }}>
        <p {...{ className: "text-md font-bold" }}>Darčekové poukazy</p>
        <p {...{ className: "test-xs" }}>
          Cyklisti v rodine? U nás si určite vyberú
        </p>
        <button
          {...{
            className:
              "btn bg-orange-400 text-white w-[200px] hover:bg-orange-500",
          }}
        >
          Obdaruj blízkych
        </button>
      </div>
      <div {...{ className: "flex justify-end" }}>
        <img {...{ src: kupon.src, className: "w-[70%]" }}></img>
      </div>
    </div>
  );
};
