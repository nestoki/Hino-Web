// document.addEventListener('DOMContentLoaded', () => {
//     document.addEventListener('keyup', e => {
//         if (e.target.matches('#search')) {
//             const searchTerm = e.target.value.toLowerCase();
//             const articles = document.querySelectorAll('.novedades');

//             articles.forEach(article => {
//                 const articleText = article.querySelector('.titulo').textContent.toLowerCase();
//                 const articleDate = article.querySelector('.fecha').textContent.toLowerCase();
//                 const articleCreator = article.querySelector('.creador-por').textContent.toLowerCase();
//                 const articleParent = article.closest('.novedades');
                
//                 if (articleText.includes(searchTerm) || articleDate.includes(searchTerm) || articleCreator.includes(searchTerm)) {
//                     articleParent.classList.remove('filtro');
//                 } else {
//                     articleParent.classList.add('filtro');
//                 }
//             });
//         }
//     });
// });
document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('keyup', e => {
        if (e.target.matches('#search')) {
            const searchTerm = e.target.value.toLowerCase();
            const articles = document.querySelectorAll('.novedades');

            articles.forEach(article => {
                // Seleccionamos los elementos y verificamos que no sean null
                const tituloElement = article.querySelector('.titulo');
                const fechaElement = article.querySelector('.fecha');
                const creadorPorElement = article.querySelector('.creador-por');
                
                // Solo procedemos si todos los elementos fueron encontrados
                if (tituloElement && fechaElement && creadorPorElement) {
                    const articleText = tituloElement.textContent.toLowerCase();
                    const articleDate = fechaElement.textContent.toLowerCase();
                    const articleCreator = creadorPorElement.textContent.toLowerCase();
                    const articleParent = article.closest('.novedades');
                    
                    if (articleText.includes(searchTerm) || articleDate.includes(searchTerm) || articleCreator.includes(searchTerm)) {
                        articleParent.classList.remove('filtro');
                    } else {
                        articleParent.classList.add('filtro');
                    }
                }
            });
        }
    });
});
