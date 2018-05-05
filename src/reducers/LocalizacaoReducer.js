import {
  MARK_LOCAL,
  CREATING_ROUTE,
  SEARCHED_LOCAL,
  SEARCHING_LOCAL,
  RETRIEVE_LOCAIS,
  RETRIVING_LOCAIS,
  SEARCHING_USER_LOCALIZATION,
  SEARCHED_USER_LOCALIZATION,
  ERROR_CREATING_ROUTE,
  CLOSE_ERROR_MESSAGE,
  CLOSE_HELPER_MESSAGE
} from '../actions/types';

const INITIAL_STATE = {  
  locais: [],
  loading: true,
  localMarcado: {},
  locaisAchados: [],
  localPesquisado: '',
  localSendoPesquisado: '',
  localizacaoUsuario: {},
  creatingRoute: false,
  error: false,
  errorMessage: '',
  helper: true,
  helperMessage: 'Vamos nos conectar mais a Universidade? Com o Connect você pode conhecer os locais existentes no campus e ainda poder chegar mais rápido a eles.'
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RETRIVING_LOCAIS:
      return { ...state, loading: true };
    case RETRIEVE_LOCAIS:
      return { ...state, loading: false, locais: Object.values(action.payload) };
    case SEARCHING_LOCAL:
      return { ...state, localPesquisado: action.payload, localSendoPesquisado: action.payload.nome, locaisAchados: [], creatingRoute: false, helper: false, error: false, localMarcado: {}};
    case SEARCHED_LOCAL:
      return { ...state, locaisAchados: action.payload, localPesquisado: '', localMarcado: {} }
    case MARK_LOCAL:
      return { ...state, locaisAchados: [], localPesquisado: '', localMarcado: action.payload, localSendoPesquisado: action.payload.nome, helper: true, helperMessage: 'Clique no botão abaixo para gerar uma rota, ou clique no pino para saber informações.' }
    case SEARCHING_USER_LOCALIZATION:
      return { ...state }
    case SEARCHED_USER_LOCALIZATION:
      return { ...state, localizacaoUsuario: action.payload }
    case CREATING_ROUTE:
      return { ...state, creatingRoute: true,  error: false, helper: false }
    case ERROR_CREATING_ROUTE:
      return { ...state, creatingRoute: false, error: true, errorMessage: 'Por favor, clique em um local ou pesquise um local especifico antes de tentar criar o melhor caminho ao seu destino.', helper: false }
    case CLOSE_ERROR_MESSAGE:
      return { ...state, error: false }
    case CLOSE_HELPER_MESSAGE:
      return { ...state, helper: false }
    default:
      return state;
  }
};