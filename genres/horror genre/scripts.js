document.addEventListener('DOMContentLoaded', function() {
    const animationFilms = [
        {
            title: "Agak Laen",
            poster: "https://i.imgur.com/1nXigDd.jpeg",
            description: "Komedi/Horor",
            link: "../../films/agaklaen/agaklaen.html"
        },
        {
            title: "Aku Tahu Kapan Kamu Mati: Desa Bunuh Diri",
            poster: "https://i.imgur.com/vdlLLA7.jpeg",
            description: "Horor/Drama",
            link: "../../films/akutahukapankamumatidesabunuhdiri/akutahukapankamumatidesabunuhdiri.html"
        },
        {
            title: "Bangku Kosong: Ujian Terakhir",
            poster: "https://i.imgur.com/Qsh9BOm.jpeg",
            description: "Horor/Ketegangan",
            link: "../../films/bakukosongujianterakhir/bangkukosongujianterakhir.html"
        },
        {
            title: "Di Ambang Kematian",
            poster: "https://i.imgur.com/vqpfYAe.jpeg",
            description: "Horor/Cerita seru",
            link: "../../films/diambangkematian/diambangkematian.html"
        },
        {
            title: "DreadOut",
            poster: "https://i.imgur.com/He1WQQh.jpeg",
            description: "Horor/Petualangan",
            link: "../../films/dreadout/dreadout.html"
        },
        {
            title: "Five Nights at Freddy's",
            poster: "https://i.imgur.com/s3Nxj9v.jpeg",
            description: "Horor/Misteri",
            link: "../../films/fivenightsatfreddys/fivenightsatfreddys.html"
        },
        {
            title: "Ghostbuser: Misteri Desa Penari",
            poster: "https://i.imgur.com/jUmCtIW.jpeg",
            description: "Horor/Misteri",
            link: "../../films/ghostbusermisteridesapenari/ghostbusermisteridesapenari.html"
        },
        {
            title: "Hidayah",
            poster: "https://i.imgur.com/M1Vr4Xm.jpeg",
            description: "Horor/Indonesia",
            link: "../../films/hidayah/hidayah.html"
        },
        {
            title: "Indigo: What Do You See?",
            poster: "https://i.imgur.com/yZqE5Fe.jpeg",
            description: "Horor/Indonesia",
            link: "../../films/indigo/indigo.html"
        },
        {
            title: "Janin Iblis Neraka",
            poster: "https://i.imgur.com/vav2vSG.jpeg",
            description: "Horor/Drama",
            link: "../../films/janiniblisneraka/janiniblisneraka.html"
        },
        {
            title: "Kajiman: Iblis Terkejam Penagih Janji",
            poster: "https://i.imgur.com/hHSFfC2.png",
            description: "Horor/Indonesia",
            link: "../../films/kajimaniblisterkejampenagihjanji/kajimaniblisterkejampenagihjanji.html"
        },
        {
            title: "KKN di Desa Penari: Luwih Dowo, Luwih Medeni",
            poster: "https://i.imgur.com/lB2680z.jpeg",
            description: "Horor/Indonesia",
            link: "../../films/kknluwihdowo/kknluwihdowo.html"
        },
        {
            title: "Kultus Iblis",
            poster: "https://i.imgur.com/9kafItN.jpeg",
            description: "Horor/Misteri",
            link: "../../films/kultusiblis/kultusiblis.html"
        },
        {
            title: "Kutukan Sembilan Setan",
            poster: "https://i.imgur.com/w9m3M3u.jpeg",
            description: "Horor/Misteri",
            link: "../../films/kutukansembilansetan/kutukansembilansetan.html"
        },
        {
            title: "Lampor Keranda Terbang",
            poster: "https://i.imgur.com/TDjJQP1.jpeg",
            description: "Horor/Misteri",
            link: "../../films/lampor/lampor.html"
        },
        {
            title: "Makmum",
            poster: "https://i.imgur.com/XctqLft.jpeg",
            description: "Horor/Indonesia",
            link: "../../films/makmum/makmum.html"
        },
        {
            title: "Makmum 2",
            poster: "https://i.imgur.com/0M5jnmU.jpeg",
            description: "Horor/Indonesia",
            link: "../../films/makmum2/makmum2.html"
        },
        {
            title: "Malam Para Jahanam",
            poster: "https://i.imgur.com/M5rQkCF.jpeg",
            description: "Horor/Cerita seru",
            link: "../../films/malamparajahanam/malamparajahanam.html"
        },
        {
            title: "Mantra Surugana",
            poster: "https://i.imgur.com/MgMZCha.jpeg",
            description: "Horor/Misteri",
            link: "../../films/mantrasurugana/mantrasurugana.html"
        },
        {
            title: "Pamali",
            poster: "https://i.imgur.com/hedI3Ko.jpeg",
            description: "Horor/Misteri",
            link: "../../films/pamali/pamali.html"
        },
        {
            title: "Pamali: Dusun Pocong",
            poster: "https://i.imgur.com/02fCFun.jpeg",
            description: "Horor/Misteri",
            link: "../../films/pamalidusunpocong/pamalidusunpocong.html"
        },
        {
            title: "Panggonan Wingit",
            poster: "https://i.imgur.com/fNGmGRL.jpeg",
            description: "Horor/Indonesia",
            link: "../../films/panggonanwingit/panggonanwingit.html"
        },
        {
            title: "Primbon",
            poster: "https://i.imgur.com/xQ8IMKQ.jpeg",
            description: "Horor/Drama",
            link: "../../films/primbon/primbon.html"
        },
        {
            title: "Ritual Tumbal Terakhir",
            poster: "https://i.imgur.com/ZMmheRo.jpeg",
            description: "Horor/Indonesia",
            link: "../../films/ritualtumbalterakhir/ritualtumbalterakhir.html"
        },
        {
            title: "Saranjana: Kota Ghaib",
            poster: "https://i.imgur.com/QUbpl08.jpeg",
            description: "Horor/Petualangan",
            link: "../../films/saranjanakotaghoib/saranjanakotaghoib.html"
        },
        {
            title: "Sekte",
            poster: "https://i.imgur.com/f3Mm8Zq.jpeg",
            description: "Horor/Drama",
            link: "../../films/sekte/sekte.html"
        },
        {
            title: "Sewu Dino",
            poster: "https://i.imgur.com/Cbh1Oh6.jpeg",
            description: "Horor/Misteri",
            link: "../../films/sewudino/sewudino.html"
        },
        {
            title: "Sijjin",
            poster: "https://i.imgur.com/1SAl9wg.jpeg",
            description: "Horor/Religi",
            link: "../../films/sijjin/sijjin.html"
        },
        {
            title: "Siksa Neraka",
            poster: "https://i.imgur.com/nFYie0n.jpeg",
            description: "Horor/Film jagal",
            link: "../../films/siksaneraka/siksaneraka.html"
        },
        {
            title: "Sinden Gaib",
            poster: "https://i.imgur.com/1SrmVVv.jpeg",
            description: "Horor/Misteri",
            link: "../../films/sindengaib/sindengaib.html"
        },
        {
            title: "Sosok Ketiga",
            poster: "https://i.imgur.com/9vmiNai.jpeg",
            description: "Horor/Misteri",
            link: "../../films/sosokketiga/sosokketiga.html"
        },
        {
            title: "Susuk: Kutukan Kecantikan",
            poster: "https://i.imgur.com/WLcEEZQ.jpeg",
            description: "Horor/Indonesia",
            link: "../../films/susukkutukankecantikan/susukkutukankecantikan.html"
        },
        {
            title: "Suzzanna: Malam Jumat Kliwon",
            poster: "https://i.imgur.com/uvaSd5d.jpeg",
            description: "Horor/Misteri",
            link: "../../films/suzzannamalamjumatkliwon/suzzannamalamjumatkliwon.html"
        },
        {
            title: "Tasbih Kosong",
            poster: "https://i.imgur.com/DHEEql9.jpeg",
            description: "Horor/Indonesia",
            link: "../../films/tasbihkosong/tasbihkosong.html"
        },
        {
            title: "Trinil: Kembalikan Tubuhku",
            poster: "https://i.imgur.com/hBIZZLU.jpeg",
            description: "Horor/Drama",
            link: "../../films/trinilkembalikantubuhku/trinilkembalikantubuhku.html"
        },
        {
            title: "Wakaf",
            poster: "https://i.imgur.com/FQfSqpb.jpeg",
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
