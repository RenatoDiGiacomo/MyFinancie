import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";

import Dashboard from "../Pages/Dashboard";
import Gastos from "../Pages/Gastos";
import Login from "../Pages/Login";
import Notfind from "../Pages/Notfind";
import Signup from "../Pages/Signup";

const Routers = () => {
  if (localStorage.length <= 0) {
    return (
      <BrowserRouter>
        <Routes>
          <Route index path="/*" element={<Login />} />;
          <Route path="/signup" element={<Signup />} />;
        </Routes>
      </BrowserRouter>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Dashboard />} />
          <Route path="gastos" element={<Gastos />} />
          <Route path="/*" element={<Notfind />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
