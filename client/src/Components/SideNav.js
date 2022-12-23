import styled, { createGlobalStyle } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const GlobalStyle = createGlobalStyle`
	* {
		box-sizing: content-box;
	}
`;

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
	color: ${COLORS.grey};
	font-family: -apple-system, 'system-ui', 'Segoe UI Adjusted', 'Segoe UI', 'Liberation Sans', sans-serif;

	// 버튼이 클릭되었을 때의 스타일
	.clicked {
		font-weight: 700;
		background-color: ${COLORS.lightGrey};
		color: ${COLORS.black};
		border-right: 3px solid ${COLORS.orange};

		span {
			color: ${COLORS.black};
		}
	}
`;

const Home = styled.div`
	height: 26px;
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
	height: 26px;
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
	height: 17px;
	display: flex;
	line-height: 17px;
	color: ${COLORS.grey};

	.icon {
		font-size: 16px;
		margin: -1px 4px 0 0;
		line-height: 18px;
		color: ${COLORS.mediumGrey};
	}
`;

const SideNav = () => {
	const [selected, setSelected] = useState('Home');
	console.log(selected);

	return (
		<>
			<GlobalStyle />
			<Container>
				<Home onClick={() => setSelected('Home')} className={selected === 'Home' ? 'clicked' : ''}>
					Home
				</Home>
				<Public>PUBLIC</Public>
				<IconMenu onClick={() => setSelected('Questions')} className={selected === 'Questions' ? 'clicked' : ''}>
					<span className='icon'>
						<FontAwesomeIcon icon={faEarthAmericas} />
					</span>
					<span>Questions</span>
				</IconMenu>
				<Menu onClick={() => setSelected('Tags')} className={selected === 'Tags' ? 'clicked' : ''}>
					Tags
				</Menu>
				<Menu onClick={() => setSelected('Users')} className={selected === 'Users' ? 'clicked' : ''}>
					Users
				</Menu>
			</Container>
		</>
	);
};

export default SideNav;
