import {campoRequerido, cantidadCaracteres, validarNumeros} from './validaciones.js';

let nombre = document.getElementById('nombre');
let edad = document.getElementById('edad');


console.log(nombre)
nombre.addEventListener('blur',()=>{cantidadCaracteres(2,40,nombre)});
edad.addEventListener('blur',()=>{validarNumeros(edad)});

