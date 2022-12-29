import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(137, 127, 126, 0.8);
`;
const Container = styled.div`
  width: 460px;
  height: 180px;
  padding: 18px;
  border-radius: 9px;
  margin: 0 auto;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  position: fixed;
  top: 40%;
  left: 37%;
  background-color: white;

  > svg {
    margin-left: 410px;
    cursor: pointer;
  }
  > h1 {
    color: #c22e32;
    font-size: 27px;
    font-weight: 400;
  }
  > p {
    font-size: 12px;
  }
  & button:nth-child(1) {
    width: 130px;
    height: 36px;
    box-shadow: inset 0px 1px 0px 0px #fd7d81;
    background-color: #cf3a32;
    border-radius: 3px;
    border: 1px solid #cf3a32;
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
      background-color: hsl(358deg 64% 41%);
    }
  }
  & button:nth-child(2) {
    border: none;
    background-color: white;
    color: #6a737c;
    margin-left: 25px;
    font-size: 14px;
    cursor: pointer;
    :hover {
      color: black;
    }
  }
`;

const DiscardQuestion = ({ setDiscardModal, discardModal }) => {
  return (
    <>
      <ModalBackground>
        <Container>
          <svg
            viewBox='0 0 14 14'
            onClick={() => {
              setDiscardModal(false);
            }}
          >
            <path d='M12 3.41 10.59 2 7 5.59 3.41 2 2 3.41 5.59 7 2 10.59 3.41 12 7 8.41 10.59 12 12 10.59 8.41 7 12 3.41Z'> </path>
          </svg>
          <h1>Discard question</h1>
          <p>Are you sure you want to discard this question? This cannot be undone.</p>
          <div>
            <Link to='/'>
              <button>Discard question</button>
            </Link>
            <button
              onClick={() => {
                setDiscardModal(false);
              }}
            >
              Cancel
            </button>
          </div>
        </Container>
      </ModalBackground>
    </>
  );
};
export default DiscardQuestion;
