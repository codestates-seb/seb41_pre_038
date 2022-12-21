import styled from 'styled-components';

const Container = styled.footer`
	width: 100%;
	height: 372.75px;
	display: flex;
	justify-content: center;

	& > div {
		width: 1264px;
		background-color: lightsalmon;
	}
`;

const Footer = () => {
	return (
		<Container>
			<div>footer</div>
		</Container>
	);
};

export default Footer;
