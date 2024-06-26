document.addEventListener('DOMContentLoaded', function() {
    const films = [
        {
            title: "Geng: Pengembaraan Bermula (2009)",
            poster: "https://i.imgur.com/BXcUbem.jpeg",
            description: "Anak-anak. Petualangan. Animation. Malaysia",
            link: "../films/gengpengembaraanbermula/gengpengembaraanbermula.html"
        },
        {
            title: "Adit Sopo Jarwo the Movie",
            poster: "../images/aditsopojarwothemovie.jpg",
            description: "Petualangan. Komedi. Animation. Indonesia",
            link: "../films/aditsopojarwothemovie/aditsopojarwothemovie.html"
        },
        {
            title: "KKN di Desa Penari: Luwih Dowo, Luwih Medeni",
            poster: "../images/kknluwehdowo.jpg",
            description: "Horor. Misteri. Indonesia",
            link: "../films/kknluwihdowo/kknluwihdowo.html"
        },
        {
            title: "Upin & Ipin: Keris Siamang Tunggal",
            poster: "../images/upinipinkerissiamangtunggal.jpeg",
            description: "Petualangan. Animation. Malaysia",
            link: "../films/upinipinkerissiamangtunggal/upinipinkerissiamangtunggal.html"
        },
        {
            title: "BoBoiBoy: The Movie",
            poster: "../images/boboiboythemovie.jpg",
            description: "Laga. Komedi. Animation. Malaysia",
            link: "../films/boboiboythemovie/boboiboythemovie.html"
        },
        {
            title: "Agak Laen",
            poster: "../images/Poster_Agak_Laen_(2024).jpg",
            description: "Komedi/Horor",
            link: "../films/agaklaen/agaklaen.html"
        },
        // Tambahkan film lain di sini
    ];

    const filmList = document.getElementById("film-list");

    films.forEach(film => {
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

    const startWatchingButton = document.getElementById("start-watching");
    if (startWatchingButton) {
        startWatchingButton.addEventListener("click", () => {
            const featuredMoviesSection = document.getElementById("featured-movies");
            featuredMoviesSection.scrollIntoView({ behavior: "smooth" });
        });
    }
});
