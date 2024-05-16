//Slider de MODELOS DISPONIBLES
// const content_text = document.querySelectorAll(".content_text");
// const modelos = document.getElementById("modelos");

// modelos.addEventListener("click", (e) => {
//     let number = e.target.dataset.number;
//     let value = e.target.classList.contains("btn-serie");

//     if (value) {
//         Speed(number);
//         return;
//     }
//     e.stopPropagation();
// });

// const Speed = (number) => {
//     const buttons = document.querySelectorAll(".btn-serie");
//     buttons.forEach(btn => {
//         if (btn.dataset.number === number) {
//             btn.classList.add("active");
//         } else {
//             btn.classList.remove("active");
//         }
//     });

//     for (let index of content_text) {
//         index.classList.remove("block");
//         index.dataset.seccion === number ? index.classList.add("block") : "";
//     }
// };

// // Llama a Speed con el número del primer tab para que esté activo por defecto
// Speed("1");

// document.addEventListener("click", (e) => {
//     const modelos = document.getElementById("modelos");
//     if (!modelos.contains(e.target)) {
//         // El clic fue fuera del menú, no hagas nada
//         return;
//     }
// });

// document.addEventListener("DOMContentLoaded", function () {
//     const sliderContainer = document.querySelector(".sliderca");
//     const sliderItems = document.querySelectorAll(".sliderca-item");

//     let currentIndex = 0;
//     const totalItems = sliderItems.length;

//     function showNextSlide() {
//         currentIndex = (currentIndex + 1) % totalItems;
//         updateSliderPosition();
//     }

//     function showPrevSlide() {
//         currentIndex = (currentIndex - 1 + totalItems) % totalItems;
//         updateSliderPosition();
//     }

//     function updateSliderPosition() {
//         const newPosition = -currentIndex * 100 + "%";
//         sliderContainer.style.transform = `translateX(${newPosition})`;
//     }

//     document.querySelector(".next-btn").addEventListener("click", showNextSlide);
//     document.querySelector(".prev-btn").addEventListener("click", showPrevSlide);

//     setInterval(showNextSlide, 10000);
// });
// document.addEventListener("DOMContentLoaded", function () {
//     const sliderContainer = document.querySelector(".sliderca");
//     const sliderItems = document.querySelectorAll(".sliderca-item");

//     let currentIndex = 0;
//     const totalItems = sliderItems.length;

//     function showNextSlide() {
//         currentIndex = (currentIndex + 1) % totalItems;
//         updateSliderPosition();
//     }

//     function showPrevSlide() {
//         currentIndex = (currentIndex - 1 + totalItems) % totalItems;
//         updateSliderPosition();
//     }

//     function updateSliderPosition() {
//         const newPosition = -currentIndex * 100 + "%";
//         sliderContainer.style.transform = `translateX(${newPosition})`;
//     }

//     document.querySelector(".next-btn").addEventListener("click", showNextSlide);
//     document.querySelector(".prev-btn").addEventListener("click", showPrevSlide);

//     setInterval(showNextSlide, 3000);
// });
// document.addEventListener("DOMContentLoaded", function () {
//     // Obtener el contenedor y los elementos del slider
//     const sliderContainer = document.querySelector(".sliderca");
//     const sliderItems = document.querySelectorAll(".sliderca-item");

//     let currentIndex = 0;
//     const totalItems = sliderItems.length;

//     function showNextSlide() {
//         currentIndex = (currentIndex + 1) % totalItems;
//         updateSliderPosition();
//     }

//     function updateSliderPosition() {
//         const newPosition = -currentIndex * 100 + "%"; // Ajusta según el ancho de cada item
//         sliderContainer.style.transform = `translateX(${newPosition})`;
//     }

//     // Intervalo para cambiar de slide automáticamente
//     setInterval(showNextSlide, 3000); // Cambia cada 3 segundos (ajusta según tus preferencias)
// });


