import styled from 'styled-components';
import Header from '../Components/Header';

const Container = styled.div`
`;

const LogoutWindow = styled.div`
	width: 363px;
	height: 379px;
	background-color: red;
	display: flex;
	flex-direction: column;
`
const MenuHeader = styled.div` 
	width: 343px;
	height: 14.297px;
	padding: 8px 10px;
	background-color: rgb(241, 242, 244);
	line-height:13.297px;

	> .head{
		width: 130px;
		height: 13px;
		color: #0074cc;
		font-weight: bold;
		font-size: 11px;
		text-decoration: none;
	}
`
const MenuMain = styled.div`
	width: 343px;
	height: 14.297px;
	padding: 8px 10px;
	background-color: rgb(244, 249, 250);
	line-height:13.297px;
	display:flex;

	> .main{
		width: 130px;
		height: 13px;
		color: #0074cc;
		font-weight: bold;
		font-size: 12px;
		text-decoration: none;
		line-height:15.297px;
	}

	:hover{
		width: 343px;
		height: 14.297px;
		padding: 8px 10px;
		background-color: rgb(244, 249, 250);
		line-height:13.297px;
		display:flex;
		background-color: hsl(205deg 46% 92%);
	}

	> div > .main{
		width: 130px;
		height: 13px;
		color: #0074cc;
		font-weight: bold;
		font-size: 12px;
		text-decoration: none;
		line-height:15.297px;
	}

	> div > .info {
		color: #0074cc;
		font-size: 12px;
		text-decoration: none;
		margin: 0 4px;
	}

	> div > .info:hover, div > .main:hover , a:hover{
		color:hsl(206deg 100% 57%);

		// 수정대상
		.searchIcon{
			background-color: hsl(205deg 46% 92%);
		}
	}

`


const Logout = () => {

	return (
		<Container>
			<Header />
				<LogoutWindow>
					<MenuHeader>
						<a className='head' href='/'>CURRENT COMMUNITY</a>
					</MenuHeader>
						<MenuMain>
							<div style={{width:'25px',height:'13px',backgroundColor: 'rgb(244, 249, 250)'}}>
								<svg className='searchIcon'
									fill="hsl(210deg 8% 55%)"
									viewBox='10 3 10 50'
									width="23px" height="23px">
									<path d="M26 33v-9h4v13H0V24h4v9h22Z" fill="#BCBBBB"></path>
									<path d="m21.5 0-2.7 2 9.9 13.3 2.7-2L21.5 0ZM26 18.4 13.3 7.8l2.1-2.5 12.7 10.6-2.1 2.5ZM9.1 15.2l15 7 1.4-3-15-7-1.4 3Zm14 10.79.68-2.95-16.1-3.35L7 23l16.1 2.99ZM23 30H7v-3h16v3Z" fill="#F48024"></path>
								</svg>
							</div>
							<div className='main-box'>
								<a className='main' href='/' style={{marginRight:'110px'}}>Stack Overflow</a>
								<a className='info' href='/'>help</a>
								<a className='info' href='/'>chat</a>
								<a className='info' href='/'>logout</a>
							</div>
						</MenuMain>
						<MenuMain>
							<a className='main' href='/'>Meta Stack Overflow</a>
						</MenuMain>
					<MenuHeader>
					<a className='head' href='/'>YOUR COMMUNITIES</a>
					</MenuHeader>
					<MenuMain>
					<div style={{width:'25px',height:'13px',backgroundColor: 'rgb(244, 249, 250)'}}>
								<svg className='searchIcon'
									fill="hsl(210deg 8% 55%)"
									viewBox='10 3 10 50'
									width="23px" height="23px">
									<path d="M26 33v-9h4v13H0V24h4v9h22Z" fill="#BCBBBB"></path>
									<path d="m21.5 0-2.7 2 9.9 13.3 2.7-2L21.5 0ZM26 18.4 13.3 7.8l2.1-2.5 12.7 10.6-2.1 2.5ZM9.1 15.2l15 7 1.4-3-15-7-1.4 3Zm14 10.79.68-2.95-16.1-3.35L7 23l16.1 2.99ZM23 30H7v-3h16v3Z" fill="#F48024"></path>
								</svg>
							</div>
						<a className='main' href='/'>Stack Overflow</a>
						</MenuMain>
					<MenuHeader>
					<a className='head' href='/'>MORE STACK EXCHANGE COMMUNITIES</a>
					</MenuHeader>
				</LogoutWindow>
		</Container>
	);
};

export default Logout;
