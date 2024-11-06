document.addEventListener('DOMContentLoaded', function() {
    const puntosInspeccion = document.querySelector('.puntos-inspeccion-p');
    const masBtn = document.querySelector('.mas-btn');
    const caracteristicaInfo = document.querySelector('.caracteristica-info');

    const toggleInfo = () => {
        if (caracteristicaInfo.style.display === 'none' || caracteristicaInfo.style.display === '') {
            caracteristicaInfo.style.display = 'flex';
            puntosInspeccion.classList.add('opacity'); 
        } else {
            caracteristicaInfo.style.display = 'none';
            puntosInspeccion.classList.remove('opacity');
        }
    };

    puntosInspeccion.addEventListener('click', toggleInfo);
    masBtn.addEventListener('click', toggleInfo);
});





