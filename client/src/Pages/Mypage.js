import styled from 'styled-components';
import Header from '../Components/Header';
import SideNav from '../Components/SideNav';
import Footer from '../Components/Footer';
import Profile from '../Components/MyPage/Profile';
import Navbar from '../Components/MyPage/Navbar';
import Sidebar from '../Components/MyPage/Sidebar';
import Section from '../Components/MyPage/Section';
import { useDispatch } from 'react-redux';
import { updateMyPageNav, updateSideNavTab } from '../store/store';
import { useEffect } from 'react';

const Container = styled.div`
	width: 100vw;
	height: 100vh;
`;

const Body = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
	margin: 0 auto;
`;

const ProfileContainer = styled.main`
	width: 1100px;
	padding: 24px;

	display: flex;
	flex-direction: column;
`;

const Main = styled.div`
	margin-bottom: 48px;
	display: flex;
`;

const SectionContainer = styled.div`
	width: 100%;

	display: flex;
	justify-content: space-between;
`;

const Mypage = () => {
	const dispatch = useDispatch();
	dispatch(updateSideNavTab('Users'));

	return (
		<Container>
			<Header />
			<Body>
				<SideNav />
				<ProfileContainer>
					<Profile />
					<Navbar />
					<Main>
						<Sidebar />
						<SectionContainer>
							<Section text='Questions' emptyMsg='asked' data={null}></Section>
							<Section text='Answers' emptyMsg='answered' data={null}></Section>
						</SectionContainer>
					</Main>
				</ProfileContainer>
			</Body>
			<Footer />
		</Container>
	);
};

export default Mypage;
