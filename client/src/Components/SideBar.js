import styled from 'styled-components';
import SideLinks from './SidebarComponents/SideLinks';
import CustomFilters from './SidebarComponents/CustomFilters';
import WatchedTags from './SidebarComponents/WatchedTags';
import IgnoredTags from './SidebarComponents/IgnoredTags';

const Container = styled.aside`
	margin-left: 24px;
`;

const SideBar = () => {
	return (
		<Container>
			<SideLinks />
			<CustomFilters />
			<WatchedTags />
			<IgnoredTags />
		</Container>
	);
};

export default SideBar;
