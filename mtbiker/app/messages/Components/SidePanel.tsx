import { Input } from "@/app/ Components/Shared/Input";
import React from "react";

export const SidePanel = () => {
  return (
    <div {...{ className: "max-w-xs" }}>
      <div {...{ className: "flex flex-col gap-5" }}>
        <button
          {...{
            className:
              "btn w-[300px] h-[30px] bg-orange-400 hover:bg-orange-500 rounded-none text-white",
          }}
        >
          Napísať novú správu
        </button>

        <div
          {...{
            className:
              "border border-base-300 h-[50px] flex items-center mb-[-1px]",
          }}
        >
          <span {...{ className: "font-extrabold text-md pl-5" }}>
            Konverzácie
          </span>
        </div>

        <div
          {...{
            className: "border border-base-300 h-[50px] flex items-center",
          }}
        >
          <div {...{ className: "flex flex-row " }}>
            <span {...{ className: "text-md pl-5" }}>Archív</span>
          </div>
        </div>
        <button
          {...{
            className:
              "btn rounded-none bg-white border-orange-500 hover:bg-orange-400 hover:text-white text-orange-500 w-auto",
          }}
        >
          + Pridať nový štítok
        </button>

        <div {...{ className: "border border-base-300 flex-col" }}>
          <div {...{ className: "p-5 border-b" }}>
            <div {...{ className: "flex flex-col gap-3" }}>
              <span {...{ className: "text-md font-extrabold" }}>
                Správa obsahuje
              </span>
              <div {...{ className: "flex flex-row gap-2" }}>
                <Input {...{ placeholder: "správa" }} />
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
              <span {...{ className: "text-md font-extrabold" }}>
                Používateľ
              </span>
              <div {...{ className: "flex flex-row gap-2" }}>
                <Input {...{ placeholder: "použivateľ" }} />
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
      </div>
    </div>
  );
};
