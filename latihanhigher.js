// ambil semua elemen video
const videos = Array.from(document.querySelectorAll("[data-duration]"));
console.log(videos);

// pilih hanya javascript lanjutan
let jsLanjut = videos.filter(e => e.textContent.includes("JAVASCRIPT LANJUTAN"))
    .map(item => item.dataset.duration)
    .map(waktu => {
        const parts = waktu.split(":").map(part => parseFloat(part));
        return (parts[0] * 60) + parts[1];
    })
    // jumlahkan semua detik
    .reduce((total, detik) => total + detik);
// ubah format jadi jam menit detik
const jam = Math.floor(jsLanjut / 3600);
jsLanjut = jsLanjut - jam * 3600;
const menit = Math.floor(jsLanjut / 60);
const detik = jsLanjut - menit * 60;
// simpan di DOM
console.log(detik);

const pDurasi = document.querySelector(".total-durasi");
pDurasi.textContent = `${jam} jam, ${menit} menit, ${detik} detik`;

const jmlhVideo = videos.filter(e => e.textContent.includes("JAVASCRIPT LANJUTAN")).length;
const pJmlhvideo = document.querySelector(".jumlah-video");
console.log(jmlhVideo);
pJmlhvideo.textContent = `${jmlhVideo} video`;