import { Input } from "@/app/ Components/Shared/Input";
import React from "react";

export const MessagesSearchContainer = () => {
  return (
    <div {...{ className: "border border-base-300 flex-col" }}>
      <div {...{ className: "p-5 border-b" }}>
        <div {...{ className: "flex flex-col gap-3" }}>
          <span {...{ className: "text-md font-extrabold" }}>
            Správa obsahuje
          </span>
          <div {...{ className: "flex flex-row gap-2" }}>
            <Input {...{ placeholder: "správa", height: 40 }} />
            <div
              {...{
                className:
                  "border border-orange-500 w-[50px] h-auto bg-white text-orange-500 hover:bg-orange-500 hover:text-white flex justify-center items-center cursor-pointer",
              }}
            >
              {">"}
            </div>
          </div>
        </div>
      </div>
      <div {...{ className: "p-5 border-b" }}>
        <div {...{ className: "flex flex-col gap-3" }}>
          <span {...{ className: "text-md font-extrabold" }}>Používateľ</span>
          <div {...{ className: "flex flex-row gap-2" }}>
            <Input {...{ placeholder: "použivateľ", height: 40 }} />
            <div
              {...{
                className:
                  "border border-orange-500 w-[50px] h-auto bg-white text-orange-500 hover:bg-orange-500 hover:text-white flex justify-center items-center cursor-pointer",
              }}
            >
              {">"}
            </div>
          </div>
        </div>
      </div>

      <div
        {...{
          className:
            "flex flex-row gap-2 items-center justify-start p-5 h-[50px]",
        }}
      >
        <input {...{ type: "checkbox" }} />
        <span {...{ className: "text-xs font-bold" }}>
          Zobraziť neprečítané navrchu
        </span>
      </div>
    </div>
  );
};
