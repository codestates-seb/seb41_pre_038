import Header from '../Components/Header';
import Footer from '../Components/Footer';
import SideNav from '../Components/SideNav';
import styled from 'styled-components';
import { useState } from 'react';

const Container = styled.main`
  display: flex;
  justify-content: center;
  width: 100vw;
  margin: 0 auto;
  height: 1000px;

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
    height: 37px;
    padding: 7px 9px 7px 32px;
    margin-right: 650px;
    border-radius: 3px;
    border: 1px solid #bcbfc0;
  }
  > input:hover {
    outline-color: hsl(206deg 90% 70%);
    box-shadow: 0px 0px 6px skyblue;
    border-radius: 5px;
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
    width: 37px;
    height: 16px;
    cursor: pointer;
    list-style: none;
    padding: 10.4px;
    box-sizing: content-box;
    font: 13px;
    color: #6a737c;
    line-height: 16px;
    margin: 0 auto;
  }

  & li:nth-child(1),
  li:nth-child(1):hover {
    width: 50px;
    border-top-left-radius: 5px !important;
    border-bottom-left-radius: 5px !important;
  }
  & li:nth-child(1),
  li:nth-child(2) {
    border-right: 1px solid #868b8f;
  }
  & li:nth-child(3),
  li:nth-child(3):hover {
    border-top-right-radius: 5px !important;
    border-bottom-right-radius: 5px !important;
  }
  & li:hover {
    text-align: center;
    width: 37px;
    height: 16px;
    list-style: none;
    padding: 10.4px;
    box-sizing: content-box;
    font: 13px;
    color: #6a737c;
    line-height: 16px;
    margin: 0 auto;
    background-color: rgb(248, 250, 249);
  }

  .active-agent,
  .active-agent:hover {
    color: rgb(68, 72, 75);
    background-color: rgb(226, 230, 233);
  }
`;

const TagBox = styled.div`
  width: 1100px;
  height: 370px;
  display: flex;
  margin-top: 15px;
  flex-wrap: wrap;
  cursor: pointer;
`;

const Tag = styled.div`
  width: 23%;
  height: 170px;
  border: 1px solid rgb(215, 216, 217);
  border-radius: 4px;
  margin-bottom: -10px;
  margin-right: 13px;
  padding: 12px;
  > div:nth-child(1) {
    color: #39739d;
    height: 23px;
    background-color: rgb(226, 236, 245);
    display: inline-block;
    padding: 3px 6px;
    font-size: 12px;
    border-radius: 3px;
    margin-bottom: 10px;
    cursor: pointer;
    :hover {
      background-color: hsl(205deg 57% 81%);
    }
  }
  > div:nth-child(2) {
    font-size: 13px;
    color: #3e3f42;
    margin-bottom: 10px;
    cursor: pointer;
  }
  > div:nth-child(3) {
    display: flex;
    > div {
      cursor: pointer;
      font-size: 12px;
      color: #848a90;
    }
  }
`;

const Info = styled.div`
  width: 632px;
  height: 90px;
  > p {
    font-size: 15px;
  }
  > a {
    display: block;
    margin-top: 10px;
    font-size: 13px;
  }
`;

const Tags = () => {
  const [filterUser, setFilterUser] = useState('');
  const category = ['Popular', 'Name', 'New'];

  const buttonActiveAgent = (e) => {
    setFilterUser((prev) => {
      return e.target.value;
    });
  };

  return (
    <>
      <Header></Header>
      <Container>
        <SideNav></SideNav>
        <Main>
          <h1>Tags</h1>
          <Info>
            <p>
              A tag is a keyword or label that categorizes your question with other, similar questions. Using the right tags makes it easier for
              others to find and answer your question.
            </p>
            <a>Show all tag synonyms</a>
          </Info>
          <SearchBar>
            <svg className='searchIcon' fill='hsl(210deg 8% 55%)' width='27px' height='27px'>
              <path d='M0 0h24v24H0z' fill='none' />
              <path d='m18 16.5-5.14-5.18h-.35a7 7 0 1 0-1.19 1.19v.35L16.5 18l1.5-1.5ZM12 7A5 5 0 1 1 2 7a5 5 0 0 1 10 0Z' />
            </svg>
            <input placeholder='Filter by tag name'></input>
            <div>
              <ul>
                {category.map((el, index) => {
                  return (
                    <li value={index} className={index === filterUser ? 'active-agent' : ''} key={index} onClick={buttonActiveAgent}>
                      {el}
                    </li>
                  );
                })}
              </ul>
            </div>
          </SearchBar>
          <TagBox>
            <Tag>
              <div>javascript</div>
              <div>
                For questions about programming in ECMAScript (JavaScript/JS) and its different dialects/implementations (except for ActionScript).
                Keep in ...
              </div>
              <div>
                <div>2461879 questions</div>
                <div>540 asked today, 3129 this week</div>
              </div>
            </Tag>
            <Tag>
              <div>python</div>
              <div>Python is a multi-paradigm, dynamically typed, multi-purpose programming language. It is designed to be quick to learn,</div>
              <div>
                <div>2084961 questions</div>
                <div>495 asked today, 4454 this week</div>
              </div>
            </Tag>
            <Tag>
              <div>java</div>
              <div>
                Java is a high-level object-oriented programming language. Use this tag when you're having problems using or understanding the
                language itself.
              </div>
              <div>
                <div>2461879 questions</div>
                <div>540 asked today, 3129 this week</div>
              </div>
            </Tag>
            <Tag>
              <div>c#</div>
              <div>
                C# (pronounced "see sharp") is a high-level, statically typed, multi-paradigm programming language developed by Microsoft. C# code
              </div>
              <div>
                <div>2461879 questions</div>
                <div>108 asked today, 1146 this week</div>
              </div>
            </Tag>
            <Tag>
              <div>php</div>
              <div>
                PHP is a widely used, open source, general-purpose, multi-paradigm, dynamically typed and interpreted scripting language designed
                initially
              </div>
              <div>
                <div>2461879 questions</div>
                <div>540 asked today, 3129 this week</div>
              </div>
            </Tag>
            <Tag>
              <div>android</div>
              <div>
                Android is Google's mobile operating system, used for programming or developing digital devices (Smartphones, Tablets, Automobiles,
              </div>
              <div>
                <div>2461879 questions</div>
                <div>540 asked today, 3129 this week</div>
              </div>
            </Tag>
            <Tag>
              <div>html</div>
              <div>
                HTML (HyperText Markup Language) is the markup language for creating web pages and other information to be displayed in a web browser.
              </div>
              <div>
                <div>2461879 questions</div>
                <div>540 asked today, 3129 this week</div>
              </div>
            </Tag>
            <Tag>
              <div>jquery</div>
              <div>
                jQuery is a JavaScript library. Consider also adding the JavaScript tag. jQuery is a popular cross-browser JavaScript library that
              </div>
              <div>
                <div>2461879 questions</div>
                <div>540 asked today, 3129 this week</div>
              </div>
            </Tag>
          </TagBox>
        </Main>
      </Container>
      <Footer></Footer>
    </>
  );
};

export default Tags;
