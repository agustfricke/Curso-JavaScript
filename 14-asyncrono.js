// asincrono = termino mas tarde ! un buen ejhemplo es el timeOut()

// le pasamos el tiempo que va a demorar en ejecutar
setTimeout(myFunction, 3000);

// escribimos la funcion que queremos que se ejecute con 3 seg mas tarde
function myFunction() {
  document.getElementById("demo").innerHTML = "I love You !!";
}
