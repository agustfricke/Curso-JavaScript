// Funciones flecha => permite escribir funciones mas cortas

// Antes
hello = function() {
  return "Hello World!";
}

// Despues
hello = () => {
  return "Hello World!";
}

// Podemos remover el return
hello = () => "Hello World!";

// Con parametros
let hello = "";

hello = val => "Hello " + val;

document.getElementById("demo").innerHTML = hello("Universe!");


