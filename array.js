//*javascript array
/*
 *Array adalah tipe data yang digunakan untuk mendeskripsikan
 * kumpulan elemen (nilai atau variabel) yang tiap
 * elemennya memiliki index
 */

let hari =["senin","selasa","rabu","kamis"];
console.log("ini adalah hari",hari[1]);
console.log("panjang array hari adalah",hari.length);

console.log("===========");
let arr =["a",1,true,[1,2,3]];
delete arr[2];
console.log(arr);
console.log("last data of array", arr[arr.length-1]);

let arrMahasiswa = ["jansen","stanlie","joko"];
console.log(arrMahasiswa.join(" "));

//2. pop()
arr.pop();
console.log(arr);

//3. unshift and shift
arrMahasiswa.unshift("jansen ganteng");
console.log(arrMahasiswa);
arrMahasiswa.shift();
console.log(arrMahasiswa);

//slice,splice
//spilce(nambah data)
arrMahasiswa.splice(2,0,"evita dewi fortuna");
console.log("Mahasiswa Splice method", arrMahasiswa);

//splice hapus data
arrMahasiswa.splice(1,2);
console.log("Mahasiswa splice delete", arrMahasiswa);

//splice update data
arrMahasiswa.splice(2,3,"koko","kiki","kaka");
console.log("Mahasiswa splice update",arrMahasiswa);

//slice
let arrMahasiswabaru = arrMahasiswa.slice(1,3);
console.log(arrMahasiswabaru.join("/"));

//ForEach and Map
let angka =[];
for(let i = 1; i<11;i++){
    angka.push(i);
}
angka[1]= undefined;
console.log("array angka disi dengan loop:",angka.join(" "))

//function expression for each
arrMahasiswa.forEach(function (e,i){
    console.log(`Mahasiswa ke-${i+1}`+" adalah "+e);
    }
);

//javascript map(return value to array)
let arrAngka = [1,2,10,3,5,7,6,7,8];
let arrAngkaBaru = arrAngka.map(function (e){
    return e * 3;
});
arrAngkaBaru.sort(function (a,b){
    return a-b;
});
console.log("Map return dalam bentuk array:",arrAngkaBaru.join());

//Filter dan find pada array
// !!find mengembalikan 1 nilai
// * filter mengembalikan hasil dalam bentuk array

let angkaFilter = arrAngkaBaru.filter(function (e){
    return (e%2 === 0);
})
let angkaFind = arrAngkaBaru.find(function (e){
    return (e%2 === 0);
})
console.log("hasil filter dalam bentuk array:",angkaFilter);
console.log("hasil find hanya mengembalikan 1 nilai:",angkaFind);

console.log(" ");
console.log("Mr.wawan");
//Mr Wawan
let listArray = ["satu", 2, true]
// tambah data di depan
listArray.unshift("NOL")
console.log(listArray);

// hapus data di depan
listArray.shift()
console.log(listArray);

// tambah data di belakang
listArray.push("5")
console.log(listArray);

// hapus data di belakang
listArray.pop()
console.log(listArray);

// edit array (tambah)
listArray.splice(2, 0, "horeeee")
console.log(listArray);

// edit array (ganti)
listArray.splice(1, 2, "keganti 2 data", "kedua")
console.log(listArray);

// edit array (hapus)
listArray.splice(2, 1)
console.log(listArray);
console.log(listArray[2]);
console.log(listArray[3]);


// slice
arrayBaru = listArray.slice(0, 2) // (start, end)
console.log("listArray:", listArray);
console.log("arrayBaru:", arrayBaru);