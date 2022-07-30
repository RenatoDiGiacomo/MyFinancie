import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import Dashboard from "../Pages/Dashboard";
import Gastos from "../Pages/Gastos";

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Dashboard />} />
          <Route path="/gastos" element={<Gastos />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;

