import React, { ForwardedRef } from "react";

interface InputProps {
  type?: string;
  placeholder?: string;
  name?: string;
  height: number;
  value?: string;
  setValue?: (e: string) => void;
}

export const Input = React.forwardRef(
  (
    {
      type = "text",
      placeholder,
      name,
      height = 40,
      value,
      setValue,
      ...rest
    }: InputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
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
            ref,
          }}
          {...rest}
        />
      </div>
    );
  }
);
