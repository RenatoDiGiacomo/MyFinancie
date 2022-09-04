import React from "react";
import api from "../../services/api";

import Input from "../Form/Input";

const FormExpensives = () => {
  const [title, setsetTitle] = React.useState("");
  const [cost, setCost] = React.useState(0);
  const [date, setDate] = React.useState("");

  const sendData = (e) => {
    api
      .post("/gastos", { title: title, value: cost, dueDate: date, paidOut: false })
      .then((res) => alert("Cadastrado com sucesso: " + res.statusText))
      .catch((err) => alert("Deu erro: " + err));
  };

  return (
      <form onSubmit={sendData}>
        <Input
          onChange={({ target }) => setsetTitle(target.value)}
          value={title}
          type={"text"}
          id={"title"}
          label={"Titulo"}
        />
        <Input
          onChange={({ target }) => setCost(target.value)}
          value={cost}
          type={"number"}
          id={"costValue"}
          label={"Valor"}
        />
        <Input
          onChange={({ target }) => setDate(target.value)}
          value={date}
          type={"date"}
          id={"datedue"}
          label={"Data de Vencimento"}
        />
        <Input type={"submit"} />
      </form>
  );
};

export default FormExpensives;

