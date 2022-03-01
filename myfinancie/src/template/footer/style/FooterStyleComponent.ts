import styled from 'styled-components';

const FooterStyle = styled.footer`
	display: flex;
	width: 100%;
    float: left;
    height: 35px;
    position: fixed;
    bottom: 0;
    background-color: #9A8C98;
    align-items: center;
    justify-content: end;
    color: #4A4E69;
    span:last-child{
        padding-right: 16px;
        color: #22223B;
    }
`;

export default FooterStyle;
