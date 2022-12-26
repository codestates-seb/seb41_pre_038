import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Login from './Pages/Login';
import Logout from './Pages/Logout';
import Signup from './Pages/Signup';
import ForgotPassword from './Pages/ForgotPassword';
import Question from './Pages/Question';
import AskQuestion from './Pages/AskQuestion';
import Mypage from './Pages/Mypage';
import './App.css';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/members/login' element={<Login />}></Route>
          <Route path='/members/logout' element={<Logout />}></Route>
          <Route path='/members/sign-up' element={<Signup />}></Route>
          <Route path='/members/help/password' element={<ForgotPassword />}></Route>
          <Route path='/questions/{question-id}' element={<Question />}></Route>
          <Route path='/questions/ask' element={<AskQuestion />}></Route>
          <Route path='/members/{member-id}/profiles' element={<Mypage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
