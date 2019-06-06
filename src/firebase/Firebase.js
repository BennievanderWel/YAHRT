import app from 'firebase/app';
import 'firebase/auth';
import config from './config';

const firebase = app.initializeApp(config);

export const auth = firebase.auth();
