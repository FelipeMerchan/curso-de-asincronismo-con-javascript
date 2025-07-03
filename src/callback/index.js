/* 
  Función Callback
  Una función de callback es una función que se pasa a otra función como
  un argumento, que luego se invoca dentro de la función externa para
  completar algún tipo de rutina o acción.
*/

function sum(num1, num2) {
  return num1 + num2;
}

function calc(num1, num2, sumNumbers) {
  return sumNumbers(num1, num2)
}

console.log(calc(2, 2, sum));

setTimeout(() => {
  console.log('Hola, JS');
}, 2000);

function greetings(name) {
  console.log(`Hola, ${name}`);
}

/* setTimeout en su tercer argumento recibe el argumento que recibirá el callback,
en este caso greetings: */
setTimeout(greetings, 2000, 'Felipe');
