document.addEventListener('DOMContentLoaded', (event) => {
    const swiper = new Swiper('.swiper-container-soporte-total', {
        // Opciones de Swiper
        slidesPerView: 'auto', // Muestra los elementos que entren en el contendor
        spaceBetween: 10, // Ajusta el espacio entre los slides
        // loop: true,
        // pagination: {
        //     el: '.swiper-pagination',
        //     clickable: true,
        // },
        scrollbar: {
          el: '.swiper-scrollbar',
          draggable: true, // Habilita que la barra de desplazamiento sea arrastrable
        },
        // navigation: {
        //     nextEl: '.swiper-button-next',
        //     prevEl: '.swiper-button-prev',
        // },
    });
  });
  