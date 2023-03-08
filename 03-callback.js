// callback = una funcion pasada como arguemnto a otra funcion

// hagamos un ejemplo donde tenemos 2 funciones, una para mostrar un resultado en la consola y otro como alerta


// Creemos la runcion donde va a devolver el resultado

function sumar (a, b) { 
    let resultado = a + b
    return resultado
}

// Ahora creemos una funcion para mostrar el resultado en la consola y otro en una alerta

function enConsola (output) {
    console.log(output)
}

function enAlerta (output) {
    window.alert(output)
}

// Ahora llamemos a la funcion

let total = sumar(5, 5)
// Ahora dependiedo de donde lo queremos mostrar llamamos a una funcion o a otra
enConsola(total)
enAlerta(total)
// Okey esta es una manera de hacer las cosas, ahora hagamos lo mismo per usando un callback donde poasamos una funcion como arguemnto

// Pasamos a la funcion como argumento
sumar(2, 3, enConsola)
// sumar (5, 5, enAlerta)

function sumar (a, b, callback) {
    let resultado = a + b 
    callback(resultado);
    
}

function enConsola (output) {
    console.log(output)
}

function enAlerta (output) {
    window.alert(output)
}









