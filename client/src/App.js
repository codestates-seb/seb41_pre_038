import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Questions from './Pages/Questions';
import Login from './Pages/Login';
import Logout from './Pages/Logout';
import Signup from './Pages/Signup';
import ForgotPassword from './Pages/ForgotPassword';
import Question from './Pages/Question';
import AskQuestion from './Pages/AskQuestion';
import MyPage from './Pages/MyPage';
import Setting from './Pages/Setting';
import EditAnswer from './Pages/EditAnswer';
import EditQuestion from './Pages/EditQuestion';
import Users from './Pages/Users';
import DeleteCompleted from './Pages/DeleteCompleted';
import './App.css';

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Home />}></Route>
					<Route path='/questions' element={<Questions />}></Route>
					<Route path='/members/login' element={<Login />}></Route>
					<Route path='/members/logout' element={<Logout />}></Route>
					<Route path='/members/sign-up' element={<Signup />}></Route>
					<Route path='/members/help/password' element={<ForgotPassword />}></Route>
					<Route path='/questions/1' element={<Question />}></Route>
					<Route path='/questions/ask' element={<AskQuestion />}></Route>
					<Route path='/members/1/profiles' element={<MyPage />}></Route>
					<Route path='/members/1' element={<Setting />}></Route>
					<Route path='/members/delete/completed' element={<DeleteCompleted />}></Route>
					<Route path='/edit-answer' element={<EditAnswer />}></Route>
					<Route path='/edit-question' element={<EditQuestion />}></Route>
					<Route path='/members' element={<Users />}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
