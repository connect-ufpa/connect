import {
    CHECKING_DATA_PERFIL,
    RETURN_DATA_PERFIL_SUCCESS,
    RETURN_DATA_PERFIL_ERROR,
} from '../actions/types';


const INITIAL_STATE = {
    namePerfil: '',
    registrationPerfil: '',
    birthdayPerfil: '',
    idadePerfil: '',
    areaTematica: '',
    cpf: '',
    loading: false,
};

export default (state = INITIAL_STATE, action) => {
    console.log(action.payload);
    switch (action.type) {
        case CHECKING_DATA_PERFIL:
            return { ...state, loading: true }
        case RETURN_DATA_PERFIL_SUCCESS:
            return { ...state, namePerfil: action.payload.nome, 
                areaTematica: action.payload.area_tematica, 
                registrationPerfil: action.payload.matricula, 
                birthdayPerfil: action.payload.nascimento, loading: false };
        case RETURN_DATA_PERFIL_ERROR:
                return { ...state }
        default:
            return state;
    }
};
