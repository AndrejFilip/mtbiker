import React from "react";

export const MagazineFrontSmallPage = ({
  src,
  header,
  text,
}: {
  src: string;
  header: string;
  text: string;
}) => {
  return (
    <div>
      <img {...{ className: "w-[100%]", src, alt: "images" }}></img>
      <p
        {...{
          className: "text-md font-bold font-family hover:text-orange-400",
        }}
      >
        {header}
      </p>
      <p {...{ className: "text-xs text-base-0" }}>{text}</p>
    </div>
  );
};
