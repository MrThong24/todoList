import React from "react";

const Button = ({ type = "", children, ...props }) => {
  return (
    <button
      className="flex justify-center w-[100%] py-4 rounded-md bg-teal-800 text-white"
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
