import '@stackoverflow/stacks';
import { StacksEditor } from '@stackoverflow/stacks-editor';
import '@stackoverflow/stacks-editor/dist/styles.css';
import '@stackoverflow/stacks/dist/css/stacks.css';
import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

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

const Editor = ({ edit, answer, placeholder }) => {
  const navigate = useNavigate();
  const editorRef = useRef();

  useEffect(() => {
    new StacksEditor(editorRef.current, answer || placeholder || '', {});
    return () => {
      editorRef.current?.querySelector('div').remove();
    };
  }, [placeholder]);

  return (
    <Container answer={answer} edit={edit}>
      <Title answer={answer} edit={edit}>
        {answer ? 'Answer' : edit ? 'body' : 'Your Answer'}
      </Title>
      <div ref={editorRef} />
    </Container>
  );
};

export default Editor;
