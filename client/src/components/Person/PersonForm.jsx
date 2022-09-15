import React from "react";

const PersonForm = () => {
  const [check, setCheck] = React.useState(false);

  return (
    <form style={{ display: "flex", flexDirection: "column" }}>
      <label htmlFor="name">Nome</label>
      <input type="number" id="name" />

      <label htmlFor="ganhosData1">Ganhos</label>
      <input type="date" id="ganhosData1" />

      <label htmlFor="ganhoMaisData">Recebe 2 vezes?</label>
      <input
        type="checkbox"
        name="ganhomais"
        id="ganhoMaisData"
        onChange={() => setCheck(!check)}
      />
      {check && (
        <>
          <label htmlFor="ganhos2">Data segundo pagamento</label>
          <input type="date" id="ganhos2" />
        </>
      )}
    </form>
  );
};

export default PersonForm;

