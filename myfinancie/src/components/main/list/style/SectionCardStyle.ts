import styled from 'styled-components';
const SectionCardStyle = styled.section`
	display: flex;
	justify-content: left;
	flex-wrap: wrap;

	& > div {
		border: 1px solid #808080;
		border-radius: 6px;
        box-shadow: 2px 2px 4px #808080;
		display: flex;
		flex-direction: row;
		max-width: 250px;
		width: 100%;
		height: 250px;
		margin: 1rem 1rem 0;
		padding: 1rem;
	}
`;
export default SectionCardStyle;
