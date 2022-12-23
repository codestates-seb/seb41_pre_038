import styled from 'styled-components';

const Container = styled.div`
  width: 52px;
  height: 239.285px;
  padding: 0 16px 0 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const Icon = styled.div`
  background-color: #ffffff;
  width: 36px;
  height: ${(props) => props.height || '36px'};
  border: none;
  fill: #babfc4;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const VoteCount = styled.div`
  width: 36px;
  height: 27.45px;
  margin: 2px;
  color: #6a737c;
  font-size: 21px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Icons = (props) => {
  return (
    <Container>
      <Icon onClick={() => console.log('up')}>
        <svg aria-hidden='true' width='36' height='36' viewBox='0 0 36 36'>
          <path d='M2 25h32L18 9 2 25Z'></path>
        </svg>
      </Icon>
      <VoteCount>{props.voteCount}</VoteCount>
      <Icon onClick={() => console.log('down')}>
        <svg aria-hidden='true' width='36' height='36' viewBox='0 0 36 36'>
          <path d='M2 11h32L18 27 2 11Z'></path>
        </svg>
      </Icon>
      <Icon onClick={() => console.log('bookmark')} height='28px'>
        <svg aria-hidden='true' width='18' height='18' viewBox='0 0 18 18'>
          <path d='m9 10.6 4 2.66V3H5v10.26l4-2.66ZM3 17V3c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v14l-6-4-6 4Z'></path>
        </svg>
      </Icon>
      <Icon onClick={() => console.log('activity')}>
        <svg aria-hidden='true' width='18' height='18' viewBox='0 0 19 18'>
          <path d='M3 9a8 8 0 1 1 3.73 6.77L8.2 14.3A6 6 0 1 0 5 9l3.01-.01-4 4-4-4h3L3 9Zm7-4h1.01L11 9.36l3.22 2.1-.6.93L10 10V5Z'></path>
        </svg>
      </Icon>
    </Container>
  );
};

export default Icons;
