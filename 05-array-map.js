// array.map() = crea un nuevo array llamado a una funcion por cada elemnento del array

const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map(myFunction);

console.log(numbers2)

function myFunction(value) {
  return value * 2;
}
