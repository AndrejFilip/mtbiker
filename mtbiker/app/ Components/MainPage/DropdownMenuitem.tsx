import React from "react";
import { DropdownMenuitemProps } from "../../types";
import Link from "next/link";

export const DropdownMenuitem: React.FC<DropdownMenuitemProps> = ({
  name,
  page,
}) => {
  return (
    <li {...{ className: "bg-base-100" }}>
      <Link {...{ href: page }}>{name}</Link>
    </li>
  );
};
