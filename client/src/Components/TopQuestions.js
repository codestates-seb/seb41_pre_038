import styled, { createGlobalStyle } from 'styled-components';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Question from './Question';
import { Link } from 'react-router-dom';

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

const Buttons = styled.div`
	display: flex;
	justify-content: flex-end;

	button {
		margin-bottom: 16px;
		padding: 10.4px;
		border: 1px solid rgb(150, 156, 163);
		border-right: none;
		color: #6a737c;
		background-color: white;
		cursor: pointer;

		&:hover {
			background-color: hsl(210, 8%, 97.5%);
		}

		&.selected {
			color: #3b4045;
			border-color: rgb(120, 129, 138);
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

const Questions = styled.div``;

const TopQuestions = () => {
	const [selected, setSelected] = useState('Interesting');
	const [data, setData] = useState([]);

	useEffect(() => {
		axios
			.get(`${process.env.REACT_APP_API_URL}/questions?page=1&size=10`)
			.then((res) => {
				console.log('Top Questions', res);
				const { data } = res.data;
				setData(data);
			})
			.catch((err) => console.log(err));
	}, []);

	const selectSorting = (e) => {
		const text = e.target.textContent;
		if (text === 'Interesting') {
			setSelected('Interesting');
			// sorting logic..
		} else if (text === 'Bountied') {
			setSelected('Bountied');
			// sorting logic..
		} else if (text === 'Hot') {
			setSelected('Hot');
			// sorting logic..
		} else if (text === 'Week') {
			setSelected('Week');
			// sorting logic..
		} else if (text === 'Month') {
			setSelected('Month');
			// sorting logic..
		}
	};
	return (
		<Container>
			<GlobalStyle />
			<Header>
				<h1>Top Questions</h1>
				<Link to='/questions/ask'>
					<button className='ask-question'>Ask Question</button>
				</Link>
			</Header>
			<Buttons>
				<button onClick={selectSorting} className={selected === 'Interesting' ? 'selected' : ''}>
					Interesting
				</button>
				<button onClick={selectSorting} className={selected === 'Bountied' ? 'selected' : ''}>
					Bountied
				</button>
				<button onClick={selectSorting} className={selected === 'Hot' ? 'selected' : ''}>
					Hot
				</button>
				<button onClick={selectSorting} className={selected === 'Week' ? 'selected' : ''}>
					Week
				</button>
				<button onClick={selectSorting} className={selected === 'Month' ? 'selected' : ''}>
					Month
				</button>
			</Buttons>
			<Questions>
				{data.map((d) => (
					<Question
						key={d.questionId}
						questionId={d.questionId}
						title={d.title}
						problemContent={d.problemContent}
						expectationContent={d.expectationContent}
						vote={d.vote}
					/>
				))}
			</Questions>
		</Container>
	);
};

export default TopQuestions;
