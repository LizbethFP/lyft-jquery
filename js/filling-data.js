function begin() {
  validatePersonalData();
  checkedBox();
  enableButton();
  disableButton();
  selectButton();
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
    // console.log($(this).val());;
    if ($(this).val() !== '') {
      enableButton();
    } else if ($(this).val() === '') {
      disableButton();
    }
  });
}

function validateLastName() {
  var validateLastName = false;
  // crear variable para seleccionar el input correspondiente al dato que se pide
  var lastName = $('input').first().next();
  // Agregar evento para capturar el valor del apellido
  $(lastName).on('input', function(event) {
    // console.log($(this).val());;
    if ($(this).val() !== '') {
      validateLastName = true;
      enableButton();
    } else if ($(this).val() === '') {
      disableButton();
    }
  });
  return validateLastName;
}

function validateEmail() {
  var validateEmail = false;
  // crear variable para seleccionar el input correspondiente al dato que se pide
  var email = $('input').first().next().next();
  var REGULAREXPRESSION = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  // Agregar evento para capturar el valor del email
  $(email).on('input', function(event) {
    // console.log($(this).val());
    // console.log(REGULAREXPRESSION.test($(this).val()));
    if (REGULAREXPRESSION.test($(this).val())) {
      // alert('es válido');
      validateEmail = true;
      enableButton();
    } else {
      // console.log('no es válido');
      disableButton();
    }
  });
  return validateEmail;
}

function checkedBox() {
  // crear variable para seleccionar el input correspondiente al checkbox
  var checkbox = $('input').last();
  console.log(checkbox);
  // agregar evento de clic que verifica que esté seleccionado el checkbox
  $(checkbox).on('click', function(event) {
    // alert('Me cliqueaste D:!');
    // console.log(event.target.checked);
    if ($(checkbox).is(':checked')) {
      // alert('YASSS');
      enableButton();
    } else {
      // console.log('nopeeee');
      disableButton();
    }
  });
}

/* FUNCIÓN PARA HABILITAR BOTON */
function enableButton() {
  // Crear variable para seleccionar el botón que permitirá pasar a la siguiente vista
  var nextButton = $('.next-btn');
  console.log(nextButton);
  // Crear condicional que valide los anteriores campos
  if (validateEmail && validateLastName && validateFirstName && checkedBox) {
    $(nextButton).attr('disabled', false);
    // Agregar color blanco a la fuente y rosado al fondo en el botón después de validar y hacer que tenga negrita
    $(nextButton).css({
      'backgroundColor': '#ea0b8c',
      'border': 'none',
      'color': '#fff',
      'fontWeight': 'bold'
    });
  };
}

/* FUNCIÓN PARA DESHABILITAR BOTON */
function disableButton() {
  var nextButton = $('.next-btn');
  $(nextButton).attr('disabled', true);
  $(nextButton).css({
    'backgroundColor': '#cccccc',
    'border': 'none',
    'color': 'inherit',
    'fontWeight': 'normal'
  });
}

/* FUNCIÓN PARA DARLE CLIC AL BOTON Y REDIRECCIONARSE A LA SIGUIENTE VISTA */
function selectButton() {
  var nextButton = $('.next-btn');
  $(nextButton).on('click', function() {
    window.location.href = 'last-view.html';
  });
}

$(document).ready(begin);
