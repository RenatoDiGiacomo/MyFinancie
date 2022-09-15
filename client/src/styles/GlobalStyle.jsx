import { createGlobalStyle } from "styled-components";



const GlobalStyle = createGlobalStyle`
#root{
    display: flex;
    overflow: hidden;
    height: 100vh;
}
@media only screen and (max-width:992px) {
    #root{
        flex-direction: column;
    }
}
`;

export default GlobalStyle;

