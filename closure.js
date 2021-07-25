/*
 * Execution Context
 * Hoisting (menggerek bendera)
 * Scope
 * javascript visualizer
 */

// !!Tahapan proses
// saat program dijalankan ada creation phase
// terjadi di konteks global (nama var = undefined)
// nama function = fn()
// hoisting
// window = global object, this = window
// Execution phase

// console.log(nama);
// var nama = "jansen";


// console.log(sayHello());
// var nama = "jansen";
// var umur = 22;
//
// function sayHello(){
//     return `halo nama saya adalah ${nama}, saya berumur ${umur} tahun`;
// };


// function membuat local Execution Context
// yang ada di dalamnya terdapat creation  dan execution phase
// window
// arguments
// hoisting

var nama = "jansen stanlie";
var username = "@jansenstanlie";

function cetakUrl(username) {
    console.log(arguments);
    var instagramURL = "https://instagram.com/"
    return instagramURL + username.split("@").join("");
    // return instagramURL + username.split("@")[1];
}

console.log(cetakUrl(username));


// function a() {
//     console.log("ini a");
//
//     function b() {
//         console.log("ini b");
//
//         function c() {
//             console.log("ini c")
//         }
//
//         c();
//     }
//
//     b();
// }
//
// a();

//TODO: Continue Closures
/*
 * closure adalah kombinasi antara function dan lingkungan (lexical)
 * didalam fungsi tersebut
 * untuk membuat function factories
 * membuat private methods
 */
function init() {
    // let nama = "jansen";
    // let umur = 33;
    function tampilNama(nama = "jansen stanlie", umur = 33) {
        console.log(nama);
        console.log(umur);
    };
    // return (nama = "jansen", umur = 33) {
    //     console.log(nama);
    //     console.log(umur);
    // };
    // tampilNama();
    // console.dir(tampilNama);
    return tampilNama;
};
let panggilNama = init();
panggilNama();

function ucapkanSalam(waktu) {
    return function (nama) {
        console.log(`halo ${nama} Selamat ${waktu}`);
    }
}

let selamatPagi = ucapkanSalam("pagi");
selamatPagi("jansen");
console.dir(selamatPagi);

// let counter = 0;
// let add = function () {
//     return ++counter;
// }


let add = function () {
    let counter = 0;
    return function () {
        return ++counter;
    }
}
console.log(add());
console.log(add());