import {
    MARKER, CLOSE_MODAL, SAVE_EVENT_FIELD_CHANGE, INVALID_START_EVENT_DATE, INVALID_START_EVENT_HOUR,
    INVALID_END_EVENT_DATE, INVALID_END_EVENT_HOUR, LOADING_EVENT, CREATE_EVENT_SUCCESS, CREATE_EVENT_FAIL, EVENTS_TO_EDIT_SUCCESS, EVENTS_TO_SHOW_SUCCESS, 
    SEARCHING_EVENT, SEARCHED_EVENTO, CLEAR
} from '../actions/types';

const INITIAL_STATE = {
    region: {
        latitude: -1.4753622,
        longitude: -48.4557933,
        latitudeDelta: 0.00121,
        longitudeDelta: 0.0025
    },
    marker: [],
    modal: false,
    nome: '',
    descricao: '',
    local: '',
    area_tematica: 'Comunicação',
    data_inicio: '',
    hora_inicio: '',
    data_fim: '',
    hora_fim: '',
    errorData: '',
    errorHora: '',
    createFail: '',
    loading: false,
    error: false,
    successModal: false,
    eventoPesquisado: '',
    eventosAchados: [],
    eventosToEdit: [],
    eventosToShow: [],
    fetchingEvents: true,
    fetchingEventsToShow: true
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case MARKER:
            return {
                ...state,
                marker: [action.payload],
                region: {
                    latitude: action.payload.coordinate.latitude,
                    longitude: action.payload.coordinate.longitude,
                    latitudeDelta: 0.00021,
                    longitudeDelta: 0.0025
                },
                modal: true
            };
        case CLOSE_MODAL:
            return INITIAL_STATE;
        case SAVE_EVENT_FIELD_CHANGE:
            return { ...state, [action.payload.prop]: action.payload.value, errorData: '', errorHora: '', createFail: '', error: false };
        case INVALID_START_EVENT_DATE:
            return { ...state, [action.payload.prop]: action.payload.value, errorData: 'Preencha uma data válida!', error: true };
        case INVALID_START_EVENT_HOUR:
            return { ...state, [action.payload.prop]: action.payload.value, errorHora: 'Preencha uma hora válida!', error: true };
        case INVALID_END_EVENT_DATE:
            return { ...state, [action.payload.prop]: action.payload.value, errorData: 'Preencha uma data válida!', error: true };
        case INVALID_END_EVENT_HOUR:
            return { ...state, [action.payload.prop]: action.payload.value, errorHora: 'Preencha uma hora válida!', error: true };
        case LOADING_EVENT:
            return { ...state, loading: true };
        case CREATE_EVENT_SUCCESS:
            return { ...state, modal: false, successModal: true };
        case CREATE_EVENT_FAIL:
            return { ...state, createFail: 'Preencha todos os campos corretamente!', loading: false, error: true };
        case CLEAR:
            return { ...state, eventosToEdit: [], eventosToShow: [] };
        case EVENTS_TO_EDIT_SUCCESS:
            return { ...state, eventosToEdit: [...state.eventosToEdit, action.payload], fetchingEvents: false };
        case SEARCHING_EVENT: 
            return { ...state, eventoPesquisado: action.payload, eventosAchados: [] };
        case SEARCHED_EVENTO: 
            return { ...state, eventosAchados: action.payload };
        case EVENTS_TO_SHOW_SUCCESS:
            return { ...state, eventosToShow: [...state.eventosToShow, action.payload], fetchingEventsToShow: false };
        default:
            return state;
    }
};
