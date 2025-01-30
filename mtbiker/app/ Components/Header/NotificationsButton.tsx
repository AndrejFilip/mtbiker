"use client";

import React from "react";

import { CiBellOn } from "react-icons/ci";

export const NotificationsButton = () => {
  return (
    <div>
      <CiBellOn {...{ className: "w-[30px] h-[30px] cursor-pointer" }} />
    </div>
  );
};
