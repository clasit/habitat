import {HttpClient, HttpHandler} from '@angular/common/http';
import {Injectable} from '@angular/core';


/*
@Injectable()
class PruebaService {
  constructor(private httpClient: HttpClient) {
  }
}
*/

// TODO: Ver como inyectar un cliente al ejecutar en modo consola
/***
const url = 'https://api.fotocasa.es/PropertySearch/Search';
const httpClient = new HttpClient();
httpClient.get(url).subscribe(
  (data) => {
    console.log('Ok', data);
  },
  (error) => {
    console.log(error);
  }
);
***/


const axios = require('axios');

axios.get('https://api.fotocasa.es/PropertySearch/Search',
  { params: {
      latitude: 41.661995,
      longitude: -0.9033217
  }}).then(function (response) {
    // handle success
    console.log(response.data.realEstates[0].address, response.data.realEstates[1].address);
  })
  .catch(function (error) {
    // handle error
    // console.log(error);
  })
  .then(function () {
    // always executed
  });


// TODO: Buscar un modelos comunes (Venta, Aquiler, etc.)
// TODO: Buscar un buen mapper de json al modelo (class-transformer, json-object-mapper)
// TODO: Buscar un sistema de almacenamiento CouchDB, MongoDB, etc. Ver que sistema de almacenamiento
// TODO: Pensar una representación: gráficas, mapas, etc.
// TODO: Pensar que tipo de calculos realizar. Tipo de comparativas, buscar la fórmula mágica
// TODO: Poner en un servidor
// TODO: Envio de push
// TODO: Hacer la App Progressive Web App (https://developers.google.com/web/fundamentals/codelabs/your-first-pwapp/)


