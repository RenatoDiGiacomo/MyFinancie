import { createGlobalStyle } from 'styled-components';

const GlobalComponent = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    body{
        width: 100%;
        position: relative;
        display: flex;
        background-color: #f7f7f7;
        #root{
            width: 100%;
            h1{
                font-size: 24px;
            }
        }
    }
}

`;

export default GlobalComponent;
