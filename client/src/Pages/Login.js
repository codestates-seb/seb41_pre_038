import styled, { createGlobalStyle } from 'styled-components';
import Header from '../Components/Header';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { setUserInfo, setIsLogin } from '../store/store';
import { useSelector, useDispatch } from 'react-redux';

const GlobalStyle = createGlobalStyle`
  button {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;

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
	justify-content: center;
	align-items: center;
`;

const LoginContainer = styled.div`
	width: 288.45px;
	height: 572.53px;

	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Logo = styled.div`
	width: 100%;
	margin-bottom: 20px;
	cursor: pointer;

	display: flex;
	justify-content: center;

	img {
		height: 37px;
	}
`;

const Button = styled.button`
	width: 100%;
	height: 37.78px;
	margin: 4px 0px;
	padding: 10.4px;
	border: ${(props) => (props.border ? '1px solid rgb(214, 217, 220)' : 'none')};
	border-radius: 5px;
	color: ${(props) => props.txt};
	background-color: ${(props) => props.bg};
	font-size: 13px;
	cursor: pointer;

	display: flex;
	justify-content: center;

	&:hover {
		background-color: ${(props) => props.hover};
	}

	&:focus {
		background-color: ${(props) => props.hover};
		outline: 4px solid ${(props) => props.focus};
	}

	.icons {
		margin-right: 4px;
	}
`;

const Form = styled.form`
	width: 100%;
	/* height: 236px; */
	padding: 24px;
	margin: 16px 0 24px 0;
	border-radius: 5px;
	background-color: white;
	box-shadow: rgba(0, 0, 0, 0.05) 0px 10px 24px 0px, rgba(0, 0, 0, 0.05) 0px 20px 48px 0px, rgba(0, 0, 0, 0.1) 0px 1px 4px 0px;

	display: flex;
	flex-direction: column;
	justify-content: space-between;

	.login-button {
		width: 100%;
		margin: 10px 0px 2px 0px;
		padding: 10.4px;
		border: 1px solid #0a95ff;
		border-radius: 3px;
		color: white;
		background-color: #0a95ff;
		box-shadow: rgba(255, 255, 255, 0.4) 0px 1px 0px inset;
		cursor: pointer;

		&:hover {
			background-color: hsl(206, 100%, 40%);
		}
	}
`;

const InputContainer = styled.div`
	margin: 6px 0px;
	position: relative;

	display: flex;
	flex-direction: column;

	.password-label {
		display: flex;
		justify-content: space-between;

		a {
			color: #0074cc;
			text-decoration: none;
			font-size: 12px;
			line-height: 22px;
			cursor: pointer;

			&:hover {
				color: rgb(14, 138, 255);
			}
		}
	}

	.error-icon {
		position: absolute;
		right: 9px;
		top: 34px;
	}
`;

const Label = styled.label`
	font-size: 15px;
	font-weight: 600;
	margin: 2px 0px 6px 0px;
	padding: 0px 2px;
`;

const Input = styled.input`
	width: 240.45px;
	height: 33.59px;
	padding: 7.8px 9.1px;
	border: 1px solid rgb(186, 191, 196);
	border-radius: 3px;

	&:focus {
		border: 1px solid rgb(79, 154, 217);
		outline: 4px solid rgb(217, 234, 246);
	}

	// 에러 인풋 CSS
	&.error {
		border-color: rgb(222, 79, 84);
		outline-color: rgb(245, 223, 224);
	}
`;

const ErrorMessage = styled.p`
	margin: 2px 0px;
	padding: 2px;
	color: #d0393e;
	font-size: 12px;
`;

const SignUpMessage = styled.div`
	width: 100%;
	margin-bottom: 24px;
	padding: 16px;
	font-size: 13px;
	text-align: center;

	span {
		color: #232629;
	}
	a {
		text-decoration: none;
		color: hsl(206, 100%, 40%);
		cursor: pointer;

		&:hover {
			color: rgb(14, 138, 255);
		}
	}
`;

export const StackOverFlowLogo = (
	<svg aria-hidden='true' className='native svg-icon iconLogoGlyphMd' width='32' height='37' viewBox='0 0 32 37'>
		<path d='M26 33v-9h4v13H0V24h4v9h22Z' fill='#BCBBBB'></path>
		<path
			d='m21.5 0-2.7 2 9.9 13.3 2.7-2L21.5 0ZM26 18.4 13.3 7.8l2.1-2.5 12.7 10.6-2.1 2.5ZM9.1 15.2l15 7 1.4-3-15-7-1.4 3Zm14 10.79.68-2.95-16.1-3.35L7 23l16.1 2.99ZM23 30H7v-3h16v3Z'
			fill='#F48024'
		></path>
	</svg>
);
const GoogleIcon = (
	<svg aria-hidden='true' className='icons' width='18' height='18' viewBox='0 0 18 18'>
		<path d='M16.51 8H8.98v3h4.3c-.18 1-.74 1.48-1.6 2.04v2.01h2.6a7.8 7.8 0 0 0 2.38-5.88c0-.57-.05-.66-.15-1.18Z' fill='#4285F4'></path>
		<path d='M8.98 17c2.16 0 3.97-.72 5.3-1.94l-2.6-2a4.8 4.8 0 0 1-7.18-2.54H1.83v2.07A8 8 0 0 0 8.98 17Z' fill='#34A853'></path>
		<path d='M4.5 10.52a4.8 4.8 0 0 1 0-3.04V5.41H1.83a8 8 0 0 0 0 7.18l2.67-2.07Z' fill='#FBBC05'></path>
		<path d='M8.98 4.18c1.17 0 2.23.4 3.06 1.2l2.3-2.3A8 8 0 0 0 1.83 5.4L4.5 7.49a4.77 4.77 0 0 1 4.48-3.3Z' fill='#EA4335'></path>
	</svg>
);
const GithubIcon = (
	<svg aria-hidden='true' className='icons' width='18' height='18' viewBox='0 0 18 18'>
		<path
			d='M9 1a8 8 0 0 0-2.53 15.59c.4.07.55-.17.55-.38l-.01-1.49c-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.42 7.42 0 0 1 4 0c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48l-.01 2.2c0 .21.15.46.55.38A8.01 8.01 0 0 0 9 1Z'
			fill='white'
		></path>
	</svg>
);
const FacebookIcon = (
	<svg aria-hidden='true' className='icons' width='18' height='18' viewBox='0 0 18 18'>
		<path
			d='M3 1a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H3Zm6.55 16v-6.2H7.46V8.4h2.09V6.61c0-2.07 1.26-3.2 3.1-3.2.88 0 1.64.07 1.87.1v2.16h-1.29c-1 0-1.19.48-1.19 1.18V8.4h2.39l-.31 2.42h-2.08V17h-2.5Z'
			fill='white'
		></path>
	</svg>
);

const ErrorIcon = (
	<svg aria-hidden='true' className='error-icon' width='18' height='18' viewBox='0 0 18 18' fill='rgb(212, 68, 72)'>
		<path d='M9 17c-4.36 0-8-3.64-8-8 0-4.36 3.64-8 8-8 4.36 0 8 3.64 8 8 0 4.36-3.64 8-8 8ZM8 4v6h2V4H8Zm0 8v2h2v-2H8Z'></path>
	</svg>
);

const Login = () => {
	const navigate = useNavigate();
	const isLogin = useSelector((state) => state.isLogin);
	const dispatch = useDispatch();
	const [loginInfo, setLoginInfo] = useState({
		loginId: '',
		password: '',
	});
	const [idErrorMessage, setIdErrorMessage] = useState('');
	const [pwErrorMessage, setPwErrorMessage] = useState('');
	const [clickedLoginBtn, setClickedLoginBtn] = useState(false);

	// 로그인 상태인데 로그인 페이지로 들어오면 홈으로 보낸다.
	useEffect(() => {
		if (isLogin) {
			navigate('/');
		}
	}, []);

	// ID, Password 인풋에 입력된 값을 loginInfo로 업데이트하는 함수
	const handleInputValue = (key) => (e) => {
		setLoginInfo({ ...loginInfo, [key]: e.target.value });
	};

	// 폼을 submit했을 때 엔드포인트로 loginInfo를 POST하는 함수
	const handleSubmit = (e) => {
		e.preventDefault();
		printErrorMessage();
		setClickedLoginBtn(true);

		return axios
			.post(`${process.env.REACT_APP_API_URL}/members/login`, JSON.stringify(loginInfo))
			.then((res) => {
				console.log('logged in!', res.data);

				// 임시로 유저 1 데이터 가져오기
				// .get(`${process.env.REACT_APP_API_URL}/members/19`)
				// .then((res) => {
				const { data } = res.data;

				dispatch(setIsLogin(true));

				dispatch(
					setUserInfo({
						memberId: data.memberId,
						loginId: data.loginId,
						password: data.password,
						email: data.email,
						nickname: data.nickname,
						country: data.country,
					})
				);

				navigate('/');
			})
			.catch((err) => {
				console.log(err);
				setIdErrorMessage('The email or password is incorrect.');
			});
	};

	// ID, Password 인풋이 비어있으면 에러 메세지를 띄우는 함수
	const printErrorMessage = () => {
		if (clickedLoginBtn) {
			if (!loginInfo.loginId) {
				setIdErrorMessage('ID cannot be empty.');
			} else {
				setIdErrorMessage('');
			}
			if (!loginInfo.password) {
				setPwErrorMessage('Password cannot be empty.');
			} else {
				setPwErrorMessage('');
			}
		}
	};

	return (
		<Container>
			<GlobalStyle />
			<Header />
			<Body>
				<LoginContainer>
					<Logo onClick={() => navigate('/')}>{StackOverFlowLogo}</Logo>

					{/* 버튼들 */}
					<Button bg='white' txt='#3B4045' border hover='hsl(210, 8%, 97.5%)' focus='rgb(218, 219, 221)'>
						{GoogleIcon}
						<span>Log in with Google</span>
					</Button>
					<Button bg='#2F3337' txt='white' border hover='hsl(210, 8%, 15%)' focus='rgb(218, 219, 221)'>
						{GithubIcon}
						<span>Log in with GitHub</span>
					</Button>
					<Button bg='#385499' txt='white' hover='#314a86' focus='rgb(203, 220, 234)'>
						{FacebookIcon}
						<span>Log in with Facebook</span>
					</Button>

					{/* 로그인 폼 */}
					<Form onSubmit={handleSubmit}>
						<InputContainer>
							<Label>ID</Label>
							<Input onChange={handleInputValue('loginId')} onBlur={printErrorMessage} type='text' className={idErrorMessage && 'error'} />
							{idErrorMessage && ErrorIcon}
							<ErrorMessage>{idErrorMessage}</ErrorMessage>
						</InputContainer>
						<InputContainer>
							<div className='password-label'>
								<Label>Password</Label>
								<a onClick={() => navigate('/members/help/password')}>Forgot password?</a>
							</div>
							<Input onChange={handleInputValue('password')} onBlur={printErrorMessage} type='password' className={pwErrorMessage && 'error'} />
							{pwErrorMessage && ErrorIcon}
							<ErrorMessage>{pwErrorMessage}</ErrorMessage>
						</InputContainer>
						<button className='login-button'>Log in</button>
					</Form>
					<SignUpMessage>
						<span>Don't have an account? </span>
						<a onClick={() => navigate('/members/sign-up')}>Sign up</a>
					</SignUpMessage>
				</LoginContainer>
			</Body>
		</Container>
	);
};

export default Login;
