import firebase from 'firebase';

const config = {
    apiKey: 'AIzaSyBRlv4dgDSel3bAjjlPxQxCD1_6wDT8OPQ',
    authDomain: 'app-ufpa.firebaseapp.com',
    databaseURL: 'https://app-ufpa.firebaseio.com',
    projectId: 'app-ufpa',
    storageBucket: 'app-ufpa.appspot.com',
    messagingSenderId: '483065002053'
  };

  firebase.initializeApp(config);

  export const database = firebase.database;
  export const firebaseAuth = firebase.auth;
