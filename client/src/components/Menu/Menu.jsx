import React from "react";
import { Link } from "react-router-dom";

import {
  HeaderMenuStyle,
  HeaderMenuUlStyle,
  HeaderMeuLiStyle,
  TitleMenuStyled,
} from "./Menu_Style";

const Menu = () => {
  return (
    <HeaderMenuStyle>
    {/* title On vertical*/}
      {/* <TitleMenuStyled>
        <p>Title</p>
      </TitleMenuStyled> */}
      {/* Menu list*/}
      <HeaderMenuUlStyle>
        <HeaderMeuLiStyle>
          <Link to="/">Dashboard</Link>
        </HeaderMeuLiStyle>
        <HeaderMeuLiStyle>
          <Link to="/gastos">Gastos</Link>
        </HeaderMeuLiStyle>
        <HeaderMeuLiStyle>
          <Link to="/pessoas">Pessoas</Link>
        </HeaderMeuLiStyle>
      </HeaderMenuUlStyle>
    </HeaderMenuStyle>
  );
};

export default Menu;
