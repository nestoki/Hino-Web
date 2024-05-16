
// Obtener los enlaces que abren el modal
var enlacesModal = document.querySelectorAll('a[class="abrirModal"]');

// Obtener el modal
var modal = document.getElementById('ventanaModal');

// Obtener el botón de cerrar del modal
var botonCerrar = modal.querySelector('.cerrar');

// Función para mostrar el modal
function mostrarModal() {
    modal.style.display = 'flex';
}

// Función para cerrar el modal
function cerrarModal() {
    modal.style.display = 'none';
}

// Agregar evento clic a cada enlace para abrir el modal correspondiente
enlacesModal.forEach(function(enlace) {
    enlace.addEventListener('click', function() {
        mostrarModal();
    });
});

// Agregar evento clic al botón de cerrar para cerrar el modal
botonCerrar.addEventListener('click', function() {
    cerrarModal();
});

// Cerrar el modal si se hace clic fuera de él
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        cerrarModal();
    }
});