import React from "react";
import ReactMarkdown from "react-markdown";

export interface ParagraphProps {
  id: number;
  text: string;
  firstImgSrc: string;
}

export const ArticleParagraph = ({
  paragraph,
}: {
  paragraph: ParagraphProps;
}) => {
  return (
    <div {...{ className: "flex flex-col gap-5" }}>
      <p
        {...{
          className:
            "prose prose-md text-sans text-md whitespace-pre-line prose prose-lg",
        }}
      >
        <ReactMarkdown>{paragraph.text}</ReactMarkdown>
      </p>
      {paragraph.firstImgSrc ? (
        <img {...{ src: paragraph.firstImgSrc, alt: "image" }} />
      ) : null}
    </div>
  );
};
