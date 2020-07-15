import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBTTlc1ziM4B4piGeg6HYP3Jav5kejkQf0",
  authDomain: "shopback-dcc20.firebaseapp.com",
  databaseURL: "https://shopback-dcc20.firebaseio.com",
  projectId: "shopback-dcc20",
  storageBucket: "shopback-dcc20.appspot.com",
  messagingSenderId: "791717155982",
  appId: "1:791717155982:web:79aa046f2c9e2ccd9d25df"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
