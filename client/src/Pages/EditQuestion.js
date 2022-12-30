import { useState, useEffect } from 'react';
import styled from 'styled-components';

import Header from '../Components/Header';
import SideNav from '../Components/SideNav';
import SideBar from '../Components/SideBar';
import Footer from '../Components/Footer';
import Editor from '../Components/Question/Editor';
import { useParams } from 'react-router-dom';

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

const Question = styled.div`
  max-width: 727px;
  flex-grow: 1;
`;

const Title = styled.label`
  padding: 0 2px;
  color: #0c0d0e;
  font-size: 15px;
  font-weight: 600;
  line-height: 17px;
`;

const Input = styled.input`
  display: block;
  width: 100%;
  padding: 7.8px 9.1px;
  margin: 4px 0 15px 0;

  &:focus {
    border: 1px solid #d9eaf6;
    outline: 4px solid #d9eaf6;
  }
`;

const EditQuestion = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const { questionId } = useParams();

  useEffect(() => {
    fetchQuestion();
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
      setTitle(question.title);
      const content = question.problemContent + '\n\n' + question.expectationContent;
      setContent(content);
    } catch (error) {
      console.log(error);
    }
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  return (
    <>
      <Header />
      <Container>
        <SideNav />
        <Main>
          <Contents>
            <Question>
              <Title htmlFor='title'>Title</Title>
              <Input type='text' id='title' value={title} onChange={handleTitleChange} placeholder={title} />
              <Editor edit={true} editQuestion={true} placeholder={content || ''} />
            </Question>
            <SideBar />
          </Contents>
        </Main>
      </Container>
      <Footer />
    </>
  );
};

export default EditQuestion;
