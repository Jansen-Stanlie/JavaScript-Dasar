/*
 * Arrow Function (bentuk lain yang lebih ringkas dari function Expression)
 */
// const tampilNama = function (nama = "jansen"){
//     return nama;
// };
// console.log(tampilNama());

const tampilNama = (nama = "jansen", umur = 22) => {
    return `hai ${nama} umur kamu ${umur} tahun`;
};
console.log(tampilNama());

//implisit return
const tampilNama2 = nama => `halo ${nama}`;
console.log(tampilNama2("eko"));

//tanpa parameter
const tampilNama3 = () => `halo jansen`;
console.log(tampilNama3());

//Map (pemetaan)
let mahasiswa = ["jansen", "stanlie", "lalala"];
let jumlahhuruf = mahasiswa.map(function (nama) {
    return nama.length;
});
console.log(jumlahhuruf);

//Arrow Function map
let jumlahhuruf2 = mahasiswa.map(nama => nama.length);
console.log(jumlahhuruf2);

let jumlahhuruf3 = mahasiswa.map(nama => ({nama, jlhhuruf: nama.length}));
console.table(jumlahhuruf3);

/*
 * this pada arrow function (lanjutan)
 * arrow function tidak memiliki konsep this
 */
//Constructor function
const Mahasiswa = function () {
    this.nama = "sandika";
    this.umur = 33;
    this.gelar = this.nama + ".ST";

};
const jansen = new Mahasiswa();

//object literal
const mhs1 = {
    nama: "jansen",
    umur: 33,
    sayHello: function () {
        console.log(`halo nama saya ${this.nama}`);
    }
};
const mhs2 = {
    nama: "jansen",
    umur: 33,
    sayHello: () => {
        console.log(`halo nama saya ${this.nama}`);
    }
};

const Mahasiswa2 = function () {
    this.nama = "sandika";
    this.umur = 33;
    this.gelar = this.nama + ".ST";

    // setInterval(function (){
    //     console.log(this.umur++);//Hoisting
    // },500);
    // setInterval(() =>{
    //     console.log(this.umur++);//Leksikal Scope
    // },10000);
};
const jansens = new Mahasiswa2();

const box = document.querySelector(".box");
box.addEventListener("click", function () {
    let satu = "size";
    let dua = "caption";
    if (this.classList.contains(satu)) {
        [satu, dua] = [dua, satu];
    }
    this.classList.toggle(satu);

    setTimeout(() => {
        this.classList.toggle(dua);
    }, 600);
});
