import React from "react";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { LiaCommentSolid } from "react-icons/lia";

type Tags =
  | "MTB"
  | "ROAD"
  | "SERVICE"
  | "INTRO"
  | "GRAVEL"
  | "ALL"
  | "TRAINING";

export interface MagazineArticleItemProps {
  imgSrc: string;
  description: string;
  header: string;
  user_initials: string;
  user_name: string;
  likes?: number | undefined;
  dislikes?: number | undefined;
  comments?: number | undefined;
  tags?: Array<Tags>;
  id?: number;
}

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
}) => {
  return (
    <div
      {...{ className: "flex flex-col gap-2 max-w-screen-sm", id: "article" }}
    >
      <img {...{ src: imgSrc, alt: "img" }} />
      <span {...{ className: "text-md font-bold hover:text-orange-400" }}>
        {header}
      </span>
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
          <AiOutlineLike {...{ className: "text-orange-400  " }} />
          <span {...{ className: "text-sm" }}>{likes}</span>
          <AiOutlineDislike {...{ className: "text-orange-400  " }} />
          <span {...{ className: "text-sm" }}>{dislikes}</span>
          <LiaCommentSolid {...{ className: "text-orange-400  " }} />
          <span {...{ className: "text-sm" }}>{comments}</span>
        </div>
      </div>
    </div>
  );
};
