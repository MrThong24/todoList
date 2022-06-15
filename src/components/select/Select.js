import React from "react";
import { useController } from "react-hook-form";

const Select = ({ register, options, name, control, ...props }) => {
  const { field } = useController({
    control,
    name,
    defaultValue: "",
  });
  return (
    <select
      {...field}
      className="text-[18px] border-2 text-black rounded-md px-2 p-3"
    >
      {options.map((value) => (
        <option key={value} value={value}>
          {value}
        </option>
      ))}
    </select>
  );
};

export default Select;
