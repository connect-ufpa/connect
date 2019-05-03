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
    VALID_AREA,
    MATCH_PASSWORD,
    MISMATCH_PASSWORD,
    CREATING_ACCOUNT,
    CREATE_ACCOUNT_SUCCESS,
    CREATE_ACCOUNT_ERROR
} from '../actions/types';

const INITIAL_STATE = {
    name: '',
    email: '',
    birthday: '',
    area_tematica: '',
    password: '',
    registration: '',
    confirmPassword: '',
    errorMessageName: '',
    errorMessageEmail: '',
    errorMessageBirthday: '',
    errorAreaTematica: '',
    errorMessagePassword: '',
    errorMessageRegistration: '',
    errorMessageConfirmPassword: '',
    errorMessageCreateAccountFail: '',
    loading: false,
    error: true
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case VALID_NAME:
            return { ...state, name: action.payload, errorMessageName: '', error: false };
        case INVALID_NAME:
            return { ...state, name: '', errorMessageName: 'Digite um nome válido!', error: true };
        case VALID_REGISTRATION:
            return { ...state, registration: action.payload, errorMessageRegistration: '', error: false };
        case INVALID_REGISTRATION:
            return { ...state, registration: '', errorMessageRegistration: 'Matrícula deve conter apenas números!', error: true };
        case VALID_BIRTHDAY:
            return { ...state, birthday: action.payload, errorMessageBirthday: '', error: false };
        case INVALID_BIRTHDAY:
            return { ...state, birthday: action.payload, errorMessageBirthday: 'Digite um formato de data válido!', error: true };
        case VALID_EMAIL:
            return { ...state, email: action.payload, errorMessageEmail: '', error: false };
        case INVALID_EMAIL:
            return { ...state, email: action.payload, errorMessageEmail: 'Digite um e-mail válido!', error: true };
        case VALID_AREA:
            return { ...state, area_tematica: action.payload, errorAreaTematica: '', error: false}
        case VALID_PASSWORD:
            return { ...state, password: action.payload, errorMessagePassword: '', error: false };
        case INVALID_PASSWORD:
            return { ...state, password: action.payload, errorMessagePassword: 'Senha deve ter no mínimo seis caracteres!', error: true };
        case MATCH_PASSWORD:
            return { ...state, confirmPassword: action.payload, errorMessageConfirmPassword: '', error: false };
        case MISMATCH_PASSWORD:
            return { ...state, confirmPassword: action.payload, errorMessageConfirmPassword: 'As senhas devem ser iguais!', error: true };
        case CREATING_ACCOUNT:
            return { ...state, loading: true };
        case CREATE_ACCOUNT_ERROR:
            return { ...state, loading: false, errorMessageCreateAccountFail: 'Falha no cadastro da conta!' };
        case CREATE_ACCOUNT_SUCCESS:
            return { ...state, loading: false };
        default:
            return state;
    }
};
