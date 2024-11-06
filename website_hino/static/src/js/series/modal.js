document.addEventListener("DOMContentLoaded", function () {
    // Obtener los enlaces que abren el modal para cabina angosta
    var enlacesModalAngosta = document.querySelectorAll('a.abrirModalAngosta');

    // Obtener los enlaces que abren el modal para cabina ancha
    var enlacesModalAncha = document.querySelectorAll('a.abrirModalAncha');

    // Obtener los enlaces que abren el modal para cabina no aplica
    var enlacesModalNoAplica = document.querySelectorAll('a.abrirModalNoAplica');

    // Obtener el modal de cabina angosta
    var modalAngosta = document.getElementById('ventanaModal');

    // Obtener el modal de cabina ancha
    var modalAncha = document.getElementById('ventanaModalAncha');

    // Obtener el modal de cabina no aplica
    var modalNoAplica = document.getElementById('ventanaModalNoAplica');

    // Obtener el botón de cerrar del modal de cabina angosta
    var botonCerrarAngosta = modalAngosta ? modalAngosta.querySelector('.cerrar') : null;

    // Obtener el botón de cerrar del modal de cabina ancha
    var botonCerrarAncha = modalAncha ? modalAncha.querySelector('.cerrar') : null;

    // Obtener el botón de cerrar del modal de cabina no aplica
    var botonCerrarNoAplica = modalNoAplica ? modalNoAplica.querySelector('.cerrar') : null;

    // Función para mostrar el modal de cabina angosta
    function mostrarModalAngosta() {
        if (modalAngosta) {
            modalAngosta.style.display = 'flex';
        }
    }

    // Función para mostrar el modal de cabina ancha
    function mostrarModalAncha() {
        if (modalAncha) {
            modalAncha.style.display = 'flex';
        }
    }

    // Función para mostrar el modal de cabina no aplica
    function mostrarModalNoAplica() {
        if (modalNoAplica) {
            modalNoAplica.style.display = 'flex';
        }
    }

    // Función para cerrar el modal de cabina angosta
    function cerrarModalAngosta() {
        if (modalAngosta) {
            modalAngosta.style.display = 'none';
        }
    }

    // Función para cerrar el modal de cabina ancha
    function cerrarModalAncha() {
        if (modalAncha) {
            modalAncha.style.display = 'none';
        }
    }

    // Función para cerrar el modal de cabina no aplica
    function cerrarModalNoAplica() {
        if (modalNoAplica) {
            modalNoAplica.style.display = 'none';
        }
    }

    // Agregar evento clic a cada enlace para abrir el modal de cabina angosta
    if (enlacesModalAngosta) {
        enlacesModalAngosta.forEach(function (enlace) {
            enlace.addEventListener('click', function (event) {
                event.preventDefault();
                mostrarModalAngosta();
            });
        });
    }

    // Agregar evento clic a cada enlace para abrir el modal de cabina ancha
    if (enlacesModalAncha) {
        enlacesModalAncha.forEach(function (enlace) {
            enlace.addEventListener('click', function (event) {
                event.preventDefault();
                mostrarModalAncha();
            });
        });
    }

    // Agregar evento clic a cada enlace para abrir el modal de cabina no aplica
    if (enlacesModalNoAplica) {
        enlacesModalNoAplica.forEach(function (enlace) {
            enlace.addEventListener('click', function (event) {
                event.preventDefault();
                mostrarModalNoAplica();
            });
        });
    }

    // Agregar evento clic al botón de cerrar para cerrar el modal de cabina angosta
    if (botonCerrarAngosta) {
        botonCerrarAngosta.addEventListener('click', function () {
            cerrarModalAngosta();
        });
    }

    // Agregar evento clic al botón de cerrar para cerrar el modal de cabina ancha
    if (botonCerrarAncha) {
        botonCerrarAncha.addEventListener('click', function () {
            cerrarModalAncha();
        });
    }

    // Agregar evento clic al botón de cerrar para cerrar el modal de cabina no aplica
    if (botonCerrarNoAplica) {
        botonCerrarNoAplica.addEventListener('click', function () {
            cerrarModalNoAplica();
        });
    }

    // Cerrar el modal de cabina angosta si se hace clic fuera de él
    window.addEventListener('click', function (event) {
        if (event.target === modalAngosta) {
            cerrarModalAngosta();
        }
    });

    // Cerrar el modal de cabina ancha si se hace clic fuera de él
    window.addEventListener('click', function (event) {
        if (event.target === modalAncha) {
            cerrarModalAncha();
        }
    });

    // Cerrar el modal de cabina no aplica si se hace clic fuera de él
    window.addEventListener('click', function (event) {
        if (event.target === modalNoAplica) {
            cerrarModalNoAplica();
        }
    });
    // Obtener los enlaces que abren el modal para cabina angosta peso 4.5
    var enlacesModalPeso4_5 = document.querySelectorAll('a.abrirModalAngostaPeso4');
    var enlacesModalPeso5_5 = document.querySelectorAll('a.abrirModalAngosta5');

    // Obtener los modales por peso
    var modalPeso4_5 = document.getElementById('ventanaModalPeso4_5');
    var modalPeso5_5 = document.getElementById('ventanaModalPeso5_5');

    // Obtener los botones de cerrar de los modales
    var botonCerrarPeso4_5 = modalPeso4_5 ? modalPeso4_5.querySelector('.cerrar') : null;
    var botonCerrarPeso5_5 = modalPeso5_5 ? modalPeso5_5.querySelector('.cerrar') : null;

    // Función para mostrar el modal de peso 4.5
    function mostrarModalPeso4_5() {
        if (modalPeso4_5) {
            modalPeso4_5.style.display = 'flex';
        }
    }

    // Función para mostrar el modal de peso 5.5
    function mostrarModalPeso5_5() {
        if (modalPeso5_5) {
            modalPeso5_5.style.display = 'flex';
        }
    }

    // Función para cerrar el modal de peso 4.5
    function cerrarModalPeso4_5() {
        if (modalPeso4_5) {
            modalPeso4_5.style.display = 'none';
        }
    }

    // Función para cerrar el modal de peso 5.5
    function cerrarModalPeso5_5() {
        if (modalPeso5_5) {
            modalPeso5_5.style.display = 'none';
        }
    }

    // Agregar evento clic a cada enlace para abrir el modal de peso 4.5
    if (enlacesModalPeso4_5) {
        enlacesModalPeso4_5.forEach(function (enlace) {
            enlace.addEventListener('click', function (event) {
                event.preventDefault();
                mostrarModalPeso4_5();
            });
        });
    }

    // Agregar evento clic a cada enlace para abrir el modal de peso 5.5
    if (enlacesModalPeso5_5) {
        enlacesModalPeso5_5.forEach(function (enlace) {
            enlace.addEventListener('click', function (event) {
                event.preventDefault();
                mostrarModalPeso5_5();
            });
        });
    }

    // Agregar evento clic al botón de cerrar para cerrar el modal de peso 4.5
    if (botonCerrarPeso4_5) {
        botonCerrarPeso4_5.addEventListener('click', function () {
            cerrarModalPeso4_5();
        });
    }

    // Agregar evento clic al botón de cerrar para cerrar el modal de peso 5.5
    if (botonCerrarPeso5_5) {
        botonCerrarPeso5_5.addEventListener('click', function () {
            cerrarModalPeso5_5();
        });
    }

    // Cerrar el modal de peso 4.5 si se hace clic fuera de él
    window.addEventListener('click', function (event) {
        if (event.target === modalPeso4_5) {
            cerrarModalPeso4_5();
        }
    });

    // Cerrar el modal de peso 5.5 si se hace clic fuera de él
    window.addEventListener('click', function (event) {
        if (event.target === modalPeso5_5) {
            cerrarModalPeso5_5();
        }
    });
    var enlacesModal500 = document.querySelectorAll('a.abrirModalNo500');
    var enlacesModalPeso6_5 = document.querySelectorAll('a.abrirModalAngosta6');
    var enlacesModalPeso7_5 = document.querySelectorAll('a.abrirModalAngosta7');
    var enlacesModalPeso8_5 = document.querySelectorAll('a.abrirModalAngosta8');
    var modalPeso6_5 = document.getElementById('ventanaModalPeso6_5');
    var modalPeso7_5 = document.getElementById('ventanaModalPeso7_5');
    var modalPeso8_5 = document.getElementById('ventanaModalPeso8_5');
    var modalPeso24 = document.getElementById('ventanaModalNoAplica');

    var botonCerrarPeso24 = modalPeso24 ? modalPeso24.querySelector('.cerrar') : null;
    var botonCerrarPeso6_5 = modalPeso6_5 ? modalPeso6_5.querySelector('.cerrar') : null;
    var botonCerrarPeso7_5 = modalPeso7_5 ? modalPeso7_5.querySelector('.cerrar') : null;
    var botonCerrarPeso8_5 = modalPeso8_5 ? modalPeso8_5.querySelector('.cerrar') : null;

    function mostrarModal(modal) {
        if (modal) {
            modal.style.display = 'flex';
        }
    }

    // Funciones para cerrar los modales
    function cerrarModal(modal) {
        if (modal) {
            modal.style.display = 'none';
        }
    }

    // Agregar evento clic a cada enlace para abrir los modales
    function agregarEventosAEnlaces(enlaces, modal) {
        if (enlaces) {
            enlaces.forEach(function (enlace) {
                enlace.addEventListener('click', function (event) {
                    event.preventDefault();
                    mostrarModal(modal);
                });
            });
        }
    }


    agregarEventosAEnlaces(enlacesModal500, modalPeso24);
    agregarEventosAEnlaces(enlacesModalPeso6_5, modalPeso6_5);
    agregarEventosAEnlaces(enlacesModalPeso7_5, modalPeso7_5);
    agregarEventosAEnlaces(enlacesModalPeso8_5, modalPeso8_5);

    // Agregar evento clic a los botones de cerrar para cerrar los modales
    function agregarEventosACerrar(boton, modal) {
        if (boton) {
            boton.addEventListener('click', function () {
                cerrarModal(modal);
            });
        }
    }

    agregarEventosACerrar(botonCerrarPeso24, modalPeso24);
    agregarEventosACerrar(botonCerrarPeso6_5, modalPeso6_5);
    agregarEventosACerrar(botonCerrarPeso7_5, modalPeso7_5);
    agregarEventosACerrar(botonCerrarPeso8_5, modalPeso8_5);

    // Cerrar los modales si se hace clic fuera de ellos
    window.addEventListener('click', function (event) {
        if (event.target === modalPeso5_5) {
            cerrarModal(modalPeso5_5);
        } else if (event.target === modalPeso6_5) {
            cerrarModal(modalPeso6_5);
        } else if (event.target === modalPeso7_5) {
            cerrarModal(modalPeso7_5);
        } else if (event.target === modalPeso24) {
            cerrarModal(modalPeso24);
        } else if (event.target === modalPeso8_5) {
            cerrarModal(modalPeso8_5);
        }
    });
    var enlacesModalNoAplicaPeso10 = document.querySelectorAll('a.ventanaModalNoAplicaPeso10');
    var modalNoAplicaPeso10 = document.getElementById('ventanaModalNoAplicaPeso10');
    var botonCerrarNoAplicaPeso10 = modalNoAplicaPeso10 ? modalNoAplicaPeso10.querySelector('.cerrar') : null;

    function mostrarModalNoAplicaPeso10() {
        if (modalNoAplicaPeso10) {
            modalNoAplicaPeso10.style.display = 'flex';
        }
    }

    function cerrarModalNoAplicaPeso10() {
        if (modalNoAplicaPeso10) {
            modalNoAplicaPeso10.style.display = 'none';
        }
    }

    if (enlacesModalNoAplicaPeso10) {
        enlacesModalNoAplicaPeso10.forEach(function (enlace) {
            enlace.addEventListener('click', function (event) {
                event.preventDefault();
                mostrarModalNoAplicaPeso10();
            });
        });
    }

    if (botonCerrarNoAplicaPeso10) {
        botonCerrarNoAplicaPeso10.addEventListener('click', function () {
            cerrarModalNoAplicaPeso10();
        });
    }

    window.addEventListener('click', function (event) {
        if (event.target === modalNoAplicaPeso10) {
            cerrarModalNoAplicaPeso10();
        }
    });
    var enlacesModalNoAplicaPeso15 = document.querySelectorAll('a.ventanaModalNoAplicaPeso15');
    var modalNoAplicaPeso15 = document.getElementById('ventanaModalNoAplicaPeso15');
    var botonCerrarNoAplicaPeso15 = modalNoAplicaPeso15 ? modalNoAplicaPeso15.querySelector('.cerrar') : null;

    function mostrarModalNoAplicaPeso15() {
        if (modalNoAplicaPeso15) {
            modalNoAplicaPeso15.style.display = 'flex';
        }
    }

    function cerrarModalNoAplicaPeso15() {
        if (modalNoAplicaPeso15) {
            modalNoAplicaPeso15.style.display = 'none';
        }
    }

    if (enlacesModalNoAplicaPeso15) {
        enlacesModalNoAplicaPeso15.forEach(function (enlace) {
            enlace.addEventListener('click', function (event) {
                event.preventDefault();
                mostrarModalNoAplicaPeso15();
            });
        });
    }

    if (botonCerrarNoAplicaPeso15) {
        botonCerrarNoAplicaPeso15.addEventListener('click', function () {
            cerrarModalNoAplicaPeso15();
        });
    }

    window.addEventListener('click', function (event) {
        if (event.target === modalNoAplicaPeso15) {
            cerrarModalNoAplicaPeso15();
        }
    });
});



