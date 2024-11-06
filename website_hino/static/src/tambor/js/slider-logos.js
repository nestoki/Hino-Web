let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function updateSlider() {
    const offset = -currentIndex * 25; 
    document.querySelector('.slider').style.transform = `translateX(${offset}%)`;
}

function moveRight() {
    if (currentIndex < totalSlides - 4) { 
        currentIndex++;
        updateSlider();
    }
}

function moveLeft() {
    if (currentIndex > 0) {
        currentIndex--;
        updateSlider();
    }
}

