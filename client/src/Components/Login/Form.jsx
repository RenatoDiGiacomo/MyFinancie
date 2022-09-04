import React from "react";
import Input from "./Form/Input";
import axios from "axios";

const Form = ({ userUrl }) => {
  const [dataUser, setDataUser] = React.useState({ login: "", password: "" });

  React.useEffect(() => {
    axios.get(userUrl).then((res) => console.log(res.data));
  }, []);

  return (
    <form
      style={{ width: "100%", display: "flex", flexDirection: "column", justifyContent: "center" }}
    >
      <Input
        id={"login"}
        label={"Login"}
        type={"text"}
        value={dataUser.login}
        onChange={({ target }) => setDataUser({ login: target.value })}
        required
      />
      <Input
        id={"pw"}
        label={"Password"}
        type={"password"}
        value={dataUser.password}
        onChange={({ target }) => setDataUser({ password: target.value })}
        required
      />
      <Input type={"submit"} />
    </form>
  );
};

export default Form;

