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
    return true;
  } else {
    input.className += " is-invalid";
    return false;
  }
}
// emilse@gmail.com  xxxxxxxxxxxxxxxxx@xxxxx.xxxx   103, 22, 5

export function validarNumeros(input) {
  // validar con expresiones regulares
  let patron = /^[0-9]{1,3}$/;
  console.log(input.value.trim().length);
  if (patron.test(input.value.trim())) {
    input.className = "form-control is-valid";
    return true;
  } else {
    input.className += " is-invalid";
    return false;
  }
}

// 6 888 777 60 888 777
export function validarDNI(input) {
  let patron = /^[\d]{1,2}[\d]{3,3}[\d]{3,3}$/;
  if (patron.test(input.value.trim())) {
    input.className = "form-control is-valid";
    return true;
  } else {
    input.className = "form-control is-invalid";
    return false;
  }
}

export function validarPeso(input) {
  let patron = /^[\d]{1,3}(\,[\d]{1,2})?$/;
  if (patron.test(input.value.trim())) {
    input.className = "form-control is-valid";
  } else {
    input.className = "form-control is-invalid";
  }
}

export function validarAltura(input) {
  let patron = /^[1-2]{1}(\,[\d]{1,2})?$/;
  if (patron.test(input.value.trim())) {
    input.className = "form-control is-valid";
  } else {
    input.className = "form-control is-invalid";
  }
}

export function validarAnio(input) {
  let anioActual = new Date().getFullYear();
  console.log(anioActual);
  console.log(input.value);
  if (input.value >= 1930 && input.value <= anioActual) {
    input.className = "form-control is-valid";
    return true;
  } else {
    input.className = "form-control is-invalid";
    return false;
  }
}
