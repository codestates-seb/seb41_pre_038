import styled from 'styled-components';
import Header from './Components/Header';
import SideNav from './Components/SideNav';
import Main from './Components/Main';
import Footer from './Components/Footer';
import './App.css';

function App() {
	const Body = styled.div`
		display: flex;
		justify-content: center;
		width: 1264px;
		margin: 0 auto;
	`;

	return (
		<div className='App'>
			<Header />
			<Body>
				<SideNav />
				<Main />
			</Body>
			<Footer />
		</div>
	);
}

export default App;