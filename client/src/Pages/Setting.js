import styled from 'styled-components';
import Header from '../Components/Header';
import SideNav from '../Components/SideNav';
import Footer from '../Components/Footer';
import Profile from '../Components/MyPage/Profile';
import Navbar from '../Components/MyPage/Navbar';
import Sidebar from '../Components/MyPage/EditProfile/Sidebar';
import EditPage from '../Components/MyPage/EditProfile/EditPage';
import DeletePage from '../Components/MyPage/EditProfile/DeletePage';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateSettingNav } from '../store/store';

const Container = styled.div`
	width: 100vw;
	height: 100vh;
`;

const Body = styled.div`
	display: flex;
	justify-content: center;
	width: 1264px;
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

const Setting = () => {
	const dispatch = useDispatch();
	const user = useSelector((state) => state.user);

	useEffect(() => {
		dispatch(updateSettingNav('Edit'));
	}, []);

	let selectedTab = useSelector((state) => state.tab.settingNav);

	return (
		<Container>
			<Header />
			<Body>
				<SideNav />
				<ProfileContainer>
					<Profile user={user} />
					<Navbar />
					<Main>
						<Sidebar />
						{selectedTab === 'Edit' ? <EditPage user={user} /> : <DeletePage />}
					</Main>
				</ProfileContainer>
			</Body>
			<Footer />
		</Container>
	);
};

export default Setting;
