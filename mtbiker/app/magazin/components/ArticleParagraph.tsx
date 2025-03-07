import { ParagraphProps } from "@/app/types";
import React from "react";
import ReactMarkdown from "react-markdown";
import { ArticleParagraphImageContainer } from "./ArticleParagraphImageContainer";
import { ArticleParagraphQuote } from "./ArticleParagraphQuote";

export const ArticleParagraph = ({
  paragraphs,
}: {
  paragraphs: ParagraphProps[];
}) => {
  return (
    <div {...{ className: "flex flex-col gap-5" }}>
      {paragraphs?.map((paragraph) => (
        <>
          {paragraph.quote ? (
            <div {...{ className: "flex flex-row w-full gap-5" }}>
              <p
                {...{
                  className:
                    "prose prose-md text-sans text-md whitespace-pre-line prose prose-lg w-[80%]",
                }}
              >
                <ReactMarkdown>{paragraph.text}</ReactMarkdown>
              </p>
              <div {...{ className: "w-[25%]" }}>
                <ArticleParagraphQuote {...{ text: paragraph.quote }} />
              </div>
            </div>
          ) : (
            <p
              {...{
                className:
                  "prose prose-md text-sans text-md whitespace-pre-line prose prose-lg",
              }}
            >
              <ReactMarkdown>{paragraph.text}</ReactMarkdown>
            </p>
          )}
          <div>
            <ArticleParagraphImageContainer {...{ images: paragraph.images }} />
          </div>
        </>
      ))}
    </div>
  );
};
