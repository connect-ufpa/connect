import {
  RETRIEVE_LOCAIS,
  RETRIVING_LOCAIS,
  SEARCHING_LOCAL,
  SEARCHED_LOCAL,
  MARK_LOCAL,
  SEARCHING_USER_LOCALIZATION,
  SEARCHED_USER_LOCALIZATION
} from '../actions/types';

const INITIAL_STATE = {  
  locais: [],
  locaisAchados: [],
  localPesquisado: '',
  localMarcado: {},
  localizacaoUsuario: {},
  loading: true
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RETRIVING_LOCAIS:
      return { ...state, loading: true };
    case RETRIEVE_LOCAIS:
      return { ...state, loading: false, locais: Object.values(action.payload) };
    case SEARCHING_LOCAL:
      return { ...state, localPesquisado: action.payload, locaisAchados: [] };
    case SEARCHED_LOCAL:
      return { ...state, locaisAchados: action.payload }
    case MARK_LOCAL:
      return { ...state, locaisAchados: [], localPesquisado: '', localMarcado: action.payload }
    case SEARCHING_USER_LOCALIZATION:
      return { ...state }
    case SEARCHED_USER_LOCALIZATION:
      return { ...state, localizacaoUsuario: action.payload }
    default:
      return state;
  }
};