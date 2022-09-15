import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";

import Dashboard from "../pages/Dashboard/Dashboard";
import Expensives from "../pages/Expensives/Expensives";
import Notfind from "../pages/Notfind/Notfind";
import People from "../pages/People/People";

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Dashboard />} title="Dashboaard" />
          <Route path="gastos" element={<Expensives />} title="2" />
          <Route path="pessoas" element={<People />} title="3" />
          <Route path="/*" element={<Notfind />} title="4" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
