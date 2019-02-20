import {
    VALID_NAME,
    INVALID_NAME,
    VALID_REGISTRATION,
    INVALID_REGISTRATION,
    VALID_BIRTHDAY,
    INVALID_BIRTHDAY,
    RETURN_DATA_PERFIL_SUCCESS,
    UPDATE_DATA_USER_SUCESS,
    UPDATE_DATA_USER_ERROR,
    UPDATING_DATA_USER,
} from '../actions/types';

const INITIAL_STATE = { 
    nome: '',
    matricula: '',
    nascimento: '',
    area_tematica: '',
    error: false,
    errorMessageNamePerfil: '',
    errorMessageEmail: '',
    errorMessageBirthday: '',
    errorMessageRegistration: '',
    errorMessageUptadePerfil: '',
    loading: false,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case RETURN_DATA_PERFIL_SUCCESS:
            return { ...state, nome: action.payload.nome, 
                area_tematica: action.payload.area_tematica, 
                matricula: action.payload.matricula, 
                nascimento: action.payload.nascimento, 
                loading: false};
        case VALID_NAME:
            return { ...state, nome: action.payload, errorMessageName: '', error: false };
        case INVALID_NAME:
            return { ...state, nome: '', errorMessageName: 'Digite um nome válido!', error: true };
        case VALID_REGISTRATION:
            return { ...state, matricula: action.payload, errorMessageRegistration: '', error: false };
        case INVALID_REGISTRATION:
            return { ...state, matricula: '', errorMessageRegistration: 'Matrícula deve conter apenas números!', error: true };
        case VALID_BIRTHDAY:
            return { ...state, nascimento: action.payload, errorMessageBirthday: '', error: false };
        case INVALID_BIRTHDAY:
            return { ...state, nascimento: action.payload, errorMessageBirthday: 'Digite um formato de data válido!', error: true };
        case UPDATING_DATA_USER:
                return { ...state, loading: true };
        case UPDATE_DATA_USER_SUCESS:
                return { ...state, loading: false} ;
        case UPDATE_DATA_USER_ERROR:
                return { ...state, errorMessageUptadePerfil: 'Falha ao atualizar dados!' };
        default: 
            return state;
    }
};