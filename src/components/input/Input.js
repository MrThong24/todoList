import React from "react";
import { useController } from "react-hook-form";

const Input = ({ name = "", type = "text", control, ...props }) => {
  const { field } = useController({
    control,
    name,
    defaultValue: "",
  });
  return (
    <input
      className="border-2 rounded-md py-2 px-5"
      id={name}
      type={type}
      {...field}
      {...props}
    />
  );
};
export default Input;
