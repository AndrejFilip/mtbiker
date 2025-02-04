import Link from "next/link";
import React from "react";

export const LogOutButton = () => {
  return (
    <div>
      <li
        {...{
          className: "className: bg-base-100",
        }}
      >
        <Link
          {...{
            href: "/",
            onClick: () => {
              localStorage.removeItem("logged");
              window.location.reload();
            },
          }}
        >
          Odhlásiť sa
        </Link>
      </li>
    </div>
  );
};
