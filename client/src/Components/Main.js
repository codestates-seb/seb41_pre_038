import styled from 'styled-components';
import TopQuestions from './TopQuestions';
import SideBar from './SideBar';

const Container = styled.main`
	background-color: white;
	width: 1100px;
	height: 100%;
	padding: 24px;

	display: flex;
	justify-content: space-between;
`;

const Main = () => {
	return (
		<Container>
			<TopQuestions />
			<SideBar />
		</Container>
	);
};

export default Main;
