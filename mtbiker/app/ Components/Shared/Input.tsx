import { kMaxLength } from "buffer";
import React from "react";

interface InputProps {
  type?: string;
  placeholder?: string;
  name?: string;
  height: number;
  value?: string;
  setValue?: (e: string) => void;
  inputRef?: React.Ref<HTMLInputElement>;
}

export const Input = ({
  type = "text",
  placeholder,
  name,
  height = 40,
  value,
  setValue,
  inputRef,
  ...rest
}: InputProps) => {
  return (
    <div>
      <input
        {...{
          type,
          className: `grow w-full h-[${height}px] border-2 border-solid p-2 focus:outline-none focus:border-orange-400`,
          placeholder,
          name,
          value,
          onChange: (e) => setValue && setValue(e.target.value),
          ref: inputRef,
          maxLength: 50,
        }}
        {...rest}
      />
    </div>
  );
};
