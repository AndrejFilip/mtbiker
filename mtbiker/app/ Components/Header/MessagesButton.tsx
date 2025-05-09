import Link from "next/link";
import React from "react";

import { FaRegMessage } from "react-icons/fa6";

export const MessagesButton = ({ count }: { count: number }) => {
  return (
    <div {...{ className: "relative flex flex-row" }}>
      <Link {...{ href: "/messages" }}>
        <FaRegMessage {...{ className: "w-[20px] h-[20px] cursor-pointer" }} />
      </Link>
      {count > 0 ? (
        <div
          {...{
            className:
              " absolute -top-3 -right-3 rounded-full bg-red-600 w-[20px] h-[20px]",
          }}
        >
          <span
            {...{
              className:
                "text-xs flex justify-center text-white font-bold pt-0.5",
            }}
          >
            {count}
          </span>
        </div>
      ) : null}
    </div>
  );
};
