document.addEventListener('DOMContentLoaded', function() {
    const episodes = [
        {
            title: "Tilik the Series Episode 1",
            poster: "https://i.imgur.com/YSsIxFo.jpeg",
            description: "Deskripsi singkat episode 1.",
            video: "https://short.ink/Lw7azK4QO"
        },
        {
            title: "Tilik the Series Episode 2",
            poster: "https://i.imgur.com/YSsIxFo.jpeg",
            description: "Deskripsi singkat episode 2.",
            video: "https://short.ink/1bHMUF2Wy"
        },
        {
            title: "Tilik the Series Episode 3",
            poster: "https://i.imgur.com/YSsIxFo.jpeg",
            description: "Deskripsi singkat episode 3.",
            video: "https://short.ink/h-Yif0v0M"
        },
        {
            title: "Tilik the Series Episode 4",
            poster: "https://i.imgur.com/YSsIxFo.jpeg",
            description: "Deskripsi singkat episode 4.",
            video: "https://short.ink/yEX7CtZXH"
        },
        {
            title: "Tilik the Series Episode 5",
            poster: "https://i.imgur.com/YSsIxFo.jpeg",
            description: "Deskripsi singkat episode 5.",
            video: "https://short.ink/wmmTrAwe2"
        },
        {
            title: "Tilik the Series Episode 6",
            poster: "https://i.imgur.com/YSsIxFo.jpeg",
            description: "Deskripsi singkat episode 6.",
            video: "https://short.ink/HA5_PZO66"
        },
        {
            title: "Tilik the Series Episode 7",
            poster: "https://i.imgur.com/YSsIxFo.jpeg",
            description: "Deskripsi singkat episode 7.",
            video: "https://short.ink/cgHSu86Do"
        },
        {
            title: "Tilik the Series Episode 8 END",
            poster: "https://i.imgur.com/YSsIxFo.jpeg",
            description: "Deskripsi singkat episode 8.",
            video: "https://short.ink/-_zEbao4d"
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
