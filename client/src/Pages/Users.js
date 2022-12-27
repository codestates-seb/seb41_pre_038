import Header from '../Components/Header';
import Footer from '../Components/Footer';
import SideNav from '../Components/SideNav';
import styled from 'styled-components';
import { useState } from 'react';

const Container = styled.main`
  display: flex;
  justify-content: center;
  width: 1264px;
  margin: 0 auto;
  height: 80vh;

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
  height: 10px;
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

const Users = () => {
  const [filterUser, setFilterUser] = useState('');

  const [filterDate, setFilterDate] = useState('');
  const agent = ['Reputation', 'New users', 'Voters', 'Editors', 'Moderators'];
  const date = ['week', 'month', 'quarter', 'year', 'all'];

  const srcs = [
    'https://www.gravatar.com/avatar/fae9320960fea04d9995ccce46a0844c?s=256&d=identicon&r=PG&f=1',
    'https://www.gravatar.com/avatar/73992b63bc8580d4877875468ab2a86f?s=256&d=identicon&r=PG&f=1',
    'https://www.gravatar.com/avatar/ca457ab8c63fb424d8a3bf5fc491ae20?s=256&d=identicon&r=PG&f=1',
    'https://www.gravatar.com/avatar/333de599c7d3052ac3d88f26d5aad2a9?s=256&d=identicon&r=PG',
    'https://www.gravatar.com/avatar/7405bb106a62e8a3ea2d6d787b7261ee?s=256&d=identicon&r=PG&f=1',
    'https://www.gravatar.com/avatar/574f1d4facb879896f413fff4639ca3d?s=256&d=identicon&r=PG&f=1',
    'https://www.gravatar.com/avatar/61d4e1b3fd2b5862db8e07862ebd3d4c?s=256&d=identicon&r=PG',
    'https://www.gravatar.com/avatar/8c60b504105befd2e9308234feacefac?s=256&d=identicon&r=PG&f=1',
    'https://www.gravatar.com/avatar/9c0bdc3a2c7f09a6b357d773a39f907e?s=256&d=identicon&r=PG&f=1',
    'https://www.gravatar.com/avatar/3106b8083eded6789b401d44475394a4?s=256&d=identicon&r=PG&f=1',
  ];

  const buttonActiveAgent = (e) => {
    setFilterUser((prev) => {
      console.log(e.target.value);
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
            {srcs.map((el, index) => {
              return (
                <UserProfile key={index}>
                  <img src={srcs[index]} alt='프로필 이미지'></img>
                  <div>
                    <a>Inigo</a>
                    <p>Korea</p>
                    <span>533</span>
                    <div>css, git, css-postion</div>
                  </div>
                </UserProfile>
              );
            })}
          </ProfileBox>
        </Main>
      </Container>
      <Footer></Footer>
    </>
  );
};

export default Users;
