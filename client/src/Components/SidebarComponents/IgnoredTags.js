import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  button {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;

const Container = styled.div`
	margin-bottom: 16px;
	border: 1px solid hsl(210, 8%, 90%);
	border-radius: 3px;
	width: 298px;
	background-color: hsl(47, 87%, 94%);
	box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px, rgba(0, 0, 0, 0.05) 0px 1px 4px 0px, rgba(0, 0, 0, 0.05) 0px 2px 8px 0px;
`;

const Title = styled.div`
	padding: 12px 15px;
	border-top: 1px solid hsl(210, 8%, 90%);
	border-bottom: 1px solid hsl(210, 8%, 90%);
	height: 44.5px;
	color: rgb(82, 89, 96);
	background-color: hsl(210, 8%, 97.5%);
	font-size: 15px;

	:first-child {
		border-top: none;
	}
`;

const List = styled.div`
	padding: 16px 15px;
	background-color: white;

	display: flex;
	justify-content: center;
`;

const Button = styled.button`
	width: 128.7px;
	height: 35px;
	border: 1px solid hsl(205, 41%, 63%);
	border-radius: 3px;
	color: #39739d;
	background-color: hsl(205, 46%, 92%);
	font-size: 12px;
	box-shadow: rgba(255, 255, 255, 0.7) 0px 1px 0px 0px inset;
	cursor: pointer;

	&:hover {
		background-color: rgb(170, 205, 230);
	}
`;

const IgnoredTags = () => {
	return (
		<div>
			<Container>
				<GlobalStyle />
				<Title>Ignored Tags</Title>
				<List>
					<Button>Add an Ignored tag</Button>
				</List>
			</Container>
		</div>
	);
};
export default IgnoredTags;
