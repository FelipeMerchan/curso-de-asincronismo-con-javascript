/* 
  Una promesa tiene 3 estados: pendiente, cumplida y rechazada.
*/
const promise = new Promise(function(resolve, reject) {
  resolve('');
});

const cows = 15;

const countCows = new Promise(function(resolve, reject) {
  if (cows > 10) {
    resolve(`We have ${cows} cows on the farm`);
  } else {
    reject('There is no cows on the farm');
  }
});

countCows.then((result) => {
  console.log({ result });
}).catch((error) => {
  console.log(error);
}).finally(() => {
  /* finally se ejecuta tanto si se ejecutó el then o el catch. */
  console.log('Finally');
});