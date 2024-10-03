import React from "react";

const SectionTitle = ({ text, color }) => {
  return (
    <h1
      className={`font-light text-3xl lg:text-5xl mx-auto  text-black  capitalize border-b-2 ${color} max-w-fit p-4`}
    >
      {text}
    </h1>
  );
};

export default SectionTitle;
