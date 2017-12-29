function begin() {
  // alert('sign up JS');
  showCountryCode();
  completePhoneNumber();
  selectButton();
};

// Función para mostrar el código de cada país en input para luego completar el número telefónico
function showCountryCode() {
  var country = document.getElementById('country');
  var phoneNumber = document.getElementById('phone-number');

  country.onchange = function(event) {
    phoneNumber.value = this.value;
    if ((this.value).trim() !== '') {
    		phoneNumber.disabled = false;
    } else {
    		phoneNumber.disabled = true;
    }
  };

  phoneNumber.onkeyup = function(event) {
    var numsValue = this.value.match(/\d+/g);
    if (numsValue !== null) {
      this.value = '+' + ((numsValue).toString().replace(/\,/, ''));
    } else {
    		this.value = country.value;
    }
  };
}

// Función para validar que haya 10 dígitos en el input de número telefónico
function completePhoneNumber() {
  // Crear variable para seleccionar el input
  var tenDigitPhone = $('#phone-number');
  console.log(tenDigitPhone);
  // Crear función que capture su contenido
  $(tenDigitPhone).on('input', function() {
    // console.log($(this).val());
    // Validar que tenga 10 dígitos
    if ($(this).val().length >= 13) {
      enableButton();
    } else {
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

/* FUNCIÓN PARA DARLE CLIC AL BOTON Y REDIRECCIONARSE A LA SIGUIENTE VISTA Y BRINDAR CÓDIGO */
function selectButton() {
  var nextButton = $('.next-btn');
  $(nextButton).on('click', function() {
    alert('Tu código es LAB-147');
    window.location.href = 'verify-number.html';
  });
}

$(document).ready(begin);
