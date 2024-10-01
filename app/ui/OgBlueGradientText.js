import React from "react";

const GradientText = ({ text }) => {
  return (
    <h1
      className={
        "leading-loose  bg-gradient-to-r from-blue-400 to-orange-400 inline-block text-transparent bg-clip-text "
      }
    >
      {text}
    </h1>
  );
};

export default GradientText;
