/*
 * Object Literal => tidak efektif untuk object yang banyak
 * Function Declaration => duplikasi tetap disimpan dalam memory
 * Constructor Function(Keyword new)
 * Object.create()
 * Prototype
 */

//TODO :Object Literal

// let mahasiswa = {
//     nama: "jansen Stanlie",
//     energi: 10,
//     makan: function (porsi){
//         this.energi = this.energi + porsi;
//         console.log(`selamat makan ${porsi} porsi ${this.nama}`);
//     }
// };

// TODO: Function Declaration
// const methodMhasiswa = {
//     makan: function (porsi) {
//         this.energi = +porsi;
//         console.log(`selamat makan ${porsi} porsi ${this.nama}`);
//     },
//     main: function (jam) {
//         this.energi -= jam;
//         console.log(`energi ${this.nama} sekarang setelah bermain ${jam} jam adalah ${this.energi}`);
//     },
//     tidur: function (jam) {
//         this.energi += jam * 2;
//         console.log(`energi ${this.nama} bertambah ${jam * 2} setelah tidur selama ${jam} jam`);
//     }
// };
//
// function Mahasiswa(nama = "jansen", energi = 10) {
// // TODO:Object.create()
//     let mahasiswa = Object.create(methodMhasiswa);
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;
//     // mahasiswa.makan = methodMhasiswa.makan;
//     // mahasiswa.main = methodMhasiswa.main;
//     // mahasiswa.tidur= methodMhasiswa.tidur;
//
//     return mahasiswa;
// };
// let jansen = Mahasiswa();


// TODO:Constructor Function(Keyword new)
// function Mahasiswa(nama ="jansen",energi = 10){
//     this.nama = nama;
//     this.energi = energi;
//
//     this.makan = function (porsi){
//         this.energi =+ porsi;
//         console.log(`selamat makan ${porsi} porsi ${this.nama}`);
//     };
//     this.main = function (jam){
//         this.energi -= jam ;
//         console.log(`energi ${this.nama} sekarang setelah bermain ${jam} jam adalah ${this.energi}`);
//     };
// };
//
// let jansen = new Mahasiswa();

//TODO:Prototype

// function Mahasiswa(nama = "jansen", energi = 10) {
//     // let mahasiswa = Object.create(methodMhasiswa);
//     // let this = Object.create(Mahasiswa.prototype
//
//     this.nama = nama;
//     this.energi = energi;
//
// };
// Mahasiswa.prototype.makan = function (porsi){
//     this.energi += porsi;
//     console.log(`selamat makan ${porsi} porsi ${this.nama}`);
// };
// Mahasiswa.prototype.main =  function (jam) {
//     this.energi -= jam;
//     console.log(`energi ${this.nama} sekarang setelah bermain ${jam} jam adalah ${this.energi}`);
// };
// let jansen = new Mahasiswa();

// !!Class Version
class Mahasiswa {
    constructor(nama = "jansen", energi = 10) {
        this.nama = nama;
        this.energi = energi;
    };

    makan(porsi) {
        this.energi += porsi;
        console.log(`selamat makan ${porsi} porsi ${this.nama}`);
    };

    main(jam) {
        this.energi -= jam;
        console.log(`energi ${this.nama} sekarang setelah bermain ${jam} jam adalah ${this.energi}`);
    };
};
let jansen = new Mahasiswa();

let angka =[1,2,4,1,2];
// let angka = new Array();
console.log(angka.reverse());
console.log(angka.sort(function (a,b){
    return a-b;
}));