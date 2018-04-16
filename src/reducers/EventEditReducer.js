import { EDIT_EVENT, EVENT_EDIT_DATA, EVENT_EDIT_HORA, SAVED_EDITED_EVENT } from '../actions/types';

const INITIAL_STATTE = {
    id: '',
    nome: '',
    descricao: '',
    local: '',
    data: '',
    hora: '',
    coords: { lat: -1.473987, long: -48.452267 },
    loading: false,
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
        case SAVED_EDITED_EVENT:
            return { ...state, loading: false };
        default:
            return INITIAL_STATTE;
    }
};
