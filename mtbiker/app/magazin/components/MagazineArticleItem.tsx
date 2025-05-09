import {
  patchMagazineArticleLikes,
  patchMagazineArticleDislikes,
} from "@/app/api/articles";
import { MagazineArticleItemProps } from "@/app/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Link from "next/link";
import React from "react";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { LiaCommentSolid } from "react-icons/lia";

export const MagazineArticleItem: React.FC<MagazineArticleItemProps> = ({
  imgSrc,
  description,
  header,
  user_initials,
  user_name,
  likes,
  dislikes,
  comments,
  tags,
  id,
}) => {
  const createArticleUrl = `/magazin/articles/${id}`;

  const queryClient = useQueryClient();

  const onLikesPatchHandler = useMutation({
    mutationKey: ["Article", likes, id],
    mutationFn: patchMagazineArticleLikes({
      id,
      likes: (likes ?? 0) + 1,
    }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["articles_paginated"] });
    },
  });

  const handlePatchMagazineArticleLikes = () => {
    onLikesPatchHandler.mutate();
  };

  const onDislikesPatchHandler = useMutation({
    mutationKey: ["Article", dislikes, id],
    mutationFn: patchMagazineArticleDislikes({
      id,
      dislikes: (dislikes ?? 0) + 1,
    }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["articles_paginated"] });
    },
  });

  const handlePatchMagazineArticleDislikes = () => {
    onDislikesPatchHandler.mutate();
  };

  return (
    <div
      {...{ className: "flex flex-col gap-2 max-w-screen-sm", id: "article" }}
    >
      <img {...{ src: imgSrc, alt: "img" }} />
      <Link {...{ href: createArticleUrl }}>
        <span
          {...{
            className: "text-md font-bold hover:text-orange-400",
          }}
        >
          {header}
        </span>
      </Link>
      <p {...{ className: "text-sm text-gray-600" }}> {description}</p>
      <div {...{ className: "flex items-center w-full" }}>
        <div
          {...{
            className: "flex flex-row gap-2 justify-start w-2/5 items-center",
          }}
        >
          <div>
            <div {...{ className: "w-8 h-7 rounded-full bg-orange-400" }}>
              <span {...{ className: "ml-2 text-xs font-bold" }}>
                {user_initials}
              </span>
            </div>
          </div>
          <span {...{ className: "text-sm font-bold" }}>{user_name}</span>

          <div {...{ className: "flex flex-row gap-1 w-1/5" }}>
            {tags?.map((tag, i) => (
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
        </div>

        <div
          {...{
            className: "flex gap-1 justify-end items-center w-3/5",
          }}
        >
          <AiOutlineLike
            {...{
              className: "text-orange-400 cursor-pointer",
              onClick: handlePatchMagazineArticleLikes,
            }}
          />
          <span {...{ className: "text-sm" }}>{likes}</span>
          <AiOutlineDislike
            {...{
              className: "text-orange-400 cursor-pointer",
              onClick: handlePatchMagazineArticleDislikes,
            }}
          />
          <span {...{ className: "text-sm" }}>{dislikes}</span>
          <LiaCommentSolid {...{ className: "text-orange-400  " }} />
          <span {...{ className: "text-sm" }}>{comments}</span>
        </div>
      </div>
    </div>
  );
};
