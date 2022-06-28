import {campoRequerido, cantidadCaracteres, validarDNI, validarNumeros} from './validaciones.js';

let nombre = document.getElementById('nombre');
let edad = document.getElementById('edad');
let dni = document.getElementById('dni');
let genero =  document.getElementById('genero')

nombre.addEventListener('blur',()=>{cantidadCaracteres(2,40,nombre)});
edad.addEventListener('blur',()=>{validarNumeros(edad)});
dni.addEventListener('blur',()=>{validarDNI(dni)});
genero.addEventListener('change', ()=>{campoRequerido(genero)});

