/*
 * Function yang beroperasi pada function lain
 * Baik itu digunakan dalam argumen, maupun sebagai return value
 * First Class function(diperlakukan sebagai object)
 * Array.prototype.map() => potong (pemetaan) => new array
 * Array.prototype.filter()
 * Array.prototype.reduce()
 */
const angka = [-1, 2, 4, 9, 2, 7, -2, 0, 1, 6];

//mencari angka >= 3
//for
const newAngka = [];
for (let i = 0; i < angka.length; i++) {
    if (angka[i] >= 3) {
        newAngka.push(angka[i]);
    }
}
console.log("metode for", newAngka);

//filter
const newAngka2 = angka.filter(function (e) {
    return e >= 3;
});
console.log(newAngka2);

//arrow function
const newAngka3 = angka.filter(e => e >= 3);
console.log(newAngka3);

//map
const newAngka4 = angka.map(a => a >= 2);
console.log(newAngka4);

//reduce
const newAngka5 = angka.reduce((accumulator, currentvalue) =>
    accumulator + currentvalue, 1);
console.log(newAngka5);

//Method Chaining
// cari angka > 5
// kalikan 3
// jumlahkan
const hasil = angka.filter(a => a > 5)
     .map((a => a * 3))
     .reduce((acc,cur) => acc + cur);
console.log(hasil);