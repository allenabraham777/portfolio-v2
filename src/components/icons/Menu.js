import React from "react";

const Sun = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={ className }
      fill="none"
      viewBox="0 0 24 24"
      stroke="#ffffff"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 6h16M4 12h16m-7 6h7"
      />
    </svg>
  );
};

export default Sun;
