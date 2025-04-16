import Link from "next/link";
import React from "react";

import { FaRegMessage } from "react-icons/fa6";

export const MessagesButton = () => {
  return (
    <div>
      <Link {...{ href: "/messages" }}>
        <FaRegMessage {...{ className: "w-[20px] h-[20px] cursor-pointer" }} />
      </Link>
    </div>
  );
};
