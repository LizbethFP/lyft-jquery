function begin() {
  transitionPage();
  stopTransitionPage();
};


// Aplicar transición de página index a vista principal
function transitionPage() {
  setTimeout(function() {
    window.location.href = 'views/main-view.html';
  }, 5000);
};

// Detener transición de página
function stopTransitionPage() {
  clearTimeout(transitionPage());
};

$(document).ready(begin);
