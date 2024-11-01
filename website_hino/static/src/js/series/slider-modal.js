function ModalApp() {}

document.addEventListener('DOMContentLoaded', function() {
    let modalApp = new ModalApp();
    window.modalApp = modalApp;
});

ModalApp.prototype.processingButton = function(event){
    const btnModal = event.currentTarget;
    const carruselModalList = event.currentTarget.parentNode;
    const elemento = event.currentTarget.parentNode.querySelector('#elemento');
    const carruselModal = elemento.querySelectorAll('.carruselModal');

    const carruselModalWidth = carruselModal[0].offsetWidth;
    const elementoWidth = elemento.offsetWidth;
    const listModalWidth = carruselModalList.offsetWidth;

    let leftPosition = 0;
    elemento.style.left == ""? leftPosition = elemento.style.left === 0 : leftPosition = parseFloat(elemento.style.left.slice(0,-2) * -1);
    btnModal.dataset.button == "button-prev-modal"? prevAction(leftPosition, carruselModalWidth, elemento) : nextAction(leftPosition, elementoWidth, listModalWidth, carruselModalWidth, elemento);
}

let prevAction = (leftPosition, carruselModalWidth, elemento) => {
    if (leftPosition > 0) {
        elemento.style.left = `${-1 * (leftPosition - carruselModalWidth)}px`;
    }
}

let nextAction = (leftPosition, elementoWidth, listModalWidth, carruselModalWidth, elemento) => {
    if (leftPosition < (elementoWidth - listModalWidth)) {
        elemento.style.left = `${-1 * (leftPosition + carruselModalWidth)}px`;
    }
}
