import styled from 'styled-components';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { updateMyPageNav } from '../../store/store';
import { useParams } from 'react-router-dom';

const Container = styled.div`
	margin: 4px 0px 20px 0px;

	display: flex;
	align-items: center;
`;

const NavMenu = styled.div`
	margin-right: 5px;
	padding: 6px 12px;
	border-radius: 20px;
	color: #535960;
	cursor: pointer;

	&:hover {
		background-color: hsl(210, 8%, 90%);
	}

	&.selected {
		color: white;
		background-color: #f48225;

		&:hover {
			background-color: rgb(213, 93, 14);
		}
	}
`;

const Navbar = () => {
	const params = useParams();
	// 맨 처음 렌더링 때는 Activity 탭으로 설정
	useEffect(() => {
		dispatch(updateMyPageNav('Activity'));
	}, []);

	const navigate = useNavigate();
	const dispatch = useDispatch();
	const selectedTab = useSelector((state) => state.tab.myPageNav);
	const selectMenu = (e) => {
		const text = e.target.textContent;
		if (text === 'Profile') {
			dispatch(updateMyPageNav('Profile'));
			// navigate();
		} else if (text === 'Activity') {
			dispatch(updateMyPageNav('Activity'));
			navigate(`/members/${params.memberId}`);
		}
	};

	return (
		<Container>
			<NavMenu onClick={selectMenu} className={selectedTab === 'Profile' ? 'selected' : ''}>
				Profile
			</NavMenu>
			<NavMenu onClick={selectMenu} className={selectedTab === 'Activity' ? 'selected' : ''}>
				Activity
			</NavMenu>
		</Container>
	);
};

export default Navbar;
