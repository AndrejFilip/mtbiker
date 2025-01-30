import { useQueryClient } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { BiErrorCircle } from "react-icons/bi";

const Alert = ({ text }: { text: string | undefined }) => {
  const [visible, setVisible] = useState(true);
  const queryClient = useQueryClient();

  setTimeout(() => {
    setVisible(false);
    queryClient.resetQueries({ queryKey: ["weather"] });
  }, 2500);

  if (!visible) {
    return null;
  }

  return (
    <div>
      <div {...{ className: "alert alert-error flex justify-center" }}>
        <BiErrorCircle />
        <div {...{ className: "flex justify-center items-center" }}>
          <span>{text}</span>
        </div>
      </div>
    </div>
  );
};

export default Alert;
