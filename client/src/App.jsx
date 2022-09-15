import React from "react";
import { Outlet as Content } from "react-router-dom";

import GlobalStyle from "./styles/GlobalStyle";
import ResetStyled from "./styles/ResetStyled";
import Menu from "./components/Menu/Menu";
import { ContentStyle, ContentInsideStyle } from "./styles/ContentStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <ResetStyled />
      <Menu />
      <ContentStyle>
        <ContentInsideStyle>
          <Content />
        </ContentInsideStyle>
      </ContentStyle>
    </>
  );
}

export default App;
