import { MARKER, CLOSE_MODAL, EVENT_NAME, DESCRIPTION, LOCAL, VALID_START_EVENT_DATE, 
         INVALID_START_EVENT_DATE, VALID_START_HOUR_EVENT, INVALID_START_HOUR_EVENT, LOADING_EVENT, CREATE_EVENT_SUCCESS } from '../actions/types';

const INITIAL_STATE = {
    marker: [],
    modal: false,
    nomeEvento: '',
    descricaoEvento: '',
    localEvento: '',
    dataInicioEvento: '',
    msgErrorDataInicioEvento: '',
    horaInicioEvento: '',
    msgErrorHoraInicioEvento: '',
    loading: false,
    error: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case MARKER:
            return { ...state, marker: [action.payload], modal: true };
        case CLOSE_MODAL:
            return { ...state, modal: false, marker:[] };
        case EVENT_NAME:
            return { ...state, nomeEvento: action.payload };
        case DESCRIPTION:
            return { ...state, descricaoEvento: action.payload };
        case LOCAL:
            return { ...state, localEvento: action.payload };
        case VALID_START_EVENT_DATE:
            return { ...state, dataInicioEvento: action.payload, msgErrorDataInicioEvento: '', error: false };
        case INVALID_START_EVENT_DATE:
            return { ...state, dataInicioEvento: action.payload, msgErrorDataInicioEvento: 'Preencha uma data válida!', error: true }; 
        case VALID_START_HOUR_EVENT:
            return { ...state, horaInicioEvento: action.payload, msgErrorHoraInicioEvento: '', error: false };
        case INVALID_START_HOUR_EVENT:
            return { ...state, horaInicioEvento: action.payload, msgErrorHoraInicioEvento: 'Preencha uma hora válida!', error: true };
        case LOADING_EVENT:
            return { ...state, loading: true };
        case CREATE_EVENT_SUCCESS:
            return INITIAL_STATE;
        default:
           return state;
    }
};
