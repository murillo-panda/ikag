import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import Login from './LoginForm';
import List from './List';

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
      <Login/>
    );
  }
}

export default App;
