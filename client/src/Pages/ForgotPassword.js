import styled from 'styled-components';
import Header from '../Components/Header';
import { useState } from 'react';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgb(239, 240, 241);

  display: flex;
  flex-direction: column;
`;

// 헤더를 제외한 나머지 공간
const Body = styled.div`
  width: 100%;
  flex-grow: 1;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginContainer = styled.div`
  width: 316px;
  height: 240px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Form = styled.form`
  width: 100%;
  height: 236px;
  padding: 24px;
  margin: 16px 0 24px 0;
  border-radius: 5px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 10px 24px 0px, rgba(0, 0, 0, 0.05) 0px 20px 48px 0px, rgba(0, 0, 0, 0.1) 0px 1px 4px 0px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  button {
    width: 100%;
    margin: 10px 0px 2px 0px;
    padding: 10.4px;
    border: none;
    border-radius: 3px;
    color: white;
    background-color: #0a95ff;
    box-shadow: rgba(255, 255, 255, 0.4) 0px 1px 0px inset;
    cursor: pointer;

    &:hover {
      background-color: hsl(206, 100%, 40%);
    }
  }
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 6px 0px;
`;

const Label = styled.label`
  font-size: 15px;
  font-weight: 600;
  margin: 2px 0px 6px 0px;
  padding: 0px 2px;
`;

const Input = styled.input`
  width: 268px;
  height: 33.59px;
  padding: 7.8px 9.1px;
  border: 1px solid rgb(186, 191, 196);
  border-radius: 3px;

  &:focus {
    border: 1px solid rgb(79, 154, 217);
    outline: 4px solid rgb(217, 234, 246);
  }
`;

const Paragraph = styled.p`
  font-size: 13px;
  margin-bottom: 13px;
`;

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <Container>
      <Header />
      <Body>
        <LoginContainer>
          <Form onSubmit={handleSubmit}>
            <Paragraph>
              Forgot your account’s password or having trouble logging into your Team? Enter your email address and we’ll send you a recovery link.
            </Paragraph>
            <InputContainer>
              <Label>Email</Label>
              <Input value={email} onChange={(e) => setEmail(e.target.value)} />
            </InputContainer>
            <button>Send recovery email</button>
          </Form>
        </LoginContainer>
      </Body>
    </Container>
  );
};

export default ForgotPassword;
