import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './sass/app.sass';

import { AppDispatch } from './app/store';
import { fetchMyGames } from './features/gameSlice';
import { fetchRequests } from './features/requestSlice';

import Home from './Pages/home';
import Signup from './Pages/signUp';
import Login from './Pages/login';
import Me from './Pages/me';
import { useEffect } from 'react';

function App() {
	const dispatch = useDispatch<AppDispatch>();
	const location = useLocation();

	useEffect(() => {
		if (location.pathname !== '/login' && location.pathname !== '/signup') {
			dispatch(fetchMyGames());
			dispatch(fetchRequests());
		}
	}, [location.pathname, dispatch]);

	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/login" element={<Login />} />
				<Route path="/me" element={<Me />} />
			</Routes>
		</>
	);
}

export default App;
