import { database } from '../config/Config';
import _ from 'lodash';
import {
  MARK_LOCAL,
  ROUTE_INFO,
  CREATING_ROUTE,
  SEARCHED_LOCAL,
  SEARCHING_LOCAL,
  RETRIEVE_LOCAIS,
  RETRIVING_LOCAIS,
  CLEAR_INPUT_SEARCH,
  CLOSE_ERROR_MESSAGE,
  CLOSE_HELPER_MESSAGE,
  ERROR_CREATING_ROUTE,
  INPUT_SEARCH_UNFOCUSED,
  SEARCHED_USER_LOCALIZATION,
  SEARCHING_USER_LOCALIZATION,
  CREATE_ROUTE_SUCCESS,
  LOADING_ROUTE
} from './types';

export const createRouteError = () => {
  return dispatch => {
    dispatch({
      type: ERROR_CREATING_ROUTE
    });
  }
};

export const loadingRoute = () => {
  return dispatch => {
    dispatch({ type: LOADING_ROUTE });
  };
};

export const createRouteSuccess = () => {
  return dispatch => {
    dispatch({ type: CREATE_ROUTE_SUCCESS });
  };
};

export const clearInputSearch = () => {
  return dispatch => {
    dispatch({ type: CLEAR_INPUT_SEARCH });
  };
};

export const closeHelper = () => {
  return dispatch => {
    dispatch({ type: CLOSE_HELPER_MESSAGE });
  };
};

export const closeError = () => {
  return dispatch => {
    dispatch({ type: CLOSE_ERROR_MESSAGE });
  };
};

export const verifyLocais = () => {
  return dispatch => {
    dispatch({ type: RETRIVING_LOCAIS });

    database()
      .ref('local/')
      .on('value', snap => {
        retriveLocaisSuccess(dispatch, snap.val());
      });
  };
};

export const searchLocalizacaoUsuario = () => {
  return dispatch => {
    dispatch({ type: SEARCHING_USER_LOCALIZATION });

    navigator.geolocation.getCurrentPosition(
      localizacao => {
        searchLocalizacaoUsuarioSuccess(dispatch, localizacao);
      },
      error => {
        console.log(error);
      }
    );
  };
};

export const showInfoRota = info => {
  return dispatch => {
    dispatch({ type: ROUTE_INFO, payload: info });
  };
};

export const markLocal = local => {
  return dispatch => {
    dispatch({ type: MARK_LOCAL, payload: local });
  };
};

export const saveLocais = locais => {
  for (var i = 0; i < locais.local.length; i++) {
    database()
      .ref(`local/`)
      .push({
        nome: locais.local[i].nome,
        desc: locais.local[i].desc,
        coords: {
          lat: locais.local[i].coords.lat,
          lng: locais.local[i].coords.lng,
        },
        tipo: locais.local[i].tipo
      });
  }
};

export const createRota = local => {
  if (_.isEmpty(local)) {
    return dispatch => {
      dispatch({
        type: ERROR_CREATING_ROUTE,
      });
    };
  } else {
    return dispatch => {
      dispatch({
        type: CREATING_ROUTE,
      });
    };
  }
};

export const searchLocal = (localPesquisado, locais) => {
  return dispatch => {
    dispatch({ type: SEARCHING_LOCAL, payload: localPesquisado });

    let locaisAchados = [];

    if (localPesquisado === '') {
      dispatch({ type: INPUT_SEARCH_UNFOCUSED });
    }

    if (localPesquisado !== '') {
      locais.map(localVerificado => {
        if (
          localVerificado['nome']
            .toLowerCase()
            .includes(localPesquisado.toLowerCase())
        ) {
          locaisAchados.push(localVerificado);
        }
      });
      searchedLocaisSuccess(dispatch, locaisAchados);
    }
  };
};

const retriveLocaisSuccess = (dispatch, locais) => {
  dispatch({
    type: RETRIEVE_LOCAIS,
    payload: locais,
  });
};

const searchedLocaisSuccess = (dispatch, locais) => {
  dispatch({
    type: SEARCHED_LOCAL,
    payload: locais,
  });
};

const searchLocalizacaoUsuarioSuccess = (dispatch, localizacao) => {
  dispatch({
    type: SEARCHED_USER_LOCALIZATION,
    payload: localizacao,
  });
};
