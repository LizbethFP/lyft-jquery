function begin() {
  transitionPage();
  // stopTransitionPage();
};


// Aplicar transición de página index a vista principal
function transitionPage() {
  // Crear variable para el elemento a animar
  var imgTransition = $('img');
  // Crear efecto de toggle al elemento
  $(imgTransition).slideToggle(3000);
  // Redireccionar a siguiente página en 6 segundos
  setTimeout(function() {
    window.location.href = 'views/main-view.html';
  }, 5000);
};

// Detener transición de página
// function stopTransitionPage() {
//   clearTimeout(transitionPage());
// };

$(document).ready(begin);
