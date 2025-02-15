import { ParagraphProps } from "@/app/types";
import React from "react";
import ReactMarkdown from "react-markdown";
import { ArticleImageContainer } from "./ArticleImageContainer";

export const ArticleParagraph = ({
  paragraphs,
}: {
  paragraphs: ParagraphProps[];
}) => {
  return (
    <div {...{ className: "flex flex-col gap-5" }}>
      {paragraphs.map((paragraph) => (
        <>
          <p
            {...{
              className:
                "prose prose-md text-sans text-md whitespace-pre-line prose prose-lg",
            }}
          >
            <ReactMarkdown>{paragraph.text}</ReactMarkdown>
          </p>
          <div>
            <ArticleImageContainer {...{ images: paragraph.images }} />
          </div>
        </>
      ))}
    </div>
  );
};
