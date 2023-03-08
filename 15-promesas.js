// "Producir código" es un código que puede llevar algún tiempo

// El "código de consumo" es un código que debe esperar el resultado

// Una promesa es un objeto de JavaScript que vincula la producción de código y el código de consumo.

function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}
// Productir codigo, puede lleavr un tiempo
let myPromise = new Promise(function(myResolve, myReject) {
  let x = 0;

    // tenemos que esperar a que el usuario ponga un valor
x = window.prompt('ingresa un numero')
x = Number(x)

  if (x == 0) {
    myResolve("OK"); // Cuando sea exitosa 
  } else {
    myReject("Error"); // cuando sea error
  }
});

// Codigo de consumo = debe esperar el reultado 
myPromise.then(
  function(value) {myDisplayer(value);},
  function(error) {myDisplayer(error);}
);

// Las propiedades del objecto Promise
// pueden ser: pending fulfilled, rejected 
// pending = undenfined 
// fulfilled = el resultado
// rejected = un error
