import firebase from 'firebase';

const firebaseConfig = {
	apiKey: 'AIzaSyBV0RXmqv19_mVRP8z6wqUKlU75QQGpn2Y',
	authDomain: 'shivam-linkedin-clone.firebaseapp.com',
	projectId: 'shivam-linkedin-clone',
	storageBucket: 'shivam-linkedin-clone.appspot.com',
	messagingSenderId: '1003696962434',
	appId: '1:1003696962434:web:f969973810b39f6a336d9b',
	measurementId: 'G-933LQ4KEH0',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
