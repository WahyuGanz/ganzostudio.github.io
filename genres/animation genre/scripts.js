document.addEventListener('DOMContentLoaded', function() {
    const animationFilms = [
        {
            title: "Geng: Pengembaraan Bermula",
            poster: "https://i.imgur.com/uwTu2U3.jpeg",
            description: "Anak-anak/Petualangan",
            link: "../../films/gengpengembaraanbermula/gengpengembaraanbermula.html"
        },
        {
            title: "Upin & Ipin: Keris Siamang Tunggal",
            poster: "https://i.imgur.com/j31aix4.jpeg",
            description: "Petualangan/Komedi",
            link: "../../films/upinipinkerissiamangtunggal/upinipinkerissiamangtunggal.html"
        },
        {
            title: "Adit Sopo Jarwo the Movie",
            poster: "https://i.imgur.com/8mbeKMs.jpeg",
            description: "Petualangan. Komedi. Animation. Indonesia",
            link: "../../films/aditsopojarwothemovie/aditsopojarwothemovie.html"
        },
        {
            title: "Battle of Surabaya",
            poster: "https://i.imgur.com/1P7Lwsh.jpeg",
            description: "Perang/Laga",
            link: "../../films/battleofsurabaya/battleofsurabaya.html"
        },
        {
            title: "BoBoiBoy Galaxy SORI",
            poster: "https://i.imgur.com/jPBvR7S.png",
            description: "Petualangan/Komedi",
            link: "../../films/boboiboygalaxysori/boboiboygalaxysori.html"
        },
        {
            title: "BoBoiBoy The Movie",
            poster: "https://i.imgur.com/ZHqAZ4A.jpeg",
            description: "Petualangan/Laga",
            link: "../../films/boboiboythemovie/boboiboythemovie.html"
        },
        {
            title: "BoBoiBoy Movie 2",
            poster: "https://i.imgur.com/1OZ0HN1.png",
            description: "Petualangan/Laga",
            link: "../../films/boboiboymovie2/boboiboymovie2.html"
        },
        {
            title: "SpongeBob SquarePants Presents The Tidal Zone",
            poster: "https://i.imgur.com/kGUh00J.png",
            description: "Petualangan/Komedi",
            link: "../../films/spongebobtidalzone/spongebobtidalzone.html"
        }
        // Tambahkan film lain di sini
    ];

    const filmList = document.getElementById("animation-film-list");

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
