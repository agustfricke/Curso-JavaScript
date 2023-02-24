// return 
// Devuelve el  valor al lugar donde invocamos a la funcion

let a;
let b;
let resultado;

a = window.prompt('Ingrese un numero');
b = window.prompt('Ingrese un numero');

// resultado = numero(a,b)

// console.log('El numero es:', resultado);

// Podriamos internar hacer  algo asi, pero no va a devolver el valor
// como vemos devuelve undefined
console.log(numero(a,b))

function numero(a,b) {
     a * b;
}

// En cambio de esta manera si  
function numero(a,b) {
     return a * b;
}

let edad = window.prompt('Ingresa tu edad');
edad = Number(edad);

// Llamamos a la function 

console.log(checkEdad(edad));

function checkEdad(edad) {
    if (edad >= 18) {
        return 'Es mayor de edad';
    } else {
        return 'Es menor de edad';
    }
}
