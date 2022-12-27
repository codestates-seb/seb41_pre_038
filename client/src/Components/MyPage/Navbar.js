import styled from 'styled-components';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
	margin: 4px 0px 20px 0px;

	display: flex;
	align-items: center;
`;

const NavMenu = styled.div`
	margin-right: 5px;
	padding: 6px 12px;
	border-radius: 20px;
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

const Navbar = () => {
	const [selected, setSelected] = useState('Activity');
	const navigate = useNavigate();
	console.log(selected);
	const selectMenu = (e) => {
		const text = e.target.textContent;
		if (text === 'Profile') {
			setSelected('Profile');
			// navigate();
		} else if (text === 'Activity') {
			setSelected('Activity');
			navigate('/members/1/profiles');
		} else if (text === 'Saves') {
			setSelected('Saves');
			// navigate();
		} else if (text === 'Settings') {
			setSelected('Settings');
			navigate('/members/1');
		}
	};

	return (
		<Container>
			<NavMenu onClick={selectMenu} className={selected === 'Profile' ? 'selected' : ''}>
				Profile
			</NavMenu>
			<NavMenu onClick={selectMenu} className={selected === 'Activity' ? 'selected' : ''}>
				Activity
			</NavMenu>
			<NavMenu onClick={selectMenu} className={selected === 'Saves' ? 'selected' : ''}>
				Saves
			</NavMenu>
			<NavMenu onClick={selectMenu} className={selected === 'Settings' ? 'selected' : ''}>
				Settings
			</NavMenu>
		</Container>
	);
};
export default Navbar;
