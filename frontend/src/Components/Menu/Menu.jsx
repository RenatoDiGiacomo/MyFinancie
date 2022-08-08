import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <header>
      
      <ul>
        <li>
          <Link to="/">Dashboard</Link>
        </li>
        <li>
          <Link to="/gastos">Gastos</Link>
        </li>
        <li>
          <Link to="/products">Produtos</Link>
        </li>
      </ul>
    </header>
  );
};

export default Menu;
