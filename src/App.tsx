import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './sass/app.sass';

import Signup from './Pages/signUp';
import Login from './Pages/login';
import Me from './Pages/me';

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/signup" element={<Signup />} />
					<Route path="/login" element={<Login />} />
					<Route path="/me" element={<Me />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
