import { useEffect, useState } from 'react';

import { AppDispatch, RootState } from '../app/store';
import { useSelector, useDispatch } from 'react-redux';
import useSendData from '../hooks/sendData';
import { createGame } from '../features/gameSlice';
import instance from '../axios/axios';
import Cookies from 'js-cookie';

const Home = () => {
	const dispatch = useDispatch<AppDispatch>();
	const myGames = useSelector((state: RootState) => state.game);
	const [name, setName] = useState('');
	const [user, setUser] = useState('');
	const { sendData, loading, error } = useSendData();

	useEffect(() => {
		console.log(myGames);
	}, [myGames]);

	const logout = async () => {
		try {
			const response = await instance.post('/logout');
			if (response.status === 200) {
				Cookies.remove('accessToken');
			}
		} catch (error) {
			console.error(error);
		}
	};

	const logoutAll = async () => {
		try {
			const response = await instance.post('/logout/all');
			if (response.status === 200) {
				Cookies.remove('accessToken');
			}
		} catch (error) {
			console.error(error);
		}
	};

	const newGame = async () => {
		try {
			const response = await sendData('/games', { name });
			if (response.status === 200) {
				dispatch(createGame(response.data));
			}
		} catch (error) {
			console.error(error);
		}
	};

	// only friends right now
	const sendRequest = async () => {
		try {
			const response = await sendData('/requests', {
				receiving_player: user,
				request_type: 'friend',
			});
			console.log(response);
			if (response.status === 200) {
				setUser('');
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

			<button onClick={logout}>Logout</button>
			<button onClick={logoutAll}>Logout All</button>

			<input
				type="text"
				value={user}
				onChange={(e) => setUser(e.target.value)}
			></input>
			<button onClick={sendRequest}>Send Request</button>
		</>
	);
};

export default Home;
