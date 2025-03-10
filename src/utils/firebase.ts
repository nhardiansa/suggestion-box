import { initializeApp } from 'firebase/app';

const firebaseConfig = {
	apiKey: 'AIzaSyAlJ1rQzxqsqTqbQxNgi9hxRKwEEsC12NY',
	authDomain: 'ynm-suggest-box.firebaseapp.com',
	projectId: 'ynm-suggest-box',
	storageBucket: 'ynm-suggest-box.firebasestorage.app',
	messagingSenderId: '150402111685',
	appId: '1:150402111685:web:4e73d6358b9e89140878ac',
	measurementId: 'G-2BBHG3GS0P',
};

export const app = initializeApp(firebaseConfig);
