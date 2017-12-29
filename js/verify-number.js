function begin() {
  alert('verify number JS');
  insertCode();
};

function insertCode() {
  // variable que selecciona el input que contiene el código dado
  var randomCode = $('#random-code');
  $(randomCode).on('input', function() {
    if ($(randomCode).val() === '147') {
      enableButton();
    } else if ($(randomCode).val() === '') {
      disableButton();
    }
  });
}

/* FUNCIÓN PARA HABILITAR BOTON */
function enableButton() {
  // Crear variable para seleccionar el botón que permitirá pasar a la siguiente vista
  var nextButton = $('.next-btn');
  // console.log(nextButton);
  $(nextButton).prop('disabled', false);
  // Agregar color blanco a la fuente y rosado al fondo en el botón después de validar y hacer que tenga negrita
  $(nextButton).css({
    'backgroundColor': '#ea0b8c',
    'border': 'none',
    'color': '#fff',
    'fontWeight': 'bold'
  });
}

/* FUNCIÓN PARA DESHABILITAR BOTON */
function disableButton() {
  var nextButton = $('.next-btn');
  $(nextButton).prop('disabled', true);
  $(nextButton).css({
    'backgroundColor': 'buttonface',
    'border': '1px solid darkGrey',
    'color': 'inherit',
    'fontWeight': 'normal'
  });
}

$(document).ready(begin);
