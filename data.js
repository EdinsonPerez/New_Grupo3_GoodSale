// Espera a que el documento esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {
    // Obtiene una referencia al contenedor donde se agregarán las tarjetas
    var cardContainer = document.querySelector(".row");

    // Carga el JSON de un archivo externo
    fetch("https://restcountries.com/v3/all")
        .then((response) => response.json())
        .then((data) => {
            // Filtra y limita los datos a 8 elementos
            const countries = data.slice(0, 8);

            // Itera sobre los países y crea tarjetas para cada uno
            countries.forEach((country) => {
                const flag = country.flags[0]; // La URL de la bandera
                const name = country.name.common;
                const capital = country.capital[0];
                const currency = country.currencies[Object.keys(country.currencies)[0]].name;

                // Crea una tarjeta y agrega los datos
                const card = document.createElement('div');
                card.classList.add('card');

                const cardHeader = document.createElement('div');
                cardHeader.classList.add('card-header');
                const flagImage = document.createElement('img');
                flagImage.src = flag;
                cardHeader.appendChild(flagImage);

                const cardBody = document.createElement('div');
                cardBody.classList.add('card-body');

                const cardTitle = document.createElement('h1');
                cardTitle.classList.add('card-title');
                cardTitle.textContent = name;

                const cardInfo = document.createElement('p');
                cardInfo.textContent = `Capital: ${capital}, Moneda: ${currency}`;

                const cardButton = document.createElement('a');
                cardButton.href = './servicios.html'; // Agrega el enlace adecuado
                cardButton.classList.add('btn');
                cardButton.textContent = 'VER MÁS';

                cardBody.appendChild(cardTitle);
                cardBody.appendChild(cardInfo);
                cardBody.appendChild(cardButton);

                card.appendChild(cardHeader);
                card.appendChild(cardBody);

                // Agrega la tarjeta al contenedor de tarjetas
                cardContainer.appendChild(card);
            });
            
        })
        .catch((error) => {
            console.error('Error al cargar los datos:', error);
        });
});
