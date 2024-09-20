import { useEffect, useState } from 'react';

import { AppDispatch } from '../app/store';
import { fetchMyGames } from '../features/gameSlice';
import { useDispatch } from 'react-redux';

const Home = () => {
	const dispatch = useDispatch<AppDispatch>();
	const [name, setName] = useState('');

	useEffect(() => {
		dispatch(fetchMyGames());
	}, []);

	const sendData = () => {
		console.log(name);
	};

	return (
		<>
			<h1>Home</h1>
			<input
				type="text"
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
			<button onClick={sendData}>Send</button>
		</>
	);
};

export default Home;
