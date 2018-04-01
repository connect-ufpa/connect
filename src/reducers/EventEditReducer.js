import { EDIT_EVENT } from '../actions/types';

const INITIAL_STATTE = {
    nome: '',
    descricao: '',
    local: '',
    data: '',
    hora: ''
};

export default (state = INITIAL_STATTE, action) => {
    switch (action.type) {
        case EDIT_EVENT:
            return { ...state, [action.payload.prop]: action.payload.value };
        default:
            return INITIAL_STATTE;
    }
};
