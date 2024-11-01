let index = 0;

function moverCarruselPromociones(direccion) {
    const promociones = document.getElementById("promociones");
    const totalPromociones = promociones.children.length;

     const nuevoIndex = index + direccion;

     if (nuevoIndex >= 0 && nuevoIndex < totalPromociones) {
         index = nuevoIndex;
         promociones.style.transform = `translateX(-${index * 100}%)`;
     }
}
