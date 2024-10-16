import React from "react";
import { warningIconSVG } from "../lib/data";

const WarningAlert = ({ warningText }) => {
  return (
    <div role="alert" className="alert alert-warning">
      {warningIconSVG}
      <span className="font-bold">{warningText}</span>
    </div>
  );
};

export default WarningAlert;
