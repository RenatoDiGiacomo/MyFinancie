import styled from "styled-components";

const HeaderMenuStyle = styled.header`
  display: flex;
  min-width: 130px;
  width: 10%;
  height: 100vh;
  background-color: red;
  justify-content: center;
  padding-top: 1.75rem;
  @media only screen and (max-width: 992px) {
    width: 100%;
    height: 26px;
    justify-content: end;
    padding: 0.75rem;
  }
`;
const TitleMenuStyled = styled.div`
  display: block;
  width: 100%;
  margin-right: 1rem;
  font-size: 53px;
  //Title Style
  /* p {
    margin: 0;
    padding: 0;
    text-transform: uppercase;
    rotate: -90deg;
  } */
`;
const HeaderMenuUlStyle = styled.ul`
  list-style: none;
  @media only screen and (max-width: 992px) {
    display: flex;
  }
`;
const HeaderMeuLiStyle = styled.li`
  list-style: none;
`;

export { HeaderMenuStyle, HeaderMenuUlStyle, HeaderMeuLiStyle, TitleMenuStyled };

