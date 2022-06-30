import {
  campoRequerido,
  cantidadCaracteres,
  validarAltura,
  validarAnio,
  validarDNI,
  validarNumeros,
  validarPeso,
} from "./validaciones.js";
import Persona from "./personaClass.js";

let nombre = document.getElementById("nombre");
let edad = document.getElementById("edad");
let dni = document.getElementById("dni");
let genero = document.getElementById("genero");
let peso = document.getElementById("peso");
let altura = document.getElementById("altura");
let anio = document.getElementById("fechaNacimiento");
let formulario = document.getElementById("formGeneraciones");
let alert = document.querySelector('#msjError');
let btn = document.querySelector('#mostrardatos');

nombre.addEventListener("blur", () => {
  cantidadCaracteres(2, 40, nombre);
});
edad.addEventListener("blur", () => {
  validarNumeros(edad);
});
dni.addEventListener("blur", () => {
  validarDNI(dni);
});
genero.addEventListener("change", () => {
  campoRequerido(genero);
});
peso.addEventListener("blur", () => validarPeso(peso));
altura.addEventListener("blur", () => validarAltura(altura));
anio.addEventListener("keyup", () => validarAnio(anio));
anio.addEventListener("blur", () => validarAnio(anio));
formulario.addEventListener("submit", crearPersona);
btn.addEventListener("click", ()=>{
    nuevaPersona.mostrarDatos();
});

function crearPersona(e) {
  e.preventDefault();
  // console.log(e);
  if (
    cantidadCaracteres(2, 40, nombre) &&
    validarNumeros(edad) &&
    validarDNI(dni) &&
    validarAnio(anio)
  ) {
    console.log("tengo que crear la persona");
    //hay que ocultar el alert
    alert.className= 'alert alert-danger mt-3 d-none';
    let nuevaPersona = new Persona(
      nombre.value,
      edad.value,
      dni.value,
      genero.value,
      peso.value,
      altura.value,
      anio.value
    );
    console.log(nuevaPersona);
  } else {
    console.log(
      "mostrar un mensaje de error, para que complete los datos correctamente"
    );
    alert.innerHTML='Debe completar los datos indicados con *';
    alert.className= 'alert alert-danger mt-3';
    setTimeout(()=>{
        alert.className= 'alert alert-danger mt-3 d-none';
    },5000)
  }
}
