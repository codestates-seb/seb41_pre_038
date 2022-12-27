import styled from 'styled-components';

const Container = styled.div`
	padding: 12px;
	border-top: 1px solid rgb(208, 212, 215);
	width: 100%;
	height: 51px;

	display: flex;
	align-items: center;

	&:first-child {
		border-top: none;
	}
`;

const Votes = styled.div`
	padding: 0px 6px;
	border: 1px solid rgb(208, 212, 215);
	border-radius: 3px;
	width: 38px;
	height: 26px;
	color: #3b4045;

	display: flex;
	justify-content: center;
	align-items: center;

	&.green {
		border-color: #5eba7d;
		color: white;
		background-color: #5eba7d;
	}
`;

const Title = styled.a`
	margin: 0px 20px 0px 10px;
	width: 280px;
	font-size: 15px;
	color: #0064bf;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;

	flex-grow: 1;
`;

const Date = styled.span`
	white-space: nowrap;
	color: #61737c;
`;

const Stack = ({ votes, title, date }) => {
	return (
		<Container>
			<Votes>{votes}</Votes>
			<Title>{title}</Title>
			<Date>{date}</Date>
		</Container>
	);
};

export default Stack;
