"use client";

import React from "react";
import {
  MagazineArticleItem,
  MagazineArticleItemProps,
} from "./MagazineArticleItem";

import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

export const MagazineArticleItems = ({
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
  const limit = 6;
  const numberOfPages = total / limit;
  const noData = articles?.length === 0;
  const isNextPageButtonDisabled = page > numberOfPages || noData;
  const isPreviousPageButtonDisabled = page === 1;

  return (
    <div>
      <div {...{ className: "flex flex-col gap-5" }}>
        <div {...{ className: "grid grid-cols-2 gap-3" }}>
          {!isLoading
            ? articles?.map((article: MagazineArticleItemProps) => (
                <MagazineArticleItem {...article} />
              ))
            : null}
        </div>
      </div>

      <div {...{ className: "flex items-center mt-5 w-full" }}>
        {noData ? (
          <div>
            Nenašli sa žiadne stránky, prosím vyber inú, alebo vyfiltuj články
          </div>
        ) : (
          <div {...{ className: "flex justify-start w-2/5" }}>
            <span {...{ className: "text-sm text-gray-400" }}>
              Celkovo {total} článkov
            </span>
          </div>
        )}
        <div {...{ className: "flex justify-end w-3/5 gap-2 items-center" }}>
          <button
            {...{
              className: "text-orange-400",
              onClick: () => {
                setPage(page - 1);
              },
              disabled: isPreviousPageButtonDisabled,
            }}
          >
            <IoIosArrowBack
              {...{
                className: `${
                  isPreviousPageButtonDisabled
                    ? "text-gray-400"
                    : "text-orange-400"
                }`,
              }}
            />
          </button>
          <span {...{ className: "text-sm text-gray-400" }}>Strana {page}</span>
          <button
            {...{
              className: "text-orange-400 cursor-pointer",
              onClick: () => {
                setPage(page + 1);
              },
              disabled: isNextPageButtonDisabled,
            }}
          >
            <IoIosArrowForward
              {...{
                className: `${
                  isNextPageButtonDisabled ? "text-gray-400" : "text-orange-400"
                }`,
              }}
            />
          </button>
        </div>
      </div>
    </div>
  );
};
