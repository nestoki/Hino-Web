document.addEventListener('DOMContentLoaded', function() {

    const panamaBtn = document.querySelector('.panama-btn');
    const interiorBtn = document.querySelector('.interior-btn');

    const panamaDiv = document.querySelector('.panama');
    const interiorDiv = document.querySelector('.interior');

    function showDiv(divToShow, activeBtn) {
        panamaDiv.style.display = 'none';
        interiorDiv.style.display = 'none';
        
        divToShow.style.display = 'flex';

        panamaBtn.classList.remove('active');
        interiorBtn.classList.remove('active');
        activeBtn.classList.add('active');
    }

    panamaBtn.addEventListener('click', function(e) {
        e.preventDefault();
        showDiv(panamaDiv, panamaBtn);
    });

    interiorBtn.addEventListener('click', function(e) {
        e.preventDefault();
        showDiv(interiorDiv, interiorBtn);
    });

    showDiv(panamaDiv, panamaBtn);
});