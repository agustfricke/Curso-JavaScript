// Las variables en javascript sirven para almacenar los valores de datos
// se pueden crear con var let y const mas adelante veremos sus diferencias 
// como en algebra las vairables guardan valores

// 2 pasos

// 1- declarar
let nombre;

console.log(nombre) // indefinido porque aun no le asignamos nada

// 2- asignacion
nombre = 'tech con agust';

// lo podemos hacer todo en una misma linea

let nombreDeCanal = 'tech con agust';
console.log(nombreDeCanal);

// tambien podemos pasar variables al html

let edad = 22;
document.getElementById('demo').innerHTML = edad;
// <p id='demo'></p>

// declarar muchas variables en una sola linea de codigo:

let producto = 'Teclado', color = 'blanco', precio = 50;
console.log(producto, color, precio);

// reasignar un valor

let fruta = 'manzana';
console.log(fruta);
fruta = 'pera';
console.log(fruta);
fruta = false;
console.log(fruta);

// podemos poner expresiones aritmeticas dentro de variables

let resultado = 5 + 3 + 2;
console.log(resultado)

// Tambien con strigs

let nombreCompleto = 'John' + ' ' + 'Doe';
console.log(nombreCompleto);




