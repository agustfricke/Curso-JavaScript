// do while loop, 
// 1- Hace algo
// 2- Verifica la condicion
// 3- Repite si esta es verdadera


let cantidad;

while (cantidad == '') {
    cantidad = window.prompt('Ingrese la cantidad de bananas')
}

console.log('Hay', cantidad, 'bananas');


let cantidad = ''

do {
    cantidad = window.prompt('Ingrese la cantidad de bananas')
} while(cantidad == '')

console.log('Hay', cantidad, 'bananas');

