import Header from '../Components/Header';
import Footer from '../Components/Footer';
import SideNav from '../Components/SideNav';
import styled from 'styled-components';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Container = styled.main`
	display: flex;
	justify-content: center;
	width: 100vw;
	margin: 0 auto;
	height: 1380px;

	& h1 {
		display: block;
		width: 800px;
		height: 35px;
		margin: 0px 0px 24px;
		font-size: 27px;
		font-weight: 400;
	}
`;

const Main = styled.div`
	width: 1100px;
	padding: 24px;
	height: 1300px;
`;

const SearchBar = styled.div`
	width: 800px;
	height: 48.78px;
	display: flex;
	position: relative;

	.searchIcon {
		position: absolute;
		top: 10px;
		left: 10px;
		width: 25px;
	}

	> input {
		width: 185px;
		height: 36px;
		padding: 7px 9px 7px 32px;
		margin-right: 440px;
		border-radius: 3px;
		border: 1px solid #bcbfc0;
	}
	> input:hover {
		outline-color: hsl(206deg 90% 70%);
		box-shadow: 0px 0px 6px skyblue;
		border-radius: 5px;
	}

	& div {
	}

	& ul {
		display: flex;
		border-collapse: collapse;
		border-bottom-left-radius: 5px !important;
		border-bottom-right-radius: 5px !important;
		border-top-left-radius: 5px !important;
		border-top-right-radius: 5px !important;
		border: 1px solid #868b8f;
	}

	& li {
		text-align: center;
		width: 68px;
		height: 16px;
		border-right: 1px solid #868b8f;
		list-style: none;
		padding: 10.4px;
		box-sizing: content-box;
		font: 13px;
		color: #6a737c;
		line-height: 16px;
		margin: 0 auto;
	}
	& li:hover {
		text-align: center;
		width: 68px;
		height: 16px;
		border-right: 1px solid #868b8f;
		list-style: none;
		padding: 10.4px;
		box-sizing: content-box;
		font: 13px;
		color: #6a737c;
		line-height: 16px;
		margin: 0 auto;
		background-color: rgb(248, 250, 249);
	}

	& li:nth-child(5) {
		border-right: none;
	}

	& li:nth-child(3),
	li:nth-child(4) {
		width: 48px;
	}

	.active-agent,
	.active-agent:hover {
		color: rgb(68, 72, 75);
		background-color: rgb(226, 230, 233);
	}
`;

const DaySort = styled.div`
	width: 1051px;
	height: 40px;
	position: relative;

	> div {
		width: 57px;
	}
	> ul {
		position: absolute;
		display: flex;
		right: 0px;
		cursor: pointer;
	}

	&li:nth-child(1) {
		width: 47px;
	}
	& li {
		color: rgb(135, 139, 143);
		height: 45px;
		list-style: none;
		padding: 8px;
		margin-right: 2px;
		margin-bottom: 10px;
		line-height: 40px;
	}
	.active-date {
		color: black;
		border-bottom: 1px solid rgb(233, 132, 51);
	}

	& li:hover {
		color: rgb(135, 139, 143);
		height: 45px;
		list-style: none;
		padding: 8px;
		margin-right: 2px;
		margin-bottom: 10px;
		line-height: 40px;
		border-bottom: 1px solid rgb(233, 132, 51);
	}
`;

const ProfileBox = styled.div`
	width: 1100px;
	height: 1100px;
	display: flex;
	margin-top: 15px;
	flex-wrap: wrap;
`;

const UserProfile = styled.div`
	width: 254px;
	height: 97px;
	padding: 5px 6px 7px 7px;
	margin-top: 10px;
	margin-right: 10px;
	display: flex;
	> img {
		width: 48px;
		height: 48px;
		background-color: pink;
		border-radius: 4px;
	}
	> div:nth-child(2) {
		margin-left: 10px;
		display: flex;
		flex-direction: column;

		> a {
			font-size: 15px;
		}
		> p {
			margin-top: 2px;
			font-size: 12px;
		}
		> span {
			font-size: 13px;
			font-weight: bold;
		}
		> div {
			margin-top: 3px;
			color: rgb(1, 115, 203);
			font-size: 12px;
		}
	}
`;

const Page = styled.div`
	width: 300px;
	margin-left: 70%;
`;

const Nav = styled.nav`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 4px;
	margin: 16px;
`;

const Button = styled.button`
	border: 1px solid #d7d8d9;
	border-radius: 4px;
	padding: 8px;
	margin: 0;
	background: white;
	color: #474a4c;
	font-size: 1rem;
	width: 24px;
	height: 27px;
	line-height: 10px;

	&:hover {
		line-height: 10px;
		width: 24px;
		height: 27px;
		background: hsl(210deg 8% 75%);
		cursor: pointer;
	}

	&[aria-current] {
		border: none;
		line-height: 13px;
		width: 24px;
		height: 27px;
		background: #f48124;
		font-weight: bold;
		cursor: revert;
		color: white;
	}
`;

const Pagination = ({ total, limit, page, setPage }) => {
	const numPages = Math.ceil(total / limit);

	return (
		<>
			<Nav>
				<Button style={{ width: '44px', fontSize: '14px' }} onClick={() => setPage(page - 1)} disabled={page === 1}>
					Prev
				</Button>
				{Array(numPages)
					.fill()
					.map((_, i) => (
						<Button key={i + 1} onClick={() => setPage(i + 1)} aria-current={page === i + 1 ? 'page' : null}>
							{i + 1}
						</Button>
					))}
				<Button style={{ width: '44px', fontSize: '14px' }} onClick={() => setPage(page + 1)} disabled={page === numPages}>
					Next
				</Button>
			</Nav>
		</>
	);
};

const Users = () => {
	const navigate = useNavigate();
	const [filterUser, setFilterUser] = useState('');
	const [filterDate, setFilterDate] = useState('');
	const agent = ['Reputation', 'New users', 'Voters', 'Editors', 'Moderators'];
	const date = ['week', 'month', 'quarter', 'year', 'all'];
	//페이지네이션
	const [posts, setPosts] = useState([]); // 받아온 데이터를 저장하는 변수
	const limit = 36;
	const [page, setPage] = useState(1); //현재 페이지 번호
	const offset = (page - 1) * limit; // 첫 게시물의 위치 번호

	const srcs = [
		'https://www.gravatar.com/avatar/fae9320960fea04d9995ccce46a0844c?s=256&d=identicon&r=PG&f=1',
		'https://www.gravatar.com/avatar/52f79e92fdda71a258de1818558dcea4?s=256&d=identicon&r=PG',
		'https://i.stack.imgur.com/5nAjd.jpg?s=256&g=1',
		'https://www.gravatar.com/avatar/73992b63bc8580d4877875468ab2a86f?s=256&d=identicon&r=PG&f=1',
		'https://i.stack.imgur.com/hjwrE.png?s=256&g=1',
		'https://www.gravatar.com/avatar/ca457ab8c63fb424d8a3bf5fc491ae20?s=256&d=identicon&r=PG&f=1',
		'https://i.stack.imgur.com/FGANw.png?s=256&g=1',
		'https://www.gravatar.com/avatar/333de599c7d3052ac3d88f26d5aad2a9?s=256&d=identicon&r=PG',
		'https://mblogthumb-phinf.pstatic.net/MjAyMTA3MDlfMjcx/MDAxNjI1ODM2NDg1NTE5.Mx0nXNrqyyjIiT3YXm0fTUBv1J1no8AHuKqnvnfWuysg.1gc0SdOwe5secWvX4QK9k_DFHR31OWkZnQlCfhC0bzsg.JPEG.koce_07/IMG_7936.JPG?type=w800',
		'https://www.gravatar.com/avatar/7405bb106a62e8a3ea2d6d787b7261ee?s=256&d=identicon&r=PG&f=1',
		'https://www.gravatar.com/avatar/00eb0dd8c3cd1298b05f09661f0c2b45?s=256&d=identicon&r=PG',
		'https://i.stack.imgur.com/t2hoD.jpg?s=256&g=1',
		'https://www.gravatar.com/avatar/66c853f033acf6dd2353714b3c73772f?s=256&d=identicon&r=PG',
		'https://www.gravatar.com/avatar/cd501083459cbc21fccae78e2d03bee2?s=256&d=identicon&r=PG',
		'https://www.gravatar.com/avatar/574f1d4facb879896f413fff4639ca3d?s=256&d=identicon&r=PG&f=1',
		'https://i.stack.imgur.com/bU0Kx.jpg?s=256&g=1',
		'https://www.gravatar.com/avatar/61d4e1b3fd2b5862db8e07862ebd3d4c?s=256&d=identicon&r=PG',
		'https://www.gravatar.com/avatar/8c60b504105befd2e9308234feacefac?s=256&d=identicon&r=PG&f=1',
		'https://www.gravatar.com/avatar/9c0bdc3a2c7f09a6b357d773a39f907e?s=256&d=identicon&r=PG&f=1',
		'https://i.stack.imgur.com/98geJ.png?s=256&g=1',
		'https://www.gravatar.com/avatar/3106b8083eded6789b401d44475394a4?s=256&d=identicon&r=PG&f=1',
		'https://i1.sndcdn.com/avatars-000201592531-nzg96z-t500x500.jpg',
	];

	// get 요청으로 데이터를 받아옵니다.
	useEffect(() => {
		axios
			.get('https://jsonplaceholder.typicode.com/posts')
			.then((res) => {
				setPosts(res.data);
				console.log(posts);
			})
			.catch((Error) => {
				console.log(Error);
			});
	}, []);

	const buttonActiveAgent = (e) => {
		setFilterUser((prev) => {
			return e.target.value;
		});
	};

	const buttonActiveDate = (e) => {
		setFilterDate((prev) => {
			return e.target.value;
		});
	};

	return (
		<>
			<Header></Header>
			<Container>
				<SideNav></SideNav>
				<Main>
					<h1>Users</h1>
					<SearchBar>
						<svg className='searchIcon' fill='hsl(210deg 8% 55%)' width='27px' height='27px'>
							<path d='M0 0h24v24H0z' fill='none' />
							<path d='m18 16.5-5.14-5.18h-.35a7 7 0 1 0-1.19 1.19v.35L16.5 18l1.5-1.5ZM12 7A5 5 0 1 1 2 7a5 5 0 0 1 10 0Z' />
						</svg>
						<input placeholder='Filter by user'></input>
						<div>
							<ul>
								{agent.map((el, index) => {
									return (
										<li value={index} className={index === filterUser ? 'active-agent' : ''} key={index} onClick={buttonActiveAgent}>
											{el}
										</li>
									);
								})}
							</ul>
						</div>
					</SearchBar>
					<DaySort>
						<ul>
							{date.map((el, index) => {
								return (
									<li value={index} className={index === filterDate ? 'active-date' : ''} key={index} onClick={buttonActiveDate}>
										{el}
									</li>
								);
							})}
						</ul>
					</DaySort>
					<ProfileBox>
						{posts.slice(offset, offset + limit).map(({ id, title, body }) => {
							return (
								<UserProfile key={id}>
									<img src={srcs[id % 22]} alt='프로필 이미지'></img>
									<div>
										<a onClick={() => navigate(`/members/1`)}>{title.slice(0, 10)}</a>
										<p>Korea</p>
										<span>533</span>
										<div>{body.slice(0, 10)}</div>
									</div>
								</UserProfile>
							);
						})}
					</ProfileBox>
					<Page>
						<Pagination total={posts.length} limit={limit} page={page} setPage={setPage}></Pagination>
					</Page>
				</Main>
			</Container>
			<Footer></Footer>
		</>
	);
};

export default Users;
