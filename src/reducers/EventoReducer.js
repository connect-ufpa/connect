import {
    MARKER, CLOSE_MODAL, SAVE_EVENT_FIELD_CHANGE, INVALID_START_EVENT_DATE, INVALID_START_EVENT_HOUR, EVENT,
    INVALID_END_EVENT_DATE, INVALID_END_EVENT_HOUR, LOADING_EVENT, SHOW_HELPER_EVENT, CLOSE_HELPER_EVENT, CREATE_EVENT_SUCCESS, CREATE_EVENT_FAIL, EVENTS_TO_SHOW_SUCCESS,
    SEARCHING_EVENT, SEARCHED_EVENTO, CLEAR, INICIAL_POSITION, MOVING, CLOSE_LOADING_EVENT_SCREEN
} from '../actions/types';
import { compose } from 'redux';

const INITIAL_STATE = {
    region: {
        latitude: -1.4753622,
        longitude: -48.4557933,
        latitudeDelta: 0.00121,
        longitudeDelta: 0.0025
    },
    marker: [],
    event: '',
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
    helper: true,
    positionHelper: 0.4,
    helperMessage: 'Clique em um lugar no mapa para definir o local do evento',
    successModal: false,
    eventoPesquisado: '',
    eventosAchados: [],
    eventosToShow: [],
    fetchingEvents: true,
    fetchingEventsToShow: true,
    user_latitude: '',
    user_longitude: '',
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
            return {
                ...state,
                marker: [],
                region: {
                    latitude: -1.4753622,
                    longitude: -48.4557933,
                    latitudeDelta: 0.00121,
                    longitudeDelta: 0.0025
                },
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
                error: false
            };
        case EVENT:
            return { ...state, event: action.payload };
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
        case SHOW_HELPER_EVENT:
            return { ...state, helper: true, positionHelper: 0.4, marker: [], helperMessage: 'Clique em um lugar no mapa para definir o local do evento' };
        case CLOSE_HELPER_EVENT:
            return { ...state, helper: false };
        case CREATE_EVENT_SUCCESS:
            return { ...state, modal: false, helper: true, positionHelper: 0.2, helperMessage: 'Evento salvo com sucesso! Clique na seta acima para voltar para a tela de evento' };
        case CREATE_EVENT_FAIL:
            return { ...state, createFail: 'Preencha todos os campos corretamente!', loading: false, error: true };
        case CLEAR:
            return { ...state, eventosToEdit: [], eventosToShow: [], fetchingEventsToShow: true };
        case SEARCHING_EVENT:
            return { ...state, eventoPesquisado: action.payload, eventosAchados: [] };
        case SEARCHED_EVENTO:
            return { ...state, eventosAchados: action.payload };
        case EVENTS_TO_SHOW_SUCCESS:
            return { ...state, eventosToShow: [...state.eventosToShow, action.payload] };
        case INICIAL_POSITION:
            return { ...state, user_latitude: action.payload.latitude, user_longitude: action.payload.longitude };
        case MOVING:
            return { ...state, user_latitude: action.payload.latitude, user_logintude: action.payload.longitude };
        case CLOSE_LOADING_EVENT_SCREEN:
            return { ...state, fetchingEventsToShow: false };
        default:
            return state;
    }
};
