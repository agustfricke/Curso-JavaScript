// Parametro rest = Una funcion que puede ser llamada con cualqier numeros de argumentos

function sum(a, b) {
  return a + b;
}

alert( sum(1, 2, 3, 4, 5) ); // 3 porque solo esta sumando el 1 y el 2 ya que tiene 2 argumentos

function sumAll(...args) { // args es el nombre del array
  let sum = 0;

  for (let arg of args) sum += arg;

  return sum;
}

alert( sumAll(1) ); // 1
alert( sumAll(1, 2) ); // 3
alert( sumAll(1, 2, 3) ); // 6
