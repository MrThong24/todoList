import React from "react";

const Label = ({ htmlFor = "", children, ...props }) => {
  return (
    <label className="mb-2 " htmlFor={htmlFor}>
      {children}
    </label>
  );
};

export default Label;
