import styled from 'styled-components';
import Header from '../Components/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

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
	margin-bottom: 24px;
	cursor: pointer;

	display: flex;
	justify-content: center;

	img {
		height: 37px;
	}
`;

const Button = styled.button`
	width: 100%;
	margin: 4px 0px;
	padding: 10.4px 10.4px 10.4px 35px;
	border: ${(props) => (props.border ? '1px solid rgb(214, 217, 220)' : 'none')};
	border-radius: 5px;
	color: ${(props) => props.txt};
	background-color: ${(props) => props.bg};
	font-size: 13px;
	position: relative;
	cursor: pointer;

	&:hover {
		background-color: ${(props) => props.hover};
	}

	&:focus {
		background-color: ${(props) => props.hover};
		outline: 4px solid ${(props) => props.focus};
	}

	.google-icon {
		width: 16px;
		position: absolute;
		top: 9px;
		left: 79px;
	}

	.github-icon {
		font-size: 17px;
		position: absolute;
		top: 8px;
		left: 79px;
	}

	.facebook-icon {
		width: 16px;
		position: absolute;
		top: 9px;
		left: 72px;
		border-radius: 2px;
	}
`;

const Form = styled.form`
	width: 100%;
	height: 236px;
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
		border: none;
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
	display: flex;
	flex-direction: column;
	margin: 6px 0px;

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

const Login = () => {
	const navigate = useNavigate();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(email, password);
	};

	return (
		<Container>
			<Header />
			<Body>
				<LoginContainer>
					<Logo onClick={() => navigate('/')}>
						<img src='./Login-page-logo.png' />
					</Logo>

					{/* 버튼들 */}
					<Button bg='white' txt='#3B4045' border hover='hsl(210, 8%, 97.5%)' focus='rgb(218, 219, 221)'>
						<img className='google-icon' src='./google-icon.png' />
						Log in with Google
					</Button>
					<Button bg='#2F3337' txt='white' border hover='hsl(210, 8%, 15%)' focus='rgb(218, 219, 221)'>
						<span className='github-icon'>
							<FontAwesomeIcon icon={faGithub} />
						</span>
						Log in with GitHub
					</Button>
					<Button bg='#385499' txt='white' hover='#314a86' focus='rgb(203, 220, 234)'>
						<img className='facebook-icon' src='./facebook-icon.png' />
						Log in with Facebook
					</Button>

					{/* 로그인 폼 */}
					<Form onSubmit={handleSubmit}>
						<InputContainer>
							<Label>Email</Label>
							<Input value={email} onChange={(e) => setEmail(e.target.value)} />
						</InputContainer>
						<InputContainer>
							<div className='password-label'>
								<Label>Password</Label>
								<a onClick={() => navigate('/forgotpassword')}>Forgot password?</a>
							</div>
							<Input value={password} onChange={(e) => setPassword(e.target.value)} type='password' />
						</InputContainer>
						<button className='login-button'>Log in</button>
					</Form>
					<SignUpMessage>
						<span>Don't have an account? </span>
						<a onClick={() => navigate('/signup')}>Sign up</a>
					</SignUpMessage>
				</LoginContainer>
			</Body>
		</Container>
	);
};

export default Login;
