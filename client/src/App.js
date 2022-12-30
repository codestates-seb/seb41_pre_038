import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from './Pages/Main';
import Home from './Pages/Home';
import Questions from './Pages/Questions';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import ForgotPassword from './Pages/ForgotPassword';
import Question from './Pages/Question';
import AskQuestion from './Pages/AskQuestion';
import Mypage from './Pages/Mypage';
import Setting from './Pages/Setting';
import EditAnswer from './Pages/EditAnswer';
import EditQuestion from './Pages/EditQuestion';
import Users from './Pages/Users';
import DeleteCompleted from './Pages/DeleteCompleted';
import Logout from './Pages/Logout';
import Tags from './Pages/Tags';
import UserPage from './Pages/UserPage';
import './App.css';

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Main />}></Route>
					<Route path='/questions' element={<Questions />}></Route>
					<Route path='/members/login' element={<Login />}></Route>
					<Route path='/members/logout' element={<Logout />}></Route>
					<Route path='/members/sign-up' element={<Signup />}></Route>
					<Route path='/members/help/password' element={<ForgotPassword />}></Route>
					<Route path='/questions/:questionId' element={<Question />}></Route>
					<Route path='/questions/ask' element={<AskQuestion />}></Route>
					<Route path='/members/:memberId/profiles' element={<Mypage />}></Route>
					<Route path='/members/:memberId/settings' element={<Setting />}></Route>
					<Route path='/members/delete/completed' element={<DeleteCompleted />}></Route>
					<Route path='/questions/:questionId/edit-question' element={<EditQuestion />}></Route>
					<Route path='/questions/:questionId/edit-answer' element={<EditAnswer />}></Route>
					<Route path='/members' element={<Users />}></Route>
					<Route path='/members/:memberId' element={<UserPage />}></Route>
					<Route path='/tags' element={<Tags />}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
