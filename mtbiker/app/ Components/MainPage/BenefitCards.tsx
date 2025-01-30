import React from "react";
import { BenefitCard } from "./BenefitCard";
import { KuponCard } from "./KuponCard";

export const BenefitCards = () => {
  return (
    <div {...{ className: "flex-col flex gap-3" }}>
      <BenefitCard />
      <KuponCard />
    </div>
  );
};
