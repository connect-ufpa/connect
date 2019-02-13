import {
    VALID_NAME,
    INVALID_NAME,
    VALID_REGISTRATION,
    INVALID_REGISTRATION,
    VALID_BIRTHDAY,
    INVALID_BIRTHDAY,
    VALID_PERFIL,
    UPDATE_DATA_USER_SUCESS,
    UPDATE_DATA_USER_ERROR
} from '../actions/types';

const INITIAL_STATE = { 
    nome: '',
    matricula: '',
    data_nascimento: '',
    area_tematica: '',
    birthday: '',
    cpf: '',
    errorMessageNamePerfil: '',
    errorMessageEmail: '',
    errorMessageBirthday: '',
    errorMessageRegistration: '',
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default: 
            return state;
    }
};