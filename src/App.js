import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import Router from './Router';

class App extends Component {
  componentWillMount() {
  const config = {
    apiKey: 'AIzaSyD331OT5y3vfzmFQtrz_Nnoah_k1HdlChE',
    authDomain: 'form-poc.firebaseapp.com',
    databaseURL: 'https://form-poc.firebaseio.com',
    projectId: 'form-poc',
    storageBucket: 'form-poc.appspot.com',
    messagingSenderId: '195857205275'
  };
  firebase.initializeApp(config);
}

  render() {
    return (
      <Router/>
    );
  }
}

export default App;
