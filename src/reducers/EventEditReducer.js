import { EDIT_EVENT, EVENT_EDIT_DATA, EVENT_EDIT_HORA } from '../actions/types';

const INITIAL_STATTE = {
    nome: '',
    descricao: '',
    local: '',
    data: '',
    hora: '',
    coords: { lat: -1.473987, long: -48.452267 },
    errorData: '',
    errorHora: '',
    error: true
};

export default (state = INITIAL_STATTE, action) => {
    switch (action.type) {
        case EDIT_EVENT:
            return { ...state, [action.payload.prop]: action.payload.value, errorData: '', errorHora: '', error: false };
        case EVENT_EDIT_DATA:
            return { ...state, [action.payload.prop]: action.payload.value, errorData: 'Preencha uma data válida!', error: true };
        case EVENT_EDIT_HORA:
            return { ...state, [action.payload.prop]: action.payload.value, errorHora: 'Preencha uma hora válida', error: true };
        default:
            return INITIAL_STATTE;
    }
};
