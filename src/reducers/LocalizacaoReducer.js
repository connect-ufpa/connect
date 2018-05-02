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
  localizacaoUsuario: {},
  creatingRoute: false,
  erroCreatingRoute: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RETRIVING_LOCAIS:
      return { ...state, loading: true };
    case RETRIEVE_LOCAIS:
      return { ...state, loading: false, locais: Object.values(action.payload) };
    case SEARCHING_LOCAL:
      return { ...state, localPesquisado: action.payload, locaisAchados: [], creatingRoute: false };
    case SEARCHED_LOCAL:
      return { ...state, locaisAchados: action.payload }
    case MARK_LOCAL:
      return { ...state, locaisAchados: [], localPesquisado: '', localMarcado: action.payload }
    case SEARCHING_USER_LOCALIZATION:
      return { ...state }
    case SEARCHED_USER_LOCALIZATION:
      return { ...state, localizacaoUsuario: action.payload }
    case CREATING_ROUTE:
      return { ...state, creatingRoute: true,  erroCreatingRoute: false}
    case ERRO_CREATING_ROUTE:
      return { ...state, creatingRoute: false, erroCreatingRoute: true }
    default:
      return state;
  }
};