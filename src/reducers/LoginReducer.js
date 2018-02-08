import {
    VALID_EMAIL_LOGIN,
    INVALID_EMAIL_LOGIN,
    VALID_PASSWORD_LOGIN,
    INVALID_PASSWORD_LOGIN,
    LOGIN
} from '../actions/types';

const INITIAL_STATE = {
    email: '',
    password: '',
    loading: false,
    errorMessageEmail: '',
    errorMessagePassword: '',
    error: true
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case VALID_EMAIL_LOGIN:
            return { ...state, email: action.payload, errorMessageEmail: '', error: false };
        case INVALID_EMAIL_LOGIN:
            return { ...state, email: action.payload, errorMessageEmail: 'Digite um e-mail válido!', error: true };
        case VALID_PASSWORD_LOGIN:
            return { ...state, password: action.payload, errorMessagePassword: '', error: false };
        case INVALID_PASSWORD_LOGIN:
            return { ...state, password: action.payload, errorMessagePassword: 'Senha deve ter no mínimo seis caracteres!', error: true };
        case LOGIN:
            return { ...state, loading: true };
        default:
            return state;
    }
};
