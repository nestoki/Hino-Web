function handleMapChange(event, mapUrl) {
    event.preventDefault();
    document.getElementById('map-iframe-contacto').src = mapUrl;
    updateActiveButton(event.target);
}

function updateActiveButton(activeButton) {
    const buttons = document.querySelectorAll('.contacto-sucursales a');
    buttons.forEach(button => {
        button.classList.remove('active');
    });
    activeButton.classList.add('active');
}

const mapUrls = {
    panama: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.6057990514328!2d-79.53612662405634!3d9.008371591052112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8faca8436b024cf9%3A0x6d512679801bf4bc!2sTambor%20%7C%20El%20Dorado!5e0!3m2!1ses!2sve!4v1730147625806!5m2!1ses!2sve",
    interior: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7881.875682302958!2d-79.51608022405654!3d8.977867391081425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8faca91e69a37c1f%3A0x5a6978ac9b369f99!2sTambor%20%7C%20Paitilla!5e0!3m2!1ses-419!2sus!4v1730209250200!5m2!1ses-419!2sus"
};

document.querySelector('.panama-btn').addEventListener('click', function(event) {
    handleMapChange(event, mapUrls.panama);
});

document.querySelector('.interior-btn').addEventListener('click', function(event) {
    handleMapChange(event, mapUrls.interior);
});

document.addEventListener('DOMContentLoaded', () => {
    const initialButton = document.querySelector('.panama-btn');
    initialButton.classList.add('active'); 
    document.getElementById('map-iframe-contacto').src = mapUrls.panama;
});