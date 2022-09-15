import React from "react";
import api from "../../services/api";

import Input from "../Form/Input";

const FormExpensives = ({setModal}) => {
  const [expensiveData, SetExpensiveData] = React.useState({
    title: "",
    cost: "",
    date: "",
  });

  const sendData = (e) => {
    e.preventDefault();
    api
      .post("/gastos", {
        title: expensiveData.title,
        value: expensiveData.cost,
        dueDate: expensiveData.date,
        paidOut: false,
      })
      .then((res) => {
        alert("Cadastrado com sucesso: " + res.statusText);
        setModal(false);
      })
      .catch((err) => alert("Deu erro: " + err));
    
  };

  const inputChange = ({ target }) => {
    const { id, value } = target;
    SetExpensiveData({ ...expensiveData, [id]: value });
  };

  return (
    <form onSubmit={sendData}>
      <Input
        value={expensiveData.title}
        type={"text"}
        id={"title"}
        label={"Titulo"}
        onChange={inputChange}
      />

      <Input
        value={expensiveData.cost}
        type={"number"}
        id={"cost"}
        label={"Valor"}
        onChange={inputChange}
      />

      <Input
        value={expensiveData.date}
        type={"date"}
        id={"date"}
        label={"Data de Vencimento"}
        onChange={inputChange}
      />

      <Input type={"submit"} />
    </form>
  );
};

export default FormExpensives;

