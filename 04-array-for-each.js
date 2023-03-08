// Array.forEach = Llama a una funcion por cada elemento del Array

// <p id='test'> </p>

const numeros = [1, 2, 3, 4, 5]

let text = ''

numeros.forEach(miFuncion)
document.getElementById('test').innerHTML = text

function miFuncion(value) {
    text += value + '<br>'
}


