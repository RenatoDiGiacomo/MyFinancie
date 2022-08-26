import React from "react";
import Input from "./Form/Input";

const Form = () => {
  return (
    <form>
      <Input id={"login"} label={"Login"} type={"text"} required />
      <Input id={"pw"} label={"Password"} type={"password"} required />
      <Input type={"submit"} />
    </form>
  );
};

export default Form;

