import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Login from './Pages/Login';
import Logout from './Pages/Logout';
import Signup from './Pages/Signup';
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
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
