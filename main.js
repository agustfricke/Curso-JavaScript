/*

    Expresiones aritméticas
    Las Expresiones aritméticas son una combinacion de 
    operandos (variables, valores, etc) y 
    operadores (+ - * / % **)

*/

let bananas = 10;

// bananas = bananas + 5
// bananas = bananas - 5
// bananas = bananas * 2
// bananas = bananas / 2
// bananas = bananas % 3
// bananas = bananas ** 3

// Shortcut
bananas += 5;
console.log(bananas)


/*

En que orden se resuelven las operaciones?
1- Parentesis ()
2- Exponentes 
3- Multiplicacion y divicion
4- suma y resta

*/

let resultado = (2 + 5) * 2 + 5;
console.log(resultado)
