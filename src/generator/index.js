/*
  Generators
  Otra forma de seguir trabajando con asincronismo en JS son los generators.
  Son una forma de trabajar con una función que nos va a permitir llamar o parar,
  según sea el caso, las solicitudes que hagamos.
*/

function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

const g = gen();
console.log(g.next().value); // aquí obtenemos el primer valor del generador, en este caso el 1
console.log(g.next().value); // Si volvemos a ejecutar next obtendremos el siguiente valor, en este caso el 2
console.log(g.next().value); // Si volvemos a ejecutar next obtendremos el último valor, en este caso el 3

function* iterable(array) {
  for (const value of array) {
    yield value;
  }
}

const it = iterable(['Oscar', 'Felipe', 'Ana', 'Lucia', 'Juan']);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);