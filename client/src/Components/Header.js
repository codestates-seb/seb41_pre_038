import styled, { createGlobalStyle } from 'styled-components';
import { useState, useRef, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import Logout from './Logout';
import SearchModal from './SearchModal';
import { useSelector } from 'react-redux';

const iconImg = 'https://cdn.sstatic.net/Img/unified/sprites.svg?v=fcc0ea44ba27';

const GlobalStyle = createGlobalStyle`
	* {
		box-sizing: content-box;
	}
`;

const Container = styled.header`
	border-top: solid #e98635;
	border-bottom: 3px solid rgb(241, 241, 241);
	box-shadow: 0 5px 7px -7px rgb(228, 229, 229);
	width: 100vw;
	height: 47px;
	display: flex;
	justify-content: center;
	background-color: rgb(248, 250, 249);
	box-sizing: content-box;

	& > div {
		display: flex;
		flex-direction: row;
		width: 1264px;
		height: 47px;
		background-color: rgb(248, 250, 249);
	}

	// 로고
	.logo {
		width: 140px;
		height: 47px;
		position: relative;
		overflow: hidden;
		padding: 2px 8px;
		margin-top: 3px;

		// 로고 크롭
		.logoCrop {
			top: 0;
			left: 0px;
			position: absolute;
			width: 140px;
		}
	}

	.buttons {
		display: flex;
		justify-content: center;
		align-items: center;

		// Products 버튼
		.products {
			margin-right: 4px;
			padding: 6px 12px;
			border-radius: 30px;
			height: 17px;
			color: #525960;
			font-size: 13px;
			cursor: pointer;

			display: flex;
			justify-content: center;
			align-items: center;
		}

		.products:hover {
			color: #525960;
			background-color: rgb(216, 217, 218);
		}
	}

	// 검색창
	.searchBar {
		position: relative;
	}

	.searchIcon {
		position: absolute;
		top: 16px;
		left: 18px;
		width: 25px;
	}

	.searchInput {
		padding: 7.8px 9.1px 7.8px 36px;
		width: 694px;
		height: 14px;
		margin: 8px 4px;
		border: 1px solid rgb(188, 191, 193);
		border-radius: 3px;
		font-size: 13px;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		color: hsl(210, 8%, 25%);

		&::placeholder {
			position: absolute;
			top: 7px;
		}

		&.smaller {
			width: 609px;
		}
	}
	.searchInput:hover {
		outline-color: hsl(206deg 90% 70%);
		box-shadow: 0px 0px 6px skyblue;
		border-radius: 5px;
	}

	// 프로필창
	.profile {
		width: 50px;
		height: 47px;
		padding-right: 10px;
		cursor: pointer;

		& img {
			width: 20px;
			height: 20px;
			background-color: red;
			line-height: 47px;
			margin: auto 10px;
		}

		& p {
			margin-left: -4px;
			font-size: 14px;
			line-height: 47px;
		}
	}

	.profile:hover {
		width: 50px;
		height: 47px;
		padding-right: 10px;
		background-color: rgb(216, 217, 218);

		& div {
			width: 20px;
			height: 20px;
			background-color: red;
			line-height: 47px;
			margin: auto 10px;
		}

		& p {
			margin-left: -4px;
			font-size: 14px;
			line-height: 47px;
		}
	}

	/* 아이콘 쓰지는 않아도 만들어두고 싶어서 이 속성에 담아서 적용했습니다 */
	.icons {
		padding: 0px 10px;
		padding-top: 14px;
		cursor: pointer;
	}

	.icons:hover {
		background-color: rgb(216, 217, 218);
		> svg {
			fill: black;
		}
	}

	.sign-up {
		margin-left: 4px;
		padding: 8px 10.4px;
		border: 1px solid #0a95ff;
		border-radius: 3px;
		height: 15px;
		color: white;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		background-color: #0a95ff;
		box-shadow: rgba(255, 255, 255, 0.4) 0px 1px 0px inset;
		cursor: pointer;

		display: flex;
		align-items: center;

		&:hover {
			background-color: hsl(206, 100%, 40%);
		}
	}

	.log-in {
		padding: 8px 10.4px;
		border: 1px solid hsl(205, 41%, 63%);
		border-radius: 3px;
		height: 15px;
		color: #39739d;
		background-color: hsl(205, 46%, 92%);
		font-size: 13px;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		box-shadow: rgba(255, 255, 255, 0.7) 0px 1px 0px 0px inset;
		cursor: pointer;

		&:hover {
			background-color: rgb(170, 205, 230);
		}
	}
`;

const Header = () => {
	const [isOpen, setOpen] = useState(false);
	const [openModal, setOpenModal] = useState(false);
	const isLogin = useSelector((state) => state.isLogin);

	return (
		<>
			<Container>
				<GlobalStyle />
				<div>
					{/* 로고 */}
					<Link to='/'>
						<div className='logo'>
							<img className='logoCrop' src={iconImg} alt='로고이미지'></img>
						</div>
					</Link>

					{/* Products 버튼 */}
					<div className='buttons'>
						{!isLogin && <div className='products'>About</div>}
						<div className='products'>Products</div>
						{!isLogin && <div className='products'>For Teams</div>}
					</div>

					{/* 검색창 */}
					<div className='searchBar'>
						<svg className='searchIcon' fill='hsl(210deg 8% 55%)' width='27px' height='27px'>
							<path d='M0 0h24v24H0z' fill='none' />
							<path d='m18 16.5-5.14-5.18h-.35a7 7 0 1 0-1.19 1.19v.35L16.5 18l1.5-1.5ZM12 7A5 5 0 1 1 2 7a5 5 0 0 1 10 0Z' />
						</svg>
						<input
							className={isLogin ? 'searchInput' : 'searchInput smaller'}
							onClick={() => setOpenModal(!openModal)}
							onBlur={() => setOpenModal(false)}
							placeholder='Search...'
						></input>
						{openModal ? <SearchModal></SearchModal> : null}
					</div>
					{isLogin ? (
						<div style={{ display: 'flex' }}>
							{/* 프로필 */}
							<Link to='/members/1/profiles'>
								<div className='profile' style={{ display: 'flex' }}>
									<img src='https://www.gravatar.com/avatar/fae9320960fea04d9995ccce46a0844c?s=256&d=identicon&r=PG&f=1'></img>
									<p>3</p>
								</div>
							</Link>

							{/* 서랍 */}
							<div className='icons'>
								<svg viewBox='0 0 20 18' fill='rgb(82, 90, 95)' width='20px' height='20px'>
									<path d='M4.63 1h10.56a2 2 0 0 1 1.94 1.35L20 10.79V15a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-4.21l2.78-8.44c.25-.8 1-1.36 1.85-1.35Zm8.28 12 2-2h2.95l-2.44-7.32a1 1 0 0 0-.95-.68H5.35a1 1 0 0 0-.95.68L1.96 11h2.95l2 2h6Z' />
								</svg>
							</div>

							{/* 트로피 */}
							<div className='icons'>
								<svg viewBox='0 0 20 18' fill='rgb(82, 90, 95)' width='20px' height='20px'>
									<path d='M15 2V1H3v1H0v4c0 1.6 1.4 3 3 3v1c.4 1.5 3 2.6 5 3v2H5s-1 1.5-1 2h10c0-.4-1-2-1-2h-3v-2c2-.4 4.6-1.5 5-3V9c1.6-.2 3-1.4 3-3V2h-3ZM3 7c-.5 0-1-.5-1-1V4h1v3Zm8.4 2.5L9 8 6.6 9.4l1-2.7L5 5h3l1-2.7L10 5h2.8l-2.3 1.8 1 2.7h-.1ZM16 6c0 .5-.5 1-1 1V4h1v2Z' />
								</svg>
							</div>

							{/* 물음표 */}
							<div className='icons'>
								<svg viewBox='0 0 20 18' fill='rgb(82, 90, 95)' width='20px' height='20px'>
									<path d='M9 1C4.64 1 1 4.64 1 9c0 4.36 3.64 8 8 8 4.36 0 8-3.64 8-8 0-4.36-3.64-8-8-8Zm.81 12.13c-.02.71-.55 1.15-1.24 1.13-.66-.02-1.17-.49-1.15-1.2.02-.72.56-1.18 1.22-1.16.7.03 1.2.51 1.17 1.23ZM11.77 8c-.59.66-1.78 1.09-2.05 1.97a4 4 0 0 0-.09.75c0 .05-.03.16-.18.16H7.88c-.16 0-.18-.1-.18-.15.06-1.35.66-2.2 1.83-2.88.39-.29.7-.75.7-1.24.01-1.24-1.64-1.82-2.35-.72-.21.33-.18.73-.18 1.1H5.75c0-1.97 1.03-3.26 3.03-3.26 1.75 0 3.47.87 3.47 2.83 0 .57-.2 1.05-.48 1.44Z' />
								</svg>
							</div>

							{/* 눈 */}
							<div className='icons'>
								<svg viewBox='0 0 20 18' fill='rgb(82, 90, 95)' width='20px' height='20px'>
									<path d='m8.9844-0.013672a1 1 0 0 0 -0.98438 1.0137v0.38281l-0.55273-0.27734a1 1 0 0 0 -0.48242 -0.11133 1 1 0 0 0 -0.41211 1.9004l1.4473 0.72266v3.6523l-3.1621-1.8262 0.097656-1.6152a1 1 0 0 0 -0.95117 -1.0742 1 1 0 0 0 -1.0449 0.95508l-0.037109 0.61719-0.33008-0.19141a1 1 0 0 0 -0.57422 -0.14062 1 1 0 0 0 -0.42578 1.8711l0.33203 0.19141-0.51758 0.3418a1 1 0 1 0 1.1016 1.668l1.3516-0.89258 3.1621 1.8262-3.1621 1.8262-1.3516-0.89258a1 1 0 0 0 -0.56445 -0.17383 1 1 0 0 0 -0.53711 1.8418l0.51758 0.3418-0.33203 0.19141a1 1 0 1 0 1 1.7305l0.33008-0.19141 0.037109 0.61719a1 1 0 1 0 1.9961 -0.11914l-0.097656-1.6152 3.1621-1.8262v3.6523l-1.4473 0.72266a1 1 0 0 0 0.89453 1.7891l0.55273-0.27734v0.38281a1 1 0 1 0 2 0v-0.38281l0.55273 0.27734a1 1 0 1 0 0.89453 -1.7891l-1.4473-0.72266v-3.6523l3.1621 1.8262-0.097656 1.6152a1 1 0 1 0 1.9961 0.11914l0.037109-0.61719 0.33008 0.19141a1 1 0 1 0 1 -1.7305l-0.33203-0.19141 0.51758-0.3418a1 1 0 0 0 -0.56641 -1.8418 1 1 0 0 0 -0.53516 0.17383l-1.3516 0.89258-3.1621-1.8262 3.1621-1.8262 1.3516 0.89258a1 1 0 1 0 1.1016 -1.668l-0.51758-0.3418 0.33203-0.19141a1 1 0 0 0 -0.45508 -1.8711 1 1 0 0 0 -0.54492 0.14062l-0.33008 0.19141-0.037109-0.61719a1 1 0 0 0 -0.97461 -0.95508 1 1 0 0 0 -1.0215 1.0742l0.097656 1.6152-3.1621 1.8262v-3.6523l1.4473-0.72266a1 1 0 1 0 -0.89453 -1.7891l-0.55273 0.27734v-0.38281a1 1 0 0 0 -1.0156 -1.0137z' />
								</svg>
							</div>

							{/* 커뮤니티 */}
							<div className='icons' onClick={() => setOpen(!isOpen)} style={{ position: 'relative' }}>
								<svg viewBox='0 0 20 18' fill='rgb(82, 90, 95)' width='20px' height='20px'>
									<path d='M15 1H3a2 2 0 0 0-2 2v2h16V3a2 2 0 0 0-2-2ZM1 13c0 1.1.9 2 2 2h8v3l3-3h1a2 2 0 0 0 2-2v-2H1v2Zm16-7H1v4h16V6Z' />
								</svg>
							</div>
						</div>
					) : (
						<div className='buttons'>
							<Link to='/members/login'>
								<button className='log-in'>Log in</button>
							</Link>
							<Link to='/members/sign-up'>
								<button className='sign-up'>Sign up</button>
							</Link>
						</div>
					)}
				</div>
			</Container>
			{isOpen && <Logout />}
		</>
	);
};

export default Header;
