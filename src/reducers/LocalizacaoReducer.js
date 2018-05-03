import {
  MARK_LOCAL,
  CREATING_ROUTE,
  ERRO_CREATING_ROUTE,
  SEARCHED_LOCAL,
  SEARCHING_LOCAL,
  RETRIEVE_LOCAIS,
  RETRIVING_LOCAIS,
  SEARCHING_USER_LOCALIZATION,
  SEARCHED_USER_LOCALIZATION
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
  errorMessage: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RETRIVING_LOCAIS:
      return { ...state, loading: true };
    case RETRIEVE_LOCAIS:
      return { ...state, loading: false, locais: Object.values(action.payload) };
    case SEARCHING_LOCAL:
      return { ...state, localPesquisado: action.payload, localSendoPesquisado: action.payload.nome, locaisAchados: [], creatingRoute: false };
    case SEARCHED_LOCAL:
      return { ...state, locaisAchados: action.payload }
    case MARK_LOCAL:
      return { ...state, locaisAchados: [], localPesquisado: '', localMarcado: action.payload, localSendoPesquisado: action.payload.nome, }
    case SEARCHING_USER_LOCALIZATION:
      return { ...state }
    case SEARCHED_USER_LOCALIZATION:
      return { ...state, localizacaoUsuario: action.payload }
    case CREATING_ROUTE:
      return { ...state, creatingRoute: true,  error: false }
    case ERRO_CREATING_ROUTE:
      return { ...state, creatingRoute: false, error: true, errorMessage: 'Clique em um pino ou pesquise um local especifico antes de criar rota.' }
    default:
      return state;
  }
};