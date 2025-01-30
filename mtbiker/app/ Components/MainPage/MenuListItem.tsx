import React from "react";

export const MenuListItem = ({
  label,
  src,
}: {
  label: string;
  src: string;
}) => {
  return (
    <div
      {...{
        className:
          "bg-base-200 h-[100%] flex flex-col items-center justify-center",
      }}
    >
      <div>
        <img
          {...{
            src,
            className: "h-[80%] mt-3",
            alt: "menu items",
          }}
        />
      </div>
      <div>
        <p {...{ className: "text-md font-sans mb-2" }}>{label}</p>
      </div>
    </div>
  );
};
