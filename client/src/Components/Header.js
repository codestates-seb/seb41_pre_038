import styled from 'styled-components';

const Container = styled.header`
	width: 100%;
	height: 50px;
	display: flex;
	justify-content: center;

	& > div {
		width: 1264px;
		background-color: lightblue;
	}
`;

const Header = () => {
	return (
		<Container>
			<div>header</div>
		</Container>
	);
};

export default Header;
