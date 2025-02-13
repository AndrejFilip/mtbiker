import React from "react";

interface InputProps {
  type?: string;
  placeholder: string;
  name?: string;
}

export const Input: React.FC<InputProps> = ({
  type = "text",
  placeholder,
  name,
}) => {
  return (
    <div>
      <input
        {...{
          type,
          className:
            "grow w-full h-[40px] border-2 border-solid p-2 focus:outline-none focus:border-orange-400",
          placeholder,
          name,
        }}
      />
    </div>
  );
};
