import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { updateSettingNav } from '../../store/store';
import { useDispatch } from 'react-redux';

const Container = styled.div`
	width: 100%;

	display: flex;
	justify-content: space-between;
`;

const Image = styled.div`
	img {
		margin: 8px;
		border-radius: 5px;
		width: 128px;
		height: 128px;
		box-shadow: 0 1px 5px rgba(0, 0, 0, 0.08), 0 1px 5px rgba(0, 0, 0, 0.08);
		cursor: pointer;
	}
`;

const NickName = styled.div`
	margin: 4px 4px 12px 4px;
	color: #232629;
	font-size: 34px;
`;

const Info = styled.div`
	margin-left: 5px;
	color: #6a737c;

	display: flex;
	flex-direction: column;
	justify-content: center;
	flex-grow: 1;

	.icon {
		margin-right: 3px;
	}

	.text {
		margin-right: 8px;
	}
`;

const Detail = styled.div`
	display: flex;
`;

const Edit = styled.div`
	a {
		margin: 3px;
		padding: 9.6px;
		border: 1px solid hsl(210, 8%, 65%);
		border-radius: 3px;
		color: #6a737c;
		background: none;
		font-size: 12px;

		display: flex;
		align-items: center;

		&:hover {
			background-color: rgb(247, 248, 248);
		}

		.icon {
			margin-right: 3px;
		}
	}
`;

const CakeIcon = (
	<svg aria-hidden='true' className='svg-icon iconCake' width='18' height='18' viewBox='0 0 18 18' fill='#6a737c'>
		<path d='M9 4.5a1.5 1.5 0 0 0 1.28-2.27L9 0 7.72 2.23c-.14.22-.22.48-.22.77 0 .83.68 1.5 1.5 1.5Zm3.45 7.5-.8-.81-.81.8c-.98.98-2.69.98-3.67 0l-.8-.8-.82.8c-.49.49-1.14.76-1.83.76-.55 0-1.3-.17-1.72-.46V15c0 1.1.9 2 2 2h10a2 2 0 0 0 2-2v-2.7c-.42.28-1.17.45-1.72.45-.69 0-1.34-.27-1.83-.76Zm1.3-5H10V5H8v2H4.25C3 7 2 8 2 9.25v.9c0 .81.91 1.47 1.72 1.47.39 0 .77-.14 1.03-.42l1.61-1.6 1.6 1.6a1.5 1.5 0 0 0 2.08 0l1.6-1.6 1.6 1.6c.28.28.64.43 1.03.43.81 0 1.73-.67 1.73-1.48v-.9C16 8.01 15 7 13.75 7Z'></path>
	</svg>
);

const LinkIcon = (
	<svg aria-hidden='true' className='svg-icon iconLink' width='18' height='18' viewBox='0 0 18 18'>
		<path d='M7.22 11.83a6 6 0 0 0 1.62.85l.61-1.8a4.1 4.1 0 1 1 4.04-.8l1.26 1.42a6 6 0 1 0-7.53.33Zm3.43-5.6a6 6 0 0 0-1.6-.87L8.4 7.15a4.1 4.1 0 1 1-4.05.73L3.12 6.43a6 6 0 1 0 7.53-.2Z'></path>
	</svg>
);

const MapIcon = (
	<svg aria-hidden='true' className='mrn2 svg-icon iconLocation' width='17' height='18' viewBox='0 0 17 18'>
		<path d='M2 6.38C2 9.91 8.1 17.7 8.1 17.7c.22.29.58.29.8 0 0 0 6.1-7.8 6.1-11.32A6.44 6.44 0 0 0 8.5 0 6.44 6.44 0 0 0 2 6.38Zm9.25.12a2.75 2.75 0 1 1-5.5 0 2.75 2.75 0 0 1 5.5 0Z'></path>
	</svg>
);

const PencilIcon = (
	<svg aria-hidden='true' className='svg-icon iconPencil' width='18' height='18' viewBox='0 0 18 18'>
		<path d='m13.68 2.15 2.17 2.17c.2.2.2.51 0 .71L14.5 6.39l-2.88-2.88 1.35-1.36c.2-.2.51-.2.71 0ZM2 13.13l8.5-8.5 2.88 2.88-8.5 8.5H2v-2.88Z'></path>
	</svg>
);

const Profile = ({ user }) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const editProfile = () => {
		console.log(user);
		dispatch(updateSettingNav('Edit'));
		navigate(`/members/${user.memberId}/settings`);
	};

	return (
		<Container>
			<Image onClick={() => navigate(`/members/${user.memberId}/profiles`)}>
				<img src='https://www.gravatar.com/avatar/fae9320960fea04d9995ccce46a0844c?s=256&d=identicon&r=PG&f=1' />
			</Image>
			<Info>
				<NickName>{user.nickname}</NickName>
				<Detail>
					<div className='signin-date'>
						<span className='icon'>{CakeIcon}</span>
						<span className='text'>Member for 1 day</span>
					</div>
					<div className='email'>
						<span className='icon'>{LinkIcon}</span>
						<span className='text'>{user.email}</span>
					</div>
					<div className='nationality'>
						<span className='icon'>{MapIcon}</span>
						<span className='text'>{user.country}</span>
					</div>
				</Detail>
			</Info>
			<Edit>
				<a>
					<span className='icon'>{PencilIcon}</span>
					<span onClick={editProfile}>Edit Profile</span>
				</a>
			</Edit>
		</Container>
	);
};
export default Profile;
