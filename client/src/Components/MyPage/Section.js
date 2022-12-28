import styled from 'styled-components';
import Stack from './Stack';
import { useState } from 'react';

const Container = styled.div`
	display: flex;
	flex-direction: column;
`;

const Title = styled.div`
	margin-bottom: 10px;

	display: flex;
	justify-content: space-between;

	h3 {
		font-size: 21px;
		font-weight: 400;
	}
`;

const SortPerPage = styled.div`
	display: flex;
	justify-content: flex-end;

	button {
		padding: 6.6px;
		border: 1px solid rgb(150, 156, 163);
		border-right: none;
		color: #6a737c;
		font-size: 11px;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		background-color: white;
		cursor: pointer;

		&:hover {
			background-color: hsl(210, 8%, 97.5%);
		}

		&.selected {
			border-color: rgb(120, 129, 138);
			color: #3b4045;
			background-color: hsl(210, 8%, 90%);
		}
	}

	button:first-child {
		border-top-left-radius: 4px;
		border-bottom-left-radius: 4px;
	}

	button:last-child {
		border-right: 1px solid rgb(150, 156, 163);
		border-top-right-radius: 4px;
		border-bottom-right-radius: 4px;
	}
`;

const Content = styled.div`
	border: 1px solid rgb(208, 212, 215);
	border-radius: 5px;
	width: 432.45px;

	&.empty {
		padding: 24px;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	&.not-empty {
		height: 257px;
	}
`;

const EmptyMessage = styled.span`
	color: #6a737c;
`;

const Section = ({ text, emptyMsg, data }) => {
	const [empty, setEmpty] = useState(false);
	return (
		<Container>
			<Title>
				<h3>{text}</h3>
				<SortPerPage>
					<button className='selected'>Score</button>
					<button>Activity</button>
					<button>Newest</button>
				</SortPerPage>
			</Title>
			<Content className={empty ? 'empty' : 'not-empty'}>
				{empty ? (
					<EmptyMessage>
						You have not <a>{emptyMsg}</a> any questions
					</EmptyMessage>
				) : (
					<>
						{/* data.map((d) => <Stack votes={} title={} date={} />) */}
						<Stack votes={0} title='Example Title' date='Jan 1, 2022' />
					</>
				)}
			</Content>
		</Container>
	);
};

export default Section;
