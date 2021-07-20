let jumlahVolumeDuaKubus = (a, b) => {
    return Math.pow(a, 3) + Math.pow(b, 3);
}
console.log("Arrow Function Hasilnya: ", jumlahVolumeDuaKubus(4, 3));

function jumlahVduaKubus(a, b) {
    let volumeA;
    let volumeB;
    let total;

    volumeA = Math.pow(a, 3);
    volumeB = Math.pow(b, 3);

    total = volumeA + volumeB;
    return total;
}

console.log("function biasa hasilnya: ", jumlahVduaKubus(3, 3));

let penjumlahan = (a = 1, b = 8) => {
    return a + b;
}
// let a = parseInt(prompt("masukkan nilai a: "));
// let b = parseInt(prompt("Masukkan nilai b: "));
console.log("hasil dari default parameter adalah " + penjumlahan());

function tambah() {
    let hasil = 0;
    for (let i = 0; i < arguments.length; i++) {
        hasil += arguments[i];
    }
    return hasil;
}

console.log(tambah(1, 2, 3, 4, 5, 6, 7));

// global scope / window scope
var a = 1;

function tes() {
    let b = 2;
    console.log(b);
}

console.log("Ini adalah variable global:", a);
tes();
console.log("=================")
console.log("recrusif function");

//recrusif function
//function declaration
function cetakAngka(n = 9) {

    if (n === 0) {
        return;
    }
    console.log(n);
    cetakAngka(n - 1);
}

cetakAngka();

//function expression
const tampilPesan = function (nama = "jansen") {
    console.log("hello", nama);
}
tampilPesan();


