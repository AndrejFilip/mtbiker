import React from "react";

export const Spinner = () => {
  return (
    <div {...{ className: "flex flex-col justify-center items-center mt-5" }}>
      <span {...{ className: "loading loading spinner loading-lg" }} />
    </div>
  );
};
