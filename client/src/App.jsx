import React from "react";
import { Outlet } from "react-router-dom";

import Menu from "./components/Menu/Menu";
import ResetStyled from "./styles/ResetStyled";

function App() {
  return (
    <>
      <ResetStyled />
      <Menu />
      <Outlet />
    </>
  );
}

export default App;
