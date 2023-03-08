// modulos = javascript te permite seprarar tui codigo en diferentes archivos

// primero expotemos unas constantes lo podemos hacer de diferenes maneras 1- solo 2- exportar todo al final

// export.js
export const name = 'Agustin'
export const  edad = 22;

// $$$$$$$$$$$

const name = 'Agustin'
const edad = 22

export { name, edad }


// import.js

// mas de 1
import {name, edad} from './export.js';
// 1 solo
import edad from './export.js';


const message = () => {
const name = "Jesse";
const age = 40;
return name + ' is ' + age + 'years old.';
};

export default message;

import message from "./message.js";

console.log(message)
