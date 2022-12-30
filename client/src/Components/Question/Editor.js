import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { StacksEditor } from '@stackoverflow/stacks-editor';
import '@stackoverflow/stacks-editor/dist/styles.css';
import '@stackoverflow/stacks';
import '@stackoverflow/stacks/dist/css/stacks.css';

const Container = styled.div`
  padding-top: ${(props) => (props.answer ? '0px' : '10px')};
`;

const Title = styled.h2`
  ${(props) => {
    if (props.answer) {
      return `
        max-width: 940.99px;
        margin: 0 0 20px 0;
        color: #232629;
        font-size: 19px;
        font-weight: 400;
        line-height: 1.35;
      `;
    } else if (props.edit) {
      return `
        padding: 0 2px;
        margin: 0 0 4px 0;
        color: #0c0d0e;
        font-size: 15px;
        font-weight: 600;
      `;
    } else {
      return `
        margin: 20px 0;
        font-size: 19px;
        font-weight: 400;
      `;
    }
  }}
`;

const PostButton = styled.button`
  width: ${(props) => (props.answer || props.edit ? '85.14px' : '128.91px')};
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

const CancelButton = styled(PostButton)`
  width: 64.4px;
  margin: 0 0 0 8px;
  color: #0074cc;
  background-color: #ffffff;

  &:hover {
    background-color: #b2d3ea;
  }
`;

const Editor = ({ edit, editQuestion, answer, answers, setAnswers, placeholder }) => {
  const navigate = useNavigate();
  const editorRef = useRef();

  useEffect(() => {
    new StacksEditor(editorRef.current, answer || placeholder || '', {});
    return () => {
      editorRef.current?.querySelector('div').remove();
    };
  }, [placeholder]);

  const handleClick = (event) => {
    if (answer) {
      fetch(); // TODO: 수정
    } else {
      const answerField = event.target.parentNode.querySelector(`[role='textbox']`);
      const newAnswer = {
        userId: Date.now(), // TODO: 수정
        id: Date.now(), // TODO: 수정
        body: answerField.textContent,
      };
      setAnswers([...answers, newAnswer]);
      answerField.innerHTML = '';
    }
  };

  return (
    <Container answer={answer} edit={edit}>
      <Title answer={answer} edit={edit}>
        {answer ? 'Answer' : edit ? 'body' : 'Your Answer'}
      </Title>
      <div ref={editorRef} />
      <PostButton onClick={handleClick} answer={answer} edit={edit}>
        {answer ? 'Save edit' : edit ? 'Save edits' : 'Post Your Answer'}
      </PostButton>
      {(edit || answer) && <CancelButton onClick={() => navigate(-1)}>Cancel</CancelButton>}
    </Container>
  );
};

export default Editor;
