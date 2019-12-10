import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from "firebase";
import * as serviceWorker from './serviceWorker';

firebase.initializeApp({
    apiKey: "AIzaSyC9UnNzz8rVJ6mwWlur9wrveDw-FUD1NvU",
    authDomain: "fakegram-32cea.firebaseapp.com",
    databaseURL: "https://fakegram-32cea.firebaseio.com",
    projectId: "fakegram-32cea",
    storageBucket: "fakegram-32cea.appspot.com",
    messagingSenderId: "697182581616",
    appId: "1:697182581616:web:dd24070ecd1071905615b5",
    measurementId: "G-M6VYHJ8L06"
});

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
