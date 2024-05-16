
document.addEventListener("DOMContentLoaded", function() {
    function checkWidth() {
        if (window.innerWidth <= 1000) {
            const h5Elements = document.querySelectorAll(".mb-3");
            
            h5Elements.forEach(function(h5Element) {
                h5Element.addEventListener("click", function() {
                    const ulElement = h5Element.nextElementSibling;

                    ulElement.style.display = ulElement.style.display === 'none' ? 'block' : 'none';
                });
            });
        }
    }

    checkWidth();
    window.addEventListener("resize", checkWidth);
});