import { useEffect, useState } from 'react';

import { AppDispatch } from '../app/store';
import { fetchMyGames } from '../features/gameSlice';
import { useDispatch } from 'react-redux';
import useSendData from '../hooks/sendData';
import { createGame } from '../features/gameSlice';

const Home = () => {
	const dispatch = useDispatch<AppDispatch>();
	const [name, setName] = useState('');
	const { sendData, loading, error } = useSendData('/games');

	useEffect(() => {
		dispatch(fetchMyGames());
	}, []);

	const newGame = async () => {
		try {
			const response = await sendData({ name });
			if (response.status === 200) {
				dispatch(createGame(response.data));
			}
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<>
			<h1>Home</h1>
			<input
				type="text"
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
			<button onClick={newGame}>Send</button>
		</>
	);
};

export default Home;
