import styled from 'styled-components';

const Container = styled.div`
	margin-right: 30px;

	display: flex;
	flex-direction: column;
`;

const Ul = styled.ul`
	list-style: none;
	margin: 0;
`;

const Li = styled.li`
	padding: 6px 12px;
	color: #232629;
	font-size: 11px;
	font-weight: 700;
`;

const SideMenu = styled.div`
	padding: 6px 12px;
	border-radius: 20px;
	width: 183.53px;
	color: #535960;
	cursor: pointer;

	&:hover {
		background-color: hsl(210, 8%, 90%);
	}

	&.selected {
		color: white;
		background-color: #f48225;
		&:hover {
			background-color: rgb(213, 93, 14);
		}
	}
`;

const Sidebar = ({ selected, setSelected }) => {
	return (
		<Container>
			<Ul>
				<Li>PERSONAL INFORMATION</Li>
				<SideMenu onClick={() => setSelected('Edit')} className={selected === 'Edit' ? 'selected' : ''}>
					Edit Profile
				</SideMenu>
				<SideMenu onClick={() => setSelected('Delete')} className={selected === 'Delete' ? 'selected' : ''}>
					Delete Profile
				</SideMenu>
			</Ul>
		</Container>
	);
};

export default Sidebar;
