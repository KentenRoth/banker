import { useEffect, useState } from 'react';

import { AppDispatch, RootState } from '../app/store';
import { useSelector, useDispatch } from 'react-redux';
import useSendData from '../hooks/sendData';
import { createGame } from '../features/gameSlice';
import instance from '../axios/axios';
import Cookies from 'js-cookie';

import Games from '../Components/Game/games';

const Home = () => {
	const dispatch = useDispatch<AppDispatch>();
	const myGames = useSelector((state: RootState) => state.game);
	const myRequests = useSelector((state: RootState) => state.request);
	const [name, setName] = useState('');
	const [user, setUser] = useState('');
	const { sendData, loading, error } = useSendData();

	useEffect(() => {
		console.log(myGames);
		console.log(myRequests);
	}, [myGames, myRequests]);

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
			<div>
				{myGames.games.map((game) => (
					<Games key={game.id} games={game} />
				))}
			</div>
		</>
	);
};

export default Home;
