// switch es una declaracion para examinar valores frente a muchos casos
// se usa ya que es mas eficiente que poner muchos else if {}
// creemos un ejemplo para que se entienda un poco mejor

// if (edad >= 18) {
//     window.alert('eres mayor de edad')
// } else if (edad < 0) {
//     window.alert('no has nacido aun')
// } else {
//     window.alert('eres menor de edad')
// }

let edad = window.prompt('Ingrea un numero');
edad = Number(edad);

switch (true) {
    case edad >= 50:
        console.log('Muy alto!')
        break;
    case edad >= 40:
        console.log('Muy alto')
        break;
    case edad >= 30:
        console.log('Muy alto')
        break;
    case edad == 20:
        console.log('correcto')
        break;
    case edad <= 19:
        console.log('Muy bajo')
        break;
    default:
        console.log('No entiendo eso')
}