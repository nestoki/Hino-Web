const content_text = document.querySelectorAll(".content_text"); 
const modelos = document.getElementById("modelos"); 

modelos.addEventListener("click", (e) => { 
    let number = e.target.dataset.number; 
    let value = e.target.classList.contains("btn-serie"); 

    if (value) { 
        Speed(number); 
        return; 
    } 
    e.stopPropagation(); 
}); 

const Speed = (number) => { 
    const buttons = document.querySelectorAll(".btn-serie");
    buttons.forEach(btn => {
       if (btn.dataset.number === number) {
         btn.classList.add("active");
       } else {
         btn.classList.remove("active");
       }
    });

    for (let index of content_text) { 
        index.classList.remove("block"); 
        index.dataset.seccion === number ? index.classList.add("block") : ""; 
    } 
};

// Llama a Speed con el número del primer tab para que esté activo por defecto
Speed("1");

document.addEventListener("click", (e) => {
 const modelos = document.getElementById("modelos");
 if (!modelos.contains(e.target)) {
    // El clic fue fuera del menú, no hagas nada
    return;
 }
});



