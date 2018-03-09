import { database } from '../config/Config';
import { RETRIEVE_LOCAIS, RETRIVING_LOCAIS } from './types';

export const saveLocal = (locais) => {
  for(var i = 0; i < locais.local.length; i++){
    database().ref(`local/`).push({
      nome: locais.local[i].nome,
      coords: {
        lat: locais.local[i].coords.lat,
        lng: locais.local[i].coords.lng
      }
    });
  }
};

export const verifyLocais = () => {
  const locais = [];

  database().ref("local/").on("value", function(snapshot) {
    locais.push(Object.values(snapshot.val())); 
   }, function (errorObject) {
     console.log("Erro ao ler: " + errorObject.code);
   });
  return { type: RETRIEVE_LOCAIS, payload: locais }
};


// async const getLocais = () => {
//   await database().ref("local/").on("value", function(snapshot) {
//    return Object.values(snapshot.val());
//   }, function (errorObject) {
//     console.log("Erro ao ler: " + errorObject.code);
//   });
// };