document.querySelectorAll('.capa-sucursal').forEach(function(capa) {
    capa.addEventListener('click', function() {
        const iframe = this.nextElementSibling; 
        if (iframe) {
            window.open(iframe.src, '_blank');
        }
    });
});