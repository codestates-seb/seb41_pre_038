import styled from 'styled-components';
import Header from '../Components/Header';
import SideNav from '../Components/SideNav';
import Footer from '../Components/Footer';
import Profile from '../Components/MyPage/Profile';
import Navbar from '../Components/MyPage/Navbar';
import Sidebar from '../Components/MyPage/EditProfile/Sidebar';
import EditPage from '../Components/MyPage/EditProfile/EditPage';
import DeletePage from '../Components/MyPage/EditProfile/DeletePage';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { editNickname, editCountry, editUserImage } from '../store/store';

const Container = styled.div`
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
	const [selected, setSelected] = useState('Edit');

	let store = useSelector((state) => {
		return state;
	});
	let dispatch = useDispatch();

	return (
		<Container>
			<Header />
			<Body>
				<SideNav />
				<ProfileContainer>
					<Profile />
					<Navbar />
					<Main>
						<Sidebar selected={selected} setSelected={setSelected} />
						{selected === 'Edit' ? <EditPage /> : <DeletePage />}
					</Main>
				</ProfileContainer>
			</Body>
			<Footer />
		</Container>
	);
};

export default Setting;
