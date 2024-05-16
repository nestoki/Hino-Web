document.addEventListener("DOMContentLoaded", function() {
  let botones = document.querySelectorAll(".botonMostrarOcultar");

  botones.forEach(function(boton) {
    boton.addEventListener("click", function() {
      // Asegúrate de que el botón está dentro de un <article>
      let article = this.closest('article');
      if (!article) return; // Si no está dentro de un <article>, no hacer nada

      // Selecciona todos los elementos <p> dentro del mismo <article> que el botón
      let informaciones = article.querySelectorAll('.informacion');

      informaciones.forEach(function(informacion) {
        if (informacion.style.display === "none") {
          informacion.style.display = "block";
          // Cambiar color del título a rojo cuando se despliega la información
          article.querySelector('h5').classList.add('titulo-rojo');
        } else {
          informacion.style.display = "none";
          // Eliminar clase de color rojo cuando se oculta la información
          article.querySelector('h5').classList.remove('titulo-rojo');
        }
      });

      // Cambia el icono del botón
      if (informaciones[0] && informaciones[0].style.display === "none") {
        this.innerHTML = '<i class="fa fa-chevron-down" aria-hidden="true"></i>';
      } else {
        this.innerHTML = '<i class="fa fa-chevron-right" aria-hidden="true"></i>';
      }
    });
  });
});





// document.addEventListener("DOMContentLoaded", function() {
//   let botones = document.querySelectorAll(".botonMostrarOcultar");
 
//   botones.forEach(function(boton) {
//      boton.addEventListener("click", function() {
//        // Asegúrate de que el botón está dentro de un <article>
//        let article = this.closest('article');
//        if (!article) return; // Si no está dentro de un <article>, no hacer nada
 
//        // Selecciona todos los elementos <p> dentro del mismo <article> que el botón
//        let informaciones = article.querySelectorAll('.informacion');
 
//        informaciones.forEach(function(informacion) {
//          if (informacion.style.display === "none") {
//            informacion.style.display = "block";
//          } else {
//            informacion.style.display = "none";
//          }
//        });
 
//        // Cambia el icono del botón
//        if (informaciones[0] && informaciones[0].style.display === "none") {
//          this.innerHTML = '<i class="fa fa-chevron-down" aria-hidden="true"></i>';
//        } else {
//          this.innerHTML = '<i class="fa fa-chevron-right" aria-hidden="true"></i>';
//        }
//      });
//   });
//  });
 


// document.addEventListener("DOMContentLoaded", function() {
//   let botones = document.querySelectorAll(".botonMostrarOcultar");

//   botones.forEach(function(boton) {
//     boton.addEventListener("click", function() {
//       // Selecciona todos los elementos <p> dentro del mismo <article> que el botón
//       let informaciones = this.closest('article').querySelectorAll('.informacion');

//       informaciones.forEach(function(informacion) {
//         if (informacion.style.display === "none") {
//           informacion.style.display = "block";
//         } else {
//           informacion.style.display = "none";
//         }
//       });

//       // Cambia el icono del botón
//       if (informaciones[0].style.display === "none") {
//         this.innerHTML = '<i class="fa fa-chevron-down" aria-hidden="true"></i>';
//       } else {
//         this.innerHTML = '<i class="fa fa-chevron-right" aria-hidden="true"></i>';
//       }
//     });
//   });
// });



// document.addEventListener("DOMContentLoaded", function() {
//     var botones = document.querySelectorAll(".botonMostrarOcultar");
  
//     botones.forEach(function(boton) {
//       boton.addEventListener("click", function() {
//         var informacion = this.parentElement.nextElementSibling;
  
//         if (informacion.style.display === "none") {
//           informacion.style.display = "block";
//           this.innerHTML = '<i class="fa fa-chevron-down" aria-hidden="true"></i>';
//         } else {
//           informacion.style.display = "none";
//           this.innerHTML = '<i class="fa fa-chevron-right" aria-hidden="true"></i>';
//         }
//       });
//     });
//   });