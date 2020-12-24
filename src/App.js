import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { login, logout, selectUser } from './features/userSlice';
import Feed from './Feed';
import { auth } from './firebase';
import Header from './Header';
import Login from './Login';
import Sidebar from './Sidebar';
import Widget from './Widget';

function App() {
	const user = useSelector(selectUser);
	const dispatch = useDispatch();

	useEffect(() => {
		auth.onAuthStateChanged((userAuth) => {
			if (userAuth) {
				dispatch(
					login({
						email: userAuth.email,
						uid: userAuth.uid,
						displayName: userAuth.displayName,
						photoUrl: userAuth.photoURL,
					})
				);
			} else {
				dispatch(logout());
			}
		});
	}, []);

	return (
		<div className='app'>
			{!user ? (
				<Login />
			) : (
				<div className='app'>
					<Header />
					<h4
						style={{ padding: '5px', fontWeight: '500', marginBottom: '-25px' }}
					>
						<span style={{ color: '#0a66c5', cursor: 'pointer' }}>
							Get Certified by Stanford
						</span>{' '}
						Advanced Cyber Security Program delivered by Stanford Faculty.
						<span style={{ color: 'gray' }}> Ad</span>
					</h4>
					<div className='app_body'>
						<Sidebar />
						<Feed />
						<Widget />
					</div>
				</div>
			)}
		</div>
	);
}

export default App;
