document.querySelectorAll('.caracteristica-titulo p').forEach(function(p) {
    p.addEventListener('click', function() {
        const li = this.closest('li'); 
        const infoDiv = li.querySelector('.caracteristica-info');

        
        if (infoDiv.style.display === 'none' || infoDiv.style.display === '') {
            infoDiv.style.display = 'flex'; 
            this.style.opacity = '1'; 
        } else {
            infoDiv.style.display = 'none';
            this.style.opacity = ''; 
        }
    });
});




