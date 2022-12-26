import styled from 'styled-components';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Question from './Question';
import { Link } from 'react-router-dom';
// import Pagenation from './Pagenation';

const Container = styled.div`
	width: 712px;

	display: flex;
	flex-direction: column;
	flex-grow: 1;
`;

const Header = styled.div`
	display: flex;
	justify-content: space-between;

	h1 {
		margin-bottom: 27px;
		font-size: 27px;
		font-weight: 400;
	}

	.ask-question {
		margin-left: 12px;
		padding: 10.4px;
		border: 1px solid #0a95ff;
		border-radius: 3px;
		height: 37.78px;
		color: white;
		background-color: #0a95ff;
		font-size: 13px;
		box-shadow: rgba(255, 255, 255, 0.4) 0px 1px 0px inset;
		cursor: pointer;

		&:hover {
			background-color: hsl(206, 100%, 40%);
		}
	}
`;

const FlexBox = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	&.buttons {
		margin-bottom: 12px;
	}
`;

const Counter = styled.div`
	margin-right: 12px;
	color: #232629;
	font-size: 17px;
`;

const SortButtons = styled.div`
	display: flex;
	justify-content: flex-end;

	button {
		padding: 9.6px;
		border: 1px solid rgb(150, 156, 163);
		border-right: none;
		color: #6a737c;
		background-color: white;
		cursor: pointer;

		&:hover {
			background-color: hsl(210, 8%, 97.5%);
		}

		&.clicked {
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

const FilterBtn = styled.button`
	margin-left: 15px;
	padding: 9.6px;
	border: 1px solid hsl(205, 41%, 63%);
	border-radius: 4px;
	height: 36.13px;
	color: #39739d;
	background-color: #e1ecf4;
	box-shadow: rgba(255, 255, 255, 0.7) 0px 1px 0px 0px inset;
	cursor: pointer;

	display: flex;
	align-items: center;

	&:hover {
		background-color: rgb(170, 205, 230);
	}

	span {
		margin-right: 4px;
	}
`;

const FilterIcon = (
	<svg aria-hidden='true' class='svg-icon iconFilter' width='18' height='18' viewBox='0 0 18 18'>
		<path d='M2 4h14v2H2V4Zm2 4h10v2H4V8Zm8 4H6v2h6v-2Z'></path>
	</svg>
);

const Questions = styled.div``;

const AllQuestions = () => {
	const [selected, setSelected] = useState('Newest');
	const [data, setData] = useState([]);

	useEffect(() => {
		axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => setData(res.data.slice(0, 15)));
	}, []);
	const selectSorting = (e) => {
		const text = e.target.textContent;
		if (text === 'Newest') {
			setSelected('Newest');
			// sorting logic..
		} else if (text === 'Active') {
			setSelected('Active');
			// sorting logic..
		} else if (text === 'Bountied') {
			setSelected('Bountied');
			// sorting logic..
		} else if (text === 'Unanswered') {
			setSelected('Unanswered');
			// sorting logic..
		} else if (text === 'More') {
			setSelected('More');
			// sorting logic..
		}
	};
	return (
		<Container>
			<Header>
				<h1>All Questions</h1>
				<Link to='/questions/ask'>
					<button className='ask-question'>Ask Question</button>
				</Link>
			</Header>
			<FlexBox>
				<Counter>0 questions</Counter>
				<FlexBox className='buttons'>
					<SortButtons>
						<button onClick={selectSorting} className={selected === 'Newest' ? 'clicked' : ''}>
							Newest
						</button>
						<button onClick={selectSorting} className={selected === 'Active' ? 'clicked' : ''}>
							Active
						</button>
						<button onClick={selectSorting} className={selected === 'Bountied' ? 'clicked' : ''}>
							Bountied
						</button>
						<button onClick={selectSorting} className={selected === 'Unanswered' ? 'clicked' : ''}>
							Unanswered
						</button>
						<button onClick={selectSorting} className={selected === 'More' ? 'clicked' : ''}>
							More
						</button>
					</SortButtons>
					<FilterBtn>
						<span>{FilterIcon}</span>
						Filter
					</FilterBtn>
				</FlexBox>
			</FlexBox>

			<Questions>
				{data.map((question) => (
					<Question key={question.id} id={question.id} userId={question.userId} title={question.title} body={question.body} tab='all-questions' />
				))}
			</Questions>

			{/* <Pagenation data={data} /> */}
		</Container>
	);
};

export default AllQuestions;
