import styled, { createGlobalStyle } from 'styled-components';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { setIsLogin, setUserInfo } from '../../../store/store';

const GlobalStyle = createGlobalStyle`
  button {
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

const Body = styled.div`
	font-size: 15px;

	p {
		margin-bottom: 16.5px;
	}

	ul {
		margin: 0px 0px 16.5px 30px;

		li {
			margin-bottom: 8.25px;
		}
	}
`;

const CheckLabel = styled.div`
	display: flex;
	align-items: flex-start;

	input {
		margin: 7px 4px 4px 4px;
		cursor: pointer;
	}

	label {
		margin: 4px;
		padding: 0px 2px 0px 2px;
		cursor: pointer;
	}
`;

const DeleteBtn = styled.button`
	margin-top: 20px;
	padding: 10.4px;
	border: 1px solid #d0393e;
	border-radius: 3px;
	height: 37.78px;
	color: white;
	background-color: #d0393e;
	font-size: 13px;
	box-shadow: rgba(255, 255, 255, 0.4) 0px 1px 0px inset;
	cursor: pointer;

	&:hover {
		background-color: hsl(358, 64%, 41%);
	}

	&:disabled {
		border-color: rgb(229, 153, 155);
		background-color: rgb(229, 153, 155);
		box-shadow: none;
		cursor: default;
	}
`;

const DeletePage = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const user = useSelector((state) => state.user);
	const [checked, setChecked] = useState(false);

	// 체크박스의 체크여부에 따라 checked 상태를 업데이트해주는 함수
	const handleCheckbox = (e) => {
		if (e.target.checked) {
			setChecked(true);
		} else {
			setChecked(false);
		}
	};

	// 탈퇴할 userId를 서버로 전송하고, store에서 해당 유저를 삭제하는 함수
	const deleteUser = () => {
		
		return axios
			.delete(`${process.env.REACT_APP_API_URL}/members/${user.memberId}`)
			.then((res) => {
				console.log(`deleted User ${user.nickname}`);

				dispatch(setIsLogin(false));
				dispatch(setUserInfo(
					{
						memberId: null,
						loginId: null,
						password: null,
						email: null,
						nickname: null,
						country: null,
					}
				));
				navigate('/members/delete/completed');
			})
			.catch((err) => console.log(err));
		
	};

	return (
		<Container>
			<GlobalStyle />
			<Title>Delete profile</Title>
			<Body>
				<p>Before confirming that you would like your profile deleted, we'd like to take a moment to explain the implications of deletion:</p>
				<ul>
					<li>
						Deletion is irreversible, and you will have no way to regain any of your original content, should this deletion be carried out and you
						change your mind later on.
					</li>
					<li>
						Your questions and answers will remain on the site, but will be disassociated and anonymized (the author will be listed as "user20008919")
						and will not indicate your authorship even if you later return to the site.
					</li>
				</ul>
				<p>
					Confirming deletion will only delete your profile on Stack Overflow - it will not affect any of your other profiles on the Stack Exchange
					network. If you want to delete multiple profiles, you'll need to visit each site separately and request deletion of those individual
					profiles.
				</p>
				<CheckLabel>
					<input onClick={handleCheckbox} type='checkbox' id='confirm-message' />
					<label htmlFor='confirm-message'>
						I have read the information stated above and understand the implications of having my profile deleted. I wish to proceed with the deletion
						of my profile.
					</label>
				</CheckLabel>
				{checked ? <DeleteBtn onClick={deleteUser}>Delete profile</DeleteBtn> : <DeleteBtn disabled>Delete profile</DeleteBtn>}
			</Body>
		</Container>
	);
};

export default DeletePage;
