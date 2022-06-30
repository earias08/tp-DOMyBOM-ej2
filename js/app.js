import {campoRequerido, cantidadCaracteres, validarAltura, validarAnio, validarDNI, validarNumeros, validarPeso} from './validaciones.js';

let nombre = document.getElementById('nombre');
let edad = document.getElementById('edad');
let dni = document.getElementById('dni');
let genero =  document.getElementById('genero')
let peso =  document.getElementById('peso')
let altura =  document.getElementById('altura')
let anio =  document.getElementById('fechaNacimiento')
let formulario =  document.getElementById('formGeneraciones')

nombre.addEventListener('blur',()=>{cantidadCaracteres(2,40,nombre)});
edad.addEventListener('blur',()=>{validarNumeros(edad)});
dni.addEventListener('blur',()=>{validarDNI(dni)});
genero.addEventListener('change', ()=>{campoRequerido(genero)});
peso.addEventListener('blur', ()=>validarPeso(peso));
altura.addEventListener('blur', ()=>validarAltura(altura));
anio.addEventListener('keyup', ()=>validarAnio(anio));
anio.addEventListener('blur', ()=>validarAnio(anio));
formulario.addEventListener('submit',crearPersona)


function crearPersona(e){
    e.preventDefault();
    // console.log(e);
     if(cantidadCaracteres(2,40,nombre) && validarNumeros(edad) && validarDNI(dni) && validarAnio(anio)){
        console.log('tengo que crear la persona')
     }else{
        console.log('mostrar un mensaje de error, para que complete los datos correctamente')
     }
}