import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

import Footer from '../Components/Footer';
import Header from '../Components/Header';
import Answers from '../Components/Question/Answers';
import BottomNotice from '../Components/Question/BottomNotice';
import Editor from '../Components/Question/Editor';
import Question from '../Components/Question/Question';
import QuestionHeader from '../Components/Question/QuestionHeader';
import SideBar from '../Components/SideBar';
import SideNav from '../Components/SideNav';

const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  * {
    box-sizing: border-box;
  }

  nav {
    align-self: stretch;
  }
`;

const Main = styled.main`
  width: 1100px;
  padding: 24px;
  color: #232629;
`;

const Contents = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const QnA = styled.div`
  max-width: 727px;
  flex-grow: 1;
`;

const PostButton = styled.button`
  width: 128.91px;
  height: 37.79px;
  margin: 20px 0;
  color: #ffffff;
  background-color: #0a95ff;
  border: none;
  border-radius: 4px;
  font-family: inherit;
  cursor: pointer;

  &:hover {
    background-color: #0073cc;
  }
`;

const QuestionAnswer = () => {
  const [question, setQuestion] = useState(null);
  const [answers, setAnswers] = useState(null);

  const navigate = useNavigate();
  const { questionId } = useParams();

  useEffect(() => {
    fetchQuestion();
    fetchAnswers();
  }, []);

  const fetchQuestion = async () => {
    const url = `${process.env.REACT_APP_API_URL}/questions/${questionId}`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        alert('질문 가져오기 실패');
        return;
      }
      const question = await response.json();
      setQuestion(question);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchAnswers = async () => {
    // TODO: url, answers 수정
    // const url = `${process.env.REACT_APP_API_URL}/`;
    const url = 'https://jsonplaceholder.typicode.com/posts';
    try {
      const response = await fetch(url);
      if (!response.ok) {
        alert('답변 가져오기 실패');
        return;
      }
      const answers = await response.json();
      // setAnswers(answers);
      setAnswers(answers.slice(0, 5));
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = (event) => {
    const answerField = event.target.previousElementSibling.querySelector("[role='textbox']");
    const myAnswer = answerField.innerHTML;
    console.log(myAnswer);
    // TODO: 서버에 답변 전송
    answerField.innerHTML = '';
  };

  return (
    <>
      <Header />
      <Container>
        <SideNav />
        <Main>
          {/* // TODO: ]]asked, modified, viewed 수정 */}
          <QuestionHeader title={question?.title || ''} asked={'today'} modified={'today'} viewed={'1'} />
          <Contents>
            <QnA>
              <Question
                vote={question?.vote || '0'}
                question={question?.problemContent || ''}
                expectation={question?.expectationContent || ''}
                userName={'username'} // TODO: 수정
                userId={'1'} // TODO: 수정
              />
              <Answers answers={answers || []} />
              <Editor />
              <PostButton onClick={handleClick}>Post Your Answer</PostButton>
              <BottomNotice />
            </QnA>
            <SideBar />
          </Contents>
        </Main>
      </Container>
      <Footer />
    </>
  );
};

export default QuestionAnswer;
