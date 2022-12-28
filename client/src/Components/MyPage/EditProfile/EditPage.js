import styled, { createGlobalStyle } from 'styled-components';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { updateMyPageNav } from '../../../store/store';
import { useDispatch } from 'react-redux';
import { editNickname, editCountry } from '../../../store/store';
import axios from 'axios';

const GlobalStyle = createGlobalStyle`
  button,
  input {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;

const Container = styled.div`
	width: 100%;
`;

const Title = styled.h1`
	margin-bottom: 24px;
	padding-bottom: 16px;
	border-bottom: 1px solid hsl(210, 8%, 85%);
	font-size: 27px;
	font-weight: 400;
	color: #0c0d0e;
`;

const SubTitle = styled.div`
	margin-bottom: 8px;
	font-size: 21px;
	color: #232629;
`;

const SectionContainer = styled.div`
	margin-bottom: 48px;
	padding: 24px;
	border: 1px solid hsl(210, 8%, 90%);
	border-radius: 5px;
	color: #232629;
`;

const Section = styled.div`
	display: flex;
	flex-direction: column;
`;

const Wrapper = styled.div`
	border-radius: 10px;
	width: 164px;
	height: 164px;
	overflow: hidden;
	position: relative;

	img {
		width: 164px;
		height: 164px;
	}

	a {
		padding: 8px;
		width: 164px;
		color: white;
		background-color: hsl(210, 8%, 35%);
		position: absolute;
		left: 0;
		bottom: 0;

		display: flex;
		justify-content: center;

		&:hover {
			background-color: rgb(52, 56, 60);
		}
	}
`;

const Label = styled.label`
	margin: 13px 0px 4px 0px;
	font-size: 15px;
	font-weight: 600;
	color: #0c0d0e;
`;

const Input = styled.input`
	padding: 7.8px 9.1px;
	border: 1px solid hsl(210, 8%, 75%);
	border-radius: 3px;
	width: 423.3px;

	&:focus {
		border: 1px solid rgb(79, 154, 217);
		outline: 4px solid rgb(217, 234, 246);
	}
`;

const Buttons = styled.div`
	display: flex;

	.save-profile {
		margin: 4px;
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
		margin: 4px;
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

const EditPage = () => {
	const dispatch = useDispatch();
	dispatch(updateMyPageNav('Settings'));

	// 이미지 제외
	const [profileInfo, setProfileInfo] = useState({
		memberId: 1,
		password: 'password123',
		nickname: 'Nickname',
		country: 'Korea',
	});
	const navigate = useNavigate();

	// 인풋에 입력한 값을 profileInfo 상태에 업데이트하는 함수
	const handleInputValue = (key) => (e) => {
		setProfileInfo({ ...profileInfo, [key]: e.target.value });
	};

	// 변경된 profileInfo를 서버로 전송하고, 받은 응답을 store에 업데이트하는 함수
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(profileInfo);
		// axios
		// 	.post(`${process.env.REACT_APP_API_URL}/members/1`, JSON.stringify(profileInfo))
		// 	.then((res) => {
		// 		const { data } = res;
		// 		dispatch(editNickname(data.nickname));
		// 		dispatch(editCountry(data.country));
		// 	})
		// 	.catch((err) => console.log(err));
		// navigate('/members/1/profiles');
	};

	return (
		<Container>
			<GlobalStyle />
			<Title>Edit your profile</Title>
			<SubTitle>Public information</SubTitle>
			<form onSubmit={handleSubmit}>
				<SectionContainer>
					<Section>
						<Label>Profile image</Label>
						<Wrapper>
							<img src='https://www.gravatar.com/avatar/fae9320960fea04d9995ccce46a0844c?s=256&d=identicon&r=PG&f=1' />
							<a>Change picture</a>
						</Wrapper>
					</Section>
					<Section>
						<Label>Display Name</Label>
						<Input onChange={handleInputValue('nickname')} type='text' value={profileInfo.nickname} />
					</Section>
					<Section>
						<Label>Location</Label>
						<Input onChange={handleInputValue('country')} type='text' value={profileInfo.country} />
					</Section>
				</SectionContainer>
				<Buttons>
					<button className='save-profile'>Save Profile</button>
					<button onClick={() => navigate('/members/1/profiles')} className='cancel'>
						Cancel
					</button>
				</Buttons>
			</form>
		</Container>
	);
};

export default EditPage;
