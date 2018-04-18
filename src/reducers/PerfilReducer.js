import { firebaseAuth, database } from '../config/Config';

import {
    VALID_NAME,
    INVALID_NAME,
    VALID_REGISTRATION,
    INVALID_REGISTRATION,
    VALID_BIRTHDAY,
    INVALID_BIRTHDAY,
    VALID_EMAIL,
    INVALID_EMAIL,
    VALID_PASSWORD,
    INVALID_PASSWORD,
    MATCH_PASSWORD,
    MISMATCH_PASSWORD,
    CREATING_ACCOUNT,
    CREATE_ACCOUNT_SUCCESS,
    CREATE_ACCOUNT_ERROR
} from '../actions/types';


const INITIAL_STATE = {
    namePerfil: 'Hugo Bragança da Silva',
    registrationPerfil: '201206840011',
    birthdayPerfil: '16/02/1994',
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
}