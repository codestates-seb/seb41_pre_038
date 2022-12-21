import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.main`
	background-color: lightgreen;
	width: 1100px;
`;

const Main = () => {
	const navigate = useNavigate();

	// <Nav.Link onClick={()=>{navigate('/info')}}>Info</Nav.Link>
	return (
		<Container>
			<button onClick={() => navigate('/login')}>로그인</button>
			<button onClick={() => navigate('/logout')}>로그아웃</button>
			<button onClick={() => navigate('/signup')}>회원가입</button>
			<button onClick={() => navigate('/write')}>글쓰기</button>
		</Container>
	);
};

export default Main;
