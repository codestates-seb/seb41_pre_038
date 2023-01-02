import styled from 'styled-components';

const Container = styled.div`
	margin-right: 30px;

	display: flex;
	flex-direction: column;
`;

const SideMenu = styled.div`
	padding: 6px 48px 6px 12px;
	border-radius: 20px;
	color: #535960;
	cursor: pointer;

	&:hover {
		background-color: hsl(210, 8%, 90%);
	}

	&.selected {
		color: #535960;
		background-color: rgb(241, 242, 243);
	}
`;

const Navbar = () => {
	return (
		<Container>
			<SideMenu className='selected'>Summary</SideMenu>
			<SideMenu>Answers</SideMenu>
			<SideMenu>Questions</SideMenu>
			<SideMenu>Tags</SideMenu>
			<SideMenu>Articles</SideMenu>
			<SideMenu>Badges</SideMenu>
			<SideMenu>Following</SideMenu>
			<SideMenu>Bounties</SideMenu>
			<SideMenu>Reputation</SideMenu>
			<SideMenu>All actions</SideMenu>
			<SideMenu>Responses</SideMenu>
			<SideMenu>Votes</SideMenu>
		</Container>
	);
};
export default Navbar;
