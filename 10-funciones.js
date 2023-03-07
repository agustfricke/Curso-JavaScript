// Funciones
// Escribe codigo una vez, usalo las veces que quieras
// Para llamar a un bloque de codigo, llama a la funcion 

console.log('Mi canal es Tech con Agust');
console.log('y estoy programando ');
console.log('en JavaScript');

// Lo que podriamos hacer para repetir este codigo es poner

console.log('Mi canal es Tech con Agust');
console.log('y estoy programando ');
console.log('en JavaScript');

console.log('Mi canal es Tech con Agust');
console.log('y estoy programando ');
console.log('en JavaScript');

console.log('Mi canal es Tech con Agust');
console.log('y estoy programando ');
console.log('en JavaScript');

// Pero en realidad no esta bueno repetir el codigo, asi que creemos
// una funcion para repetir estas lineas de codigo

test();
test();
test();


function test() {
    console.log('Mi canal es Tech con Agust');
    console.log('y estoy programando ');
    console.log('en JavaScript');
};

// Ahora pongamos algunas variables

let canal = 'Tech con Agust';
let lenguaje = 'JavaScript';

function test() {
    console.log('Mi canal es', canal) 
    console.log('y estoy programando ');
    console.log('en', lenguaje);
};

// Las funciones tienen acceso a variables globales como las que 
// que creamos recien
// Las variable son globales cuando son declaradas fuera de las funciones

// Hagamos otro ejemplo donde tenemos una funcion para inciar nuestro
// programa 

inciar();

function inciar() {
    let canal = 'Tech con Agust';
    let lenguaje = 'JavaScript';

    test();
}

function test() {
    console.log('Mi canal es', canal) 
    console.log('y estoy programando ');
    console.log('en', lenguaje);
};

// Basicamente como podemos ver aqui nos dice que las variables 
// no estan definidas 
// Las variables defindas con let no son leidas fuera de las llaves
// Estas variables solo existen dentro de las llaves

// Lo que podemos hacer es mandar la infromacion de estas variables
// hacia la funcion test dentro de la funcion inciar, estos se llaman
// argumentos

inciar();

function inciar() {
    let canal = 'Tech con Agust';
    let lenguaje = 'JavaScript';

    test(canal, lenguaje);
}

function test(canal, lenguaje) {
    console.log('Mi canal es', canal) 
    console.log('y estoy programando ');
    console.log('en', lenguaje);
};



