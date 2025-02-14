"use client";

import { getMagazineArticle } from "@/app/api/articles";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Tags } from "../components/MagazineArticleItem";
import Alert from "@/app/ Components/Shared/Alert";
import { Spinner } from "@/app/ Components/Shared/Spinner";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { LiaCommentSolid } from "react-icons/lia";
import {
  ArticleParagraph,
  ParagraphProps,
} from "../components/ArticleParagraph";

interface MagazineArticleProps {
  imgSrcFullSize: string;
  description: string;
  header: string;
  user_initials: string;
  user_name: string;
  likes?: number | undefined;
  dislikes?: number | undefined;
  comments?: number | undefined;
  tags?: Array<Tags>;
  id?: number;
  paragraphs: Array<ParagraphProps>;
}

export const ArticleContainer = ({ id }: { id: number }) => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["article"],
    queryFn: getMagazineArticle({ id }),
    enabled: true,
    retry: 1,
  });

  const article: MagazineArticleProps = data;

  if (isError) {
    return <Alert {...{ text: error?.message }} />;
  }

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div {...{ className: "w-full flex justify-center" }}>
      <div
        {...{
          className: "max-w-screen-2xl gap-5 flex flex-col",
        }}
      >
        <img {...{ src: article.imgSrcFullSize }} />
        <div {...{ className: "flex justify-center" }}>
          <div
            {...{
              className: "flex flex-col max-w-screen-md gap-3",
            }}
          >
            <span {...{ className: "font-bold text-3xl" }}>
              {article.header}
            </span>
            <div {...{ className: "border-b border-gray-200 " }} />
            <div {...{ className: "flex flex-row w-full" }}>
              <div
                {...{ className: "w-2/5 flex justify-start items-center ml-5" }}
              >
                <span {...{ className: "text-sm text-gray-500 font-bold" }}>
                  {article.user_name}
                </span>
              </div>
              <div
                {...{
                  className:
                    "w-3/5 flex justify-end items-center flex-row gap-2 mr-5",
                }}
              >
                <AiOutlineLike {...{ className: "text-orange-400" }} />
                <span {...{ className: "text-sm" }}>{article.likes}</span>
                <AiOutlineDislike {...{ className: "text-orange-400  " }} />
                <span {...{ className: "text-sm" }}>{article.dislikes}</span>
                <LiaCommentSolid {...{ className: "text-orange-400  " }} />
                <span {...{ className: "text-sm" }}>{article.comments}</span>
              </div>
            </div>

            <div {...{ className: "border-b border-gray-200 " }} />
            <div {...{ className: "flex flex-row gap-1 w-1/5 ml-5" }}>
              {article.tags?.map((tag, i) => (
                <span
                  {...{
                    className:
                      "text-xs bg-orange-100 text-orange-500 font-bold p-1 rounded-xl",
                    key: i,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            <p {...{ className: "mt-5 text-sans text-md" }}>
              {article.description}
            </p>
            {article.paragraphs.map((paragraph) => (
              <ArticleParagraph {...{ paragraph }} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
