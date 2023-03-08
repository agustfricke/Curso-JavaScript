// JSON = JavaScript Object Notation es un formato para mandar y transportar datos
// es usado en practicamente en todo el internet, por lo general cuando estes trabjando en una aplicacion web
// el servidor backend te va a mandar los datos que tiene en la base de datos en formato json

// su sintaxis, donde tenemos un objecto llamado empleados
// con un array donde tiene 3 objetos dentro
{
"employees":[
  {"firstName":"John", "lastName":"Doe"},
  {"firstName":"Anna", "lastName":"Smith"},
  {"firstName":"Peter", "lastName":"Jones"}
]
}

// deben tener el eln nombre y valor en ""

// Hagmos un ejemplo practico

let text = '{"employees":[' +
'{"firstName":"John","lastName":"Doe" },' +
'{"firstName":"Anna","lastName":"Smith" },' +
'{"firstName":"Peter","lastName":"Jones" }]}';

// lo convierte de un string a un objecto
const obj = JSON.parse(text);
// Mostremos en el html
document.getElementById("demo").innerHTML =
obj.employees[1].firstName + " " + obj.employees[1].lastName;


