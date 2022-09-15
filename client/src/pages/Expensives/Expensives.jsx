import React from "react";
import moment from "moment";
import api from "../../services/api";

import FormExpensives from "../../components/Expensives/FormExpensives";
import Modal from "../../components/Modal/Modal";

moment.locale("PT-br");

const Expensives = () => {
  const [expensivesData, setExpensivesData] = React.useState();
  const [hidden, setHidden] = React.useState(false);
  const [deleteModal, SetDeleteModal] = React.useState(false);

  React.useEffect(() => {
    getExpensives();
  }, [expensivesData]);

  const getExpensives = () => {
    api.get("/gastos").then((r) => setExpensivesData(r.data));
  };
  const DeleteExpensives = (id) => {
    api.delete(`/gastos/${id}`).then((r) => alert(r.statusText));
    SetDeleteModal(false);
  };

  return (
    <div>
      <button onClick={() => setHidden(true)}>Criar Despesa</button>
      {hidden && (
        <Modal closeModal={setHidden}>
          <FormExpensives setModal={setHidden} />
        </Modal>
      )}
      <div style={{ display: "flex", justifyContent: "center" }}>
        {expensivesData &&
          expensivesData.map((expensive) => (
            <div key={expensive.id} style={{ border: "1px solid black", textAlign: "center" }}>
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
              <button onClick={() => SetDeleteModal(true)}>Delete?</button>
              {deleteModal && <Modal closeModal={SetDeleteModal}>
                <div>apagar</div>
                <button onClick={() => DeleteExpensives(expensive.id)}>Delete</button>
              </Modal>}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Expensives;
