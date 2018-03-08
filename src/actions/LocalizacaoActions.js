import { database } from '../config/Config';
import { RETRIEVE_LOCAIS } from './types';

export const saveLocal = (locais) => {
  for(var i = 0; i < locais.local.length; i++){
    database().ref(`local/`).push({
      nome: locais.local[i].nome,
      coords: {
        lat: locais.local[i].coords.lat,
        lng: locais.local[i].coords.lng
      }
    });
    console.log(locais.local[i]);
  }
};

export const verifyLocal = (locais) => {
  console.log('Verificando locais previamente salvos...');

  var data = database().ref("local/");

  data.on("value", function(snapshot) {
    console.log(snapshot.val());
  }, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
  });

  return { type: RETRIEVE_LOCAIS, payload: locais }
};