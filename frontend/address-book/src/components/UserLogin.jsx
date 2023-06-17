import { useState } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { currentUser, currentPassword } from '../reactstates';
import '../styles/Login.css';

const UserLogin = ({ showLogin, setShowLogin }) => {
	const [loggedInUser, setLoggedInUser] = useRecoilState(currentUser);
	const [password, setPassword] = useRecoilState(currentPassword);

	const handleSubmit = e => {
		e.preventDefault();
		setShowLogin(current => !current);
	};

	if (!showLogin) {
		return null;
	}

	return (
		<div
			className="login"
			role="alertdialog"
			aria-modal={true}
			aria-labelledby="login_label"
		>
			<div className="loginContent" onClick={e => e.stopPropagation()}>
				<div className="loginHeader">
					<h1 id="login_label">User Login</h1>
				</div>
				<form action="submit" className="loginForm" onSubmit={handleSubmit}>
					<label htmlFor="username" className="sr-only">
						Username
					</label>
					<input
						type="text"
						name="username"
						id="username"
						placeholder="Username"
						value={currentUser.username}
						onChange={e => {
							setLoggedInUser(e.target.value);
						}}
						required
					/>
					<label htmlFor="password" className="sr-only">
						Password
					</label>
					<input
						type="password"
						name="password"
						id="password"
						placeholder="Password"
						value={currentPassword.password}
						onChange={e => {
							setPassword(e.target.value);
						}}
						required
					/>
					<button className="modalButton">Submit</button>
				</form>
			</div>
		</div>
	);
};

export default UserLogin;
