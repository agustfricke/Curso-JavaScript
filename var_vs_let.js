// Scope de la variable = desde donde la variable es accesible

// let = Esta limitada al blocke del scope {}
// var = esta limitada a una funcion () {}


if (true) {
    var variableVar = 'Est es verdadero'
}
console.log(variableVar);
// Podemos acceder a esta porque tiene un scope de funcion 
// y como estamos en este ejemplo dentro de un condicional Podemos
// tenerla con un alcance global 

if (true) {
    let variableLet= 'Esto es true'
}
console.log(variableLet)
// En cambio esta tien un scope de {} asi que que esta variable solo 
// existe dentro del condicional


if (true) {
    let variableLet= 'Esto es true'
    console.log(variableLet)
}
// COmo vemos ahora si podemos ya que estamos llamando a la variable
// dentro de la funcion

function hola () {
    var variableVar = 'Hola'
}

console.log(variableVar)
// Como vemos aqui no podemos acceder a la variable poreque esta dentro
// de una funcion
