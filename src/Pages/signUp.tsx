import React, { useState } from 'react';
import Cookies from 'js-cookie';
import instance from '../axios/axios';

const Signup = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [username, setUsername] = useState('');

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		try {
			const response = await instance.post('/signup', {
				email,
				password,
				username,
			});

			Cookies.set('accessToken', response.data.accessToken);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div className="signup">
			<h1>Sign Up</h1>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="Username"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
				/>
				<input
					type="email"
					placeholder="Email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<input
					type="password"
					placeholder="Password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<input
					type="password"
					placeholder="Confirm Password"
					value={confirmPassword}
					onChange={(e) => setConfirmPassword(e.target.value)}
				/>
				<button type="submit">Sign Up</button>
			</form>
		</div>
	);
};

export default Signup;
