// Objectos = un objecto en javascript es como un objecto en la vida real
// Por ejemplo una fruta, las frutas tienen nombres, color, precio, etc que vendrian a ser las propiedades 
// Basicamente todas las frutas tien diferentes propiedades pero diferenets valores 

const fruta1 = { nombre : 'narnaja', color: 'narnaja', precio: '1' }
const fruta2 = { nombre : 'manzana', color: 'roja', precio: '2' }

// Creemos un objecto de un usuario:

const user = {
    // propiedad // valor
    username: 'tech con agust',
    email: 'email@email.com',
    is_admin : false,
    edad: 23
}

// acceder a las propiedades 

console.log(user.username)
console.log(user['username'])


