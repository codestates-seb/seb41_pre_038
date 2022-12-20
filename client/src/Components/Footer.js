import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.footer`
	height: 322px;
	color: #9199a1;
	background-color: #232629;

	& > div {
		display: flex;
		justify-content: space-between;
		width: 1240px;
		height: 278px;
		padding: 32px 12px 12px;
		margin: 0 auto;
	}

	& li {
		list-style: none;
		font-size: 13px;
		cursor: pointer;
	}

	& li:hover {
		color: #aaaaaa;
	}
`;

const Logo = styled.div`
	display: flex;
	width: 80px;
	margin: -12px 6px 32px 0;

	& a {
		height: 37px;
	}
`;

const Nav = styled.nav`
	display: flex;
	justify-content: flex-start;
	text-align: left;
	width: 100%;

	& div {
		padding-bottom: 12px;
		margin-right: 94px;
	}

	& h5 {
		font-size: 13px;
		font-weight: 700;
		color: #babfc4;
		margin: 0 0 12px 0;
	}

	& ul {
		padding: 0;
	}

	& li {
		margin-bottom: 10px;
	}
`;

const Info = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-start;
	max-width: 313px;
	font-size: 11px;

	& ul {
		display: flex;
		justify-content: flex-start;
		padding: 0;
		margin: 0;
	}

	& li {
		font-size: 11px;
		margin-right: 12px;
	}

	& p {
		text-align: left;
		margin-bottom: 24px;
	}

	& span {
		text-decoration: underline;
		cursor: pointer;
	}
`;

const Footer = () => {
	return (
		<Container>
			<div>
				<Logo>
					<Link to='/'>
						<svg aria-hidden='true' width='32' height='37' viewBox='0 0 32 37'>
							<path d='M26 33v-9h4v13H0V24h4v9h22Z' fill='#BCBBBB'></path>
							<path
								d='m21.5 0-2.7 2 9.9 13.3 2.7-2L21.5 0ZM26 18.4 13.3 7.8l2.1-2.5 12.7 10.6-2.1 2.5ZM9.1 15.2l15 7 1.4-3-15-7-1.4 3Zm14 10.79.68-2.95-16.1-3.35L7 23l16.1 2.99ZM23 30H7v-3h16v3Z'
								fill='#F48024'></path>
						</svg>
					</Link>
				</Logo>
				<Nav>
					<div>
						<h5>STACK OVERFLOW</h5>
						<ul>
							<li>Questions</li>
							<li>Help</li>
						</ul>
					</div>
					<div>
						<h5>PRODUCTS</h5>
						<ul>
							<li>Teams</li>
							<li>Advertising</li>
							<li>Collectives</li>
							<li>Talent</li>
						</ul>
					</div>
					<div>
						<h5>COMPANY</h5>
						<ul>
							<li>About</li>
							<li>Press</li>
							<li>Work Here</li>
							<li>Legal</li>
							<li>Privacy Policy</li>
							<li>Terms of Service</li>
							<li>Contact Us</li>
							<li>Cookie Settings</li>
							<li>Cookie Policy</li>
						</ul>
					</div>
					<div>
						<h5>STACK EXCHANGE NETWORK</h5>
						<ul>
							<li>Technology</li>
							<li>Culture & recreation</li>
							<li>Life & arts</li>
							<li>Science</li>
							<li>Professional</li>
							<li>Business</li>
							<li>API</li>
							<li>Data</li>
						</ul>
					</div>
				</Nav>
				<Info>
					<ul>
						<li>Blog</li>
						<li>Facebook</li>
						<li>Twitter</li>
						<li>LinkedIn</li>
						<li>Instagram</li>
					</ul>
					<p>
						Site design / logo © 2022 Stack Exchange Inc; user contributions licensed under <span>CC BY-SA</span>. <br />
						rev 2022.12.19.43124
					</p>
				</Info>
			</div>
		</Container>
	);
};

export default Footer;
