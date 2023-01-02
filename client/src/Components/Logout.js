import styled from 'styled-components';

const iconBar = 'https://cdn.sstatic.net/Img/favicons-sprite16.png?v=1cfab30b280e';

const LogoutWindow = styled.div`
  width: 365px;
  background-color: white;
  height: 379px;
  display: flex;
  flex-direction: column;
  box-sizing: content-box;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.07), 0 4px 8px rgba(0, 0, 0, 0.07), 0 8px 16px rgba(0, 0, 0, 0.07),
    0 16px 32px rgba(0, 0, 0, 0.07), 0 32px 64px rgba(0, 0, 0, 0.07);
  position: absolute;
  left: 65%;
  z-index: 100000;
`;
const MenuHeader = styled.div`
  width: 343px;
  height: 14.297px;
  padding: 8px 10px;
  background-color: rgb(241, 242, 244);
  line-height: 13.297px;

  > .head {
    width: 130px;
    height: 13px;
    color: #0074cc;
    font-weight: bold;
    font-size: 11px;
    text-decoration: none;
  }
`;
const MenuMain = styled.div`
  width: 343px;
  height: 14.297px;
  padding: 8px 10px;
  background-color: rgb(244, 249, 250);
  line-height: 13.297px;
  display: flex;

  > .main {
    width: 130px;
    height: 13px;
    color: #0074cc;
    font-weight: bold;
    font-size: 12px;
    text-decoration: none;
    line-height: 15.297px;
  }

  :hover {
    width: 343px;
    height: 14.297px;
    padding: 8px 10px;
    background-color: rgb(244, 249, 250);
    line-height: 13.297px;
    display: flex;
    background-color: hsl(205deg 46% 92%);
  }

  > div > .main {
    width: 130px;
    height: 13px;
    color: #0074cc;
    font-weight: bold;
    font-size: 12px;
    text-decoration: none;
    line-height: 15.297px;
  }

  > div > .info {
    color: #0074cc;
    font-size: 12px;
    text-decoration: none;
    margin: 0 4px;
  }

  > div > .info:hover,
  div > .main:hover,
  a:hover {
    color: hsl(206deg 100% 57%);
    background-color: hsl(205deg 46% 92%);
    > div > .searchIcon {
      background-color: hsl(205deg 46% 92%);
    }
  }
`;

const SearchBar = styled.div`
  position: relative;
  background-color: white;

  > .searchIcon {
    position: absolute;
    top: 18px;
    left: 18px;
    width: 25px;
  }

  > .searchInput {
    padding: 7.8px 9.1px 7.8px 36px;
    width: 304px;
    height: 14px;
    margin: 10px 6px;
    border: 1px solid rgb(188, 191, 193);
    border-radius: 3px;
  }
  > .searchInput:focus {
    outline-color: hsl(206deg 90% 70%);
    box-shadow: 0px 0px 6px skyblue;
    border-radius: 5px;
  }
`;

const Menu = styled.div`
  width: 347px;
  height: 31px;
  padding: 8px;
  border-bottom: 1px solid rgb(241, 242, 242);
  background-color: white;

  .logo {
    width: 10px;
    height: 15px;
    position: relative;
    overflow: hidden;
    padding: 2px 8px;
    margin-top: 3px;
    margin-right: 10px;

    .icon-3d {
      top: 0;
      left: 0px;
      position: absolute;
      width: 18px;
      margin-left: 5px;
    }
  }

  .logo2 {
    width: 10px;
    height: 15px;
    position: relative;
    overflow: hidden;
    padding: 2px 8px;
    margin-top: 10px;
    margin-right: 10px;

    .icon-books {
      top: 0px;
      left: 0px;
      position: absolute;
      width: 18px;
      margin-top: -165%;
      margin-left: 5px;
    }
  }

  .logo3 {
    width: 10px;
    height: 15px;
    position: relative;
    overflow: hidden;
    padding: 2px 8px;
    margin-top: 10px;
    margin-right: 10px;

    .icon-ar {
      top: 0px;
      left: 0px;
      position: absolute;
      width: 18px;
      margin-top: -1095%;
      margin-left: 5px;
    }
  }
`;

const Logout = () => {
  return (
    <>
      <LogoutWindow>
        <MenuHeader>
          <a className='head' href='/'>
            CURRENT COMMUNITY
          </a>
        </MenuHeader>
        <MenuMain>
          <div style={{ width: '25px', height: '13px', backgroundColor: 'rgb(244, 249, 250)' }}>
            <svg className='searchIcon' fill='hsl(210deg 8% 55%)' viewBox='10 3 10 50' width='23px' height='23px'>
              <path d='M26 33v-9h4v13H0V24h4v9h22Z' fill='#BCBBBB'></path>
              <path
                d='m21.5 0-2.7 2 9.9 13.3 2.7-2L21.5 0ZM26 18.4 13.3 7.8l2.1-2.5 12.7 10.6-2.1 2.5ZM9.1 15.2l15 7 1.4-3-15-7-1.4 3Zm14 10.79.68-2.95-16.1-3.35L7 23l16.1 2.99ZM23 30H7v-3h16v3Z'
                fill='#F48024'
              ></path>
            </svg>
          </div>
          <div className='main-box'>
            <a className='main' href='/' style={{ marginRight: '110px' }}>
              Stack Overflow
            </a>
            <a className='info' href='/'>
              help
            </a>
            <a className='info' href='/'>
              chat
            </a>
            <a className='info' href='/members/logout'>
              logout
            </a>
          </div>
        </MenuMain>
        <MenuMain>
          <div style={{ width: '25px', height: '13px', backgroundColor: 'rgb(244, 249, 250)' }}>
            <svg className='searchIcon' fill='rgb(81, 88, 90)' viewBox='10 3 10 50' width='23px' height='23px'>
              <path d='M26 33v-9h4v13H0V24h4v9h22Z' fill='rgb(81, 88, 90)'></path>
              <path
                d='m21.5 0-2.7 2 9.9 13.3 2.7-2L21.5 0ZM26 18.4 13.3 7.8l2.1-2.5 12.7 10.6-2.1 2.5ZM9.1 15.2l15 7 1.4-3-15-7-1.4 3Zm14 10.79.68-2.95-16.1-3.35L7 23l16.1 2.99ZM23 30H7v-3h16v3Z'
                fill='rgb(81, 88, 90)'
              ></path>
            </svg>
          </div>
          <a className='main' href='/'>
            Meta Stack Overflow
          </a>
        </MenuMain>
        <MenuHeader>
          <a className='head' href='/'>
            YOUR COMMUNITIES
          </a>
        </MenuHeader>
        <MenuMain>
          <div style={{ width: '25px', height: '13px', backgroundColor: 'rgb(244, 249, 250)' }}>
            <svg className='searchIcon' fill='hsl(210deg 8% 55%)' viewBox='10 3 10 50' width='23px' height='23px'>
              <path d='M26 33v-9h4v13H0V24h4v9h22Z' fill='#BCBBBB'></path>
              <path
                d='m21.5 0-2.7 2 9.9 13.3 2.7-2L21.5 0ZM26 18.4 13.3 7.8l2.1-2.5 12.7 10.6-2.1 2.5ZM9.1 15.2l15 7 1.4-3-15-7-1.4 3Zm14 10.79.68-2.95-16.1-3.35L7 23l16.1 2.99ZM23 30H7v-3h16v3Z'
                fill='#F48024'
              ></path>
            </svg>
          </div>
          <a className='main' href='/'>
            Stack Overflow
          </a>
        </MenuMain>
        <MenuHeader>
          <a className='head' href='/'>
            MORE STACK EXCHANGE COMMUNITIES
          </a>
        </MenuHeader>

        {/* 검색창 */}
        <SearchBar>
          <svg className='searchIcon' fill='hsl(210deg 8% 55%)' width='27px' height='27px'>
            <path d='M0 0h24v24H0z' fill='none' />
            <path d='m18 16.5-5.14-5.18h-.35a7 7 0 1 0-1.19 1.19v.35L16.5 18l1.5-1.5ZM12 7A5 5 0 1 1 2 7a5 5 0 0 1 10 0Z' />
          </svg>
          <input className='searchInput' placeholder='Find a Stack Exchange community'></input>
        </SearchBar>

        <Menu>
          <div style={{ display: 'flex' }}>
            <div className='logo'>
              <img className='icon-3d' src={iconBar} alt='3D아이콘'></img>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <p>3D Printing</p>
              <span style={{ fontSize: '12px' }}>For 3D printing enthusiasts</span>
            </div>
          </div>
        </Menu>
        <Menu>
          <div style={{ display: 'flex' }}>
            <div className='logo2'>
              <img className='icon-books' src={iconBar} alt='3D아이콘'></img>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <p>Academia</p>
              <span style={{ fontSize: '12px' }}>For academics and those enrolled in higher education</span>
            </div>
          </div>
        </Menu>
        <Menu>
          <div style={{ display: 'flex' }}>
            <div className='logo3'>
              <img className='icon-ar' src={iconBar} alt='3D아이콘'></img>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <p>Amateur Radio</p>
              <span style={{ fontSize: '12px' }}>For amateur radio enthusiasts</span>
            </div>
          </div>
        </Menu>
      </LogoutWindow>
    </>
  );
};

export default Logout;
