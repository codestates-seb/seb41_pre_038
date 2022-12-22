import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../Components/Header';

const Container = styled.main`
	background-color: #f1f2f3;

	& > div {
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 1264px;
		padding: 24px;
		margin: 0 auto;
	}

	span {
		cursor: pointer;
	}

	button {
		cursor: pointer;
	}

	a {
		text-decoration: none;
	}
`;

const Info = styled.section`
	width: 410.88px;
	height: 285px;
	margin: 0 48px 128px 0;
	color: #232629;

	& > div {
		display: flex;
		margin: 0 0 24px 0;
	}

	h1 {
		font-size: 27px;
		font-weight: 400;
		margin: 0 0 32px;
	}

	svg {
		margin: 0 8px 0 0;
		fill: #0a95ff;
	}

	p,
	span {
		font-size: 13px;
		color: #6a737c;
	}

	span {
		color: #0074cc;
	}
`;

const Sign = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 316px;

	div {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
	}

	button {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 4px;
		width: 100%;
		height: 37.8px;
		margin: 4px 0;
		border: 1px solid #d6d9dc;
		border-radius: 5px;
		color: #ffffff;
	}

	& > div:nth-child(2) {
		padding: 24px;
		margin: 16px 0 24px 0;
		background-color: #ffffff;
		border-radius: 5px;
		box-shadow: rgba(0, 0, 0, 0.05) 0 10px 24px 0, rgba(0, 0, 0, 0.05) 0 20px 48px 0, rgba(0, 0, 0, 0.1) 0 1px 4px 0;
	}

	form {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100%;

		& > div {
			margin: 6px 0;
		}

		& div:nth-child(4) {
			height: 156px;
			background-color: #f1f2f3;
			border: 1px solid #d6d9dc;
			border-radius: 5px;

			& > div {
				display: flex;
				flex-direction: row;
				width: 156px;
				height: 136px;
				box-shadow: rgba(0, 0, 0, 0.05) 0 10px 24px 0, rgba(0, 0, 0, 0.05) 0 20px 48px 0, rgba(0, 0, 0, 0.1) 0 1px 4px 0;
			}

			label {
				font-size: 14px;
				font-weight: 400;
				align-self: center;
				margin: 0;
			}

			input {
				width: 28px;
				height: 28px;
				margin: 0 10px;
			}
		}

		& div:nth-child(5) {
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: flex-start;

			input {
				width: 13px;
				height: 13px;
			}

			label {
				font-size: 12px;
				font-weight: 400;
				margin: 0;
			}

			svg {
				width: 50px;
			}
		}

		button:last-of-type {
			background-color: #0a95ff;
		}

		& > p:last-of-type {
			margin: 32px 0 0 0;
		}
	}

	p {
		color: #6a737c;
		font-size: 12px;
		margin: 4px 0;
	}

	span {
		color: #0074cc;
	}

	label {
		align-self: flex-start;
		color: #0c0d0e;
		font-size: 15px;
		font-weight: 600;
		padding: 0 2px;
		margin: 4px 0;
	}

	input {
		width: 100%;
		padding: 7.8px 9.1px;
		border: 1px solid #babfc4;
		border-radius: 4px;
	}

	.google {
		color: #3b4045;
		background-color: #ffffff;
	}

	.github {
		background-color: #2f3337;
	}

	.facebook {
		background-color: #385499;
	}

	& > div:last-child {
		padding: 16px;
		margin: 0 0 24px 0;

		p {
			font-size: 13px;
			color: #232629;
			margin: 0 0 12px 0;
		}
	}
`;

const Signup = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = (event) => {
		event.preventDefault();
		if (!name) {
			console.log('이름을 입력하세요.');
			return;
		}
		if (!email) {
			console.log('이메일을 입력하세요.');
			return;
		}
		if (!password) {
			console.log('비밀번호를 입력하세요.');
			return;
		}
		console.log(name, email, password);
		setName('');
		setEmail('');
		setPassword('');
	};

	return (
		<div>
			<Header />
			<Container>
				<div>
					<Info>
						<h1>Join the Stack Overflow community</h1>
						<div>
							<div>
								<svg width='26' height='26'>
									<path opacity='.5' d='M4.2 4H22a2 2 0 012 2v11.8a3 3 0 002-2.8V5a3 3 0 00-3-3H7a3 3 0 00-2.8 2z'></path>
									<path d='M1 7c0-1.1.9-2 2-2h18a2 2 0 012 2v12a2 2 0 01-2 2h-2v5l-5-5H3a2 2 0 01-2-2V7zm10.6 11.3c.7 0 1.2-.5 1.2-1.2s-.5-1.2-1.2-1.2c-.6 0-1.2.4-1.2 1.2 0 .7.5 1.1 1.2 1.2zm2.2-5.4l1-.9c.3-.4.4-.9.4-1.4 0-1-.3-1.7-1-2.2-.6-.5-1.4-.7-2.4-.7-.8 0-1.4.2-2 .5-.7.5-1 1.4-1 2.8h1.9v-.1c0-.4 0-.7.2-1 .2-.4.5-.6 1-.6s.8.1 1 .4a1.3 1.3 0 010 1.8l-.4.3-1.4 1.3c-.3.4-.4 1-.4 1.6 0 0 0 .2.2.2h1.5c.2 0 .2-.1.2-.2l.1-.7.5-.7.6-.4z'></path>
								</svg>
							</div>
							<div>Get unstuck — ask a question</div>
						</div>
						<div>
							<div>
								<svg width='26' height='26'>
									<path d='M12 .7a2 2 0 013 0l8.5 9.6a1 1 0 01-.7 1.7H4.2a1 1 0 01-.7-1.7L12 .7z'></path>
									<path opacity='.5' d='M20.6 16H6.4l7.1 8 7-8zM15 25.3a2 2 0 01-3 0l-8.5-9.6a1 1 0 01.7-1.7h18.6a1 1 0 01.7 1.7L15 25.3z'></path>
								</svg>
							</div>
							<div>Unlock new privileges like voting and commenting</div>
						</div>
						<div>
							<div>
								<svg width='26' height='26'>
									<path d='M14.8 3a2 2 0 00-1.4.6l-10 10a2 2 0 000 2.8l8.2 8.2c.8.8 2 .8 2.8 0l10-10c.4-.4.6-.9.6-1.4V5a2 2 0 00-2-2h-8.2zm5.2 7a2 2 0 110-4 2 2 0 010 4z'></path>
									<path opacity='.5' d='M13 0a2 2 0 00-1.4.6l-10 10a2 2 0 000 2.8c.1-.2.3-.6.6-.8l10-10a2 2 0 011.4-.6h9.6a2 2 0 00-2-2H13z'></path>
								</svg>
							</div>
							<div>Save your favorite tags, filters, and jobs</div>
						</div>
						<div>
							<div>
								<svg width='26' height='26'>
									<path d='M21 4V2H5v2H1v5c0 2 2 4 4 4v1c0 2.5 3 4 7 4v3H7s-1.2 2.3-1.2 3h14.4c0-.6-1.2-3-1.2-3h-5v-3c4 0 7-1.5 7-4v-1c2 0 4-2 4-4V4h-4zM5 11c-1 0-2-1-2-2V6h2v5zm11.5 2.7l-3.5-2-3.5 1.9L11 9.8 7.2 7.5h4.4L13 3.8l1.4 3.7h4L15.3 10l1.4 3.7h-.1zM23 9c0 1-1 2-2 2V6h2v3z'></path>
								</svg>
							</div>
							<div>Earn reputation and badges</div>
						</div>
						<div>
							<div>
								<p>Collaborate and share knowledge with a private group for FREE.</p>
								<span>Get Stack Overflow for Teams free for up to 50 users.</span>
							</div>
						</div>
					</Info>
					<Sign>
						<div>
							<button className='Oauth google' onClick={() => console.log('구글 회원가입')}>
								<svg aria-hidden='true' width='18' height='18' viewBox='0 0 18 18'>
									<path
										d='M16.51 8H8.98v3h4.3c-.18 1-.74 1.48-1.6 2.04v2.01h2.6a7.8 7.8 0 0 0 2.38-5.88c0-.57-.05-.66-.15-1.18Z'
										fill='#4285F4'></path>
									<path d='M8.98 17c2.16 0 3.97-.72 5.3-1.94l-2.6-2a4.8 4.8 0 0 1-7.18-2.54H1.83v2.07A8 8 0 0 0 8.98 17Z' fill='#34A853'></path>
									<path d='M4.5 10.52a4.8 4.8 0 0 1 0-3.04V5.41H1.83a8 8 0 0 0 0 7.18l2.67-2.07Z' fill='#FBBC05'></path>
									<path d='M8.98 4.18c1.17 0 2.23.4 3.06 1.2l2.3-2.3A8 8 0 0 0 1.83 5.4L4.5 7.49a4.77 4.77 0 0 1 4.48-3.3Z' fill='#EA4335'></path>
								</svg>
								Sign up with Google
							</button>
							<button className='Oauth github' onClick={() => console.log('깃허브 회원가입')}>
								<svg aria-hidden='true' width='18' height='18' viewBox='0 0 18 18' fill='#ffffff'>
									<path d='M9 1a8 8 0 0 0-2.53 15.59c.4.07.55-.17.55-.38l-.01-1.49c-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.42 7.42 0 0 1 4 0c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48l-.01 2.2c0 .21.15.46.55.38A8.01 8.01 0 0 0 9 1Z'></path>
								</svg>
								Sign up with GitHub
							</button>
							<button className='Oauth facebook' onClick={() => console.log('페이스북 회원가입')}>
								<svg aria-hidden='true' width='18' height='18' viewBox='0 0 18 18' fill='#ffffff'>
									<path d='M3 1a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H3Zm6.55 16v-6.2H7.46V8.4h2.09V6.61c0-2.07 1.26-3.2 3.1-3.2.88 0 1.64.07 1.87.1v2.16h-1.29c-1 0-1.19.48-1.19 1.18V8.4h2.39l-.31 2.42h-2.08V17h-2.5Z'></path>
								</svg>
								Sign up with Facebook
							</button>
						</div>
						<div>
							<form onSubmit={handleSubmit}>
								<div>
									<label htmlFor='name'>Display name</label>
									<input type='text' id='name' value={name} onChange={(event) => setName(event.target.value)} />
								</div>
								<div>
									<label htmlFor='email'>Email</label>
									<input type='email' id='email' value={email} onChange={(event) => setEmail(event.target.value)} />
								</div>
								<div>
									<label htmlFor='password'>Password</label>
									<input type='password' id='password' value={password} onChange={(event) => setPassword(event.target.value)} />
									<p>Passwords must contain at least eight characters, including at least 1 letter and 1 number.</p>
								</div>
								<div>
									<div>
										<input type='checkbox' />
										<label htmlFor=''>I'm not a robot</label>
									</div>
								</div>
								<div>
									<input type='checkbox' id='opt' />
									<label htmlFor='opt'>
										Opt-in to receive occasional product updates, user research invitations, company announcements, and digests.
									</label>
									<svg aria-hidden='true' width='14' height='14' viewBox='0 0 14 14' fill='#6A737C'>
										<path d='M7 1C3.74 1 1 3.77 1 7c0 3.26 2.77 6 6 6 3.27 0 6-2.73 6-6s-2.73-6-6-6Zm1.06 9.06c-.02.63-.48 1.02-1.1 1-.57-.02-1.03-.43-1.01-1.06.02-.63.5-1.04 1.08-1.02.6.02 1.05.45 1.03 1.08Zm.73-3.07-.47.3c-.2.15-.36.36-.44.6a3.6 3.6 0 0 0-.08.65c0 .04-.03.14-.16.14h-1.4c-.14 0-.16-.09-.16-.13-.01-.5.11-.99.36-1.42A4.6 4.6 0 0 1 7.7 6.07c.15-.1.21-.21.3-.33.18-.2.28-.47.28-.74.01-.67-.53-1.14-1.18-1.14-.9 0-1.18.7-1.18 1.46H4.2c0-1.17.31-1.92.98-2.36a3.5 3.5 0 0 1 1.83-.44c.88 0 1.58.16 2.2.62.58.42.88 1.02.88 1.82 0 .5-.17.9-.43 1.24-.15.2-.44.47-.86.79h-.01Z'></path>
									</svg>
								</div>
								<div>
									<button type='submit'>Sign up</button>
								</div>
								<p>
									By clicking “Sign up”, you agree to our <span>terms of service</span>, <span>privacy policy</span> and <span>cookie policy</span>
								</p>
							</form>
						</div>
						<div>
							<p>
								Already have an account?{' '}
								<Link to='/login'>
									<span>Log in</span>
								</Link>
							</p>
							<p>
								Are you an employer?{' '}
								<span>
									Sign up on Talent{' '}
									<svg aria-hidden='true' width='14' height='14' viewBox='0 0 14 14' fill='#0074cc'>
										<path d='M5 1H3a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V9h-2v2H3V3h2V1Zm2 0h6v6h-2V4.5L6.5 9 5 7.5 9.5 3H7V1Z'></path>
									</svg>
								</span>
							</p>
						</div>
					</Sign>
				</div>
			</Container>
		</div>
	);
};

export default Signup;
