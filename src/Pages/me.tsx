import { useEffect } from 'react';
import instance from '../axios/axios';

const Me = () => {
	useEffect(() => {
		getMe();
	});

	const getMe = async () => {
		const me = await instance.get('/me');
		console.log(me.data);
	};

	return (
		<>
			<h1>Me</h1>
		</>
	);
};

export default Me;
