// Función para manejar la visibilidad de los sliders basado en el ancho de la ventana
function toggleSliders() {
  var normalSlider = document.getElementById('slider-home-normal');
  var responsiveSlider = document.getElementById('slider-home-responsive');

  if (window.innerWidth > 500) {
    normalSlider.classList.remove('hidden');
    responsiveSlider.classList.add('hidden');
  } else {
    normalSlider.classList.add('hidden');
    responsiveSlider.classList.remove('hidden');
  }
}

// Llama a la función inicialmente para establecer el estado correcto al cargar la página
toggleSliders();

// Agrega un event listener al objeto window para manejar cambios en el tamaño de la ventana
window.addEventListener('resize', function() {
  toggleSliders();
});