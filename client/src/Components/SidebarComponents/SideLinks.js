import styled from 'styled-components';

const Container = styled.div`
	margin-bottom: 16px;
	border: 1px solid rgb(239, 225, 180);
	border-radius: 3px;
	width: 298px;
	background-color: hsl(47, 87%, 94%);
	box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px, rgba(0, 0, 0, 0.05) 0px 1px 4px 0px, rgba(0, 0, 0, 0.05) 0px 2px 8px 0px;
`;

const Title = styled.div`
	padding: 12px 15px;
	border-top: 1px solid rgb(239, 225, 180);
	border-bottom: 1px solid rgb(239, 225, 180);
	height: 41.69px;
	color: rgb(82, 89, 96);
	background-color: #fbf3d5;
	font-size: 12px;
	font-weight: 700;

	:first-child {
		border-top: none;
	}
`;

const List = styled.div`
	margin: 12px 0px;
	padding: 0px 16px;
	color: #3b4045;
	background-color: hsl(47, 87%, 94%);
	font-size: 13px;

	display: flex;

	span {
		padding-right: 8px;
	}

	a {
		text-decoration: none;
		color: #3b4045;
	}
`;

const PencilIcon = (
	<svg aria-hidden='true' className='va-text-top svg-icon iconPencilSm' width='14' height='14' viewBox='0 0 14 14'>
		<path d='m11.1 1.71 1.13 1.12c.2.2.2.51 0 .71L11.1 4.7 9.21 2.86l1.17-1.15c.2-.2.51-.2.71 0ZM2 10.12l6.37-6.43 1.88 1.88L3.88 12H2v-1.88Z'></path>
	</svg>
);

const BubbleIcon = (
	<svg width='14' height='14' viewBox='0 0 30 20' className='svg-icon mtn2'>
		<path opacity='.5' d='M4.2 4H22a2 2 0 012 2v11.8a3 3 0 002-2.8V5a3 3 0 00-3-3H7a3 3 0 00-2.8 2z' fill='rgb(61, 152,212)'></path>
		<path
			d='M1 7c0-1.1.9-2 2-2h18a2 2 0 012 2v12a2 2 0 01-2 2h-2v5l-5-5H3a2 2 0 01-2-2V7zm10.6 11.3c.7 0 1.2-.5 1.2-1.2s-.5-1.2-1.2-1.2c-.6 0-1.2.4-1.2 1.2 0 .7.5 1.1 1.2 1.2zm2.2-5.4l1-.9c.3-.4.4-.9.4-1.4 0-1-.3-1.7-1-2.2-.6-.5-1.4-.7-2.4-.7-.8 0-1.4.2-2 .5-.7.5-1 1.4-1 2.8h1.9v-.1c0-.4 0-.7.2-1 .2-.4.5-.6 1-.6s.8.1 1 .4a1.3 1.3 0 010 1.8l-.4.3-1.4 1.3c-.3.4-.4 1-.4 1.6 0 0 0 .2.2.2h1.5c.2 0 .2-.1.2-.2l.1-.7.5-.7.6-.4z'
			fill='rgb(61, 152,212)'
		></path>
	</svg>
);

const StackOverFlowIcon = (
	<svg aria-hidden='true' className='native svg-icon iconLogoGlyphMd' width='14' height='14' viewBox='0 0 32 37'>
		<path d='M26 33v-9h4v13H0V24h4v9h22Z' fill='#3b4045'></path>
		<path
			d='m21.5 0-2.7 2 9.9 13.3 2.7-2L21.5 0ZM26 18.4 13.3 7.8l2.1-2.5 12.7 10.6-2.1 2.5ZM9.1 15.2l15 7 1.4-3-15-7-1.4 3Zm14 10.79.68-2.95-16.1-3.35L7 23l16.1 2.99ZM23 30H7v-3h16v3Z'
			fill='#3b4045'
		></path>
	</svg>
);

const SideLinks = () => {
	return (
		<Container>
			<Title>The Overflow Blog</Title>
			<List>
				<span>{PencilIcon}</span>
				<a href='#'>Best practices to increase the speed for Next.js apps</a>
			</List>
			<List>
				<span>{PencilIcon}</span>
				<a href='#'>I spent two years trying to do what Backstage does for free</a>
			</List>
			<Title>Featured on Meta</Title>
			<List>
				<span>{BubbleIcon}</span>
				<a href='#'>Navigation and UI research starting soon</a>
			</List>
			<List>
				<span>{StackOverFlowIcon}</span>
				<a href='#'>2022 Community Moderator Election Results - now with two more mods!</a>
			</List>
			<List>
				<span>{StackOverFlowIcon}</span>
				<a href='#'>Temporary policy: ChatGPT is banned</a>
			</List>
			<List>
				<span>{StackOverFlowIcon}</span>
				<a href='#'>I'm standing down as a moderator</a>
			</List>
			<List>
				<span>{StackOverFlowIcon}</span>
				<a href='#'>Proposing a Community-Specific Closure Reason for non-English content</a>
			</List>
		</Container>
	);
};

export default SideLinks;
