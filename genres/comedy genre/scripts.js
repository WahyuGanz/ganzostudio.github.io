document.addEventListener('DOMContentLoaded', function() {
    const animationFilms = [
        {
            title: "Bu Tejo Sowan Jakarta",
            poster: "https://i.imgur.com/RiLk5hB.jpeg",
            description: "Komedi/Indonesia",
            link: "../../films/butejosowanjakarta/butejosowanjakarta.html"
        },
        {
            title: "Tilik the Series",
            poster: "https://i.imgur.com/YSsIxFo.jpeg",
            description: "Komedi/Indonesia",
            link: "../../films/tiliktheseries/film-series.html"
        },
        // Tambahkan film lain di sini
    ];

    const filmList = document.getElementById("comedy-film-list");

    animationFilms.forEach(film => {
        const filmItem = document.createElement("div");
        filmItem.classList.add("film-item");

        const poster = document.createElement("img");
        poster.src = film.poster;
        poster.alt = film.title;

        const title = document.createElement("h3");
        title.textContent = film.title;

        const description = document.createElement("p");
        description.textContent = film.description;

        const link = document.createElement("a");
        link.href = film.link;
        link.textContent = "Tonton Sekarang";
        link.classList.add("watch-button");

        filmItem.appendChild(poster);
        filmItem.appendChild(title);
        filmItem.appendChild(description);
        filmItem.appendChild(link);

        filmList.appendChild(filmItem);
    });
});
