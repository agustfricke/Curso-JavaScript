// While loops 
// un while loop lo que hace es repetir el codigo 
// cuando la condicion es verdadera, si la condicion no cambia a 
// flaso podriamos tener un loop infinito
// Si es falsa por otro lado el while loop no se va a ejecutar

while(condicion) {
    // codigo que se va a repetir1
}

let cantidad = ''

while (cantidad == '') {
    cantidad = window.prompt('Ingrese la cantidad de bananas')
}

console.log('Hay', cantidad, 'bananas');

// pero si presionamos cancel la condicion se vuelve null y podemos
// salir del loop, asi que pongamos otra condicion


let cantidad = ''

while (cantidad == '' || cantidad == null) {
    cantidad = window.prompt('Ingrese la cantidad de bananas')
}

console.log('Hay', cantidad, 'bananas');

// Ahora el usuario debe poner la cantidad
// Ten en cuanta que debes permitir salir del loop de alguna manera
// Sino puedes terminar en un loop inifinito

while (true) {
    console.log('Estoy atrapado')
}














