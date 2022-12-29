import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
	/* background-color: hsl(47, 87%, 94%); */
	padding: 16px;
	border-top: 1px solid rgb(208, 212, 215);
	width: 751px;
	position: relative;
	left: -24px;
	display: flex;
`;

const LeftSide = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: flex-start;
	.buttons {
		margin: 0px 16px 4px 0px;
		width: 108px;
		height: 73px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: flex-end;
	}
`;

const Vote = styled.div`
	padding: 2px 4px;
	font-size: 13px;
	color: #0c0d0e;
`;

const Answered = styled(Vote)`
	border: 1px solid #2f6f44;
	/* background: #2f6f44; */
	border-radius: 3px;
	color: #2f6f44;
	/* color: white; */
`;

const NotAnswered = styled(Answered)`
	border: none;
	background: none;
	color: #6a737c;
`;

const View = styled(Vote)`
	color: #6a737c;
`;

const RightSide = styled.div`
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	.tags-date {
		display: flex;
	}
`;

const Title = styled.div`
	margin: -1px 0px 7.5px 0px;
	padding-right: 25px;
	text-decoration: none;
	color: #0074cc;
	font-size: 17px;
	cursor: pointer;
	&:hover {
		color: rgb(14, 138, 255);
	}
`;

const Body = styled.div`
	margin: -2px 0px 8px 0px;
	color: #3b4045;
	font-size: 13px;
`;

const TagsAndTime = styled.div`
	width: 100%;
	display: flex;
	.tags {
		margin-bottom: 13px;
		display: flex;
	}
`;

export const Tag = styled.span`
	margin: 0px 6px 2px 0px;
	padding: 4.8px 6px;
	border-radius: 3px;
	color: rgb(57, 115, 157);
	background-color: rgb(225, 236, 244);
	font-size: 12px;
	cursor: pointer;
	&:hover {
		background-color: rgb(202, 223, 239);
	}
`;

const Time = styled.div`
	font-size: 12px;
	color: #6a737c;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	flex-grow: 1;
	span {
		color: #0074cc;
		margin-right: 4px;
		cursor: pointer;
	}
`;

const Question = ({ id, userId, title, body, tab }) => {
	const navigate = useNavigate();
	const tagArr = body.split(' ').slice(0, 3);

	return (
		<Container>
			<LeftSide>
				<div className='buttons'>
					{/* <NotAnswered>0 answer</NotAnswered> */}
					<Vote>0 votes</Vote>
					<Answered>1 answer</Answered>
					<View>0 views</View>
				</div>
			</LeftSide>

			<RightSide>
				<Title onClick={() => navigate(`/questions/${id}`)}>{title}</Title>
				{tab === 'all-questions' && <Body>{body}</Body>}
				<TagsAndTime>
					<div className='tags'>
						{tagArr.map((tag) => (
							<Tag>{tag}</Tag>
						))}
					</div>
					<Time>
						<span onClick={() => navigate(`/members/1`)}>Username{userId}</span>0 mins ago
					</Time>
				</TagsAndTime>
			</RightSide>
		</Container>
	);
};

export default Question;
