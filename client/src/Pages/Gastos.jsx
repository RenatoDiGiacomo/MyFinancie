import React from "react";
import FormExpensives from "../Components/Expensives/FormExpensives";
import api from "../services/api";

const Gastos = () => {
  const [data, setData] = React.useState();

  React.useEffect(() => {
    api.get("/gastos").then((r) => setData(r.data));
  }, [data]);

  return (
    <div>
      <FormExpensives />
      <div>{JSON.stringify(data)}</div>
    </div>
  );
};

export default Gastos;
