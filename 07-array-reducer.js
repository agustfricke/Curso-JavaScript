// array.reducer() = corre una funcion por cada elemento para volverlo un solo valor 
// En este ejemplo vamos a esta sumando todos los numberos de un array


const numbers = [45, 4, 9, 16, 25];
let sum = numbers.reduce(myFunction);

console.log(sum)

function myFunction(total, value) {
  return total + value;
}
