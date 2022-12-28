import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { StacksEditor } from '@stackoverflow/stacks-editor';
import '@stackoverflow/stacks-editor/dist/styles.css';
import '@stackoverflow/stacks';
import '@stackoverflow/stacks/dist/css/stacks.css';

const Container = styled.div`
  padding: 10px 0 0;

  h2 {
    margin: 20px 0;
    font-size: 19px;
    font-weight: 400;
  }
`;

const PostButton = styled.button`
  width: 128.91px;
  height: 37.79px;
  margin: 20px 0;
  color: #ffffff;
  background-color: #0a95ff;
  border: none;
  border-radius: 4px;
  font-family: inherit;
  cursor: pointer;
`;

const Editor = () => {
  const editorRef = useRef();

  useEffect(() => {
    new StacksEditor(editorRef.current, '', {});
  }, []);

  const handleClick = (event) => {
    console.log(event.target.closest('div').querySelector(`[role='textbox']`).innerHTML);
  };

  return (
    <Container>
      <h2>Your Answer</h2>
      <div ref={editorRef} />
      <PostButton onClick={handleClick}>Post Your Answer</PostButton>
    </Container>
  );
};

export default Editor;
