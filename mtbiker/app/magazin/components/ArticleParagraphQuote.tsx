import React from "react";

export const ArticleParagraphQuote = ({
  text,
}: {
  text: string | undefined;
}) => {
  return (
    <div
      {...{
        className: "w-full bg-orange-100 p-5",
      }}
    >
      <span {...{ className: "text-orange-400 font-bold text-lg" }}>
        {text}
      </span>
    </div>
  );
};
