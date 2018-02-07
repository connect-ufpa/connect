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
    CREATING_ACCOUNT
} from '../actions/types';

const INITIAL_STATE = {
    name: '',
    registration: '',
    birthday: '',
    email: '',
    password: '',
    confirmPassword: '',
    loading: false,
    errorMessageName: '',
    errorMessageRegistration: '',
    errorMessageBirthday: '',
    errorMessageEmail: '',
    errorMessagePassword: '',
    errorMessageConfirmPassword: '',
    error: true
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case VALID_NAME:
            return { ...state, name: action.payload, errorMessageName: '', error: false };
        case INVALID_NAME:
            return { ...state, name: '', errorMessageName: 'Digite um nome válido', error: true };
        case VALID_REGISTRATION:
            return { ...state, registration: action.payload, errorMessageRegistration: '', error: false };
        case INVALID_REGISTRATION:
            return { ...state, registration: '', errorMessageRegistration: 'Matrícula deve conter apenas números', error: true };
        case VALID_BIRTHDAY:
            return { ...state, birthday: action.payload, errorMessageBirthday: '', error: false };
        case INVALID_BIRTHDAY:
            return { ...state, birthday: action.payload, errorMessageBirthday: 'Digite um formato de data válido', error: true };
        case VALID_EMAIL:
            return { ...state, email: action.payload, errorMessageEmail: '', error: false };
        case INVALID_EMAIL:
            return { ...state, email: action.payload, errorMessageEmail: 'Digite um e-mail válido', error: true };
        case VALID_PASSWORD:
            return { ...state, password: action.payload, errorMessagePassword: '', error: false };
        case INVALID_PASSWORD:
            return { ...state, password: action.payload, errorMessagePassword: 'Senha deve ter no mínimo seis caracteres', error: true };
        case MATCH_PASSWORD:
            return { ...state, confirmPassword: action.payload, errorMessageConfirmPassword: '', error: false };
        case MISMATCH_PASSWORD:
            return { ...state, confirmPassword: action.payload, errorMessageConfirmPassword: 'As senhas devem ser iguais', error: true };
        case CREATING_ACCOUNT:
            return { ...state, loading: true };
        default:
            return state;
    }
};
