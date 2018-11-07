import { EDIT_EVENT, EVENT_EDIT_DATA, EVENT_EDIT_HORA, SAVED_EDITED_EVENT, CLOSE_EVENT_EDIT_HELPER, CLOSE_EVENT_EDIT_HELPER_MAP, COORDS_SAVED } from '../actions/types';

const INITIAL_STATTE = {
    id: '',
    nome: '',
    descricao: '',
    local: '',
    area_tematica: 'Comunicação',
    data_inicio: '',
    hora_inicio: '',
    data_fim: '',
    hora_fim: '',
    coords: { lat: -1.473987, long: -48.452267 },
    loading: false,
    errorData: '',
    errorHora: '',
    helper: false,
    helperMap: true,
    positionHelper: 0.4,
    messageHelper: 'Clique no em um local do mapa e depois clique no botão salvar para atualizar o local do evento',
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
            return { ...state, loading: false, helper: true };
        case CLOSE_EVENT_EDIT_HELPER:
            return { ...state, helper: false };
        case CLOSE_EVENT_EDIT_HELPER_MAP:
            return { ...state, helperMap: false };
        case COORDS_SAVED:
            return { ...state, helperMap: true, messageHelper: 'Local do evento atualizado com sucesso!', positionHelper: 0.2 };
        default:
            return state;
    }
};
