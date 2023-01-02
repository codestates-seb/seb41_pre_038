import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  margin: 15px 0 17px 0;

  a {
    color: #0074cc;
    text-decoration: none;
  }
`;

const Notice = styled.h2`
  font-size: 17px;
  font-weight: 400;
`;

const Tag = styled.span`
  padding: 4.8px 6px;
  margin: 0 6px 2px 0;
  border-radius: 3px;
  background-color: #e1ecf4;
  color: #39739d;
  font-size: 12px;
  cursor: pointer;

  &:hover {
    background-color: #cadfef;
  }
`;

const BottomNotice = () => {
  return (
    <Container>
      <Notice>
        Browse other questions tagged <Tag>javascript</Tag> <Tag>python</Tag> or <Link to='/questions/ask'>ask your own question</Link>.
      </Notice>
    </Container>
  );
};

export default BottomNotice;
