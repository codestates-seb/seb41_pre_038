import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

import Header from '../Components/Header';
import SideNav from '../Components/SideNav';
import Footer from '../Components/Footer';
import QuestionHeader from '../Components/Question/QuestionHeader';
import Question from '../Components/Question/Question';
import Answers from '../Components/Question/Answers';
import Editor from '../Components/Question/Editor';
import SideBar from '../Components/SideBar';
import BottomNotice from '../Components/Question/BottomNotice';

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

  return (
    <>
      <Header />
      <Container>
        <SideNav />
        <Main>
          {/* // TODO: asked, modified, viewed 수정 */}
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
              <Editor answers={answers} setAnswers={setAnswers} />
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
