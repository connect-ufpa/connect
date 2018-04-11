import { firebaseAuth, database } from '../config/Config';
import { validateLetters, validateNumbers, validateDates, validateEmails, validatePasswords, validateUser, matchPasswords } from '../helpers/HandleData';
import {
    VALID_NAME,
    INVALID_NAME,
    VALID_REGISTRATION,
    INVALID_REGISTRATION,
    VALID_BIRTHDAY,
    INVALID_BIRTHDAY
} from '../actions/types';
import firebase from 'firebase';

const usuario = firebaseAuth().currentUser;

const INITIAL_STATE = {
    
    updateName: usuario.name,
    updateRegistration: usuario.matricula,
    updateBirthday: usuario.nascimento,
    loading: false,
    errorMessageName: '',
    errorMessageRegistration: '',
    errorMessageBirthday: '',
    errorMessageEmail: '',
    errorMessagePassword: '',
    errorMessageConfirmPassword: '',
    errorMessageCreateAccountFail: '',
    error: true
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case VALID_NAME:
            return { ...state, updateName: action.payload, errorMessageName: '', error: false };
        case INVALID_NAME:
            return { ...state, updateName: '', errorMessageName: 'Digite um nome válido!', error: true };
        case VALID_REGISTRATION:
            return { ...state, updateRegistration: action.payload, errorMessageRegistration: '', error: false };
        case INVALID_REGISTRATION:
            return { ...state, updateRegistration: '', errorMessageRegistration: 'Matrícula deve conter apenas números!', error: true };
        case VALID_BIRTHDAY:
            return { ...state, updateBirthday: action.payload, errorMessageBirthday: '', error: false };
        case INVALID_BIRTHDAY:
            return { ...state, updateBirthday: action.payload, errorMessageBirthday: 'Digite um formato de data válido!', error: true };
        default:
            return state;
    }
};
