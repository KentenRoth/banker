import React, { useState } from 'react';

const Signup = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log(email, password, confirmPassword);
	};

	return (
		<div className="signup">
			<h1>Sign Up</h1>
			<form onSubmit={handleSubmit}>
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
