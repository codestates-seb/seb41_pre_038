import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Login from './Pages/Login';
import Logout from './Pages/Logout';
import Signup from './Pages/Signup';
import ForgotPassword from './Pages/ForgotPassword';
import Question from './Pages/Question';
import AskQuestion from './Pages/AskQuestion';
import './App.css';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/logout' element={<Logout />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='/forgotpassword' element={<ForgotPassword />}></Route>
          <Route path='/question' element={<Question />}></Route>
          <Route path='/askQuestion' element={<AskQuestion />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
