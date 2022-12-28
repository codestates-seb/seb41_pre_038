import styled, { createGlobalStyle } from 'styled-components';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Question from './Question';
import { Link } from 'react-router-dom';
import Pagenation from './Pagenation';

const GlobalStyle = createGlobalStyle`
  button {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;

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

	&.PerPage {
		margin-bottom: 12px;
	}
`;

const Counter = styled.div`
	margin-right: 12px;
	color: #232629;
	font-size: 17px;
`;

const SortPerPage = styled.div`
	display: flex;
	justify-content: flex-end;

	button {
		padding: 9.6px;
		border: 1px solid rgb(150, 156, 163);
		border-right: none;
		font-size: 12px;
		color: #6a737c;
		background-color: white;
		cursor: pointer;

		&.more {
			padding-right: 24px;
			position: relative;

			&:after {
				content: '';
				border: 4px solid transparent;
				border-bottom-width: 0;
				border-top-color: #6a737c;
				width: 0;
				height: 0;
				position: absolute;
				top: 15px;
				right: 9px;
			}
		}

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

const FilterBtn = styled.button`
	margin-left: 15px;
	padding: 9.6px;
	border: 1px solid hsl(205, 41%, 63%);
	border-radius: 4px;
	height: 36.13px;
	font-size: 12px;
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
	<svg aria-hidden='true' className='svg-icon iconFilter' width='18' height='18' viewBox='0 0 18 18'>
		<path d='M2 4h14v2H2V4Zm2 4h10v2H4V8Zm8 4H6v2h6v-2Z'></path>
	</svg>
);

const Questions = styled.div``;

const AllQuestions = () => {
	const [data, setData] = useState([]); // 전체 데이터
	const [currentData, setCurrentData] = useState(data.slice(0, 15)); // 현재 보여주는 데이터
	const [selected, setSelected] = useState('Newest');

	useEffect(() => {
		axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => setData(res.data));
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
			<GlobalStyle />
			<Header>
				<h1>All Questions</h1>
				<Link to='/questions/ask'>
					<button className='ask-question'>Ask Question</button>
				</Link>
			</Header>
			<FlexBox>
				<Counter>0 questions</Counter>
				<FlexBox className='PerPage'>
					<SortPerPage>
						<button onClick={selectSorting} className={selected === 'Newest' ? 'selected' : ''}>
							Newest
						</button>
						<button onClick={selectSorting} className={selected === 'Active' ? 'selected' : ''}>
							Active
						</button>
						<button onClick={selectSorting} className={selected === 'Bountied' ? 'selected' : ''}>
							Bountied
						</button>
						<button onClick={selectSorting} className={selected === 'Unanswered' ? 'selected' : ''}>
							Unanswered
						</button>
						<button onClick={selectSorting} className={selected === 'More' ? 'selected more' : 'more'}>
							More
						</button>
					</SortPerPage>
					<FilterBtn>
						<span>{FilterIcon}</span>
						Filter
					</FilterBtn>
				</FlexBox>
			</FlexBox>

			<Questions>
				{currentData.map((question) => (
					<Question key={question.id} id={question.id} userId={question.userId} title={question.title} body={question.body} tab='all-questions' />
				))}
			</Questions>

			<Pagenation data={data} setCurrentData={setCurrentData} />
		</Container>
	);
};

export default AllQuestions;
