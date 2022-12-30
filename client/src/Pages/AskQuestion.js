import styled from 'styled-components';
import Header from '../Components/Header';
import { useEffect, useState, useRef } from 'react';
import { StacksEditor } from '@stackoverflow/stacks-editor';
import { Link } from 'react-router-dom';
import '@stackoverflow/stacks-editor/dist/styles.css';
import '@stackoverflow/stacks';
import '@stackoverflow/stacks/dist/css/stacks.css';
import Footer from '../Components/Footer';
import axios from 'axios';
import { addQuestions, editQuestions, deleteQuestions } from '../store/store';
import { useSelector, useDispatch } from 'react-redux';
import DiscardQuestion from '../Components/DiscardQuestion';
const backgroundImg = 'https://cdn.sstatic.net/Img/ask/background.svg?v=2e9a8205b368';

const Container = styled.div`
  width: 100%;
  height: 1900px;
  background-color: #f8faf9;
  display: flex;
  flex-direction: column;
`;

const Box = styled.div`
  width: 1200px;
  height: 100vh;
  margin: 0 auto;
  padding: 0 24px;
`;
const Main = styled.div`
  width: 1218px;
  height: 130px;
  display: flex;
  justify-content: space-between;
  background-image: url(${backgroundImg});
  background-position: right;
  background-repeat: no-repeat;
  box-sizing: border-box;

  > h1 {
    display: block;
    width: 270px;
    height: 90px;
    font-size: 27px;
    line-height: 75px;
    margin-top: 24px;
    margin-bottom: 27px;
    font-weight: 600;
    color: #232629;
  }
`;

const BlueBox = styled.div`
  width: 801px;
  height: 199px;
  padding: 24px;
  border: 1px solid rgb(184, 201, 216);
  background-color: rgb(235, 244, 251);
  margin-top: 20px;
  border-radius: 5px;
  margin-bottom: 15px;
  box-sizing: content-box;

  > h2 {
    display: block;
    font-weight: 400;
    color: #3a4045;
    width: 809px;
    height: 27px;
    margin: 0px 0px 8px;
    font-size: 21px;
  }

  > p {
    font-size: 15px;
    color: #3a4045;
  }
  > p:nth-child(3) {
    margin-bottom: 10px;
  }
  > p:nth-child(4) {
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 12px;
  }

  & .font-blue {
    color: #0074cc;
  }
  > ul > li {
    font-size: 13px;
    margin-left: 28px;
    color: #3a4045;
  }
`;

const TitleBox = styled.div`
  width: 801px;
  height: 130px;
  padding: 24px;
  border: 1px solid rgb(227, 230, 230);
  background-color: rgb(255, 255, 255);
  border-radius: 5px;
  margin-bottom: 15px;
  box-sizing: content-box;

  > h5 {
    font-size: 14px;
  }

  > p {
    font-size: 12px;
    color: #3e3f42;
    padding: 6px 0px;
  }

  > input {
    width: 780px;
    height: 18px;
    padding: 7px 9px;
    border: 1px solid rgb(189, 190, 193);
    border-radius: 4px;
    margin-bottom: 14px;
  }

  > input::placeholder {
    color: rgb(191, 193, 196);
  }
  > input:focus {
    outline-color: hsl(206deg 90% 70%);
    box-shadow: 0px 0px 6px skyblue;
    border-radius: 5px;
  }

  > button {
    width: 30px;
    height: 14px;
    box-shadow: inset 0px 1px 0px 0px #97c4fe;
    background-color: #0a95ff;
    border-radius: 3px;
    border: 1px solid rgb(34, 147, 237);
    display: inline-block;
    cursor: pointer;
    color: #ffffff;
    font-family: Arial;
    font-size: 13px;
    font-weight: 400;
    padding: 10.4px;
    text-decoration: none;
  }
  > button:hover {
    width: 30px;
    height: 14px;
    box-shadow: inset 0px 1px 0px 0px #97c4fe;
    background-color: hsl(209deg 94% 33% / 89%);
    border-radius: 3px;
    border: 1px solid rgb(34, 147, 237);
    display: inline-block;
    cursor: pointer;
    color: #ffffff;
    font-family: Arial;
    font-size: 13px;
    font-weight: 400;
    padding: 10.4px;
    text-decoration: none;
  }
`;

const QuestionBox = styled.div`
  width: 801px;
  height: 420px;
  padding: 24px;
  border: 1px solid rgb(227, 230, 230);
  background-color: rgb(255, 255, 255);
  border-radius: 5px;
  box-sizing: content-box;
  margin-bottom: 12px;

  > h5 {
    font-size: 15px;
    margin-bottom: 3px;
  }
  > p {
    font-size: 12px;
    margin-bottom: 10px;
  }
  > button {
    width: 30px;
    height: 14px;
    box-shadow: inset 0px 1px 0px 0px #97c4fe;
    background-color: #0a95ff;
    border-radius: 3px;
    border: 1px solid rgb(34, 147, 237);
    display: inline-block;
    cursor: pointer;
    color: #ffffff;
    font-family: Arial;
    font-size: 13px;
    font-weight: 400;
    padding: 10.4px;
    text-decoration: none;
    margin-top: 70px;
    :hover {
      background-color: hsl(209deg 94% 33% / 89%);
      border: 1px solid hsl(209deg 94% 33% / 89%);
    }
  }
`;
const Editor = styled.div`
  width: 799px;
  height: 244px;
  padding: 6px 2px;
  margin-bottom: 10px;
`;

const Tags = styled.div`
  width: 801px;
  height: 100px;
  box-sizing: content-box;
  padding: 24px;
  border: 1px solid rgb(227, 230, 230);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  /* margin-bottom: 20px; */
  background-color: white;

  h3 {
    margin-bottom: 10px;
  }
  p {
    margin-bottom: 10px;
  }

  > ul {
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    margin: 8px 0 0 0;

    > .tag {
      width: auto;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: black;
      padding: 0 8px;
      font-size: 14px;
      list-style: none;
      border-radius: 6px;
      margin: 0 8px 8px 0;
      background: var(--coz-purple-600);
      > .tag-close-icon {
        display: block;
        width: 16px;
        height: 16px;
        line-height: 16px;
        text-align: center;
        font-size: 14px;
        margin-left: 8px;
        color: var(--coz-purple-600);
        border-radius: 50%;
        background: #fff;
        cursor: pointer;
        margin-right: 5px;
      }
    }
  }
  > input {
    flex: 1;
    width: 780px;
    height: 18px;
    padding: 7px 9px;
    border: 1px solid rgb(189, 190, 193);
    border-radius: 4px;
    margin-bottom: 14px;
    margin-left: 5px;
    input:focus {
      outline-color: hsl(206deg 90% 70%);
      box-shadow: 0px 0px 6px skyblue;
      border-radius: 5px;
    }
  }
  > button {
    width: 30px;
    height: 14px;
    box-shadow: inset 0px 1px 0px 0px #97c4fe;
    background-color: #0a95ff;
    border-radius: 3px;
    border: 1px solid rgb(34, 147, 237);
    display: inline-block;
    cursor: pointer;
    color: #ffffff;
    font-family: Arial;
    font-size: 13px;
    font-weight: 400;
    padding: 10.4px;
    text-decoration: none;
    /* margin-top: 10px; */
    :hover {
      background-color: hsl(209deg 94% 33% / 89%);
      border: 1px solid hsl(209deg 94% 33% / 89%);
    }
  }
`;

const BlueButton = styled.button`
  width: 149px;
  height: 36px;
  box-shadow: inset 0px 1px 0px 0px #97c4fe;
  background-color: #0a95ff;
  border-radius: 3px;
  border: 1px solid rgb(34, 147, 237);
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 13px;
  font-weight: 400;
  padding: 10.4px;
  text-decoration: none;
  margin-top: 20px;
  :hover {
    background-color: hsl(209deg 94% 33% / 89%);
    border: 1px solid hsl(209deg 94% 33% / 89%);
  }
`;
const DiscardButton = styled.button`
  width: 100px;
  height: 36px;
  margin-left: 10px;
  background-color: rgb(248, 250, 249);
  display: inline-block;
  cursor: pointer;
  color: #934849;
  font-family: Arial;
  font-size: 13px;
  font-weight: 400;
  padding: 10.4px;
  border: none;
`;

export const TagsInput = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  min-height: 40px;
  padding: 0 3px;
  height: 38px;

  border: 1px solid rgb(214, 216, 218);
  border-radius: 6px;
  margin-bottom: 10px;

  > ul {
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    margin: 8px 0 0 0;

    > .tag {
      font-size: 12px;
      //실질적인 태그
      width: auto;
      height: 25px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: rgb(82, 116, 141);
      padding: 0 8px;
      font-size: 14px;
      list-style: none;
      border-radius: 3px;
      margin: 0 3px 0 0;
      /* background: var(--coz-purple-600); */
      background-color: rgb(226, 236, 245);
      > .tag-close-icon {
        display: block;

        font-weight: 600;
        width: 16px;
        height: 16px;
        line-height: 16px;
        text-align: center;
        font-size: 14px;
        margin-left: 4px;
        color: rgb(82, 116, 141);
        cursor: pointer;
      }
    }
  }

  > input {
    flex: 1;
    border: none;
    height: 31px;
    font-size: 14px;
    padding: 4px 0 0 0;
    margin-left: 5px;
    :focus {
      outline: transparent;
    }
  }
`;

const AskQuestion = () => {
  const answerRef1 = useRef();
  const answerRef2 = useRef();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [expecting, setExpecting] = useState('');
  const [isClicked, setIsClicked] = useState([false, false]); // redux 상태관리 필요 x
  //태그
  const [tags, setTags] = useState(['React', 'JavaScript']);
  const tagRef = useRef(null);
  const scrollRefContent = useRef();
  const scrollRefExpecting = useRef();
  let dispatch = useDispatch();
  let [discardModal, setDiscardModal] = useState(false);

  useEffect(() => {
    new StacksEditor(answerRef1.current, '', {});
    new StacksEditor(answerRef2.current, '', {});
  }, [answerRef1, answerRef2]);

  // 제목값을 저장해주는 함수입니다.
  const handleClickTitle = () => {
    if (title !== '') {
      setTitle(title);
      let copy = [...isClicked];
      copy[0] = true;
      setIsClicked(copy);
      scrollRefContent.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // problem 값을 저장해주는 함수입니다.
  const handleClickProblem = (event) => {
    setContent(event.target.closest('div').querySelector(`[role='textbox']`).innerHTML);
    let copy = [...isClicked];
    copy[1] = true;
    setIsClicked(copy);
    scrollRefExpecting.current.scrollIntoView({ top: '100px', behavior: 'smooth', block: 'start' });
  };

  // expecting값 저장 및 제출 이벤트를 구동하는 함수입니다.
  const onSubmit = (event) => {
    setExpecting(event.target.closest('div').querySelector(`[role='textbox']`).innerHTML);
    const write = JSON.stringify({ title, content, expecting });
    console.log(write);

    // alert('글쓰기 완료');

    return axios
      .post('https://cors-anywhere.herokuapp.com/http://ec2-54-180-116-18.ap-northeast-2.compute.amazonaws.com:8080/questions', { write })
      .then((res) => {
        console.log(res.data);
        dispatch(addQuestions(res.data));
      })
      .catch((err) => console.log('에러', write));
  };

  //복사용
  const initialTags = ['CodeStates', 'kimcoding'];
  const inputTag = useRef(null);

  //const [tags, setTags] = useState(initialTags);
  const removeTags = (indexToRemove) => {
    let copy = [...tags];
    copy.splice(indexToRemove, 1);
    setTags(copy);
  };

  const addTags = (event) => {
    if (event.target.value !== '' && !tags.includes(event.target.value) && tags.length < 7) {
      let copy = [...tags];
      copy.push(event.target.value);
      setTags(copy);
      event.target.value = '';
    }
  };

  return (
    <>
      <Container>
        <Header />
        <Box>
          <Main>
            <h1>Ask a public question</h1>
          </Main>

          <BlueBox>
            <h2>Writing a good question</h2>
            <p>
              You’re ready to <span className='font-blue'>ask</span> a <span className='font-blue'>programming-related question</span> and this form
              will help guide you through the process.
            </p>
            <p>
              Looking to ask a non-programming question? See <span className='font-blue'>the topics here</span> to find a relevant site.
            </p>
            <p>steps</p>
            <ul>
              <li>Summarize your problem in a one-line title.</li>
              <li>Describe your problem in more detail.</li>
              <li>Describe what you tried and what you expected to happen.</li>
              <li>Add “tags” which help surface your question to members of the community.</li>
              <li>Review your question and post it to the site.</li>
            </ul>
          </BlueBox>

          <TitleBox ref={scrollRefContent}>
            <h5>Title</h5>
            <p>Be specific and imagine you’re asking a question to another person.</p>
            <input
              type='text'
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              placeholder='e.g. Is there an R function for finding the index of an element in a vector?'
            ></input>
            <button onClick={handleClickTitle}>Next</button>
          </TitleBox>

          {isClicked[0] ? (
            <QuestionBox>
              <h5>What are the details of your problem?</h5>
              <p>Introduce the problem and expand on what you put in the title. Minimum 20 characters.</p>
              <Editor value={content} ref={answerRef1}></Editor>
              <button ref={scrollRefExpecting} onClick={handleClickProblem}>
                Next
              </button>
            </QuestionBox>
          ) : (
            <QuestionBox style={{ backgroundColor: 'grey' }}>
              <h5>What are the details of your problem?</h5>
              <p>Introduce the problem and expand on what you put in the title. Minimum 20 characters.</p>
              <Editor value={content} ref={answerRef1}></Editor>
              <button disabled={true} onClick={handleClickProblem}>
                Next
              </button>
            </QuestionBox>
          )}

          {isClicked[1] ? (
            <QuestionBox>
              <h5>What did you try and what were you expecting?</h5>
              <p>Describe what you tried, what you expected to happen, and what actually resulted. Minimum 20 characters.</p>
              <Editor ref={answerRef2}></Editor>
            </QuestionBox>
          ) : (
            <QuestionBox style={{ backgroundColor: 'grey' }}>
              <h5>What did you try and what were you expecting?</h5>
              <p>Describe what you tried, what you expected to happen, and what actually resulted. Minimum 20 characters.</p>
              <Editor ref={answerRef2}></Editor>
            </QuestionBox>
          )}

          <Tags>
            <h3>Tags</h3>
            <p>Add up to 5 tags to describe what your question is about. Start typing to see suggestions.</p>
            <TagsInput>
              <ul id='tags'>
                {tags.map((tag, index) => (
                  <li key={index} className='tag'>
                    <span className='tag-title'>{tag}</span>
                    <span
                      className='tag-close-icon'
                      onClick={(el, index) => {
                        removeTags(index);
                      }}
                    >
                      x
                    </span>
                  </li>
                ))}
              </ul>
              <input
                ref={inputTag}
                className='tag-input'
                type='text'
                onKeyUp={(e) => {
                  return e.key === 'Enter' ? addTags(e) : null;
                }}
                placeholder='e.g. (spring typescript ruby-on-rails)'
              />
            </TagsInput>
            {/* <button>Next</button> */}
          </Tags>

          {content !== '' ? <BlueButton onClick={onSubmit}>Review your question</BlueButton> : null}
          <DiscardButton
            onClick={() => {
              setDiscardModal(true);
            }}
          >
            Discard draft
          </DiscardButton>
        </Box>
      </Container>
      {discardModal === true ? <DiscardQuestion setDiscardModal={setDiscardModal}></DiscardQuestion> : null}

      <Footer></Footer>
    </>
  );
};

export default AskQuestion;
