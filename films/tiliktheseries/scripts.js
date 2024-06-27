document.addEventListener('DOMContentLoaded', function() {
    const episodes = [
        {
            title: "Tilik The Series Episode 1",
            poster: "../../images/poster1.jpg",
            description: "Deskripsi singkat episode 1.",
            video: "https://short.ink/CYG_V8JW-"
        },
        {
            title: "Episode 2",
            poster: "../../images/poster2.jpg",
            description: "Deskripsi singkat episode 2.",
            video: "https://short.ink/FR3pLPsA5"
        },
        {
            title: "Episode 3",
            poster: "../../images/poster3.jpg",
            description: "Deskripsi singkat episode 3.",
            video: "https://www.youtube.com/embed/episode3"
        },
        {
            title: "Episode 4",
            poster: "../../images/poster4.jpg",
            description: "Deskripsi singkat episode 4.",
            video: "https://www.youtube.com/embed/episode4"
        }
        // Tambahkan episode lain di sini
    ];

    const episodeList = document.getElementById("episode-list");
    const videoContainer = document.getElementById("video-container");
    const currentEpisodeTitle = document.getElementById("current-episode-title");

    episodes.forEach(episode => {
        const episodeItem = document.createElement("div");
        episodeItem.classList.add("episode-item");

        const poster = document.createElement("img");
        poster.src = episode.poster;
        poster.alt = episode.title;

        const title = document.createElement("h3");
        title.textContent = episode.title;

        const description = document.createElement("p");
        description.textContent = episode.description;

        episodeItem.appendChild(poster);
        episodeItem.appendChild(title);
        episodeItem.appendChild(description);

        episodeItem.addEventListener('click', () => {
            videoContainer.innerHTML = `<iframe width="640" height="360" src="${episode.video}" frameborder="0" scrolling="no" allowfullscreen></iframe>`;
            currentEpisodeTitle.textContent = episode.title;
        });

        episodeList.appendChild(episodeItem);
    });
});
