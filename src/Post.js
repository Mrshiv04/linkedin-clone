import React, { forwardRef } from 'react';
import './Post.css';
import { Avatar } from '@material-ui/core';
import InputOption from './InputOption';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import RedoOutlinedIcon from '@material-ui/icons/RedoOutlined';

const Post = forwardRef(({ name, description, message, photoUrl }, ref) => {
	return (
		<div ref={ref} className='post'>
			<div className='post_header'>
				<Avatar src={photoUrl}>{name[0]}</Avatar>
				<div className='post_info'>
					<h2>{name}</h2>
					<p>{description}</p>
				</div>
			</div>
			<div className='post_body'>
				<p>{message}</p>
			</div>
			<div className='post_buttons'>
				<InputOption Icon={ThumbUpAltOutlinedIcon} color='gray' title='Like' />
				<InputOption Icon={ChatOutlinedIcon} color='gray' title='Comment' />
				<InputOption Icon={RedoOutlinedIcon} color='gray' title='Share' />
				<InputOption Icon={SendOutlinedIcon} color='gray' title='Send' />
			</div>
		</div>
	);
});

export default Post;
