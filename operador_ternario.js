
// Operador Ternario
// Shortcut para condiconal if/else
// Tiene 3 partes

// Condicion ? verdad : falso

// hagmos un conficional con else if primero

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

// Con un operador terminar se haria de la siguiente manera:

function checkEdad(edad) {
    return edad >= 18 ? 'Eres mayor de edad' : 'Eres menor de edad';
}
