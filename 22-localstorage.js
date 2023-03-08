
// El web storage es una una forma simple de giardar y recibir datos en el browser :

localStorage.setItem("name","John Doe");
// Obtener localStorage
document.getElementById("demo").innerHTML = localStorage.getItem("name");

// Obneter por numero de idex
var x = localStorage.key(0);

// Loop todo el localStorage
for (i = 0; i < localStorage.length; i++) {
  x = localStorage.key(i);
  document.getElementById("demo").innerHTML += x;
}

// Elminiar 
localStorage.clear();

// Eliminar solo un especifico item
localStorage.removeItem("name");





