import styled from 'styled-components';

import Icons from './Icons';

const Container = styled.div`
  width: 100%;
  padding: 16px 0;
  border-bottom: 1px solid #e3e5e7;
  display: flex;
`;

const QuestionContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const QuestionContent = styled.p`
  margin: 0 0 24px 0;
  font-size: 15px;
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
  return (
    <Container>
      <Icons voteCount={props.voteCount} />
      <QuestionContainer>
        <QuestionContent>{props.question}</QuestionContent>
        <Social>
          <SocialButtons>
            <SocialButton onClick={() => console.log('share')}>Share</SocialButton>
            <SocialButton onClick={() => console.log('edit')}>Edit</SocialButton>
            <SocialButton onClick={() => console.log('follow')}>Follow</SocialButton>
          </SocialButtons>
          <UserInfo>
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
