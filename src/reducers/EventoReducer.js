import { MARKER, CLOSE_MODAL, EVENT_NAME, DESCRIPTION, LOCAL, VALID_START_EVENT_DATE, 
         INVALID_START_EVENT_DATE, VALID_START_HOUR_EVENT, INVALID_START_HOUR_EVENT, LOADING_EVENT, 
         CREATE_EVENT_SUCCESS, EVENTS_TO_EDIT_SUCCESS, CLEAR } from '../actions/types';

const INITIAL_STATE = {
    region: {
        latitude: -1.4753622,
        longitude: -48.4557933,
        latitudeDelta: 0.00121,
        longitudeDelta: 0.0025 }, 
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
    error: false,
    eventosToEdit: [],
    fetchingEvents: true
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case MARKER:
            return { ...state, 
                    marker: [action.payload], 
                    region: {
                        latitude: action.payload.coordinate.latitude,
                        longitude: action.payload.coordinate.longitude,
                        latitudeDelta: 0.00021,
                        longitudeDelta: 0.0025
                    }, 
                    modal: true };
        case CLOSE_MODAL:
            return INITIAL_STATE;
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
        case CLEAR: 
            return { ...state, eventosToEdit: [] };
        case EVENTS_TO_EDIT_SUCCESS:
            return { ...state, eventosToEdit: [...state.eventosToEdit, action.payload], fetchingEvents: false };
        default:
            
           return state;
    }
};
