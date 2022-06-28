export function campoRequerido(input) {
  if (input.value.trim().length > 0) {
    console.log("el dato esta correcto");
    input.className = "form-control is-valid";
  } else {
    console.log("error! no cargo valores");
    input.className += " is-invalid";
  }
}

export function cantidadCaracteres(min, max, input) {
  if (input.value.trim().length >= min && input.value.trim().length <= max) {
    input.className = "form-control is-valid";
  } else {
    input.className += " is-invalid";
  }
}
// emilse@gmail.com  xxxxxxxxxxxxxxxxx@xxxxx.xxxx   103, 22, 5

export function validarNumeros(input) {
  // validar con expresiones regulares
  let patron = /^[0-9]{1,3}$/;
  console.log(input.value.trim().length)
  if (patron.test(input.value.trim())) {
    input.className = "form-control is-valid";
  } else {
    input.className += " is-invalid";
  }
}
