import React from "react";

interface InputProps {
  type?: string;
  placeholder?: string;
  name?: string;
  height: number;
}

export const Input: React.FC<InputProps> = ({
  type = "text",
  placeholder,
  name,
  height = 40,
}) => {
  return (
    <div>
      <input
        {...{
          type,
          className: `grow w-full h-[${height}px] border-2 border-solid p-2 focus:outline-none focus:border-orange-400`,
          placeholder,
          name,
        }}
      />
    </div>
  );
};
