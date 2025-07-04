const XMLHttpRequest = require('xmlhttprequest');
const API = 'https://api.escuelajs.co/api/v1';

/* En los inicios de JavaScript se usaba XMLHttprequest.
  Tienen soporte en todos los navegadores.
  fetch es una implementación moderna para hacer más simple el llamado
  a una solicitud, pero fetch y XMLHttprequest funcionan según la necesidad que tengamos.
*/

function fetchData(urlApi, callback) {
  let xhttp = new XMLHttpRequest();

  xhttp.open('GET', urlApi, true);
  xhttp.onreadystatechange = function (event) {
    /* Estados:
    0 -> Aún no se ha inicializado
    1 -> Loading, cuando no se ha llamado sent
    2 -> Cuando se ejecuto el valor de sent
    3- > Interactuando, esta descargando o trabajando con la solicutd
    4- > Cuando se ha completado la llamada
     */
    if (xhttp.readyState === 4) {
      if (xhttp.status === 200) {
        callback(null, JSON.parse(xhttp.responseText));
      }
    } else {
      const error = new Error('Error' + urlAPI);
      return callback(error, null);
    }
  }

  xhttp.send();
}