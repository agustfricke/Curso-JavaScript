// This = se refiere al objecto


const persona = {
    name: 'tech con agust',
    apellido: 'email@email.com',
    edad: 23,
    nombreCompleto : function () {
        return this.name + ' ' + this.apellido
    }
}
// this = persona
console.log(persona.nombreCompleto)
console.log(persona.nombreCompleto)
