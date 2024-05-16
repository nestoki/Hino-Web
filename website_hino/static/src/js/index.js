const header = document.querySelector('.header_main');

// Función para controlar el comportamiento al hacer scroll
window.addEventListener('scroll', () => {
    // Obtén la posición actual del scroll
    const scrollPosition = window.scrollY;

    // Agrega la clase 'transparent' al header cuando el scroll sea mayor que 100px
    if (scrollPosition > 100) {
        header.classList.add('transparent');
    } else {
        // Remueve la clase 'transparent' cuando el scroll esté en la parte superior
        header.classList.remove('transparent');
    }
});