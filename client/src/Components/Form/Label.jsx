import React from "react";

const Label = ({ label, from }) => {
  return <label htmlFor={from}>{label}</label>;
};

export default Label;
