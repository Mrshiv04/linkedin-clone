import React from 'react';
import './Sidebar.css';
import { Avatar } from '@material-ui/core';
import { selectUser } from './features/userSlice';
import { useSelector } from 'react-redux';

function Sidebar() {
	const user = useSelector(selectUser);

	const recentItem = (topic) => (
		<div className='sidebar_recentItem'>
			<span className='sidebar_hash'>#</span>
			<p>{topic}</p>
		</div>
	);

	return (
		<div className='sidebar'>
			<div className='sidebar_top'>
				<img src={user.photoUrl} alt='coverImage' />
				<Avatar src={user.photoUrl} className='sidebar_avatar'>
					{user.email[0]}
				</Avatar>
				<h2>{user.displayName}</h2>
				<h4>{user.email}</h4>
			</div>

			<div className='sidebar_stats'>
				<div className='sidebar_stat'>
					<p>Who viewed you</p>
					<p className='sidebar_statNumber'>344</p>
				</div>
				<div className='sidebar_stat'>
					<p>Views on post</p>
					<p className='sidebar_statNumber'>16,544</p>
				</div>
			</div>

			<div className='sidebar_bottom'>
				<p>Recent</p>
				{recentItem('programming')}
				{recentItem('react.js')}
				{recentItem('cloud')}
				{recentItem('covid-19')}
				{recentItem('jobs')}
				<p style={{ color: '#0a66e2', fontWeight: 'bold' }}>
					Followed Hashtags
				</p>
				{recentItem('fullstackdeveloper')}
				{recentItem('react.js')}
				{recentItem('frontenddeveloper')}
				{recentItem('openforopportunity')}
				{recentItem('jobs')}
			</div>
		</div>
	);
}

export default Sidebar;
