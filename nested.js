// loops anidados
// Un loop dentro de otro loop

for (let contador = 1; contador <= 5; contador += 1) {
    console.log(contador);
};

// Aqui tenemos un for loop que cuenta del 1 al 5
// Que pasaria si quisiera repetir esto?
// Ahi es donde entrar los loops anidados

for (let contador = 1; contador <= 5; contador += 1) {
    for (let anidado = 1; anidado <= 3; anidado =+ 1) {
        console.log(anidado)
    }
};

// Basicamente el contador se ejecuta 1 sola vez, el anidado
// se ejecuta 3 veces y vuelve a empezar

// Okey ahora dibujemos un cuadrado en nuestro index.html

let filas = window.prompt('Ingrese num de filas');
let columnas = window.prompt('Ingresa num de colmunas');
let simbolo = window.prompt('Ingrese un simbolo');

for (let i = 1; i <= filas; i += 1) {
    for (let j = 1; j <= columnas; j += 1) {
        document.getElementById('cuadrado').innerHTML += simbolo;
    }
    document.getElementById('cuadrado').innerHTML += '<br>';
}

<p id='cuadrado'></p>



