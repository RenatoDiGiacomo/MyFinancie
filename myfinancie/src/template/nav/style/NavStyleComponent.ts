import styled from 'styled-components';

const NavStyle = styled.nav`
	width: 200px;
	background-color: #c9ada7;
	height: 90vh;
	float: left;
	ul {
		list-style: none;
		text-align: center;
		width: 100%;
		margin: 0;
		padding: 1rem 0 0 0;
		li {
			margin: 0.5rem 0;
			a {
				font-size: 21px;
				font-weight: 700;
				text-decoration: none;
				color: #000;
				transition: all .2s linear;
                &.active::before{
                    content: "►";
                    position: absolute;
                    left: 12px;
                }
				&:hover {
					color: #9a8c98;
					transition: all .2s linear;
				}
			}
		}
	}
`;

export default NavStyle;
