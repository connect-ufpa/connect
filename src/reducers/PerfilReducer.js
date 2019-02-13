import {
    VALID_PERFIL
} from '../actions/types';


const INITIAL_STATE = {
    namePerfil: '',
    registrationPerfil: '',
    birthdayPerfil: '',
    idadePerfil: '',
    areaTematica: '',
    cpf: '',
};

export default (state = INITIAL_STATE, action) => {
    console.log(action.payload);
    switch (action.type) {
        case VALID_PERFIL:
            return { ...state, namePerfil: action.payload.nome, 
                areaTematica: action.payload.area_tematica, 
                registrationPerfil: action.payload.matricula, 
                birthdayPerfil: action.payload.nascimento,};
        default:
            return state;
    }
};
