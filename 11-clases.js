// clases = son templates para los objectos

class Persona {
    // pone simpre el metodo constructor es usado para inciar las propiedades de los oobjectos
    constructor(name, apellido) {
        this.name = name,
        this.apellido = apellido
    }
}
// Y asi creamos ojbectos a partir de esta clase
let perona1 = new Persona('John', 'Doe')
let perona2 = new Persona('Agustin', 'Lopez')

console.log(perona1.name)

// Podemos agregar metodos dentro de las clases

class Persona {
    constructor(name, fecha_nacimiento){
    this.name = name
    this.fecha_nacimiento = fecha_nacimiento
    }
    // metodo 
    edad () {
        let date = new Date()
        return date.getFullYear() - this.fecha_nacimiento
    }
}


let persona1 = new Persona('Agustin', 2000)
console.log('La edad de ' + persona1.name + ' es ' + persona1.edad());
