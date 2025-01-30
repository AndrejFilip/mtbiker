import React from "react";
import { FaSearchDollar } from "react-icons/fa";
import { SearchBarProps } from "../../types";

export const SearchBar: React.FC<SearchBarProps> = ({
  setSearch,
  className,
  input,
  placeholder,
  search,
  onKeyDownCapture,
}) => {
  return (
    <div
      {...{
        className,
      }}
    >
      <label
        {...{
          className: input,
        }}
      >
        <input
          {...{
            type: "text",
            className: "grow",
            placeholder,
            onChange: (e) => setSearch(e.target.value),
            onKeyDownCapture,
          }}
        />
        <FaSearchDollar />
      </label>
    </div>
  );
};
