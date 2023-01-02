import styled from 'styled-components';

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
	padding: 4px 15px;
	color: #0074cc;
	background-color: white;
	font-size: 13px;
	cursor: pointer;

	&:hover {
		color: rgb(13, 138, 255);
	}

	li {
		margin: 12px 0px;
		list-style: none;
	}
`;

const CustomFilters = () => {
	return (
		<div>
			<Container>
				<Title>Custom Filters</Title>
				<List>
					<li>Create a custom filter</li>
				</List>
			</Container>
		</div>
	);
};

export default CustomFilters;
