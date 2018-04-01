import { EDIT_EVENT, EVENT_EDIT_DATA } from '../actions/types';

const INITIAL_STATTE = {
    nome: '',
    descricao: '',
    local: '',
    data: '',
    hora: '',
    errorData: '',
    error: true
};

export default (state = INITIAL_STATTE, action) => {
    switch (action.type) {
        case EDIT_EVENT:
            return { ...state, [action.payload.prop]: action.payload.value, errorData: '', error: false };
        case EVENT_EDIT_DATA:
            console.log("ENTROU AQUI")
            return { ...state, [action.payload.prop]: action.payload.value, errorData: 'Preencha uma data válida!', error: true };
        default:
            return INITIAL_STATTE;
    }
};
