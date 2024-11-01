const links = document.querySelectorAll('.producto-link');
const descripcionCorta = document.getElementById('descripcion-corta');
const verMas = document.getElementById('ver-mas');

links.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); 

        const info = this.parentElement.querySelector('.producto-info').textContent;
        descripcionCorta.textContent = info;

        verMas.style.display = 'block';
    });
});