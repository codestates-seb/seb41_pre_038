import styled from 'styled-components';
import { Link, Route } from 'react-router-dom';

const Container = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Chivo+Mono:wght@300&display=swap');
  background-color: white;
  width: 720px;
  height: 170px;
  z-index: 123;
  position: absolute;
  border-radius: 7px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
  padding: 12px;
  > div:nth-child(1) {
    width: 100%;
    font-size: 15px;
    margin-right: 100px;
    display: flex;
    flex-wrap: wrap;
    height: 120px;
    > div {
      width: 40%;
      margin-right: 70px;
      font-size: 13px;
      color: rgb(107, 115, 120);
    }
    & a {
      color: black;
      font-size: 14px;
      font-family: 'Chivo Mono', monospace;
      font-weight: 500;
    }
    > hr {
      color: red;
    }
  }
  > div:nth-child(2) {
    height: 50px;
    border-top: 1px solid #e4e5e6;
    display: flex;
    padding: 10px;
    & button {
      width: 100px;
      height: 30px;
      margin-right: 530px;
      border: 1px solid rgb(141, 162, 176);
      line-height: 30px;
      text-align: center;
      border-radius: 3px;
      color: rgb(86, 115, 137);
      background-color: rgb(222, 237, 249);
      font-size: 12px;
      margin-bottom: 2px;
      cursor: pointer;
      :hover {
        background-color: hsl(205deg 57% 81%);
      }
    }

    > a {
      margin-top: 7px;
      height: 30px;
      font-size: 11px;
      font-weight: 500;
      line-height: 30px;
    }
  }
`;

const SearchModal = () => {
  return (
    <>
      <Container>
        <div>
          <div>
            <a>[tag]</a> search within a tag
          </div>
          <div>
            {' '}
            <a>answers:0 </a>unanswered questions
          </div>
          <div>
            <a>user:1234</a> search by author
          </div>
          <div>
            <a>score:3</a> posts with a 3+ score
          </div>
          <div>
            <a>"words here"</a> exact phrase
          </div>
          <div>
            {' '}
            <a>is:question</a> type of post
          </div>
          <div>
            <a>collective:"Name"</a> collective content
          </div>
          <div>
            <a>isaccepted:yes</a> search within status
          </div>
        </div>
        <div>
          <Link to='/questions/ask'>
            <button>Ask a question</button>
          </Link>
          <a>Search help</a>
        </div>
      </Container>
    </>
  );
};

export default SearchModal;
