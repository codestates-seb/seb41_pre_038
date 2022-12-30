import Home from './Home';
import Login from './Login';
import { useSelector } from 'react-redux';

const Main = () => {
	const isLogin = useSelector((state) => state.isLogin);

	// 로그인 상태면 Home, 그렇지 않으면 Login 컴포넌트를 보여준다.
	return <>{isLogin ? <Home /> : <Login />}</>;
};

export default Main;
