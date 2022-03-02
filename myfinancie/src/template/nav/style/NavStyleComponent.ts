import styled from 'styled-components';

const NavStyle = styled.nav`
	width: 200px;
	background-color: #242424;
	height: 92vh;
	float: left;
	ul {
		list-style: none;
		text-align: center;
		width: 100%;
		margin: 0;
		padding: 1rem 0 0 0;
		li {
			display: flex;
			justify-content: center;
			border-bottom: 1px solid;
			align-items: center;
			&:hover {
				background-color: #a3a3a3;
				transition: all 0.2s linear;
			}
			&:hover a{
				color: #242424;
				transition: all 0.2s linear;
			}
			a {
				width: 100%;
				padding: 1rem 0;
				font-size: 21px;
				font-weight: 700;
				text-decoration: none;
				color: #a3a3a3;
				transition: all 0.2s linear;
				&.active::before {
					content: '►';
					position: absolute;
					left: 12px;
				}
				&:hover {
					transition: all 0.2s linear;
				}
			}
		}
	}
`;

export default NavStyle;
