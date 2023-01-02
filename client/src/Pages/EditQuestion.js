import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { useNavigate, useParams } from 'react-router-dom';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import Editor from '../Components/Question/Editor';
import SideBar from '../Components/SideBar';
import SideNav from '../Components/SideNav';

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

const EditButton = styled.button`
  width: 85.14px;
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

const CancelButton = styled(EditButton)`
  width: 64.4px;
  margin: 0 0 0 8px;
  color: #0074cc;
  background-color: #ffffff;

  &:hover {
    background-color: #b2d3ea;
  }
`;

const EditQuestion = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const { questionId } = useParams();
  const navigate = useNavigate();

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

  const handleClick = (event) => {
    console.log(title);
    const bodyField = event.target.previousElementSibling.querySelector("[role='textbox']");
    const body = bodyField.innerHTML;
    console.log(body);
    // TODO: 서버에 수정된 질문 전송
    const modifiedQuestion = {
      questionId,
      title,
      problemContent: body,
      expectationContent: '',
    };
    requestToModify(modifiedQuestion);
  };

  const requestToModify = async (modifiedQuestion) => {
    const url = `${process.env.REACT_APP_API_URL}/questions/${questionId}`;
    const options = {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(modifiedQuestion),
    };
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        alert('질문 수정 실패');
        return;
      }
      navigate(`/questions/${questionId}`);
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
          <Contents>
            <Question>
              <Title htmlFor='title'>Title</Title>
              <Input type='text' id='title' value={title} onChange={(event) => setTitle(event.target.value)} placeholder={title} />
              <Editor edit={true} placeholder={content || ''} />
              <EditButton onClick={handleClick}>Save edit</EditButton>
              <CancelButton onClick={() => navigate(`/questions/${questionId}`)}>Cancel</CancelButton>
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
