// Los lenguajes de programacion son basicamnete una lista de intrucciones que
// pueden ser ejecutadas por una computadora, estas 'intrucciones' son llamadas
// declaraciones.

// Las declaraciones de JavaScript estan compuestas de valores, operadores, expressiones,
// Palabras clave y comentarios

// Por ejemplo hagamos una declaracion donde imprimimos Hola JavaScript en el achivo HTML

document.getElementById('hola').innerHTML = 'Hola desde JavaScript'

// Punto y coma ;

// Los punto y coma en JavaScript separan declaraciones 

let a, b, c; // declaramos 3 variables
a = 5; // asignamos 5 a A
b = 'Hola'; // asignamos Hola a B
c = false; // asignamos falso a C

// Si ponemos punto y coma podemos poner multiples declaraciones en una sola linea de codigo

a = 5; b = 'Hola'; c = false; // Ok
// a = 5 b = 'Hola' c = false // Error

// Espacios en blanco = JavaScript ignora los espacios en blanco 
let nombre = 'Tech con Agust';
let canal='Tech Con Agust';
// Es lo mismo


// Saltos de linea = Por buenas practicas es bueno evitar lineas muy extensas, si una declaracion
// se hace muy larga podemos hacer un salto de linea justo despues del operador

document.getElementById('hola').innerHTML = 
    'Hola desde JavaScript';

// Blockes de codigo en JavaScript = Las declaraciones de JavaScript pueden ser declraradas dentro 
// de llaves {} , El proposito de esto es para definir declraciones que se van a ejecutar juntas.
// En las funciones vamos a ver que pasa esto

function miFuncion () {
    document.getElementById('hola').innerHTML = 'Hola desde JavaScript';
    document.getElementById('hola2').innerHTML = 'Hola 2 desde JavaScript';
}

// Palabras reservadas = En JavaScripttenes palabras clvaes que sireven para indientificar una accion
// estas palabras estan reservadas:
// var 
// let 
// const 
// if 
// switch
// for
// function 
// return 
// try 








