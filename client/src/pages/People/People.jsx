import React from "react";
import Modal from "../../components/Modal/Modal";
import PersonForm from "../../components/Person/PersonForm";
import api from "../../services/api";

const People = () => {
  const [modal, setModal] = React.useState(false);
  const [peopleData, setPeopleData] = React.useState({});

  React.useEffect(() => {
    getPeople();
  });

  const getPeople = () => {
    api.get("/pessoas").then((r) => setPeopleData(r.data));
  };

  return (
    <div>
      <button onClick={() => setModal(true)}>+Pessoa</button>
      <p>{JSON.stringify(peopleData)}</p>
      {modal && (
        <Modal closeModal={setModal}>
          <PersonForm />
        </Modal>
      )}
    </div>
  );
};

export default People;

