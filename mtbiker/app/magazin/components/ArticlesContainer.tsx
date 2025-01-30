import React from "react";
import { MagazineArticleItems } from "./MagazineArticleItems";
import { MagazineArticleItemProps } from "./MagazineArticleItem";

export const ArticlesContainer = ({
  articles,
  setPage,
  page,
  isLoading,
  total,
}: {
  articles: MagazineArticleItemProps[];
  setPage: (page: number) => void;
  page: number;
  isLoading: boolean;
  total: number;
}) => {
  return (
    <div {...{ className: "max-w-screen-lg" }}>
      <div {...{ className: "flex flex-col gap-3" }}>
        <p
          {...{
            className: "text-md font-bold font-sans",
            id: "article-header",
          }}
        >
          MTBIKER magazín - Všetky články a videá
        </p>
        <MagazineArticleItems
          {...{
            articles,
            setPage,
            page,
            isLoading,
            total,
          }}
        />
      </div>
    </div>
  );
};
