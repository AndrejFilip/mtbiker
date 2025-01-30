import React from "react";

export const FrontImage = () => {
  return (
    <div {...{ className: "relative" }}>
      <img
        {...{
          src: "https://includes.mtbiker.sk/images/magazin/magazin-cover.jpg?1657533031",
          alt: "front image",
          className: "w-full h-[250px] ",
        }}
      />
      <div
        {...{
          className: "absolute top-20 w-full",
        }}
      >
        <div {...{ className: "flex flex-col items-center" }}>
          <p {...{ className: "text-3xl text-white " }}>
            Zážitky, inšpirácie, návody
          </p>

          <p {...{ className: "text-4xl text-white font-bold font-sans" }}>
            MTBIKER MAGAZÍN
          </p>
        </div>
      </div>
    </div>
  );
};
