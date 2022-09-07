import React from "react";
import { Link } from "react-router-dom";

import { HeaderStyled, HeaderUl } from "../../styles/components/Menu";

const Menu = () => {
  return (
    <HeaderStyled>
      <HeaderUl>
        <li>
          <Link to="/">Dashboard</Link>
        </li>
        <li>
          <Link to="/gastos">Gastos</Link>
        </li>
        <li>
          <Link to="/pessoas">Pessoas</Link>
        </li>
      </HeaderUl>
    </HeaderStyled>
  );
};

export default Menu;
