
document.addEventListener('DOMContentLoaded', function() {
    const prevButton = document.querySelector('.main-slider .prev');
    const nextButton = document.querySelector('.main-slider .next');
    const carrousel = document.querySelector('.main-slider .carrousel');
    const cards = document.querySelectorAll('.main-slider .carrousel .card');
    const cardWidth = cards[0].offsetWidth;
    const totalWidth = cardWidth * cards.length;

    // desplazamiento a la izquierda
    prevButton.addEventListener('click', function() {
        const currentScroll = carrousel.scrollLeft;
        if (currentScroll > 0) {
            carrousel.scrollBy({
                left: -cardWidth,
                behavior: 'smooth'
            });
        }
    });

    // desplazamiento a la derecha
    nextButton.addEventListener('click', function() {
        const currentScroll = carrousel.scrollLeft;
        if (currentScroll < totalWidth - carrousel.clientWidth) {
            carrousel.scrollBy({
                left: cardWidth,
                behavior: 'smooth'
            });
        }
    });
});
