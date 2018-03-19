import { MARKER, CLOSE_MODAL, EVENT_NAME, DESCRIPTION, LOCAL } from '../actions/types';

const INITIAL_STATE = {
    marker: [],
    modal: false,
    nomeEvento: '',
    descricaoEvento: '',
    localEvento: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case MARKER:
            return { ...state, marker: [action.payload], modal: true };
        case CLOSE_MODAL:
            return { ...state, modal: false };
        case EVENT_NAME:
            return { ...state, nomeEvento: action.payload };
        case DESCRIPTION:
            return { ...state, descricaoEvento: action.payload };
        case LOCAL:
            return { ...state, localEvento: action.payload };
        default:
           return state;
    }
};
