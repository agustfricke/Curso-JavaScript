// Operador spread = permite desempacar elementos de arrays o strings

let num = [1, 2, 3, 4, 5, 6]
console.log(num) // Muestra array


console.log(...num) // Muestra todo desmpacado

let nombre = 'tech con agust'
console.log(...nombre) // con string

// Como  esto podria ser util?

// Digamo que queremos motrar el numero mas grade de un array

let maxNum = Math.max(num)
console.log(maxNum) // Nan

let maxNum = Math.max(...num)
console.log(maxNum) // 6

// ####

let comida = ['pera', 'banana', 'huevos', 'arroz']
let verduras = ['papa', 'cebolla']

comida.push(verduras)
console.log(comida) // comidas y un array de verduras

comida.push(...verduras)
console.log(comida) // una array de comidas



