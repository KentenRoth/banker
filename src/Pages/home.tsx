import { useEffect } from 'react';

import { AppDispatch } from '../app/store';
import { fetchMyGames } from '../features/gameSlice';
import { useDispatch } from 'react-redux';

const Home = () => {
	const dispatch = useDispatch<AppDispatch>();

	useEffect(() => {
		dispatch(fetchMyGames());
	});

	return (
		<>
			<h1>Home</h1>
		</>
	);
};

export default Home;
