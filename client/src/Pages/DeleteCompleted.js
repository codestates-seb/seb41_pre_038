import styled from 'styled-components';
import Header from '../Components/Header';
import SideNav from '../Components/SideNav';
import Footer from '../Components/Footer';
import { useDispatch } from 'react-redux';
import { updateSideNavTab } from '../store/store';

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

const Main = styled.div`
	width: 1100px;
	padding: 24px;

	div {
		padding: 20px 0px 20px 0px;

		h1 {
			margin-bottom: 21px;
			font-size: 21px;
			font-weight: 400;
		}

		p {
			margin-bottom: 13px;
		}
	}
`;

const DeleteCompleted = () => {
	const dispatch = useDispatch();
	dispatch(updateSideNavTab('Home'));

	return (
		<Container>
			<Header />
			<Body>
				<SideNav />
				<Main>
					<div>
						<h1>Profile deleted</h1>
						<p>Your profile has been successfully deleted and you are now logged out.</p>
					</div>
				</Main>
			</Body>
			<Footer />
		</Container>
	);
};

export default DeleteCompleted;
