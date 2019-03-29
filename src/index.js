import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import { BrowserRouter } from 'react-router-dom';
import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyBESucPJuA8OWIRwp22akqs30Sg4HXPHfw",
    authDomain: "my-ownportfolio.firebaseapp.com",
    databaseURL: "https://my-ownportfolio.firebaseio.com",
    projectId: "my-ownportfolio",
    storageBucket: "my-ownportfolio.appspot.com",
    messagingSenderId: "290883882809"
  };
  firebase.initializeApp(config);


ReactDOM.render(
  <BrowserRouter>
<App />
  </BrowserRouter>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();

