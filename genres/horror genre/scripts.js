document.addEventListener('DOMContentLoaded', function() {
    const animationFilms = [
        {
            title: "Agak Laen",
            poster: "../../images/Poster_Agak_Laen_(2024).jpg",
            description: "Komedi/Horor",
            link: "../../films/agaklaen/agaklaen.html"
        },
        {
            title: "Aku Tahu Kapan Kamu Mati: Desa Bunuh Diri",
            poster: "../../images/Aku_Tahu_Kapan_Kamu_Mati_Poster.jpg",
            description: "Horor/Drama",
            link: "../../films/akutahukapankamumatidesabunuhdiri/akutahukapankamumatidesabunuhdiri.html"
        },
        {
            title: "Bangku Kosong: Ujian Terakhir",
            poster: "../../images/bangkukosongujianterakhir.jpeg",
            description: "Horor/Ketegangan",
            link: "../../films/bakukosongujianterakhir/bangkukosongujianterakhir.html"
        },
        {
            title: "Di Ambang Kematian",
            poster: "../../images/diambangkematian.jpeg",
            description: "Horor/Cerita seru",
            link: "../../films/diambangkematian/diambangkematian.html"
        },
        {
            title: "DreadOut",
            poster: "../../images/dreadout.jpg",
            description: "Horor/Petualangan",
            link: "../../films/dreadout/dreadout.html"
        },
        {
            title: "Five Nights at Freddy's",
            poster: "../../images/fivenightsatfreddys.jpg",
            description: "Horor/Misteri",
            link: "../../films/fivenightsatfreddys/fivenightsatfreddys.html"
        },
        {
            title: "Ghostbuser: Misteri Desa Penari",
            poster: "../../images/ghostbusermisteridesapenari.jpg",
            description: "Horor/Misteri",
            link: "../../films/ghostbusermisteridesapenari/ghostbusermisteridesapenari.html"
        },
        {
            title: "Hidayah",
            poster: "../../images/hidayah.jpg",
            description: "Horor/Indonesia",
            link: "../../films/hidayah/hidayah.html"
        },
        {
            title: "Indigo: What Do You See?",
            poster: "../../images/indigo.jpg",
            description: "Horor/Indonesia",
            link: "../../films/indigo/indigo.html"
        },
        {
            title: "Janin Iblis Neraka",
            poster: "../../images/janiniblisneraka.jpeg",
            description: "Horor/Drama",
            link: "../../films/janiniblisneraka/janiniblisneraka.html"
        },
        {
            title: "Kajiman: Iblis Terkejam Penagih Janji",
            poster: "../../images/kajimaniblisterkejampenagihjanji.jpg",
            description: "Horor/Indonesia",
            link: "../../films/kajimaniblisterkejampenagihjanji/kajimaniblisterkejampenagihjanji.html"
        },
        {
            title: "KKN di Desa Penari: Luwih Dowo, Luwih Medeni",
            poster: "../../images/kknluwehdowo.jpg",
            description: "Horor/Indonesia",
            link: "../../films/kknluwihdowo/kknluwihdowo.html"
        },
        {
            title: "Kultus Iblis",
            poster: "../../images/kultusiblis.jpg",
            description: "Horor/Misteri",
            link: "../../films/kultusiblis/kultusiblis.html"
        },
        {
            title: "Kutukan Sembilan Setan",
            poster: "../../images/kutukansembilansetan.jpeg",
            description: "Horor/Misteri",
            link: "../../films/kutukansembilansetan/kutukansembilansetan.html"
        },
        {
            title: "Lampor Keranda Terbang",
            poster: "../../images/lampor.jpg",
            description: "Horor/Misteri",
            link: "../../films/lampor/lampor.html"
        },
        {
            title: "Makmum",
            poster: "../../images/makmum.jpg",
            description: "Horor/Indonesia",
            link: "../../films/makmum/makmum.html"
        },
        {
            title: "Makmum 2",
            poster: "../../images/makmum2.jpg",
            description: "Horor/Indonesia",
            link: "../../films/makmum2/makmum2.html"
        },
        {
            title: "Malam Para Jahanam",
            poster: "../../images/malamparajahanam.jpeg",
            description: "Horor/Cerita seru",
            link: "../../films/malamparajahanam/malamparajahanam.html"
        },
        {
            title: "Mantra Surugana",
            poster: "../../images/mantrasurugana.jpeg",
            description: "Horor/Misteri",
            link: "../../films/mantrasurugana/mantrasurugana.html"
        },
        {
            title: "Pamali",
            poster: "../../images/pamali.jpeg",
            description: "Horor/Misteri",
            link: "../../films/pamali/pamali.html"
        },
        {
            title: "Pamali: Dusun Pocong",
            poster: "../../images/pamalidusunpocong.jpg",
            description: "Horor/Misteri",
            link: "../../films/pamalidusunpocong/pamalidusunpocong.html"
        },
        {
            title: "Panggonan Wingit",
            poster: "../../images/panggonanwingit.jpg",
            description: "Horor/Indonesia",
            link: "../../films/panggonanwingit/panggonanwingit.html"
        },
        {
            title: "Primbon",
            poster: "../../images/primbon.jpg",
            description: "Horor/Drama",
            link: "../../films/primbon/primbon.html"
        },
        {
            title: "Ritual Tumbal Terakhir",
            poster: "../../images/ritualtumbalterakhir.jpeg",
            description: "Horor/Indonesia",
            link: "../../films/ritualtumbalterakhir/ritualtumbalterakhir.html"
        },
        {
            title: "Saranjana: Kota Ghaib",
            poster: "../../images/saranjanakotaghoib.jpg",
            description: "Horor/Petualangan",
            link: "../../films/saranjanakotaghoib/saranjanakotaghoib.html"
        },
        {
            title: "Sekte",
            poster: "../../images/sekte.jpeg",
            description: "Horor/Drama",
            link: "../../films/sekte/sekte.html"
        },
        {
            title: "Sewu Dino",
            poster: "../../images/sewudino.jpg",
            description: "Horor/Misteri",
            link: "../../films/sewudino/sewudino.html"
        },
        {
            title: "Sijjin",
            poster: "../../images/sijjin.jpg",
            description: "Horor/Religi",
            link: "../../films/sijjin/sijjin.html"
        },
        {
            title: "Siksa Neraka",
            poster: "../../images/siksaneraka.jpg",
            description: "Horor/Film jagal",
            link: "../../films/siksaneraka/siksaneraka.html"
        },
        {
            title: "Sinden Gaib",
            poster: "../../images/sindengaib.jpg",
            description: "Horor/Misteri",
            link: "../../films/sindengaib/sindengaib.html"
        },
        {
            title: "Sosok Ketiga",
            poster: "../../images/sosokketiga.jpg",
            description: "Horor/Misteri",
            link: "../../films/sosokketiga/sosokketiga.html"
        },
        {
            title: "Susuk: Kutukan Kecantikan",
            poster: "../../images/susukkutukankecantikan.jpg",
            description: "Horor/Indonesia",
            link: "../../films/susukkutukankecantikan/susukkutukankecantikan.html"
        },
        {
            title: "Suzzanna: Malam Jumat Kliwon",
            poster: "../../images/suzzannamalamjumatkliwon.jpg",
            description: "Horor/Misteri",
            link: "../../films/suzzannamalamjumatkliwon/suzzannamalamjumatkliwon.html"
        },
        {
            title: "Tasbih Kosong",
            poster: "../../images/tasbihkosong.jpg",
            description: "Horor/Indonesia",
            link: "../../films/tasbihkosong/tasbihkosong.html"
        },
        {
            title: "Trinil: Kembalikan Tubuhku",
            poster: "../../images/trinil.jpg",
            description: "Horor/Drama",
            link: "../../films/trinilkembalikantubuhku/trinilkembalikantubuhku.html"
        },
        {
            title: "Wakaf",
            poster: "../../images/wakaf.jpeg",
            description: "Horor/Indonesia",
            link: "../../films/wakaf/wakaf.html"
        },
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
