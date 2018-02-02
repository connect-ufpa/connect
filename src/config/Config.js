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

const onlyNumbers = /^[0-9.]*$/;
const onlyLetters = /^([a-zA-Zà-úÀ-Ú]|\s+)+$/;
const dateFormat = /^(0[1-9]|[12][0-9]|3[01])[/](0[1-9]|1[012])[/](19|20|21|22|23|24|25|26|27|28|29|30)\d\d$/;

export { onlyLetters, onlyNumbers, dateFormat };
