import {
  MARK_LOCAL,
  CREATING_ROUTE,
  SEARCHED_LOCAL,
  SEARCHING_LOCAL,
  RETRIEVE_LOCAIS,
  RETRIVING_LOCAIS,
  INPUT_SEARCH_UNFOCUSED,
  SEARCHING_USER_LOCALIZATION,
  SEARCHED_USER_LOCALIZATION,
  ERROR_CREATING_ROUTE,
  CLEAR_INPUT_SEARCH,
  CLOSE_ERROR_MESSAGE,
  CLOSE_HELPER_MESSAGE,
} from '../actions/types';

const INITIAL_STATE = {
  helper: true,
  loading: true,
  locais: [],
  localMarcado: {},
  localizacaoUsuario: {},
  locaisAchados: [],
  inputSearchFocused: false,
  creatingRoute: false,
  error: false,
  localPesquisado: '',
  localSendoPesquisado: '',
  errorMessage: '',
  helperMessage:
    'Vamos nos conectar mais a Universidade? Com o Connect você pode conhecer os locais existentes no campus e ainda poder chegar mais rápido a eles.',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CLEAR_INPUT_SEARCH:
      return {
        ...state,
        localSendoPesquisado: '',
        localPesquisado: '',
        locaisAchados: [],
        inputSearchFocused: false,
      };
    case INPUT_SEARCH_UNFOCUSED:
      return { ...state, inputSearchFocused: false };
    case RETRIVING_LOCAIS:
      return { ...state, loading: true };
    case RETRIEVE_LOCAIS:
      return {
        ...state,
        loading: false,
        locais: Object.values(action.payload),
      };
    case SEARCHING_LOCAL:
      return {
        ...state,
        localPesquisado: action.payload,
        localSendoPesquisado: action.payload.nome,
        locaisAchados: [],
        creatingRoute: false,
        helper: false,
        error: false,
        localMarcado: {},
        inputSearchFocused: true,
      };
    case SEARCHED_LOCAL:
      return {
        ...state,
        locaisAchados: action.payload,
        localPesquisado: '',
        localMarcado: {},
      };
    case MARK_LOCAL:
      return {
        ...state,
        locaisAchados: [],
        localPesquisado: '',
        localMarcado: action.payload,
        localSendoPesquisado: action.payload.nome,
        helper: true,
        helperMessage:
          'Clique no botão abaixo para gerar uma rota ou no pino para saber mais informaçõe sobre o local.',
      };
    case SEARCHING_USER_LOCALIZATION:
      return { ...state };
    case SEARCHED_USER_LOCALIZATION:
      return { ...state, localizacaoUsuario: action.payload };
    case CREATING_ROUTE:
      return { ...state, creatingRoute: true, error: false, helper: false };
    case ERROR_CREATING_ROUTE:
      return {
        ...state,
        creatingRoute: false,
        error: true,
        errorMessage:
          'Por favor, pesquise um local especifico antes de tentar cria o caminho ao seu destino.',
        helper: false,
      };
    case CLOSE_ERROR_MESSAGE:
      return { ...state, error: false };
    case CLOSE_HELPER_MESSAGE:
      return { ...state, helper: false };
    default:
      return state;
  }
};
