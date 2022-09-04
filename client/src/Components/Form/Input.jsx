import React from "react";

const Input = ({ id, label, type, ...props }) => {
  if (type === "submit") {
    return <input id={id} type={type} {...props} />;
  }

  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input id={id} type={type} {...props} />
    </>
  );
};

export default Input;

