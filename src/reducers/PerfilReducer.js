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
    VALID_PERFIL
} from '../actions/types';


const INITIAL_STATE = {
    namePerfil: '',
    registrationPerfil: '',
    birthdayPerfil: '',
    teste: ''
};

export default (state = INITIAL_STATE, action) => {
    // console.log('cheguei aqui!!');
    console.log(action.payload);
    switch (action.type) {
        case VALID_PERFIL:
            return { ...state, namePerfil: action.payload.nome, registrationPerfil: action.payload.matricula, birthdayPerfil: action.payload.nascimento }
        default:
            return state;
    }
}