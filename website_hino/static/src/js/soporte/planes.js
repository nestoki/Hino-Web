document.addEventListener("DOMContentLoaded", function() {
    const serie300Link = document.querySelector('.serie-300');
    const serie500Link = document.querySelector('.serie-500');
    const tabla300 = document.querySelector('.planes-tabla-300');
    const tabla500 = document.querySelector('.planes-tabla-500');

    // Función para mostrar la tabla 300 y ocultar la tabla 500
    function mostrarTabla300() {
        tabla300.style.display = 'flex';
        tabla500.style.display = 'none';
        // Agregar clase al enlace seleccionado y quitarla del otro enlace
        serie300Link.classList.add('serie-selected');
        serie500Link.classList.remove('serie-selected');
    }

    // Función para mostrar la tabla 500 y ocultar la tabla 300
    function mostrarTabla500() {
        tabla300.style.display = 'none';
        tabla500.style.display = 'flex';
        // Agregar clase al enlace seleccionado y quitarla del otro enlace
        serie500Link.classList.add('serie-selected');
        serie300Link.classList.remove('serie-selected');
    }

    // Mostrar la tabla 300 al cargar la página
    mostrarTabla300();

    // Agregar eventos de click a los enlaces
    serie300Link.addEventListener('click', function(event) {
        event.preventDefault();
        mostrarTabla300();
    });

    serie500Link.addEventListener('click', function(event) {
        event.preventDefault();
        mostrarTabla500();
    });
});

