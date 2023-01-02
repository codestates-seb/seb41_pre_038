import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

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

const Answer = styled.div`
  max-width: 727px;
  flex-grow: 1;
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

const EditAnswer = () => {
  const answer = 'dummy answer';

  const navigate = useNavigate();

  const handleClick = () => {
    // TODO: 답변 수정 기능 추가
  };

  return (
    <>
      <Header />
      <Container>
        <SideNav />
        <Main>
          <Contents>
            <Answer>
              <Editor answer={answer} />
              <EditButton onClick={handleClick}>Save edit</EditButton>
              <CancelButton onClick={() => navigate(-1)}>Cancel</CancelButton>
            </Answer>
            <SideBar />
          </Contents>
        </Main>
      </Container>
      <Footer />
    </>
  );
};

export default EditAnswer;
