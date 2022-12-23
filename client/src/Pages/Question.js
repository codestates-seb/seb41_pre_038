import { useState, useEffect } from 'react';
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

  const fetchQuestion = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const question = await response.json();
    setQuestion(question);
  };

  const fetchAnswers = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const answers = await response.json();
    setAnswers(answers);
  };

  useEffect(() => {
    fetchQuestion();
    fetchAnswers();
  }, []);

  return (
    <div>
      <Header />
      <Container>
        <SideNav />
        <Main>
          <QuestionHeader title={question ? question.title : ''} asked={'today'} modified={'today'} viewed={'1'} />
          <Contents>
            <QnA>
              <Question voteCount={'0'} question={question ? question.body : ''} userName={'username'} userId={'1'} />
              <Answers answers={answers || []} />
              <Editor />
              <BottomNotice />
            </QnA>
            <SideBar />
          </Contents>
        </Main>
      </Container>
      <Footer />
    </div>
  );
};

export default QuestionAnswer;
