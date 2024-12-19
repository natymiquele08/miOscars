//FUNCION PARA CARGAR DEL JSON LAS PELICULAS PARA EL OFFCANVAS
document.addEventListener('DOMContentLoaded', function () {
    // Cargar el archivo JSON de películas
    fetch('peliculas.json')
        .then(response => response.json())
        .then(data => {
            // Evento para cada botón "Ver más"
            document.querySelectorAll('.btn-canvas').forEach(button => {
                button.addEventListener('click', function () {
                    // Obtener el id de la tarjeta seleccionada
                    const cardId = this.closest('.card').getAttribute('data-id');
                    
                    // Buscar la película en el JSON usando el id
                    const pelicula = data.find(item => item.id === cardId);
                    
                    if (pelicula) {
                        // Actualizar el contenido del offcanvas con los datos de la película
                        document.getElementById('offcanvasRightLabel').textContent = pelicula.titulo;
                        document.getElementById('offCanvasGenre').textContent = pelicula.genre;
                        document.getElementById('offcanvasImage').src = pelicula.imagen;
                        document.getElementById('offcanvasImage').alt = pelicula.titulo;
                        document.getElementById('offcanvasDescription').textContent = pelicula.descripcion;
                        document.getElementById('plataformas').textContent=pelicula.plataformas;
                        
                    
                    }
                });
            });
        })
        .catch(error => console.error('Error al cargar el JSON:', error));
});



//FUNCION PARA QUE APAREZCA UNA FLECHA QUE LLEVE HACIA ARRIBA DEL TODO
document.addEventListener('DOMContentLoaded', function () {
    const scrollToTopButton = document.getElementById('scrollToTop');

    // Muestra/oculta el botón al hacer scroll
    window.addEventListener('scroll', function () {
        if (window.scrollY > 300) {
            scrollToTopButton.style.display = 'block';
        } else {
            scrollToTopButton.style.display = 'none';
        }
    });

    // Función para volver al inicio
    scrollToTopButton.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});





//FUNCION DE BUSCADOR DE PELICULAS.
function searchMovies() {
    
    const barraBusqueda = document.getElementById('searchBar').value.toLowerCase();
    const pelisDestacadas = document.getElementById('pelisDestacadas');
    const todasLasPelis = document.getElementById('pills-tabContent');
    const pelisEncontradas = document.getElementById("pelisEncontradas");

    
    pelisEncontradas.innerHTML = ""; // que no haya nada en el div primero

   
    const pelisCards = document.querySelectorAll('.cardTodasLasPelis');

    

    // Si el campo de búsqueda está vacío, mostrar todas las películas
    if (barraBusqueda === "") {
        pelisDestacadas.style.display = "block"; // Mostrar películas destacadas
        todasLasPelis.style.display = "block"; // Mostrar todas las películas
        pelisEncontradas.innerHTML = ""; // No aparezca el div de las pelis encontradas
        pelisCards.forEach(card => card.style.display = "block"); // Mostrar todas las tarjetas
        return; 
    }

    // Recorrer cada tarjeta de película
    pelisCards.forEach(card => {
        // Obtener el título de la película en la tarjeta actual
        const movieTitle = card.querySelector('.card-title').textContent.toLowerCase();

        // Si encuentra la pelicula con un titulo que coincida 
        if (movieTitle.includes(barraBusqueda)) {
            pelisDestacadas.style.display = "none"; // Ocultar películas destacadas
            todasLasPelis.style.display = "none"; // Ocultar todas las películas
            pelisEncontradas.appendChild(card.cloneNode(true)); // Agarra una tarjeta y la pone en pelis encontradas
            
        } else {
            card.style.display = "none"; // Ocultar la tarjeta si no coincide
            
        }
    });


}





