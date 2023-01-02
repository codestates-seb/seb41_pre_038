import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.footer`
  background-color: #232629;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;

  * {
    box-sizing: border-box;
  }

  ul {
    list-style: none;
  }
`;

const Contents = styled.div`
  flex-grow: 1;
  max-width: 1264px;
  padding: 32px 12px 12px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.div`
  width: 64px;
  height: 258px;
  margin: -12px 0 32px 0;
`;

const Categories = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;

const Category = styled.div`
  width: ${(props) => props.width};
  height: 278px;
`;

const Title = styled.h5`
  color: #babfc4;
  font-size: 13px;
  margin: 0 0 12px;

  span {
    cursor: pointer;
  }
`;

const List = styled.ul`
  margin: 0;
`;

const Item = styled.li`
  color: #9199a1;
  font-size: 13px;
  padding: 5px 0;

  span {
    cursor: pointer;
    &:hover {
      color: #adb2b7;
    }
  }
`;

const Info = styled.div`
  max-width: 313.09px;
  height: 278px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

const Socials = styled(List)`
  display: flex;
`;

const Social = styled(Item)`
  padding: 4px 0;
  margin: 0 12px 0 0;
  font-size: 11px;
`;

const Copyright = styled.p`
  margin: 0 0 24px 0;
  color: #9199a9;
  font-size: 11px;
  line-height: 1.3;

  span {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const Footer = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
    window.scrollTo(0, 0);
  };

  return (
    <Container>
      <Contents>
        <Logo onClick={handleLogoClick}>
          <svg aria-hidden='true' width='32' height='37' viewBox='0 0 32 37'>
            <path d='M26 33v-9h4v13H0V24h4v9h22Z' fill='#BCBBBB'></path>
            <path
              d='m21.5 0-2.7 2 9.9 13.3 2.7-2L21.5 0ZM26 18.4 13.3 7.8l2.1-2.5 12.7 10.6-2.1 2.5ZM9.1 15.2l15 7 1.4-3-15-7-1.4 3Zm14 10.79.68-2.95-16.1-3.35L7 23l16.1 2.99ZM23 30H7v-3h16v3Z'
              fill='#F48024'></path>
          </svg>
        </Logo>
        <Categories>
          <Category width='214.9px'>
            <Title>
              <span>STACK OVERFLOW</span>
            </Title>
            <List>
              <Item>
                <span>Questions</span>
              </Item>
              <Item>
                <span>Help</span>
              </Item>
            </List>
          </Category>
          <Category width='167.63px'>
            <Title>
              <span>PRODUCTS</span>
            </Title>
            <List>
              <Item>
                <span>Teams</span>
              </Item>
              <Item>
                <span>Advertising</span>
              </Item>
              <Item>
                <span>Collectives</span>
              </Item>
              <Item>
                <span>Talent</span>
              </Item>
            </List>
          </Category>
          <Category width='195.32px'>
            <Title>
              <span>COMPANY</span>
            </Title>
            <List>
              <Item>
                <span>About</span>
              </Item>
              <Item>
                <span>Press</span>
              </Item>
              <Item>
                <span>Work Here</span>
              </Item>
              <Item>
                <span>Legal</span>
              </Item>
              <Item>
                <span>Privacy Policy</span>
              </Item>
              <Item>
                <span>Terms of Service</span>
              </Item>
              <Item>
                <span>Contact Us</span>
              </Item>
              <Item>
                <span>Cookie Settings</span>
              </Item>
              <Item>
                <span>Cookie Policy</span>
              </Item>
            </List>
          </Category>
          <Category width='285.35px'>
            <Title>
              <span>STACK EXCHANGE NETWORK</span>
            </Title>
            <List>
              <Item>
                <span>Technology</span>
              </Item>
              <Item>
                <span>Culture & recreation</span>
              </Item>
              <Item>
                <span>Life & arts</span>
              </Item>
              <Item>
                <span>Science</span>
              </Item>
              <Item>
                <span>Professional</span>
              </Item>
              <Item>
                <span>Business</span>
              </Item>
              <Item>
                <span>API</span>
              </Item>
              <Item>
                <span>Data</span>
              </Item>
            </List>
          </Category>
        </Categories>
        <Info>
          <Socials>
            <Social>
              <span>Blog</span>
            </Social>
            <Social>
              <span>Facebook</span>
            </Social>
            <Social>
              <span>Twitter</span>
            </Social>
            <Social>
              <span>LinkedIn</span>
            </Social>
            <Social>
              <span>Instagram</span>
            </Social>
          </Socials>
          <Copyright>
            Site design / logo © 2022 Stack Exchange Inc; user contributions licensed under <span>CC BY-SA</span>. <br />
            rev 2022.12.19.43125
          </Copyright>
        </Info>
      </Contents>
    </Container>
  );
};

export default Footer;
