import { firebaseAuth, database } from '../config/Config';
import { dataPerfil } from '../actions';

import {
    VALID_NAME,
    INVALID_NAME,
    VALID_REGISTRATION,
    INVALID_REGISTRATION,
    VALID_BIRTHDAY,
    INVALID_BIRTHDAY,
    VALID_EMAIL,
    INVALID_EMAIL,
    VALID_PERFIL,
    UPDATE_DATA_USER_SUCESS,
    UPDATE_DATA_USER_ERROR
} from '../actions/types';


const INITIAL_STATE = {
    namePerfil: '',
    registrationPerfil: '',
    birthdayPerfil: '',
    teste: ''
};

export default (state = INITIAL_STATE, action) => {
    
    console.log(action.payload);
    switch (action.type) {
        case VALID_PERFIL:
            return { ...state, namePerfil: action.payload.nome, registrationPerfil: action.payload.matricula, birthdayPerfil: action.payload.nascimento }
        case VALID_NAME:
            return { ...state, namePerfil: action.payload, errorMessageName: '', error: false };
        case INVALID_NAME:
            return { ...state, namePerfil: '', errorMessageName: 'Digite um nome válido!', error: true };
        case VALID_REGISTRATION:
            return { ...state, registrationPerfil: action.payload, errorMessageRegistration: '', error: false };
        case INVALID_REGISTRATION:
            return { ...state, registrationPerfil: '', errorMessageRegistration: 'Matrícula deve conter apenas números!', error: true };
        case VALID_BIRTHDAY:
            return { ...state, birthdayPerfil: action.payload, errorMessageBirthday: '', error: false };
        case INVALID_BIRTHDAY:
            return { ...state, birthdayPerfil: action.payload, errorMessageBirthday: 'Digite um formato de data válido!', error: true };
        case UPDATE_DATA_USER_SUCESS:
            return { ...state }
        case UPDATE_DATA_USER_ERROR:
            return { ...state }
        default:
            return state;
    }
}