import React from "react";
import  api  from "../services/api";

const Gastos = () => {
  const [data, setData] = React.useState();

  React.useEffect(() => {
    const dataItems = api.get("/gastos").then((r) => r.data);
    setData(dataItems);
  },[]);

  return (
    <div>
      <div>{JSON.stringify(data)}</div>
    </div>
  );
};

export default Gastos;
