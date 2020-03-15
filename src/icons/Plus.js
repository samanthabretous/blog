import React from "react";

const Plus = ({color = "#FFFFFF", width = 50, height = 50, className}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={width}
      viewBox="0 0 100 100"
      fill={color}
      className={className}
    >
      <line
        x1="32.5"
        y1="50"
        x2="67.5"
        y2="50"
        strokeWidth="8"
        stroke={color}
      ></line>
      <line
        x1="50"
        y1="32.5"
        x2="50"
        y2="67.5"
        strokeWidth="8"
        stroke={color}
      ></line>
    </svg>
  );
};

export default Plus;
