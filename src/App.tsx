import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './sass/app.sass';

import Signup from './Pages/Signup';

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/signup" element={<Signup />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
