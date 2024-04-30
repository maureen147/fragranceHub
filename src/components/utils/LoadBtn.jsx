import React from "react";

const LoadBtn = () => {
  return (
    <>
      <span
        className="spinner-border spinner-border-sm"
        aria-hidden="true"
      ></span>
      <span role="status">Loading...</span>
    </>
  );
};

export default LoadBtn;
