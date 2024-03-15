import React from "react";

const Button = ({ value, style }) => {
  return (
    <button
      className={
        "py-3 px-6 font-semibold text-inherit text-sm md:text-base bg-blue-400 rounded-full " +
        style
      }
    >
      {value}
    </button>
  );
};

export default Button;
