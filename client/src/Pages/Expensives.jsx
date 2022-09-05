import React from "react";
import moment from "moment";
import api from "../services/api";

import FormExpensives from "../Components/Expensives/FormExpensives";
import Modal from "../Components/Modal/Modal";

moment.locale("PT-br");

const Expensives = () => {
  const [expensivesData, setExpensivesData] = React.useState();
  const [hidden, setHidden] = React.useState(false);

  React.useEffect(() => {
    api.get("/gastos").then((r) => setExpensivesData(r.data));
  }, [expensivesData]);

  return (
    <div>
      <button onClick={() => setHidden(true)}>Criar Despesa</button>
      <Modal setHidden={setHidden} hidden={hidden}>
        <FormExpensives />
      </Modal>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {expensivesData &&
          expensivesData.map((expensive) => (
            <div key={expensive.id} style={{ border: "1px solid black", textAlign:"center" }}>
              <div>
                <h2>Titulo</h2>
                <p>{expensive.title}</p>
              </div>
              <div>
                <h3>valor</h3>
                <p>{expensive.value}</p>
              </div>
              <div>
                <h3>Data de Vencimento</h3>
                <p>{moment(expensive.dueDate).format("DD/MM/YYYY")}</p>
              </div>
              <div>
                <h3>Está Pago:</h3>
                <p>{expensive.paidOut ? "pago" : "nao pago"}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Expensives;
