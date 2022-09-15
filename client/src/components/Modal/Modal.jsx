import React from "react";

const Modal = ({ children, closeModal }) => {
  const StyleOverLay = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100vh",
    backgroundColor: "rgba(0,0,0,.5)",
  };
  const ModalBg = {
    backgroundColor: "#fff",
    padding: "2.5rem",
  };

  
    return (
      <div style={StyleOverLay}>
        <div style={ModalBg}>
          <div>{children}</div>
          <button onClick={() => closeModal(false)}>Fechar</button>
        </div>
      </div>
    );
 
};

export default Modal;

