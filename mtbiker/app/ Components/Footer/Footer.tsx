import React from "react";
import { FooterInformations } from "./FooterInformations";

export const Footer = () => {
  return (
    <div {...{ className: " mt-2 bg-base-200" }}>
      <div>
        <FooterInformations />
      </div>
    </div>
  );
};
