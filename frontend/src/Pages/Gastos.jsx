import React from "react";
import axios from "axios";

const Gastos = () => {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    const gastosGet = async (e) => {
      const resp = await axios.get("http://localhost:8080/gastos");
      if (resp.data.lenght === 0) {
        setData([]);
      }
      setData(resp.data);
    };
    gastosGet();
  },[]);

  if (!data && data.lenght === 0) return <div>Nada para mostrar</div>;
  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          {item.title}
          {item.textproduct}
        </div>
      ))}
    </div>
  );
};

export default Gastos;
