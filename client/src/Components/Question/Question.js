import { useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

import Icons from './Icons';

const Container = styled.div`
  width: 100%;
  padding: 0 0 16px 0;
  border-bottom: 1px solid #e3e5e7;
  display: flex;
`;

const QuestionContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const QuestionContent = styled.div`
  font-size: 15px;
`;

const QuestionExpectation = styled.div`
  font-size: 15px;
  margin: 0 0 24px 0;
`;

const Social = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SocialButtons = styled.div`
  align-self: flex-start;
`;

const UserInfo = styled.div`
  width: 200px;
  height: 66.69px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const UserImage = styled.img`
  width: 32px;
  height: 32px;
  margin: 0 8px 0 0;
  cursor: pointer;
`;

const UserName = styled.p`
  color: #0074cc;
  font-size: 13px;
  cursor: pointer;
`;

const SocialButton = styled.button`
  background-color: #ffffff;
  margin: 4px 4px 4px 0;
  border: none;
  color: #6a737c;
  font-size: 13px;
  cursor: pointer;
`;

const Comment = styled.p`
  justify-self: center;
  padding: 0 3px 2px 0;
  color: #838c95;
  font-size: 13px;
`;

const Question = (props) => {
  const navigate = useNavigate();
  const { questionId } = useParams();

  const questionContentRef = useRef();
  const questionExpectationRef = useRef();

  // TODO: Edit, Delete 버튼 글 작성자에게만 보이게 수정하기

  useEffect(() => {
    questionContentRef.current.innerHTML = props.question;
    questionExpectationRef.current.innerHTML = props.expectation;
  }, [props.question, props.expectation]);

  const handleDeleteClick = () => {
    const shouldDeleteQuestion = window.confirm('질문을 삭제하시겠습니까?');
    if (shouldDeleteQuestion) {
      requestDeleteQuestion();
    }
  };

  const requestDeleteQuestion = async () => {
    const url = `${process.env.REACT_APP_API_URL}/questions/${questionId}`;
    const options = { method: 'DELETE' };
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        alert('질문 삭제 실패');
        return;
      }
      navigate('/questions');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Icons vote={props.vote} />
      <QuestionContainer>
        <QuestionContent ref={questionContentRef}></QuestionContent>
        <QuestionExpectation ref={questionExpectationRef}></QuestionExpectation>
        <Social>
          <SocialButtons>
            <SocialButton onClick={() => console.log('share')}>Share</SocialButton>
            <SocialButton onClick={() => console.log('follow')}>Follow</SocialButton>
            <SocialButton onClick={() => navigate(`/questions/${questionId}/edit-question`)}>Edit</SocialButton>
            <SocialButton onClick={handleDeleteClick}>Delete</SocialButton>
          </SocialButtons>
          <UserInfo onClick={() => navigate(`/members/${props.userId}`)}>
            <UserImage src='https://www.gravatar.com/avatar/a6f7ffb957d52ac7b1b21e24d6078329?s=64&d=identicon&r=PG&f=1' alt='user-profile' />
            <UserName>{props.userName}</UserName>
          </UserInfo>
        </Social>
        <Comment>Add a comment</Comment>
      </QuestionContainer>
    </Container>
  );
};

export default Question;
