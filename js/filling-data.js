function begin() {
  validatePersonalData();
  enableButton();
};

// Crear función para validar que se ha ingresado los datos necesario: el nombre, apellido y correo electrónico
function validatePersonalData() {
  validateFirstName();
  validateLastName();
  validateEmail();
}

function validateFirstName() {
  // crear variable para seleccionar el input correspondiente al dato que se pide
  var firstName = $('input').first();
  // Agregar evento para capturar el valor del nombre
  $(firstName).on('input', function(event) {
    // console.log(event.target.value);
    console.log($(this).val());;
  });
}

function validateLastName() {
  // crear variable para seleccionar el input correspondiente al dato que se pide
  var lastName = $('input').first().next();
  // Agregar evento para capturar el valor del apellido
  $(lastName).on('input', function(event) {
    console.log($(this).val());;
  });
}

function validateEmail() {
  // crear variable para seleccionar el input correspondiente al dato que se pide
  var email = $('input').first().next().next();
  var REGULAREXPRESSION = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  // Agregar evento para capturar el valor del email
  $(email).on('input', function(event) {
    // console.log($(this).val());
    // console.log(REGULAREXPRESSION.test($(this).val()));
    if (REGULAREXPRESSION.test($(this).val())) {
      alert('es válido');
    } else {
      console.log('no es válido');
    }
  });
}


function enableButton() {

}

$(document).ready(begin);
