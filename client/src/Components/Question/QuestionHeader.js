import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  max-width: 940.99px;
  margin: 0 0 8px 0;
  color: #3b4045;
  font-size: 27px;
  font-weight: 400;
  line-height: 1.35;
`;

const Button = styled.button`
  align-self: flex-start;
  width: 103.02px;
  height: 37.79px;
  margin: 0 0 0 8px;
  color: #ffffff;
  background-color: #0a95ff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0073cc;
  }
`;

const InfoContainer = styled.div`
  padding: 0 0 8px 0;
  margin: 0 0 16px 0;
  border-bottom: 1px solid #e3e5e7;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Info = styled.div`
  margin: 0 16px 10px 0;
  font-size: 13px;
  line-height: 0.9;

  span {
    margin: 0 6px 0 0;
    color: #6a737c;
  }
`;

const QuestionHeader = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <Header>
        <Title>{props.title}</Title>
        <Button onClick={() => navigate('/ask')}>Ask Question</Button>
      </Header>
      <InfoContainer>
        <Info>
          <span>Asked</span>
          {props.asked}
        </Info>
        <Info>
          <span>Modified</span>
          {props.modified}
        </Info>
        <Info>
          <span>Viewed</span>
          {props.viewed + ' times'}
        </Info>
      </InfoContainer>
    </>
  );
};

export default QuestionHeader;
