import styled from 'styled-components';

import Answer from './Answer';

const Container = styled.div`
  padding: 10px 0 0;

  h2 {
    margin: 20px 0;
    font-size: 19px;
    font-weight: 400;
  }
`;

const NoAnswer = styled.p`
  padding: 8px 10px 0 0;
  margin: 15px 0 -8px;
  color: #232629;
  font-size: 17px;

  span {
    color: #0074cc;
    cursor: pointer;
  }
`;

const Answers = ({ answers }) => {
  return (
    <Container>
      {answers.length === 0 ? (
        <NoAnswer>
          Know someone who can answer? Share a link to this <span>question</span> via <span>email</span>, <span>Twitter</span>, or{' '}
          <span>Facebook</span>.
        </NoAnswer>
      ) : (
        <>
          <h2>{answers.length} Answers</h2>
          {answers.map((answer) => (
            <Answer key={answer.id} voteCount={'0'} answer={answer.body} userName={'username'} userId={answer.id} />
          ))}
        </>
      )}
    </Container>
  );
};

export default Answers;
