// El input del usuario

// let usuario = window.prompt('Ingresa tu nombre de usuario: ');
// console.log('Tu nombre de usuario es:', usuario)

document.getElementById('boton').onclick = function () {
    usuario = document.getElementById('usuario').value;
    console.log('Hola', usuario)
}