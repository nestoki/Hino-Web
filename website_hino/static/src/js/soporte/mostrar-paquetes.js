document.addEventListener("DOMContentLoaded", function() {
    const verMasLinks = document.querySelectorAll('.ver-mas-paquete');

    verMasLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
        event.preventDefault();

        const paqueteInfo = this.nextElementSibling; 
        paqueteInfo.style.display = (paqueteInfo.style.display === 'none') ? 'flex' : 'none';

        // Cambiar el texto del enlace
        this.textContent = (paqueteInfo.style.display === 'none') ? 'Ver más' : 'Ver menos'; 
        });

        
    });
});