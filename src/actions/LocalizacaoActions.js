import { database } from '../config/Config';
import _ from 'lodash';
import {
  MARK_LOCAL,
  CREATING_ROUTE,
  ERRO_CREATING_ROUTE,
  SEARCHED_LOCAL,
  SEARCHING_LOCAL,
  RETRIEVE_LOCAIS,
  RETRIVING_LOCAIS,
  SEARCHED_USER_LOCALIZATION,
  SEARCHING_USER_LOCALIZATION,
} from './types';

export const createRota = (local) => {
  if (_.isEmpty(local)) {
    return dispatch => {
      dispatch({ 
        type: ERRO_CREATING_ROUTE
      });
    };
  } else {
    return dispatch => {
      dispatch({ 
        type: CREATING_ROUTE
      });
    };
  }
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

export const markLocal = (local) => {
  return dispatch => {
    dispatch({ type: MARK_LOCAL, payload: local });
  };
};

export const saveLocais = (locais) => {
  for (var i = 0; i < locais.local.length; i++) {
    database()
      .ref(`local/`)
      .push({
        nome: locais.local[i].nome,
        coords: {
          lat: locais.local[i].coords.lat,
          lng: locais.local[i].coords.lng,
        },
      });
  }
};

export const searchLocal = (localPesquisado, locais) => {
  return dispatch => {
    dispatch({ type: SEARCHING_LOCAL, payload: localPesquisado });

    let locaisAchados = [];

    if (localPesquisado !== '') {
      locais.map(localVerificado => {
        if (localVerificado['nome'].includes(localPesquisado)) {
          locaisAchados.push(localVerificado);
        }
      });
      searchedLocaisSuccess(dispatch, locaisAchados);
    }
  };
};

export const searchLocalizacaoUsuario = () => {
  return dispatch => {
    dispatch({ type: SEARCHING_USER_LOCALIZATION });

    navigator.geolocation.getCurrentPosition(localizacao => {
      searchLocalizacaoUsuarioSuccess(dispatch, localizacao);
    }, error => {
      console.log(error);
    });
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