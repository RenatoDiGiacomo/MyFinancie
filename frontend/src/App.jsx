import React from "react";
import { Outlet as Main } from "react-router-dom";

import Menu from "./Components/Menu/Menu";

function App() {
  return (
    <>
      <Menu />
      <Main />
    </>
  );
}

export default App;

