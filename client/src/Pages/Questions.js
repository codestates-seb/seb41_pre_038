import styled from 'styled-components';

import Header from '../Components/Header';
import SideNav from '../Components/SideNav';
import Footer from '../Components/Footer';
import SideBar from '../Components/SideBar';
import AllQuestions from '../Components/AllQuestions';

const Body = styled.div`
	display: flex;
	justify-content: center;
	width: 1264px;
	margin: 0 auto;
`;

const Container = styled.main`
	background-color: white;
	width: 1100px;
	height: 100%;
	padding: 24px;

	display: flex;
	justify-content: space-between;
`;

const Questions = () => {
	return (
		<div>
			<Header />
			<Body>
				<SideNav />
				<Container>
					<AllQuestions />
					<SideBar />
				</Container>
			</Body>
			<Footer />
		</div>
	);
};

export default Questions;
