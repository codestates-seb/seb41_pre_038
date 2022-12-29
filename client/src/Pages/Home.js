import styled from 'styled-components';

import Header from '../Components/Header';
import SideNav from '../Components/SideNav';
import Footer from '../Components/Footer';
import SideBar from '../Components/SideBar';
import TopQuestions from '../Components/TopQuestions';
import { useDispatch } from 'react-redux';
import { updateSideNavTab } from '../store/store';
import { useEffect } from 'react';

const Body = styled.div`
	display: flex;
	justify-content: center;
	width: 100vw;
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

const Home = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(updateSideNavTab('Home'));
	}, []);

	return (
		<div>
			<Header />
			<Body>
				<SideNav />
				<Container>
					<TopQuestions />
					<SideBar />
				</Container>
			</Body>
			<Footer />
		</div>
	);
};

export default Home;
