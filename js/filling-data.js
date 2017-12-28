function begin() {
  validatePersonalData();
  checkedBox();
  enableButton();
  disableButton();
};

// Crear función para validar que se ha ingresado los datos necesario: el nombre, apellido y correo electrónico
function validatePersonalData() {
  // validateFirstName();
  // validateLastName();
  // validateEmail();
}

// function validateFirstName() {
//   // crear variable para seleccionar el input correspondiente al dato que se pide
//   var firstName = $('input').first();
//   // Agregar evento para capturar el valor del nombre
//   $(firstName).on('input', function(event) {
//     // console.log(event.target.value);
//     console.log($(this).val());;
//   });
// }

// function validateLastName() {
//   // crear variable para seleccionar el input correspondiente al dato que se pide
//   var lastName = $('input').first().next();
//   // Agregar evento para capturar el valor del apellido
//   $(lastName).on('input', function(event) {
//     console.log($(this).val());;
//   });
// }

// function validateEmail() {
//   // crear variable para seleccionar el input correspondiente al dato que se pide
//   var email = $('input').first().next().next();
//   var REGULAREXPRESSION = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
//   // Agregar evento para capturar el valor del email
//   $(email).on('input', function(event) {
//     // console.log($(this).val());
//     // console.log(REGULAREXPRESSION.test($(this).val()));
//     if (REGULAREXPRESSION.test($(this).val())) {
//       alert('es válido');
//     } else {
//       console.log('no es válido');
//     }
//   });
// }

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


function enableButton() {
  // Crear variable para seleccionar el botón que permitirá pasar a la siguiente vista
  var nextButton = $('.next-btn');
  console.log(nextButton);
  // Crear condicional que valide los anteriores campos
 // if (something === true) {
    $(nextButton).attr('disabled', false);
    // Agregar color blanco a la fuente y rosado al fondo en el botón después de validar y hacer que tenga negrita
    $(nextButton).css({
      'backgroundColor': '#ea0b8c',
      'border': 'none',
      'color': '#fff',
      'fontWeight': 'bold'
    });
  // };
}

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

$(document).ready(begin);
