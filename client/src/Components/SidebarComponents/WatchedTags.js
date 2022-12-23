import styled from 'styled-components';
import { Tag } from '../Question';

const Container = styled.div`
	margin-bottom: 16px;
	border: 1px solid hsl(210, 8%, 90%);
	border-radius: 3px;
	width: 298px;
	background-color: hsl(47, 87%, 94%);
	box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px, rgba(0, 0, 0, 0.05) 0px 1px 4px 0px, rgba(0, 0, 0, 0.05) 0px 2px 8px 0px;
`;

const Title = styled.div`
	padding: 12px 15px;
	border-top: 1px solid hsl(210, 8%, 90%);
	border-bottom: 1px solid hsl(210, 8%, 90%);
	height: 44.5px;
	color: rgb(82, 89, 96);
	background-color: hsl(210, 8%, 97.5%);
	font-size: 15px;

	display: flex;
	justify-content: space-between;

	:first-child {
		border-top: none;
	}

	span {
		color: #6a737c;
		cursor: pointer;
	}
`;

const List = styled.div`
	padding: 16px 15px;
	background-color: white;
`;

const TagContainer = styled.div`
	margin: 5px 3px 9px 3px;
`;

const WatchedTags = () => {
	return (
		<div>
			<Container>
				<Title>
					Watched Tags<span>edit</span>
				</Title>
				<List>
					<TagContainer>
						<Tag>javascript</Tag>
					</TagContainer>
				</List>
			</Container>
		</div>
	);
};
export default WatchedTags;
