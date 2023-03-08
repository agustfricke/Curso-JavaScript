// JavaScript tiene 8 tipos de datos

//1. String
//2. Number
//3. Bigint
//4. Boolean
//5. Undefined
//6. Null
// 7. Symbol
// 8. Object

// Numbers:
let length = 16;
let weight = 7.5;

// Strings:
let color = "Yellow";
let lastName = "Johnson";

// Booleans
let x = true;
let y = false;

// Object:
const person = {firstName:"John", lastName:"Doe"};

// Array object:
const cars = ["Saab", "Volvo", "BMW"];

// Big int:
let x = 9999999999999999 // 16 digitos o  15
console.log(x) // mal

let y = 9999999999999999n
console.log(y)

// Symbols es unico e inmutable, son como tokens que usan id unicos
let symbol1 = Symbol('hola1')
let symbol2 = Symbol('hola1') 
console.log(symbol1 === symbol2) // false

// undefind algo que hemos creado pero aun no le hemo asignadoun valor
let name;
console.log(name)

// Null == algo que no existe, le tenemos que asignar null a algo para que sea null
let edad = null;
console.log(edad)

