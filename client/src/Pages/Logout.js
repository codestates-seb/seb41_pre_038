import styled from 'styled-components';
import Header from '../Components/Header';
import { StackOverFlowLogo } from './Login';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setIsLogin, setUserInfo } from '../store/store';

const Container = styled.div`
	width: 100%;
	height: 100vh;
	background-color: rgb(239, 240, 241);

	display: flex;
	flex-direction: column;
`;

// 헤더를 제외한 나머지 공간
const Body = styled.div`
	width: 100%;
	flex-grow: 1;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const Message = styled.div`
	margin-bottom: 24px;
	font-size: 21px;
	text-align: center;
`;

const LogoutContainer = styled.div`
	margin: 0px 105.3px 24px 105.3px;
	padding: 24px;
	border-radius: 7px;
	width: 316px;
	background-color: white;
	box-shadow: rgba(0, 0, 0, 0.05) 0px 10px 24px 0px, rgba(0, 0, 0, 0.05) 0px 20px 48px 0px, rgba(0, 0, 0, 0.1) 0px 1px 4px 0px;

	display: flex;
	flex-direction: column;
`;

const Links = styled.div`
	margin-bottom: 16px;
	padding-bottom: 12px;
	border-bottom: 1px solid hsl(210, 8%, 85%);

	div {
		width: 276px;
		height: 27.61px;

		svg {
			margin-right: 4px;
			width: 16px;
			height: 16px;
			cursor: pointer;
		}

		a {
			margin: 4px;
			font-size: 15px;
		}
	}
`;

const Checkbox = styled.div`
	margin-bottom: 16px;

	display: flex;
	align-items: center;

	input {
		margin-right: 4px;
		border: 1px solid hsl(210, 8%, 75%);
		border-radius: 3px;
		width: 13px;
		height: 13px;
		cursor: pointer;
	}

	label {
		cursor: pointer;
	}
`;

const Buttons = styled.div`
	display: flex;

	.log-out {
		margin: 2px;
		padding: 10.4px;
		border: 1px solid #0a95ff;
		border-radius: 3px;
		height: 37.78px;
		color: white;
		background-color: #0a95ff;
		font-size: 13px;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		box-shadow: rgba(255, 255, 255, 0.4) 0px 1px 0px inset;
		cursor: pointer;

		&:hover {
			background-color: hsl(206, 100%, 40%);
		}
	}

	.cancel {
		margin: 2px;
		padding: 10.4px;
		border: none;
		border-radius: 3px;
		background: none;
		color: #0074cc;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		cursor: pointer;

		&:hover {
			background-color: hsl(206, 100%, 97%);
		}
	}
`;

const Info = styled.div`
	margin-top: 32px;
	width: 268px;
	font-size: 12px;
	color: #6a737c;
`;

const Logout = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const logout = () => {
		console.log('logged out!');
		// return axios
		// 	.patch(`${process.env.REACT_APP_API_URL}/members/logout`)
		// 	.then((res) => console.log(res.data))
		// 	.catch((err) => console.log(err));

		dispatch(setIsLogin(false));

		dispatch(
			setUserInfo({
				memberId: null,
				loginId: null,
				password: null,
				email: null,
				nickname: null,
				country: null,
			})
		);

		navigate('/');
	};

	return (
		<Container>
			<Header />
			<Body>
				<Message>
					Clicking “Log out” will log you out of the following
					<br />
					domains on this device:
				</Message>
				<LogoutContainer>
					<Links>
						<div>
							<span>{StackOverFlowLogo}</span>
							<a>askubuntu.com</a>
						</div>
						<div>
							<span>{StackOverFlowLogo}</span>
							<a>mathoverflow.net</a>
						</div>
						<div>
							<span>{StackOverFlowLogo}</span>
							<a>serverfault.com</a>
						</div>
						<div>
							<span>{StackOverFlowLogo}</span>
							<a>stackapps.com</a>
						</div>
						<div>
							<span>{StackOverFlowLogo}</span>
							<a>stackexchange.com</a>
						</div>
						<div>
							<span>{StackOverFlowLogo}</span>
							<a>stackoverflow.com</a>
						</div>
						<div>
							<span>{StackOverFlowLogo}</span>
							<a>superuser.com</a>
						</div>
					</Links>
					<Checkbox>
						<input id='logout-checkbox' type='checkbox' />
						<label htmlFor='logout-checkbox'>Log out on all devices</label>
					</Checkbox>
					<Buttons>
						<button onClick={logout} className='log-out'>
							Log out
						</button>
						<button onClick={() => navigate('/')} className='cancel'>
							Cancel
						</button>
					</Buttons>
					<Info>If you’re on a shared computer, remember to log out of your Open ID provider (Facebook, Google, Stack Exchange, etc.) as well.</Info>
				</LogoutContainer>
			</Body>
		</Container>
	);
};

export default Logout;
