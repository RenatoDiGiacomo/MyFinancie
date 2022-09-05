import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";

import Dashboard from "../Pages/Dashboard";
import Expensives from "../Pages/Expensives";
import Notfind from "../Pages/Notfind";
import People from "../Pages/People";

const Routers = () => {
  // if (localStorage.length <= 0) {
  //   return (
  //     <BrowserRouter>
  //       <Routes>
  //         <Route index path="/*" element={<Login />} />;
  //         <Route path="/signup" element={<Signup />} />;
  //       </Routes>
  //     </BrowserRouter>
  //   );
  // }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Dashboard />} />
          <Route path="gastos" element={<Expensives />} />
          <Route path="pessoas" element={<People />} />
          <Route path="/*" element={<Notfind />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
