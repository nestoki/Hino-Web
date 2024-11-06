const preguntas = document.querySelectorAll('.pregunta');

preguntas.forEach(pregunta => {
    pregunta.addEventListener('click', () => {
        const respuesta = pregunta.nextElementSibling;
        
        if (respuesta.style.display === "none" || respuesta.style.display === "") {
            respuesta.style.display = "flex";
        } else {
            respuesta.style.display = "none";
        }
    });
});
