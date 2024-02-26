fetch("https://api.tvmaze.com/shows")
    .then(res => res.json())
    .then(data => {
        const container = document.querySelector('.container');

        data.forEach(item => {
            const card = document.createElement('div');
            card.classList.add('card');

            const image = document.createElement('img');
            image.src = `${item.image.medium}`;

            const name = document.createElement('h3');
            name.textContent = `${item.name}`;

            const language = document.createElement('p');
            language.textContent = `Language: ${item.language}`;

            const rating = document.createElement('p');
            rating.textContent =`Rating: ${item.rating.average}`;

            const genres = document.createElement('p');
            genres.textContent = `Genres: ${item.genres}`;

            card.appendChild(image)
            card.appendChild(name);
            card.appendChild(language);
            card.appendChild(rating);
            card.appendChild(genres);
            container.appendChild(card)

        })

    })