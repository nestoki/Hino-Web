var toggleNavs = document.querySelectorAll('.link');
        toggleNavs.forEach(function(link) {
            link.addEventListener('click', function(event) {
                event.preventDefault();
                var nav = this.parentNode.nextElementSibling; 
                nav.style.display = nav.style.display === 'none' ? 'block' : 'none';
            });
        });