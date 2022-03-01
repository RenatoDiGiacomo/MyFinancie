import { createGlobalStyle } from 'styled-components';

const GlobalComponent = createGlobalStyle`
body{
    width: 100%;
    position: relative;
    display: flex;
    padding: 0;
    margin: 0;
    background-color: #f2e9e4;
    #root{
        width: 100%;
        h1{
            font-size: 24px;
        }
    }
}

`;

export default GlobalComponent;
