const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
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
      } else {
        const error = new Error('Error' + urlApi);
        return callback(error, null);
      }
    }
  }

  xhttp.send();
}

fetchData(`${API}/products`, function(error1, data1) {
  if (error1) return console.error(error1);

  fetchData(`${API}/products/${data1[0].id}`, function(error2, data2) {
    if (error2) return console.error(error2);

    fetchData(`${API}/categories/${data2?.category?.id}`, function(error3, data3) {
      if (error3) return console.error(error3);

      console.log(data1[0]);
      console.log(data2.title);
      console.log(data3.name);
    });
  });
});
