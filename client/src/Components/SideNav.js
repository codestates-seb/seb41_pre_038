import styled from 'styled-components';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { updateTab } from '../store/store';

const COLORS = {
	lightGrey: 'rgb(238, 239, 240)',
	mediumGrey: 'rgb(120, 129, 138)',
	grey: '#525960',
	black: 'rgb(12, 13, 14)',
	orange: 'rgb(239, 109, 29)',
};

const Container = styled.nav`
	padding: 24px 0px 12px 0px;
	border-right: 1px solid rgb(208, 212, 215);
	width: 164px;
	min-height: calc(100vh - 53px - 322px); // 100vh - header - footer 높이
	color: ${COLORS.grey};
	font-family: -apple-system, 'system-ui', 'Segoe UI Adjusted', 'Segoe UI', 'Liberation Sans', sans-serif;

	// 버튼이 클릭되었을 때의 스타일
	.selected {
		font-weight: 700;
		background-color: ${COLORS.lightGrey};
		color: ${COLORS.black};
		border-right: 3px solid ${COLORS.orange};
	}
`;

const Home = styled.div`
	height: 34px;
	padding: 4px 4px 4px 8px;
	font-size: 13px;
	line-height: 26px;
	cursor: pointer;

	&:hover {
		color: ${COLORS.black};
	}
`;

const Public = styled.div`
	margin: 16px 0px 4px 8px;
	font-size: 11px;
`;

const Menu = styled.div`
	height: 34px;
	padding: 4px 4px 4px 30px;
	font-size: 13px;
	cursor: pointer;
	line-height: 26px;

	&:hover {
		color: ${COLORS.black};
	}
`;

const IconMenu = styled(Menu)`
	padding: 8px 6px 8px 8px;
	height: 33px;
	display: flex;
	line-height: 17px;
	color: ${COLORS.grey};

	svg {
		margin-right: 4px;
	}
`;

const SideNav = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const selectedTab = useSelector((state) => state.tab);
	console.log(selectedTab);

	const selectMenu = (e) => {
		const text = e.target.textContent;
		if (text === 'Home') {
			dispatch(updateTab('Home'));
			navigate('/');
		} else if (text === 'Questions') {
			dispatch(updateTab('Questions'));
			navigate('/questions');
		} else if (text === 'Tags') {
			dispatch(updateTab('Tags'));
			// navigate('/tags');
		} else if (text === 'Users') {
			dispatch(updateTab('Users'));
			navigate('/members');
		}
	};

	return (
		<Container>
			<Home onClick={selectMenu} className={selectedTab === 'Home' ? 'selected' : ''}>
				Home
			</Home>
			<Public>PUBLIC</Public>
			<IconMenu onClick={selectMenu} className={selectedTab === 'Questions' ? 'selected' : ''}>
				<svg
					aria-hidden='true'
					className='svg-icon iconGlobe'
					width='18'
					height='18'
					viewBox='0 0 18 18'
					fill={selectedTab === 'Questions' ? COLORS.black : COLORS.mediumGrey}
				>
					<path d='M9 1C4.64 1 1 4.64 1 9c0 4.36 3.64 8 8 8 4.36 0 8-3.64 8-8 0-4.36-3.64-8-8-8ZM8 15.32a6.46 6.46 0 0 1-4.3-2.74 6.46 6.46 0 0 1-.93-5.01L7 11.68v.8c0 .88.12 1.32 1 1.32v1.52Zm5.72-2c-.2-.66-1-1.32-1.72-1.32h-1v-2c0-.44-.56-1-1-1H6V7h1c.44 0 1-.56 1-1V5h2c.88 0 1.4-.72 1.4-1.6v-.33a6.45 6.45 0 0 1 3.83 4.51 6.45 6.45 0 0 1-1.51 5.73v.01Z'></path>
				</svg>

				<span>Questions</span>
			</IconMenu>
			<Menu onClick={selectMenu} className={selectedTab === 'Tags' ? 'selected' : ''}>
				Tags
			</Menu>
			<Menu onClick={selectMenu} className={selectedTab === 'Users' ? 'selected' : ''}>
				Users
			</Menu>
		</Container>
	);
};

export default SideNav;
