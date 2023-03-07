// Constantes
// Son variables que no pueden cambiar su valor

const precio = 20
// let precio = 20;
let cantidad;
let total;

cantidad = window.prompt('Ingrese la cantidad');
cantidad = Number(cantidad);

// precio = 0;

total = precio * cantidad;

console.log(total);
