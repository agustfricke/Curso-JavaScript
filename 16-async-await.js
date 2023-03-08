// async y await hace que las promesas sean mas faciles dee escribir
// asyn hace que una funcion retone una promesas
// await hace que la funcion tenga que esperar por una promeasa 

// La palabra clave async antes de una función hace que la función devuelva una promesa:
async function myDisplay() {
  let myPromise = new Promise(function(resolve) {
    setTimeout(function() {resolve("I love You !!");}, 3000);
  });
// La palabra clave await solo se puede usar dentro de una función asíncrona.
// La palabra clave await hace que la función pause la ejecución y espere una promesa resuelta antes de continuar:
  document.getElementById("demo").innerHTML = await myPromise;
}

myDisplay();
