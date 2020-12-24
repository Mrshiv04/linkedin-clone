import React from 'react';
import './Header.css';
import HeaderOption from './HeaderOption';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { logout } from './features/userSlice';
import { auth } from './firebase';
import { useDispatch } from 'react-redux';

function Header() {
	const dispatch = useDispatch();

	const logoutOfApp = () => {
		dispatch(logout());
		auth.signOut();
	};

	return (
		<div className='header'>
			<div className='header_left'>
				<img
					src='https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png'
					alt='main_logo'
				/>
				<div className='header_search'>
					<SearchIcon />
					<input type='text' placeholder='Search' />
				</div>
			</div>

			<div className='header_right'>
				<HeaderOption Icon={HomeIcon} title='Home' />
				<HeaderOption Icon={SupervisorAccountIcon} title='My Network' />
				<HeaderOption Icon={BusinessCenterIcon} title='Jobs' />
				<HeaderOption Icon={ChatIcon} title='Messeging' />
				<HeaderOption Icon={NotificationsIcon} title='Notifications' />
				<HeaderOption avatar={true} title='Logout' onClick={logoutOfApp} />
			</div>
		</div>
	);
}

export default Header;
