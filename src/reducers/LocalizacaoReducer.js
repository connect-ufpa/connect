import {
  MARK_LOCAL,
  CREATING_ROUTE,
  SEARCHED_LOCAL,
  SEARCHING_LOCAL,
  RETRIEVE_LOCAIS,
  RETRIVING_LOCAIS,
  ROUTE_INFO,
  INPUT_SEARCH_UNFOCUSED,
  SEARCHING_USER_LOCALIZATION,
  SEARCHED_USER_LOCALIZATION,
  ERROR_CREATING_ROUTE,
  CLEAR_INPUT_SEARCH,
  CLOSE_ERROR_MESSAGE,
  CLOSE_HELPER_MESSAGE,
  CREATE_ROUTE_SUCCESS,
  LOADING_ROUTE,
} from '../actions/types';

const INITIAL_STATE = {
  helper: true,
  loading: true,
  locais: [],
  infoRota: {},
  localMarcado: {},
  localizacaoUsuario: {},
  locaisAchados: [],
  inputSearchFocused: false,
  creatingRoute: false,
  showRoute: false,
  error: false,
  localPesquisado: '',
  localSendoPesquisado: '',
  errorMessage: '',
  helperMessage:
    'Confira todos os locais do campus na UFPa, gere rotas e facilite sua locomoção com o Connect.',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MARK_LOCAL:
      return {
        ...state,
        infoRota: {},
        locaisAchados: [],
        localPesquisado: '',
        localMarcado: action.payload,
        localSendoPesquisado: action.payload.nome,
        helper: true,
        helperMessage:
          'Clique no botão para gerar uma rota ao local pesquisado.',
      };
    case ERROR_CREATING_ROUTE:
      return {
        ...state,
        routeCreated: false,
        creatingRoute: false,
        error: true,
        showRoute: false,
        errorMessage:
          'Por favor, pesquise um local desejado antes de tentar criar uma rota.',
        helper: false,
      };
    case CLEAR_INPUT_SEARCH:
      return {
        ...state,
        infoRota: {},
        localMarcado: {},
        locaisAchados: [],
        localSendoPesquisado: '',
        localPesquisado: '',
        showRoute: false,
        creatingRoute: false,
        inputSearchFocused: false,
      };
    case RETRIEVE_LOCAIS:
      return {
        ...state,
        loading: false,
        locais: Object.values(action.payload),
      };
    case SEARCHING_LOCAL:
      return {
        ...state,
        infoRota: {},
        localMarcado: {},
        locaisAchados: [],
        localPesquisado: action.payload,
        localSendoPesquisado: action.payload.nome,
        helper: false,
        error: false,
        helper: false,
        creatingRoute: false,
        inputSearchFocused: true,
      };
    case SEARCHED_LOCAL:
      return {
        ...state,
        infoRota: {},
        localMarcado: {},
        localPesquisado: '',
        locaisAchados: action.payload,
      };
    case RETRIVING_LOCAIS:
      return { ...state, loading: true };
    case LOADING_ROUTE:
      return { ...state, creatingRoute: true };
    case CREATING_ROUTE:
      return { ...state, showRoute: true, error: false, helper: false };
    case CREATE_ROUTE_SUCCESS:
      return { ...state, creatingRoute: false };
    case INPUT_SEARCH_UNFOCUSED:
      return { ...state, inputSearchFocused: false };
    case ROUTE_INFO:
      return { ...state, infoRota: action.payload };
    case SEARCHING_USER_LOCALIZATION:
      return { ...state };
    case SEARCHED_USER_LOCALIZATION:
      return { ...state, localizacaoUsuario: action.payload };
    case CLOSE_ERROR_MESSAGE:
      return { ...state, error: false };
    case CLOSE_HELPER_MESSAGE:
      return { ...state, helper: false };
    default:
      return state;
  }
};
