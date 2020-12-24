import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';
import { auth } from './firebase';
import './Login.css';
import Footer from './Footer';

function Login() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [name, setName] = useState('');
	const [profilePic, setProfilePic] = useState('');
	const dispatch = useDispatch();

	const loginToApp = (e) => {
		e.preventDefault();
		auth
			.signInWithEmailAndPassword(email, password)
			.then((userAuth) => {
				dispatch(
					login({
						email: userAuth.user.email,
						uid: userAuth.user.uid,
						displayName: userAuth.user.displayName,
						profileUrl: userAuth.user.photoURL,
					})
				);
			})
			.catch((error) => alert(error));
	};

	const register = () => {
		if (!name) {
			return alert('Please enter the full name to register!');
		}

		auth
			.createUserWithEmailAndPassword(email, password)
			.then((userAuth) => {
				userAuth.user
					.updateProfile({
						displayName: name,
						photoURL: profilePic,
					})
					.then(() => {
						dispatch(
							login({
								email: userAuth.user.email,
								uid: userAuth.user.uid,
								displayName: name,
								photoUrl: profilePic,
							})
						);
					});
			})
			.catch((error) => alert(error));
	};

	return (
		<div className='login'>
			<img
				className=''
				src='https://cdn.worldvectorlogo.com/logos/linkedin.svg'
				alt='brandlogo'
			/>
			<form>
				<input
					type='text'
					value={name}
					onChange={(e) => setName(e.target.value)}
					placeholder='Full Name (required if registering)'
				/>
				<input
					type='text'
					value={profilePic}
					onChange={(e) => setProfilePic(e.target.value)}
					placeholder='Profile picture Url (optional)'
				/>
				<input
					type='email'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					placeholder='Email'
				/>
				<input
					type='password'
					onChange={(e) => setPassword(e.target.value)}
					value={password}
					placeholder='Password'
				/>
				<button type='submit' onClick={loginToApp}>
					Sign In
				</button>
			</form>
			<p>
				Not a member?{' '}
				<span className='login_register' onClick={register}>
					Register now
				</span>
			</p>
			<Footer />
		</div>
	);
}

export default Login;
