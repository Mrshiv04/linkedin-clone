import React, { useState, useEffect } from 'react';
import './Feed.css';
import CreateIcon from '@material-ui/icons/Create';
import InputOption from './InputOption';
import ImageIcon from '@material-ui/icons/Image';
import YouTubeIcon from '@material-ui/icons/YouTube';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import Post from './Post';
import { db } from './firebase';
import firebase from 'firebase';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import FlipMove from 'react-flip-move';

function Feed() {
	const user = useSelector(selectUser);
	const [input, setInput] = useState('');
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		db.collection('posts')
			.orderBy('timeStamp', 'desc')
			.onSnapshot((snapshot) => {
				setPosts(
					snapshot.docs.map((doc) => ({
						id: doc.id,
						data: doc.data(),
					}))
				);
			});
	}, []);

	const sendPost = (e) => {
		e.preventDefault();
		db.collection('posts').add({
			name: user.displayName,
			description: user.email,
			message: input,
			photoUrl: user.photoUrl || '',
			timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
		});
		setInput('');
	};

	console.log(posts.id);

	return (
		<div className='feed'>
			<div className='feed_inputContainer'>
				<div className='feed_input'>
					<CreateIcon />
					<form>
						<input
							value={input}
							placeholder='Start a post'
							onChange={(e) => setInput(e.target.value)}
							type='text'
						/>
						<button onClick={sendPost} type='submit'>
							Send
						</button>
					</form>
				</div>
				<div className='feed_inputOptions'>
					<InputOption title='Photo' Icon={ImageIcon} color='#70b5f9' />
					<InputOption title='Video' Icon={YouTubeIcon} color='#E7a33e' />
					<InputOption title='Documents' Icon={EventNoteIcon} color='#7fc15e' />
					<InputOption
						title='Write Article'
						Icon={CalendarViewDayIcon}
						color='#f5987e'
					/>
				</div>
			</div>
			<hr style={{ marginBottom: '20px' }} />
			<FlipMove>
				{posts.map(({ id, data: { name, description, message, photoUrl } }) => (
					<Post
						key={id}
						name={name}
						description={description}
						message={message}
						photoUrl={photoUrl}
					/>
				))}
			</FlipMove>

			{/* <Post
				name='Shivam Shah'
				description='this is descrition of shivam shah'
				messege='this is the messege part here'
			/> */}
		</div>
	);
}

export default Feed;
