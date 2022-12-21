import styled from 'styled-components';
import Header from '../Components/Header';
const backgroundImg = 'https://cdn.sstatic.net/Img/ask/background.svg?v=2e9a8205b368';

const Container = styled.div`
	width: 100%;
	height: 100vh;
	background-color: #f8faf9;
	display: flex;
	flex-direction: column;

`;

const Box = styled.div`
	width: 1200px;
  height: 100vh;
  margin: 0 auto;
  padding: 0 24px;
`
const Main = styled.div`
  width: 1218px;
  height: 130px;
  display: flex;
  justify-content: space-between;
  background-image:url(${backgroundImg});
  background-position : right;
  background-repeat: no-repeat;
  box-sizing: border-box;
  
  > h1{
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

  /* > img{
    width: 600px;
    height: 130px;
  } */
`

const BlueBox = styled.div`
  width: 801px;
  height: 199px;
  padding: 24px;
  border: 1px solid rgb(184, 201, 216);
  background-color: rgb(235, 244, 251);
  margin-top: 20px;
  border-radius: 5px;

  > h2{
    display: block;
    font-weight: 400;
    color: #3a4045;
    width: 809px;
    height: 27px;
    margin: 0px 0px 8px;
    font-size: 21px;
  }
  
  >p{
    font-size: 15px;
    color: #3a4045;
  }
  >p:nth-child(4){
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 12px;
  }
  >ul >li{
    font-size: 13px;
    margin-left: 28px;
    color: #3a4045;
  }
`

const AskQuestion = () => {


	return (
		<Container>
			<Header />
      <Box>
        <Main>
          <h1>Ask a public question</h1>
        </Main>

        <BlueBox>
          <h2>Writing a good question</h2>
          <p>You’re ready to ask a programming-related question and this form will help guide you through the process.</p>
          <p style={{marginBottom:'10px'}}>Looking to ask a non-programming question? See the topics here to find a relevant site.</p>
        
          <p>steps</p>
          <ul>
            <li>Summarize your problem in a one-line title.</li>
            <li>Describe your problem in more detail.</li>
            <li>Describe what you tried and what you expected to happen.</li>
            <li>Add “tags” which help surface your question to members of the community.</li>
            <li>Review your question and post it to the site.</li>
          </ul>
        </BlueBox>
        </Box>
		</Container>
	);
};

export default AskQuestion;
