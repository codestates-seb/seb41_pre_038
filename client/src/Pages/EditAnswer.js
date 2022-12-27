import styled from 'styled-components';

import Header from '../Components/Header';
import SideNav from '../Components/SideNav';
import SideBar from '../Components/SideBar';
import Footer from '../Components/Footer';
import Editor from '../Components/Question/Editor';

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

const EditAnswer = () => {
  const answer = 'dummy answer';

  return (
    <>
      <Header />
      <Container>
        <SideNav />
        <Main>
          <Contents>
            <Answer>
              <Editor answer={answer} />
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
